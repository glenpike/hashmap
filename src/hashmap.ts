export class SimpleHashMap {
  private _hash: Record<string, any>

  constructor() {
    this._hash = {}
  }

  setValue(key: any, value: any) {
    this._hash[key] = value
  }

  getValue(key: any): any {
    return this._hash[key]
  }

  deleteValue(key: any) {
    delete this._hash[key]
  }

  clear() {
    this._hash = {}
  }

  get values(): Array<any> {
    return Object.values(this._hash)
  }

  get keys(): Array<any> {
    return Object.keys(this._hash)
  }
}