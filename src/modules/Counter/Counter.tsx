import React, { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={styles.Counter}>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
