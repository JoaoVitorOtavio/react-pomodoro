import React, { useState } from 'react';
import cn from "classnames";
import { Settings, Timer } from '@material-ui/icons'

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
      <div className="flip-card-outer w-full max-w-sm rounded overflow-hidden m-4 shadow-myCreation" style={{ backgroundColor: '#2d2d2d' }}
      >
        <div
          className={cn("flip-card-inner w-full", {
            showBack,
            "hover-trigger": cardType === "hover"
          })}
        >
          <div className="card front" >
            <div className="card-body flex flex-col justify-center items-center h-full" >
              <div className='flex justify-end w-full px-1 py-1' style={{ Color: "white" }}>
                <Settings className='cursor-pointer' onClick={handleClick} />
              </div>
              <FrontContent />
            </div>
          </div>
          <div className="card back">
            <div className="card-body flex flex-col justify-center items-center h-full w-full" style={{ backgroundColor: '#2d2d2d' }}>
              <div className='flex justify-end w-full px-1 py-1' style={{ Color: "white" }}>
                <Timer style={{ color: 'white' }} className='cursor-pointer' onClick={handleClick} />
              </div>
              <BackContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlipCard;