import React from 'react';
import '../display/display.scss'

class Display extends React.Component{
    render(){
        return <div></div>
    }
}

class HistDisp extends React.Component{
    render(){
        return <Display id="histdisp" />
    }
}

class MainDisp extends React.Component{
    render(){
        return <Display id="maindisp" />
    }
}

export default {HistDisp, MainDisp}