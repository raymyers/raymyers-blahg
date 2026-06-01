# Shared Agent Skill Workaround

The `impeccable` skill is stored in this repository at:

```text
.github/skills/impeccable/SKILL.md
```

That repo-local copy is the canonical source. The skill's own setup steps refer to
`.github/skills/impeccable/...`, so moving the directory out of the repository
would break those relative paths.

Codex and Claude Code do not currently appear to share one standard skill
directory:

- Codex discovers user skills from `~/.codex/skills/`.
- Claude Code discovers user skills from `~/.claude/skills/` and project skills
  from `.claude/skills/`.

To make both agents use the same skill without maintaining duplicate copies, add
user-level symlinks that point back to the repo-local skill:

```sh
mkdir -p ~/.codex/skills ~/.claude/skills
ln -sfn /home/ray/dev/raymyers-blahg/.github/skills/impeccable ~/.codex/skills/impeccable
ln -sfn /home/ray/dev/raymyers-blahg/.github/skills/impeccable ~/.claude/skills/impeccable
```

After creating or changing these links, start a fresh Codex or Claude Code
session so skill discovery can reload.
