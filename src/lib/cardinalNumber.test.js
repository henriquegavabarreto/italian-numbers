import { getCardinalNumber, splitInGroups } from "./cardinalNumber"

test('splits one digit number', () => {
  expect(splitInGroups(0)).toEqual(['0'])
  })

test('splits two digit number', () => {
  expect(splitInGroups(23)).toEqual(['23'])
  })

test('splits three digit number', () => {
  expect(splitInGroups(400)).toEqual(['400'])
  })

test('splits four digit number', () => {
  expect(splitInGroups(1000)).toEqual(['000', '1'])
  })

test('splits eight digit number', () => {
  expect(splitInGroups(12345678)).toEqual(['678', '345', '12'])
  })

test('writes one unit number', () => {
    expect(getCardinalNumber(0)).toBe('zero')
  })

test('writes teen number', () => {
    expect(getCardinalNumber(16)).toBe('sedici')
  })

test('writes two digit number not teen', () => {
  expect(getCardinalNumber(45)).toBe('quarantacinque')
  })

test('number ending in 3 gets an accent', () => {
  expect(getCardinalNumber(63)).toBe('sessantatré')
  })

test('number ending in 3 gets an accent only at the end', () => {
  expect(getCardinalNumber(193063)).toBe('centonovantatremilasessantatré')
  })

test('writes hundred correctly', () => {
  expect(getCardinalNumber(100)).toBe('cento')
  })

test('writes hundred with a following vowel correctly', () => {
  expect(getCardinalNumber(180)).toBe('centottanta')
  })

test('writes 181 (1 after 8) correctly', () => {
  expect(getCardinalNumber(181)).toBe('centottantuno')
  })

test('writes 188 (following 8s) correctly', () => {
  expect(getCardinalNumber(188)).toBe('centottantotto')
  })

test('writes 3 digit numbers correctly correctly', () => {
  expect(getCardinalNumber(372)).toBe('trecentosettantadue')
  })

test('Numbers ending with 1 are written correctly', () => {
  expect(getCardinalNumber(51)).toBe('cinquantuno')
  })

test('Numbers ending with 8 are written correctly', () => {
  expect(getCardinalNumber(928)).toBe('novecentoventotto')
  })

test('Writes 1,000 correctly', () => {
  expect(getCardinalNumber(1000)).toBe('mille')
  })

test('Writes mila numbers correctly', () => {
  expect(getCardinalNumber(351270)).toBe('trecentocinquantunomiladuecentosettanta')
  })

test('Writes 1,000,000 correctly', () => {
  expect(getCardinalNumber(1000000)).toBe('un milione')
  })

test('Writes plurals of million correctly', () => {
  expect(getCardinalNumber(253500270)).toBe('duecentocinquantatre milioni cinquecentomila duecentosettanta')
  })

test('Writes 1,000,000,000 correctly', () => {
  expect(getCardinalNumber(1000000000)).toBe('un miliardo')
  })

test('Writes numbers greater than 1,000,000 with correct spacing', () => {
  expect(getCardinalNumber(4539892071)).toBe('quattro miliardi cinquecentotrentanove milioni ottocentonovantaduemila settantuno')
  })
