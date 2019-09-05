import { isObject } from '../../src/js/type'

test('type isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject(function() {})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
})
