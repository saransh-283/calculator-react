import React from 'react';
import '../display/display.scss'

class Display extends React.Component{
    render(){
        return <div className="display" id={this.props.name} style={{gridArea: this.props.area}}>{this.props.text}</div>
    }
}

class HistDisp extends React.Component{
    render(){
        return <Display name="histdisp" text={this.props.hist} area={this.props.area}/>
    }
}

class MainDisp extends React.Component{
    render(){
        return <Display text={this.props.main} name="maindisp" area={this.props.area}/>
    }
}

export default {HistDisp, MainDisp}