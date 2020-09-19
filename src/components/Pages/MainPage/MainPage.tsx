import React, { FC } from 'react'
import adjectivesJson from '@assets/words/adjectives.json'
import nounsJson from '@assets/words/nouns.json'
import shuffleArray from '@utilities/shuffleArray'
import generateRandomWordPair from '@utilities/generateRandomWordPair'
import './styles.css'
import { Planet } from 'react-planet'


const shuffledAdjectives = shuffleArray(adjectivesJson.adjectives)
const shuffledNouns = shuffleArray(nounsJson.nouns)
const MyPlanet: FC = () =>  {
	return (
		<Planet
			centerContent={
				<div
					style={{
						height: 100,
						width: 100,
						borderRadius: '50%',
						backgroundColor: '#1da8a4',
					}}
				/>
			}
			open
			autoClose
		>
			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
				}}
			/>
			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
				}}
			/>
		</Planet>
	)
}

type Props = {
  wordPair: string;
}




const WordPlanet: FC<Props> = ({ wordPair }) =>  {

  const centerStyle = {
    height: 200,
    width: 200,
    borderRadius: '50%',
    backgroundColor: '#1da8a4',
    textAlign: 'center'
    
  }
	return (
		<Planet
      orbitRadius={160}
			centerContent={
				<div className="center-planet">
          {wordPair}
        </div>
			}
			open
			autoClose
		>
			<div className="left-planet">
        {wordPair}
      </div>
			<div className="right-planet">
        {wordPair}
      </div>
		</Planet>
	)
}


const MainPage: FC = () => {
  return (
    <div className="title">
      <div>Word Pairs</div>
      <div>{generateRandomWordPair(shuffledAdjectives, shuffledNouns)}</div>
      <div className="flex-container">
        <div className="flex-column">
          {/* <MyPlanet /> */}
          <WordPlanet wordPair={generateRandomWordPair(shuffledAdjectives, shuffledNouns)} />
        </div>
      </div>
    </div>
  )
}

export default MainPage