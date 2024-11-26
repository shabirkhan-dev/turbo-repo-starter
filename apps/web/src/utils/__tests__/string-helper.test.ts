// src/utils/__tests__/string-helpers.test.ts
import { describe, expect, it } from 'vitest'
import { capitalizeFirstLetter, truncateText } from '../index'

describe('String Helpers', () => {
  describe('capitalizeFirstLetter', () => {
    it('capitalizes the first letter of a string', () => {
      expect(capitalizeFirstLetter('hello')).toBe('Hello')
      expect(capitalizeFirstLetter('WORLD')).toBe('WORLD')
      expect(capitalizeFirstLetter('')).toBe('')
    })
  })

  describe('truncateText', () => {
    it('truncates text to specified length', () => {
      expect(truncateText('Hello World', 5)).toBe('Hello...')
      expect(truncateText('Short', 10)).toBe('Short')
      expect(truncateText('', 5)).toBe('')
    })
  })
})