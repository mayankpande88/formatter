import React from 'react';
import  './CardButtons.css'
function CardButtons({buttonClick}) {
  return (
    <div>
		<div className="flex flex-column">
			<button className="tc grow pa3 ma2  bw2 mt6" onClick={buttonClick}>XML</button>
			<button className="tc grow pa3 ma2  bw2 " onClick={buttonClick}>JSON</button>
				<button className="tc grow  pa3 ma2  bw2 " onClick={buttonClick}>SQL</button>
			<button className="tc grow pa3 ma2  bw2 " onClick={buttonClick}>RESET</button>
		</div>
    </div>
  );
}

export default CardButtons;
