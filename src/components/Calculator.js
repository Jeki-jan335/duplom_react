import React, { useState } from 'react';



const Calculator = ({ course, isBuying }) => {

  var [byn, setB] = useState();
  var [eur, setE] = useState();
  var [usd, setU] = useState();
  var [rub, setR] = useState();
  
  var { USD_in, RUB_in, EUR_in, USD_out, RUB_out, EUR_out } = course[0];

  
console.log(77);

  const onChangeBYN = e => {
    if (isBuying === 'buying') {
      if (USD_in === undefined) {
        console.log("error");
      } else {
        setU((USD_in * e.target.value).toFixed(4));
        setB(e.target.value);
        setE((RUB_in * e.target.value).toFixed(4));
        setR((EUR_in * e.target.value).toFixed(4));
      }

    } else if (isBuying === 'selling') {
      if (USD_in === undefined) {
        console.log("error");
      } else {
        setU((USD_out * e.target.value).toFixed(4));
        setB(e.target.value);
        setE((RUB_out * e.target.value).toFixed(4));
        setR((EUR_out * e.target.value).toFixed(4));
      }
    }
  };

  return (
    <div>
      <h4 className='form-h4'>Конвертер</h4>
      <form className='form-calculator'>
        <div>
          <label htmlFor='byn'> USD</label>
          <input
            type='number'
            name='byn'
            pattern="^[0-9]+$"
            defaultValue={byn}
            onChange={onChangeBYN}
          />
        </div>
        <div>
          <label htmlFor='usd'>BYN </label>
          <input type='number' name='usd' defaultValue={usd} disabled />
        </div>
        <div>
          <label htmlFor='eur'>EUR </label>
          <input type='number' name='eur' defaultValue={eur} disabled />
        </div>
        <div>
          <label htmlFor='rub'>RUB </label>
          <input type='number' name='rub' defaultValue={rub} disabled />
        </div>
      </form>
    </div>
  );

};

export default Calculator;
