import React, { useState } from 'react';

function EmojiVoting() {
  const [counts, setCounts] = useState({
    '🌌': 0,
    '🎮': 0,
    '💻': 0,
    '❤️': 0,
    '🗽': 0,
    '👽': 0
  });

  const incrementCount = (emoji) => {
    setCounts((prevCounts) => {
      const updatedCounts = Object.assign({}, prevCounts);
      updatedCounts[emoji] = prevCounts[emoji] + 1;
      return updatedCounts;
    });
  };

  const decrementCount = (emoji) => {
    setCounts((prevCounts) => {
      const updatedCounts = Object.assign({}, prevCounts);
      updatedCounts[emoji] = prevCounts[emoji] - 1;
      return updatedCounts;
    });
  };

  const resetCount = (emoji) => {
    setCounts((prevCounts) => {
      const updatedCounts = Object.assign({}, prevCounts);
      updatedCounts[emoji] = prevCounts[emoji] = 0;
      return updatedCounts;
    });
  };

  const showResults = () => {
    let maxCount = 0;
    let winningEmoji = '';

    for (const emoji in counts) {
      if (counts[emoji] > maxCount) {
        maxCount = counts[emoji];
        winningEmoji = emoji;
      }
    }

    alert('Winner: ' + winningEmoji);
    console.log(`Winner: ${winningEmoji}`);
  };

  return (
    <div className='container'>
      <h1 className='mainText'>Emoji Voting</h1>
      <ul>
        <li>
          <button className='incrementButton' onClick={() => incrementCount('🌌')}>🌌</button>
          <button className='dicrementButton' onClick={() => decrementCount('🌌')}>-1</button>
          <button className='resetButton' onClick={() => resetCount('🌌')}>Reset</button>
          <span className='emoji'>{counts['🌌']}</span>
        </li>
        <li>
          <button className='incrementButton' onClick={() => incrementCount('🎮')}>🎮</button>
          <button className='dicrementButton' onClick={() => decrementCount('🎮')}>-1</button>
          <button className='resetButton' onClick={() => resetCount('🎮')}>Reset</button>
          <span className='emoji'>{counts['🎮']}</span>
        </li>
        <li>
          <button className='incrementButton' onClick={() => incrementCount('💻')}>💻</button>
          <button className='dicrementButton' onClick={() => decrementCount('💻')}>-1</button>
          <button className='resetButton' onClick={() => resetCount('💻')}>Reset</button>
          <span className='emoji'>{counts['💻']}</span>
        </li>
        <li>
          <button className='incrementButton' onClick={() => incrementCount('❤️')}>❤️</button>
          <button className='dicrementButton' onClick={() => decrementCount('❤️')}>-1</button>
          <button className='resetButton' onClick={() => resetCount('❤️')}>Reset</button>
          <span className='emoji'>{counts['❤️']}</span>
        </li>
        <li>
          <button className='incrementButton' onClick={() => incrementCount('🗽')}>🗽</button>
          <button className='dicrementButton' onClick={() => decrementCount('🗽')}>-1</button>
          <button className='resetButton' onClick={() => resetCount('🗽')}>Reset</button>
          <span className='emoji'>{counts['🗽']}</span>
        </li>
        <li>
          <button className='incrementButton' onClick={() => incrementCount('👽')}>👽</button>
          <button className='dicrementButton' onClick={() => decrementCount('👽')}>-1</button>
          <button className='resetButton' onClick={() => resetCount('👽')}>Reset</button>
          <span className='emoji'>{counts['👽']}</span>
        </li>
      </ul>
      <button className='showResult' onClick={showResults}>Show Results</button>
    </div>
  );
}

export default EmojiVoting;