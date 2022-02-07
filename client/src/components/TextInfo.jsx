import React from 'react';

const TextInfo = ({interval, changeInterval}) => {
  return (
    <div className='text-info'>
      <span className='text-info__title'>Intervals upgrade: {interval} sec</span>

      <div className="btn-group me-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-outline-secondary" onClick={() => changeInterval(1)}>1</button>
        <button type="button" className="btn btn-outline-secondary" onClick={() => changeInterval(5)}>5</button>
        <button type="button" className="btn btn-outline-secondary" onClick={() => changeInterval(10)}>10</button>
      </div>
    </div>
  );
};

export default TextInfo;