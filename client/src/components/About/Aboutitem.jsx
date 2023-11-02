import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Aboutitem = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="info">
              <article className="value">
              	<header className="accordion">
              		<h4>{title}</h4>
              		<button className="a-btn" onClick={() => setShowInfo(!showInfo)}>
              			{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
              		</button>
              	</header>
              	{showInfo && <p>{info}</p>}
              </article>
						
				
				</div>
    )
}

export default Aboutitem