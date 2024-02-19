import { get_encoding } from 'tiktoken'

function calTokens(text: string) {
  const encoding = get_encoding('cl100k_base')
  const tokens = encoding.encode(text)
  const num_tokens = tokens.length
  encoding.free()

  return num_tokens
}

export { calTokens }
