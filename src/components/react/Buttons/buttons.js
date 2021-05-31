import React from 'react';
import '../Buttons/buttons.scss'



class Button extends React.Component {
    
    render() {
        return <div onClick={this.props.click} className={`${this.props.group} btn component`} id={this.props.name} style={{ gridArea: this.props.area }}>{this.props.value}</div>
    }
}

class ClearButton extends React.Component {
    render() {
        return <Button click={()=>this.props.clrPress()} name="ac" area={this.props.area} value={this.props.value} />
    }
}

class NumButton extends React.Component {
    render() {
        return <Button click={()=>this.props.numPress(this.props.value)} group="num" area={this.props.area} value={this.props.value} />
    }
}

class DecimalButton extends React.Component {
    render() {
        return <Button click={()=>this.props.decPress()} name="decimal" area={this.props.area} value={this.props.value} />
    }
}

class OpButton extends React.Component {
    render() {
        return <Button click={()=>this.props.opPress(this.props.value)} group="op" area={this.props.area} value={this.props.value} />
    }
}

class EqualButton extends React.Component {
    render() {
        return <Button click={()=>this.props.eqPress(parseFloat(this.props.hist),parseFloat(this.props.main),this.props.op)} name="equal" area={this.props.area} value={this.props.value} />
    }
}

class BackButton extends React.Component{
    render(){
        return <Button click={()=>this.props.backPress()} name="back" area={this.props.area} value={this.props.value} />
    }
}

export default { BackButton, ClearButton, NumButton, OpButton, EqualButton, DecimalButton }