import logo from './logoTypeLoong.svg';
import './header.css';

import React, { Component } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';

import Forum from '../forum/FORUM.js';

import Registration from '../Users/REG.js';

import News from '../general-page/NEWS.js';
import News1 from '../general-page/news-block/newspack/news1.js';
import News2 from '../general-page/news-block/newspack/news2.js';
import News3 from '../general-page/news-block/newspack/news3.js';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <div>
          <header className="header">
            <img src={logo} alt="Логотип" />
            <nav className="nac">
              <h2><Link to="/">NEWS</Link></h2>
              <h2><Link to="/FORUM">FORUM</Link></h2>
              <h2><a src="https://discord.gg/wwKMBYcT">DISCORD</a></h2>
              <h2><Link to="/REG">REGISTRATION</Link></h2>
            </nav>
          </header>
        </div>

        <Routes>
          <Route path="/News3" element={<News3 />} />
          <Route path="/News2" element={<News2 />} />
          <Route path="/News1" element={<News1 />} />
          <Route path="/FORUM" element={<Forum />} />
          <Route path="/REG" element={<Registration />} />
          <Route path="/" element={<News />} />
        </Routes>
      </Router>
    // <div>
    //   <header class = "header">
    //     <img src={logo} alt="Логотип"></img>
    //     <nav class ="nac">
    //       <h2><a href="#" data-value="main">MAIN</a></h2>
    //       <h2><a href="#" >DISCORD</a></h2>
    //       <h2><a href="#" data-value="forum">FORUM</a></h2>
    //       <h2><a href="#" data-value="REG">REGISTRATION</a></h2>
    //     </nav>
    //   </header>
    // </div>
    );
  }
}
