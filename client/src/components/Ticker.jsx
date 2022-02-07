import React, { useState } from 'react'
import className from 'classnames';

const Ticker = ({ ticker }) => {
  const [tickerChange, setTickerChange] = useState(0);
  const [flag, setFlag] = useState(false);

  const changeFlag = () => {
    if (+ticker.change > +tickerChange) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  };

  if (+ticker.change !== +tickerChange) {
    changeFlag();
    setTickerChange(+ticker.change);
  }

  return (
    <div>
      <li key={ticker.ticker}>
        <div>
          <div className='ticker'>
            <div className='ticker__name'>
              <div className='ticker__text'>{ticker.ticker}</div>
            </div>
            <div className='ticker__price'>
              <span>{ticker.price} $</span>
            </div>
            <div
              className={className('ticker__change',
                {'ticker__change-big': flag === true},
                {'ticker__change-less': flag === false})
              }
            >
              <span>{flag ? '+' : '-'} {ticker.change} $</span>
            </div>
            <div 
              className={className('ticker__change',
                {'ticker__change-big': flag === true},
                {'ticker__change-less': flag === false})
              }
            >
              <div className={flag ? 'ticker__change-up' : 'ticker__change-down'}>
                <span>
                  {flag ? <span>&#9650;</span> : <span>&#9660;</span>} {ticker.change_percent} %
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Ticker;