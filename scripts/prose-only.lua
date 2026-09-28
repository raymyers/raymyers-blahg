-- Pandoc filter: reduce a post to the prose worth spell checking.
-- Code, raw HTML and URLs are dropped; link text and image alt text are kept.
-- The front matter title and description are prose too, so they are prepended.

function Code() return {} end
function CodeBlock() return {} end
function RawInline() return {} end
function RawBlock() return {} end

function Pandoc(doc)
  local front = {}
  for _, key in ipairs({ "title", "description" }) do
    local value = doc.meta[key]
    if value then
      table.insert(front, pandoc.Para(pandoc.utils.type(value) == "Inlines"
        and value or pandoc.Inlines(pandoc.utils.stringify(value))))
    end
  end
  doc.blocks = front .. doc.blocks
  return doc
end
