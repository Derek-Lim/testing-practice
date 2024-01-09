function capitalize (string) {
  const array = string.split('')
  array[0] = array[0].toUpperCase()
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i].toLowerCase()
  }
  const newString = array.join('')
  return newString
}

function reverseString (string) {
  const array = string.split('')
  const flippedArr = []
  array.forEach(letter => {
    flippedArr.unshift(letter)
  })
  const newString = flippedArr.join('')
  return newString
}

function Calculator () {
  const add = (a, b) => {
    return a + b
  }
  const subtract = (a, b) => {
    return a - b
  }
  const divide = (a, b) => {
    return a / b
  }
  const multiply = (a, b) => {
    return a * b
  }

  return { add, subtract, divide, multiply }
}

function caesarCipher (string, shift) {
  const array = string.split('')
  const shiftArr = []
  if (shift > 26 || shift < -26) {
    shift = shift % 26
  }
  if (shift >= 0) {
    array.forEach(letter => {
      if ((letter.charCodeAt() > 64 && letter.charCodeAt() < 91)) {
        if ((letter.charCodeAt() + shift) > 90) {
          const x = 90 - letter.charCodeAt()
          const y = shift - x
          const z = 64 + y
          shiftArr.push(String.fromCharCode(z))
        } else {
          shiftArr.push(String.fromCharCode(letter.charCodeAt() + shift))
        }
      } else if ((letter.charCodeAt() > 96 && letter.charCodeAt() < 123)) {
        if ((letter.charCodeAt() + shift) > 122) {
          const x = 122 - letter.charCodeAt()
          const y = shift - x
          const z = 96 + y
          shiftArr.push(String.fromCharCode(z))
        } else {
          shiftArr.push(String.fromCharCode(letter.charCodeAt() + shift))
        }
      } else {
        shiftArr.push(letter)
      }
    })
  } else {
    array.forEach(letter => {
      if ((letter.charCodeAt() > 64 && letter.charCodeAt() < 91)) {
        if ((letter.charCodeAt() + shift) < 65) {
          const x = letter.charCodeAt() - 65
          const y = shift + x
          const z = 91 + y
          shiftArr.push(String.fromCharCode(z))
        } else {
          shiftArr.push(String.fromCharCode(letter.charCodeAt() + shift))
        }
      } else if ((letter.charCodeAt() > 96 && letter.charCodeAt() < 123)) {
        if ((letter.charCodeAt() + shift) < 97) {
          const x = letter.charCodeAt() - 97
          const y = shift + x
          const z = 123 + y
          shiftArr.push(String.fromCharCode(z))
        } else {
          shiftArr.push(String.fromCharCode(letter.charCodeAt() + shift))
        }
      } else {
        shiftArr.push(letter)
      }
    })
  }
  const shiftStr = shiftArr.join('')
  return shiftStr
}

function analyzeArray (array) {
  return {
    average: array.reduce((a, b) => a + b) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }
}

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray }
