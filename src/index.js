import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../src/components/react/calc/calc'
import '../src/assets/css/style.scss'
import '../src/assets/js/main'


ReactDOM.render( <
    Calculator / > ,
    document.getElementById('root')
);

const calc = document.getElementById('calc-inner')
const body = document.getElementsByTagName('body')[0]

calc.style.top = `${((body.getBoundingClientRect().height)-(calc.getBoundingClientRect().height))/2}px`
calc.style.left = `${(body.getBoundingClientRect().width-calc.getBoundingClientRect().width)/2}px`