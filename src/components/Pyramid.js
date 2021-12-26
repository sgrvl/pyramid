export default function Pyramid({ pyramid }) {
	return (
		<div className='pyramid'>
			{pyramid.map((row, index) => {
				return (
					<div className='pyramid_row' key={'row-' + index}>
						{row.map((card) => {
							return (
								<div className='pyramid_card' key={card}>
									{card}
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

/* 


ex:
4 rows = 10 cartes

I
II 
III
IIII

reste 42 cartes pour les joueurs,
donc max 
7 pour 6 joueurs,
10 pour 4,
14 pour 3, etc..


*/
