#!/usr/bin/env bash
# Spell check the posts. Two passes, deliberately:
#
#   codespell  - a list of known misspellings. Almost no false positives, so
#                anything it reports is worth looking at.
#   hunspell   - a full dictionary. Catches far more, but flags every proper
#                noun and bit of jargon, so it is checked against
#                data/dictionary.txt: words we have already accepted.
#
# Add a word to data/dictionary.txt to silence it forever -- which also means
# a real typo added there is invisible from then on, so read before adding.
#
# The tools come from the nix dev shell: `nix develop -c npm run spellcheck`.
set -uo pipefail
cd "$(dirname "$0")/.."
DICT=data/dictionary.txt
IGNORE=data/codespell-ignore.txt
POSTS=(posts/*.md)
TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT
status=0

echo "== codespell =="
if codespell --ignore-words="$IGNORE" "${POSTS[@]}"; then
  echo "  clean"
else
  status=1
fi
echo

echo "== hunspell =="
# One post at a time: given several files pandoc would merge their front matter.
for post in "${POSTS[@]}"; do
  pandoc -f markdown-smart -t plain --wrap=none --lua-filter=scripts/prose-only.lua "$post"
  echo
done | sed "s/’/'/g" > "$TMP/prose.txt"  # hunspell only knows the ASCII apostrophe
hunspell -l -d en_US "$TMP/prose.txt" | grep -E "[A-Za-z]{2,}" | sort -u > "$TMP/unknown.txt"
sort -u "$DICT" > "$TMP/known.txt" 2>/dev/null || : > "$TMP/known.txt"
comm -23 "$TMP/unknown.txt" "$TMP/known.txt" > "$TMP/new.txt"
if [ -s "$TMP/new.txt" ]; then
  echo "  $(wc -l < "$TMP/new.txt" | tr -d ' ') word(s) not in $DICT:"
  sed 's/^/    /' "$TMP/new.txt"
  echo
  echo "  Fix the typos; append the rest to $DICT."
  status=1
else
  echo "  clean"
fi
exit $status
