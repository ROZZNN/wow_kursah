import "./news-style.css"
import "./news-ministyle.css"
import './newspack/news-them.css'

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React, { Component } from 'react'

import News1 from'./newspack/news1'
import News2 from'./newspack/news2'
import News3 from'./newspack/news3'

import Img1 from './newspack/s02614511.jpg'
import Img2 from './newspack/20887278.png'
import Img3 from './newspack/fokp57kl.png'
export default class NewsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
        <div>
                <div class="news_content_full">
                    <Link to='/News1 'class ='mininews'>
                        <img src={Img1} id='NImg'/>  
                        <div class="news_item_title">Гильдия Blue Shoe первая в мире одолела героического</div>
                        <div class="news_item_desc">Гильдия Blue Shoe с американского сервера Illidan совместно с другими игроками первыми в мире победила героического Фиракка Пылающего днем 15 ноября. </div>
                    </Link>
                    <Link to='/News2' class ='mininews'> 
                        <img src={Img2} id='NImg' />  
                        <div class="news_item_title">Гильдия Blue Shoe первыми в мире победили </div>
                        <div class="news_item_desc">Гильдия Blue Shoe с американского сервера Illidan открыла рейтинговую таблицу эпохального Амирдрассила, первой в мире одолев Кривокорня </div>
                    </Link>
                    <Link to='/News3' class ='mininews'>  
                        <img src={Img3} id='NImg' />  
                        <div class="news_item_title">Камень возвращения в обновлении 10.2</div>
                        <div class="news_item_desc">В новом рейде обновления 10.2 Амирдрассил: Надежда мечты с босса «Хранитель пламени Лародара» в качестве дополнительной добычи можно будет ... </div>
                    </Link>
                </div>
        </div>
        );
    };
};