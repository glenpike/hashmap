import { sdbm } from '../src/utils';
import library_sdbm from 'sdbm';

describe('sdbm hash', () => {
  it('computes a hash from a single character', () => {
    expect(sdbm('A')).toEqual('A'.charCodeAt(0))  
  })

  it('computes a hash from a different single character', () => {
    expect(sdbm('Z')).toEqual('Z'.charCodeAt(0))  
  })

  it('computes a hash from a different single number character', () => {
    expect(sdbm('2')).toEqual('2'.charCodeAt(0))  
  })

  it('computes a hash from 2 characters', () => {
    const expected = 4264000

    expect(sdbm('AA')).toEqual(expected)
  })

  it('single character hashes to the same value', () => {
    const value = 0xfffd
    const singleChar = String.fromCharCode(value)

    expect(sdbm(singleChar)).toEqual(value)
  })

  /*
    https://appzaza.com/sdbm-hasher and https://md5hashing.net/hash/sdbm/4380c473
    return different results for the string, so rely on a known library implementation
    to compare our internal function
  */
  it('the hash matches the library function', () => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    expect(sdbm(str)).toEqual(library_sdbm(str))
  })


  it('computes the hash consistently', () => {
    const str = 'abcdef'
    const result = sdbm(str)
    expect(sdbm(str)).toEqual(result)
  })
})
