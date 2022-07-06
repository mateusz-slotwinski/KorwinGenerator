import all from './all'
import random from './random'

const Q1: string[] = []
const Q2: string[] = []
const Q3: string[] = []
const Q4: string[] = []
const Q5: string[] = []
const Q6: string[] = []
const quotes = [Q1, Q2, Q3, Q4, Q5, Q6]

for (const line in all) {
  quotes[+line % 6].push(all[line])
}

class KorwinQuote {
  quote: string = ''

  constructor() {
    for (const part in quotes) {
      const index = random(1, quotes[part].length - 1)
      const line = quotes[part][index]
      this.quote += `${line}${
        +part == 1 || +part == 3 || +part == 4 ? ',' : ''
      } `
    }
  }

  Get() {
    return this.quote
  }
}

function Korwin() {
  return new KorwinQuote().Get
}

export default Korwin
