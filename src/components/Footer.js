import React from 'react';

const styles = {
    footer: {
        background: "#afbfc0",
        textAlign: "center"
    }
}

const Footer = () => {   
    return (
    <footer className="footer fixed-bottom" style={styles.footer}>
        <a href="https://github.com/domspadafora"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
        <a href="https://www.linkedin.com/in/dom-spadafora-81b76480/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
    </footer>
    )
}

export default Footer;

