const randomIndex = (array: string[]) => { return Math.floor(Math.random() * array.length) }

const generateRandomWordPair = (firstWordArray: string[], secondWordArray: string[]): string => {
  const randomPair = []
  randomPair.push(firstWordArray[randomIndex(firstWordArray)])
  randomPair.push(secondWordArray[randomIndex(secondWordArray)])
  return randomPair.join(' ')
}

export default generateRandomWordPair