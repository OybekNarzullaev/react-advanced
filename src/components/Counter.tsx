import { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className={styles.h1}>{count}</h1>
      <button className={styles.btn} onClick={() => setCount(count - 1)}>
        decrement
      </button>
      <button className={styles.btn} onClick={() => setCount(count + 1)}>
        increment
      </button>
    </div>
  );
};
