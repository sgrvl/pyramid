import { useEffect, useState } from 'react';
import './App.css';
import Pyramid from './components/Pyramid';

const getNewDeck = (numOfDeck = 1) => {
	const suits = ['H', 'S', 'D', 'C'];
	const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	const deck = [];

	// loop number of decks
	for (let i = 0; i < numOfDeck; i++) {
		// loop for each suits
		for (let j = 0; j < suits.length; j++) {
			// loop for each ranks, create/push card in deck
			for (let k = 0; k < ranks.length; k++) {
				const card = [ranks[k], suits[j]];
				deck.push(card);
			}
		}
	}

	return deck;
};

function App() {
	const [deck, setDeck] = useState(getNewDeck());
	const [pyramid, setPyramid] = useState([]);
	const [rows, setRows] = useState(5); // eslint-disable-line

	const getRandomCard = (d) => d[Math.floor(Math.random() * d.length)];

	const getPyramid = () => {
		let n = rows;
		const pyramidArr = [];
		let deckCopy = deck;

		while (n > 0) {
			const row = [];

			for (let i = 0; i < n; i++) {
				const card = getRandomCard(deckCopy);
				row.push(card);
				deckCopy = deckCopy.filter((c) => c !== card);
			}
			pyramidArr.push(row);

			n--;
		}

		setDeck(deckCopy);

		return pyramidArr;
	};

	useEffect(() => {
		setPyramid(getPyramid());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className='App'>
			<h1>PYRAMIDE</h1>
			<Pyramid pyramid={pyramid} />
		</div>
	);
}

export default App;
