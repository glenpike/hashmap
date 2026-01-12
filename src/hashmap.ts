import { sdbm } from './utils'

/** 
 * A simple implentation of a HashMap or Hash Table
 * It has a fixed size M at construction and creates
 * M 'buckets' to store one or more key/value pairs
 * A bucket is basically an Array.
 * We calculate the bucket to store the key/value pair
 * using a hash function to compute the 'index' and
 * use modulo % to ensure the index is somewhere in our array
 * of buckets.
 *
 * This methodology trades 'space' by keeping the size of the table
 * fixed vs 'time' to look items up.
 *
 * The computeKeyIndex function is approx 0(n) + O(1), so this adds a loop each time
 * we get / set a key.  The function may affect distribution because we don't
 * take the modulo into account when generating the hash, just the index,
 * but it does distribute fairly evenly across the numeric range.
 * See the sdbm function for more of an explanation of it's internals.
 *
 * The worst case scenario is that we keep adding items and they
 * all end up in the same bucket, so the time to add and lookup
 * key/value pairs is <= ~O(2n) where n is the number of items in the hashmap
 * because we compute the index - assuming O(1) for this operation, then
 * loop through all of the items in the index looking for a key/pair -
 * two statements * the number of items...,
 *
 * Getting all of the values or keys requires a double loop, which has a complexity
 * of O(n^2) because we don't restrict the number of items in the hashmap to a fixed
 * number.
 *
 * To improve this Hashmap, we should consider the 'load factor' which is the ratio
 * of the number of elements / number of buckets n/M.  As the number of items grows
 * we should grow the number of buckets so we distribute items more 'evenly' across
 * each bucket.
 * This means that lookup would speed up because we would derive the index, then
 * loop less. An ideal load factor is < 1, so we would ideally have one item in
 * each bucket.
 *
 * Next step would be to implement 'rehashing' where we 'grow' the number of buckets
 * and move the key/value pairs around when we reach a certain size and also
 * do tests for distribution and performance.
 * */ 

export class SimpleHashMap {
  private _hash: Array<Array<Array<Array<any>>>>
  private _size: number

  private static DEFAULT_SIZE: number = 16

  constructor(size = SimpleHashMap.DEFAULT_SIZE) {
    this._size = size
    this._hash = new Array(this._size)
  }

  setValue(key: any, value: any) {
    const index = this.computeKeyIndex(key)
    if(!this._hash[index]) {
      this._hash[index] = []
    }
    for(let i = 0;i < this._hash[index].length;i++) {
      if(this._hash[index][i][0] === key) {
        this._hash[index][i][1] = value
        return
      }
    }

    this._hash[index].push([key, value])
  }

  getValue(key: any): any {
    const index = this.computeKeyIndex(key)
    if(this._hash[index]?.length) {    
      for(let i = 0;i < this._hash[index].length;i++) {
        if(this._hash[index][i][0] === key) {
          return this._hash[index][i][1]
        }
      }
    }
    return undefined
  }

  deleteValue(key: any) {
    const index = this.computeKeyIndex(key)
    if(this._hash[index]?.length) {    
      for(let i = 0;i < this._hash[index].length;i++) {
        if(this._hash[index][i][0] === key) {
          this._hash[index].splice(i, 1)
        }
      }
    }
  }

  clear() {
    this._hash = new Array(this._size)
  }

  get values(): Array<any> {
    const result = []
    for(let i = 0;i < this._size;i++) {
      for(let j = 0;j < this._hash[i]?.length || 0;j++) {
        result.push(this._hash[i][j][1])
      }      
    }
    return result
  }

  get keys(): Array<any> {
    const result = []
    for(let i = 0;i < this._size;i++) {
      for(let j = 0;j < this._hash[i]?.length || 0;j++) {
        result.push(this._hash[i][j][0])
      }
    }
    return result
  }

  private computeKeyIndex(key: any): number {
    const keyStr = key.toString()
    // sdbm returns a 'signed' number, so shift it
    // one place to the right and get the absolute
    // to retain 'distribution'
    return (Math.abs(sdbm(keyStr) << 1)) % this._size
  }
}