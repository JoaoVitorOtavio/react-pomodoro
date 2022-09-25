import React, { useState } from 'react';
import cn from "classnames";

import "./styles.css";

function FlipCard({ card }) {
	const [showBack, setShowBack] = useState(false);

	function handleClick() {
		if (card.variant === "click") {
			setShowBack(!showBack);
		}
	}
	return (
		<>
			<div className="flip-card-outer max-w-sm rounded overflow-hidden shadow-lg bg-[white] m-4 cursor-pointer"
				onClick={handleClick}
			>
				<div
					className={cn("flip-card-inner", {
						showBack,
						"hover-trigger": card.variant === "hover"
					})}
				>
					<div className="card front">
						<div className="card-body flex justify-center items-center">
							<p className="card-text fs-1 fw-bold">{card.front}</p>
						</div>
					</div>
					<div className="card back">
						<div className="card-body flex justify-center items-center">
							<p className="card-text fs-1 fw-bold">{card.back}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FlipCard;