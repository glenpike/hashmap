// http://www.cse.yorku.ca/~oz/hash.html
export const sdbm = (str: string): number => {
  let hash = 0

  for(let i = 0; i < str.length;i++) {
    const c = str.charCodeAt(i)
    hash = c + (hash << 6) + (hash << 16) - hash;
  }

  return hash
}