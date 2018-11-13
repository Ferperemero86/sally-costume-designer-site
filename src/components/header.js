import React, { Component } from 'react';

class Header extends Component {
  render() {
      return (
          <header>
            <div className="header-first-div">
                <div className="first-logo-header">
                    <h3>
                        Jien Ko 
                        <span></span>
                        고지은 
                    </h3>
                </div>
                <div className="second-logo-header">
                    <h3>Costume Designer</h3>
                </div>
            </div>
            <div className="header-main-menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/work">Work</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
             
          </header>
      )
  }

}

export default Header;