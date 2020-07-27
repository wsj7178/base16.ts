import IBase16 from "./IBase16";

export default class Base16 implements IBase16{
  encode(buffer: ArrayBuffer): string {
    const view: Uint8Array = new Uint8Array(buffer)
    return ''
  }
}