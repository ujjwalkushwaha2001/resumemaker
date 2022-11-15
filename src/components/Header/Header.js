import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p> */}
        <p className={styles.heading}>
          <span>Resume Builder</span>
        </p>
      {/* </div> */}
      {/* <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div> */}
    </div>
  );
}

export default Header;
