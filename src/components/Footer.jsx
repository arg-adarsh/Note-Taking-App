import React from "react";

const curryear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>&#169; {curryear} All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
