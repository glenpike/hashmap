/**
 *
 * sdbm - a 'hashing' function that computes
 * the numeric representation of a string
 * https://en.wikipedia.org/wiki/Hash_function
 *
 * Derived from - http://www.cse.yorku.ca/~oz/hash.html
 * @param str - string: the string which we are generating a
 * hash for, e.g. "abcdef123"
 * @returns - number, an integer
 *
 * This has a time complexity of approx O(n), where n is
 * the length of the string.  The method is said to
 * distribute values fairly evenly across the 32 bit
 * 'spectrum' (if the architecture means that a long is 32 bits).
 *
 * NB: This method doesn't return an unsigned number
 * like the C algorithm, which may cause issues, depending
 * on how we use it, but it computes values the same as
 * the library - we would have to tweak in the usage
 *
 */
export const sdbm = (str: string): number => {
  let hash = 0

  for(let i = 0; i < str.length;i++) {
    const c = str.charCodeAt(i)
    hash = c + (hash << 6) + (hash << 16) - hash;
  }

  return hash
}