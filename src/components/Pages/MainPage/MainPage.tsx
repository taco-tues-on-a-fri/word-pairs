import React, { FC, Fragment } from 'react'
import adjectivesJson from '@assets/words/adjectives.json'
import nounsJson from '@assets/words/nouns.json'


// type Props = {
//   props?: any
// }

// const shuffleArrayV2 = function(array) {
//   const a = array.slice();

//   for (let i = a.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [a[i], a[j]] = [a[j], a[i]];
//   }

//   return a;
// };

// Fischer-Yates Shuffle while loop
const shuffleArray = (array: string[]) => {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // While there remain elements to shuffle
  // while (0 !== currentIndex) {
  while (currentIndex !== 0) {

    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * (currentIndex + 1))
    currentIndex -= 1

    // And swap it with the current element
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const randomIndex = (array: string[]) => { return Math.floor(Math.random() * array.length) }

const shuffledAdjectives = shuffleArray(adjectivesJson.adjectives)
const shuffledNouns = shuffleArray(nounsJson.nouns)


const generateRandomWordPair = () => {
  const randomPair = []
  randomPair.push(shuffledAdjectives[randomIndex(shuffledAdjectives)])
  randomPair.push(shuffledNouns[randomIndex(shuffledNouns)])
  return randomPair.join(' ')
}


const MainPage: FC = () => {
  return (
    <div className="title">
      <div>Word Pairs</div>
      <div>{generateRandomWordPair()}</div>
    </div>
  )
}

export default MainPage