import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content';
import Footer from './footer';
import css from '../wwwroot/css/base.css';


//注意，修改此文件不能实现热加载
ReactDOM.render(
    <div>
    <Content name="React JS" />
    <Footer />
    </div>,
    document.getElementById('app')
);
