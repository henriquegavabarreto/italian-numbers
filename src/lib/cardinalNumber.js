// constants with written numbers in Italian
const _units = [ "zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove" ]
const _multiplesOfTen = [ "", "", "venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta" ]
const _powerOfTenPlural = [ "", "mila", "milioni", "miliardi" ]
const _teens = [ "dieci", "undici", "dodici", "tredici", "quatordici", "quindici", "sedici", "diciassette", "diciotto", "dicianove" ]
const _powerOfTen = [ "cento", "mille", "milione", "miliardo" ]

// creates a compound written number for a group up to 3 digits
function createCompound(numbers, group) {
    let compound = ""

    // ignore hundreds if its digit is 0 (e.g.:0 in 1,025)
    if (numbers.length === 3 && numbers[0] !== "0") {
        // add unit word if digit is not 1 (i.e.: there is no unocento/uncento)
        if (numbers[0] !== "1") {
            compound += _units[numbers[0]]
        }

        // add the word cento
        compound += _powerOfTen[0]
    }

    // this block makes compound words related to the 2 last digits
    // if the digit related to the tens is 0, ignores and goes to else
    if (numbers.length >= 2 && numbers[numbers.length - 2] !== "0") {
        // if starts with one, add teen word
        if (numbers[numbers.length - 2] === "1") {
            compound += _teens[numbers[numbers.length - 1]]
        } else {
            compound += _multiplesOfTen[numbers[numbers.length - 2]]

            // removes last letter from tens in case of units 1 or 8
            if (numbers[numbers.length - 1] === "1" || numbers[numbers.length - 1] === "8") {
                compound = compound.substring(0, compound.length - 1)
            }

            // if last digit is not 0, add unit to the word
            if (numbers[numbers.length - 1] !== "0") {
                compound += _units[numbers[numbers.length - 1]]
            }
        }
    } else {
        // 3 digits with a 0 in the tens or 1 digit, e.g.: 000, 002, 300, 403 or 5

        // if last digit is 0 and it is just one digit (zero) or the last digit is not 0, write the digit
        if ((numbers[numbers.length - 1] === "0" && numbers.length === 1) || numbers[numbers.length - 1] !== "0") {
            compound += _units[numbers[numbers.length - 1]]
        }
    }

    // if the number is greater than 1, add group word (power of ten)
    if (numbers > 1) {
        compound += _powerOfTenPlural[group]
    } else if (numbers[numbers.length - 1] === "1") { // if the last digit is 1, group one does not have "uno" and higher groups use "un"
        if (group > 1) {
            compound = compound.substring(0, compound.length - 1)
            compound += _powerOfTen[group]
        } else if (group === 1) {
            compound = compound.substring(0, compound.length - 3)
            compound += _powerOfTen[group]
        }
    }

    // if the whole number is greater than 20 and ends in 3, add accent é instead of e 
    if (group === 0 && numbers[numbers.length - 1] === "3" && numbers > 20) {
        compound = compound.substring(0, compound.length - 1)
        compound += "é"
    }

    // returns the compound word
    // 2345 should return duemilatrecentoquarantacinque, for example
    return compound
}

// returns an array of numbers in string format representing a bigger number
// e.g.: 1,234,567 will be { "567" , "234", "1" }
// { hundreds, thousands, millions... }
export function splitInGroups(number) {
    let strNumber = number.toString()

    let groups= []

    // determines the part limit
    let partLimit = strNumber.length

    // if there is more than one number to split
    while (partLimit >= 1) {
        // substring need to start at least at 0
        let partStart = partLimit - 3 >= 0 ? partLimit - 3 : 0
        // add the substring to the array
        groups.push(strNumber.substring(partStart, partLimit))
        // update the limit 
        partLimit = partStart
    }
    return groups
}

export function getCardinalNumber(number) {
    let cardinalNumber = ""

    let numberInGroups = splitInGroups(Number.parseInt(number))

    // create a compound number for each group in the list
    for (let i = numberInGroups.length - 1; i >= 0; i--) {
        cardinalNumber += createCompound(numberInGroups[i], i)
    }

    return cardinalNumber
}