import React, { useState } from 'react';
import cn from "classnames";

import "./styles.css";

function FlipCard({ cardType, FrontContent, BackContent }) {
	const [showBack, setShowBack] = useState(false);

	function handleClick() {
		if (cardType === "click") {
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
						"hover-trigger": cardType === "hover"
					})}
				>
					<div className="card front">
						<div className="card-body flex justify-center items-center">
							<p className="card-text fs-1 fw-bold">
								<FrontContent />
							</p>
						</div>
					</div>
					<div className="card back">
						<div className="card-body flex justify-center items-center">
							<p className="card-text fs-1 fw-bold">
								<BackContent />
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FlipCard;