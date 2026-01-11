import { SimpleHashMap } from '../src/hashmap'

describe('SimpleHashMap', () => {
  describe('definition', () => {
    it('is defined', () => {
      expect(SimpleHashMap).toBeDefined
    })

    it('can be created', () => {
      expect(new SimpleHashMap()).toBeTruthy
    })
  })

  describe('setValue', () => {
    let hashmap: SimpleHashMap | null

    beforeEach(() => {
      hashmap = new SimpleHashMap()
    })

    afterEach(() => {
      hashmap = null
    })

    it('I can add a value', () => {
      const key = 'testing123'
      const value = { foo: 'bar', baz: 'quux' }
      hashmap?.setValue(key, value)

      expect(hashmap?.values).toEqual([value])
    })

    it('I can add more than one value', () => {
      const key = 'testing123'
      const value = { foo: 'bar', baz: 'quux' }
      const key2 = '456'
      const value2 = 'some random thing'
      hashmap?.setValue(key, value)

      hashmap?.setValue(key2, value2)

      expect(hashmap?.values).toContain(value)
      expect(hashmap?.values).toContain(value2)
    })

    it('I can overwrite a value using the same key', () => {
      const key = 'testing123'
      const value = { foo: 'bar', baz: 'quux' }
      const value2 = 'some random thing'
      hashmap?.setValue(key, value)
      hashmap?.setValue(key, value2)

      expect(hashmap?.values).toEqual([value2])
    })
  })

  describe('values', () => {
    let hashmap: SimpleHashMap | null
    let keys = ["one", "two", "three"]

    beforeEach(() => {
      hashmap = new SimpleHashMap()
      keys.forEach((key, index) => {
        hashmap?.setValue(key, index + 1)
      })
    })

    afterEach(() => {
      hashmap = null
    })

    it('returns the correct values', () => {
      expect(hashmap?.values.sort()).toEqual([1, 2, 3])
    })
  })

  describe('keys', () => {
    let hashmap: SimpleHashMap | null
    let keys = ["one", "two", "three"]

    beforeEach(() => {
      hashmap = new SimpleHashMap()
      keys.forEach((key, index) => {
        hashmap?.setValue(key, index + 1)
      })
    })

    afterEach(() => {
      hashmap = null
    })

    it('returns the correct keys', () => {
      expect(hashmap?.keys.sort()).toEqual(keys.sort())
    })
  })

  describe('getValue', () => {
    let hashmap: SimpleHashMap | null
    let key = 'some_key'
    let value = '123'

    beforeEach(() => {
      hashmap = new SimpleHashMap()
      hashmap.setValue(key, value)
    })

    afterEach(() => {
      hashmap = null
    })

    it('I can retrieve a value', () => {
      expect(hashmap?.getValue(key)).toEqual(value)
    })
  })

    describe('getValue', () => {
    let hashmap: SimpleHashMap | null
    let key = 'some_key'
    let value = '123'

    beforeEach(() => {
      hashmap = new SimpleHashMap()
      hashmap.setValue(key, value)
    })

    afterEach(() => {
      hashmap = null
    })

    it('I can delete a value', () => {
      hashmap?.deleteValue(key)
      expect(hashmap?.getValue(key)).toBeUndefined
    })
  })

    describe('clear', () => {
    let hashmap: SimpleHashMap | null
    let keys = ["one", "two", "three"]

    beforeEach(() => {
      hashmap = new SimpleHashMap()
      keys.forEach((key, index) => {
        hashmap?.setValue(key, index + 1)
      })
      hashmap.clear()
    })

    afterEach(() => {
      hashmap = null
    })

    it('returns empty keys', () => {
      expect(hashmap?.keys).toEqual([])
    })

    it('returns empty values', () => {
      expect(hashmap?.values).toEqual([])
    })

    describe('adding new values ', () => {
      let newKey = 'newquay'
      let newValue = 'is not shiny'

      beforeEach(() => {
        hashmap?.setValue(newKey, newValue)
      })

      it('I can retrieve the key', () => {
        expect(hashmap?.keys).toEqual([newKey])
      })

      it('I can retrieve the value', () => {
        expect(hashmap?.values).toEqual([newValue])
      })
    })
  })
})