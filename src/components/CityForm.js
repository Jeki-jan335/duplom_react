import React, { useState } from 'react';
import Banks from './Banks';
import MapItem from './MapItem';
import Calculator from './Calculator';
import { sortCourses, reverseSortCourses } from '../sort';

const CityForm = () => {
  const [city, setCity] = useState('');
  const [course, setCourse] = useState('');
  const [usd, setUsd] = useState(false);
  const [eur, setEur] = useState(false);
  const [rub, setRub] = useState(false);
  const [buying, setBuying] = useState('buying');

  const onChange = e => {
    setCity(e.target.value);
  };

  const changeUsd = e => {
    setUsd(e.target.checked);
  };

  const changeEur = e => {
    setEur(e.target.checked);
  };

  const changeRub = e => {
    setRub(e.target.checked);
  };

  const changeType = e => {
    setBuying(e.target.value);
    if (document.getElementById('input-type') && document.getElementById('input-type').selectedIndex != -1) {
      if ((document.getElementById('input-type').selectedIndex) === 1) {
        setBuying( 'buying');
      }
      if ((document.getElementById('input-type').selectedIndex) === 2) {
        setBuying( 'selling');
      }
      if ((document.getElementById('input-type').selectedIndex) === 0) {
        setBuying( 'buying');
      }
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    getBanks(city);
  };

  const getBanks = async city => {
    const req = await fetch(
      'https://cors-anywhere.herokuapp.com/' +
      `https://belarusbank.by/api/kursExchange?city=${city}`
    );

    const res = await req.json();
    const sortedCourses = sortCourses(res);
    setCourse(sortedCourses);
  };

  return (
    <div className='container'>
      <div>
        <div className='form'>
          <h2>Поиск</h2>
          <form className='form-group' onSubmit={onSubmit}>
            <div>
              <label className="widthAll">
                <p className="display">Только русские слова</p>
                <input
                  type='text'
                  pattern="^[А-Яа-яЁё\s]+$"
                  required
                  placeholder='Введите город'
                  onChange={onChange}
                />
              </label>
            </div>
            <div className='checkboxes'>
              <div>
                <input type='checkbox' name='usd' onChange={changeUsd} />
                <label htmlFor='usd'>Доллар США</label>
              </div>
              <div>
                <input type='checkbox' name='eur' onChange={changeEur} />
                <label htmlFor='eur'>Евро</label>
              </div>
              <div>
                <input type='checkbox' name='rub' onChange={changeRub} />
                <label htmlFor='rub'>Российский рубль</label>
              </div>
            </div>
            <div>
              <label htmlFor='isSelected'>Выберите категорию </label>
              <select onChange={changeType} name='isSelected' class='select' id='input-type'>
                <option value='none'>Выбор</option>
                <option value='selling' id='1'>Покупка</option>
                <option value='buying' id='2'>Продажа</option>
              </select>
            </div>
            <div>
              <input type='submit' value='Просмотреть' />
            </div>
          </form>
        </div>
        {/* <MapItem></MapItem> */}
        {course !== '' && (
          <Calculator
            course={buying === 'buying' ? course : reverseSortCourses(course)}
            isBuying={buying}
          ></Calculator>
        )}
      </div>

      <div>
        {course !== '' && (
          <Banks
            course={buying === 'buying' ? course : reverseSortCourses(course)}
            valute={[usd, eur, rub]}
          />
        )}
      </div>
    </div>
  );
};

export default CityForm;
