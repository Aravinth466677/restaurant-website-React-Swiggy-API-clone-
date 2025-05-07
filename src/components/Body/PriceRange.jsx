import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';




const PriceRange = ({ reslist,dataToResCon }) => {
  const [price, setPrice] = useState([0, 1000]); // Initial default range
    const [minCost, setMinCost] = useState(0);
    const [maxCost, setMaxCost] = useState(1000);
    

  useEffect(() => {
    const allCosts = reslist
      .map(res => res.info?.costForTwo)
      .filter(cost => typeof cost === 'string')
      .map(cost => {
        const match = cost.match(/\d+/);
        return match ? parseInt(match[0]) : null;
      })
      .filter(cost => cost !== null);

    const min = Math.min(...allCosts);
    const max = Math.max(...allCosts);
    setMinCost(min);
    setMaxCost(max);
    setPrice([min, max]); // Reset slider range
  }, [reslist]);

  const handleChange = (value) => {
    setPrice(value); // [min, max]
  };

    

  return (
    
    <div className="p-4">
        <fieldset>
            <legend>Filter by Price</legend>
            <h3>Price Range: ₹{price[0]} - ₹{price[1]}</h3>
                <Slider range min={minCost} max={maxCost} value={price} onChange={handleChange}
                    trackStyle={[{ backgroundColor: 'green' }]}
                    
                />
            <button onClick={()=>dataToResCon(price) } className="bg-green-500 p-1  ">Apply</button>

        </fieldset>
    </div>
  
    
  );
};

export default PriceRange;
