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

test('number ending in 13 gets no accent', () => {
  expect(getCardinalNumber(213)).toBe('duecentotredici')
  })

test('number ending in 3 gets an accent only at the end', () => {
  expect(getCardinalNumber(193053)).toBe('centonovantatremilacinquantatré')
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

test('Numbers ending with 8 are written correctly - 928', () => {
  expect(getCardinalNumber(928)).toBe('novecentoventotto')
  })

test('Numbers ending with 8 are written correctly - 148', () => {
  expect(getCardinalNumber(148)).toBe('centoquarantotto')
  })
  
test('Numbers ending with 8 are written correctly - 38', () => {
  expect(getCardinalNumber(38)).toBe('trentotto')
  })

test('Writes 1,000 correctly', () => {
  expect(getCardinalNumber(1000)).toBe('mille')
  })

  test('Writes 1,001 correctly', () => {
    expect(getCardinalNumber(1001)).toBe('milleuno')
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

// GPT suggested tests

test('correct spelling of quattordici', () => {
  expect(getCardinalNumber(14)).toBe('quattordici')
})

test('correct spelling of diciannove', () => {
  expect(getCardinalNumber(19)).toBe('diciannove')
})

test('number ending in 3 gets an accent (single digit)', () => {
  expect(getCardinalNumber(3)).toBe('tre')
})

test('number ending in 3 in larger numbers gets an accent (tens)', () => {
  expect(getCardinalNumber(73)).toBe('settantatré')
})

test('handles exactly 2000 correctly', () => {
  expect(getCardinalNumber(2000)).toBe('duemila')
})

test('handles spacing for millions + thousands correctly', () => {
  expect(getCardinalNumber(2100000)).toBe('due milioni centomila')
})

test('handles spacing for billions + millions correctly', () => {
  expect(getCardinalNumber(1234567890)).toBe('un miliardo duecentotrentaquattro milioni cinquecentosessantasettemila ottocentonovanta')
})

test('cento followed by 1 removes final o - 101', () => {
  expect(getCardinalNumber(101)).toBe('centuno')
})

test('cento followed by 8 removes final o - 108', () => {
  expect(getCardinalNumber(108)).toBe('centotto')
})

test('cento followed by 8 removes final o - 208', () => {
  expect(getCardinalNumber(208)).toBe('duecentotto')
})

test('cento followed by normal numbers keeps final o', () => {
  expect(getCardinalNumber(104)).toBe('centoquattro')
})

test('cento followed by 11 does not remove final o', () => {
  expect(getCardinalNumber(111)).toBe('centoundici')
})

test('two hundreds followed by 1 behaves correctly', () => {
  expect(getCardinalNumber(201)).toBe('duecentuno')
})

test('three hundreds followed by 15 behaves correctly', () => {
  expect(getCardinalNumber(315)).toBe('trecentoquindici')
})
