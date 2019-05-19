import React from 'react';
import  './CardButtons.css'
function CardButtons({buttonClick}) {
  return (
    <div>
		<div className="flex flex-column">
			<button className="tc grow pa3 ma2 mt6 button" onClick={buttonClick}>XML</button>
			<button className="tc grow pa3 ma2 button" onClick={buttonClick}>JSON</button>
			<button className="tc grow  pa3 button " onClick={buttonClick}>SQL</button>
			<button className="tc grow pa3 ma2 button" onClick={buttonClick}>RESET</button>
		</div>
    </div>
  );
}

export default CardButtons;
