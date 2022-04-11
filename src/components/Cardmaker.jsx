import React from "react";
import styles from "./cardmaker.module.css";
import Button from "./Button";

function Cardmaker({ date, logo, heading, subheading, devices, color }) {
  return (
    <div className={styles.container} style={{ background: color }}>
      <div className={styles.left_content}>
        <p>{date}</p>
        <Button text="Case Study" />
        <h1>{heading}</h1>
        <h1>{subheading}</h1>
        <p>{devices}</p>
      </div>
      <div className={styles.right_content}>
        <div style={{ marginTop: "20px", marginBottom: "200px" }}>
          <img src={logo} alt={heading} />
        </div>
        <div>
          <img
            src="https://toppng.com/uploads/preview/arrow-right-svg-png-icon-free-download-arrow-sign-11562857358hz0xnvqwkz.png"
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default Cardmaker;
