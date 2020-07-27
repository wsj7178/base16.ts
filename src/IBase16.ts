export default interface IBase16 {
  encode(target: string): string
  encode(target: number): string
  encode(buffer: ArrayBuffer): string
  decode(target: string): unknown
}