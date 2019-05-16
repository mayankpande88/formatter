import React from 'react';
import  './CardButtons.css'
function CardButtons() {
  return (
    <div>
		<div className="flex flex-column">
			<button className="tc grow pa3 ma2  bw2 mt6">XML</button>
			<button className="tc grow pa3 ma2  bw2 ">JSON</button>
				<button className="tc grow  pa3 ma2  bw2 ">SQL</button>
			<button className="tc grow pa3 ma2  bw2 ">RESET</button>
		</div>
    </div>
  );
}

export default CardButtons;
