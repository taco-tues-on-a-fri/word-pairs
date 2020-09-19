import React, { FC } from 'react'
import adjectivesJson from '@assets/words/adjectives.json'
import nounsJson from '@assets/words/nouns.json'
import shuffleArray from '@utilities/shuffleArray'
import generateRandomWordPair from '@utilities/generateRandomWordPair'
import './styles.css'


const shuffledAdjectives = shuffleArray(adjectivesJson.adjectives)
const shuffledNouns = shuffleArray(nounsJson.nouns)



const MainPage: FC = () => {
  return (
    <div className="title">
      <div>Word Pairs</div>
      <div>{generateRandomWordPair(shuffledAdjectives, shuffledNouns)}</div>
    </div>
  )
}

export default MainPage