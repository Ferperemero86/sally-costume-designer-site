import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <i className="fas fa-mobile-alt"></i>
                        <a href="#">+447380447737</a>
                    </li>
                    <li>
                        <i className="fas fa-envelope-square"></i>
                        <a href="#">ekdrms264@gmail.com</a>
                        </li>
                    <li>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <span>Ko.jiijii</span>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;