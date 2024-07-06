import React from "react";

import resumeSvg from "../../use/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
    //     <img src={resumeSvg} alt="Resume" />
    // </div>
        <div className={styles.right}>
            <p className={styles.heading}>
            A <span>Resume</span> that stands out!
            </p>
            <br></br> <br></br>  <br></br>
            <p className={styles.heading}>
            Make your own resume. <span>It's easy</span>
            </p>
        </div>
    // </div>
  );
}

export default Header;