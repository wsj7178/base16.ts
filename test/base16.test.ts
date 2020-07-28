import Base16 from "../src/Base16"

describe('base16 test', () => {
  const base16 = new Base16()
  it('encode', () => {
    console.log(base16.encode('encode test string encode test stringencode test string'))
    console.log(base16.encode('한글 인코딩 작업'))
  })
})