import React, { useState } from 'react';
import TipInput from '../components/TipInput';
import Tips from '../components/Tips';

const TipsList = () => {
  const [tips, manageTips] = useState([
    'TrainLink:  runs from Sydney through New South Wales, down through Canberra to Melbourne and North to Brisbane in Queensland',
    'Emergency Number: 000',
    'Be wary of money changing scams at restaurants, attractions and more',
    'Chips means fries',
    'Tipping is not a necessity as the minimum wage is a lot higher',
    'Chips means fries'
  ]);

  const addTip = () => {
    let myNewList = [...tips, 'new tip'];
    manageTips(myNewList);
    console.log(tips);
  };

  const removeTip = (index) => {
    let tipList = [...tips];
    tipList.splice(index, 1);
    manageTips(tipList);
  };

  const handleChange = () => {};

  return (
    <div className="travel-tips">
      <h1>Travel Tips</h1>
      <div className="tips-list">
        <TipInput handleChange={handleChange} addTip={addTip} />

        <Tips tips={tips} removeTip={removeTip} />
      </div>
    </div>
  );
};

export default TipsList;
