export default interface IBase16 {
  encode(target: string): string
  encode(target: ArrayBuffer): string
  decode(target: string): ArrayBuffer
}