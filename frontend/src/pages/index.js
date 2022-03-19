import React, { useState } from 'react';

import styles from './index.less';

export default () => {
  const [result, setResult] = useState('Please enter your name below 👇');
  const [name, setName] = useState('');

  const greet = () => {
    window.go.main.App.Greet(name).then((result) => {
      setResult(result);
   });
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div className={styles.logo} />
      <div className={styles.result}>{result}</div>
      <div className={styles.inputbox} data-wails-no-drag>
        <input className={styles.input} type="text" autoComplete="off" value={name} onChange={handleChange} />
        <button className={styles.btn} onClick={greet}>Greet</button>
      </div>
    </>
  );
};
