/* eslint-disable no-restricted-globals */
import './App.scss';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import Ticker from './components/Ticker';
import TextInfo from './components/TextInfo';

const socket = io.connect('http://localhost:4000');

function App() {
  const [arr, setArr] = useState();
  const [intrv, setIntrv] = useState();

  socket.on('interval', interval => {
    setIntrv(interval / 1000);
  });

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', data => {
      setArr([...data]);
    })
  }, [])

  const changeInterval = (number) => {
    const n = number * 1000
    socket.emit('changeInterval', n)
    location.reload();
  }

  return (
    <div className="App">
      <h2 className='title'>Price tickers</h2>
      <div className='container'>
        <ul className='display'>
          {arr && arr.map(ticker => <Ticker ticker={ticker}/>)}
        </ul>
      </div>

      <TextInfo interval={intrv} changeInterval={changeInterval}/>
    </div>
  );
}

export default App;
