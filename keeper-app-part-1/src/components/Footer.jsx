import React from "react";

function Footer(){
    let today = new Date().getFullYear();
    return <footer>
        <p>Copyright {today}</p>
    </footer>
};

export default Footer;