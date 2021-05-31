import React from 'react';
import connected from '../../react-and-redux/connect-components'
import { Provider, connect } from 'react-redux'
import '../calc/calc.scss'

class Calculator extends React.Component {
    render() {
        return <div id="calc">
            <Provider store={connected.store}>
                <connected.HistDispConnected area="histDisp"/>
                <connected.MainDispConnected area="mainDisp"/>
                <connected.ClearButtonConnected value="AC" area="ac"/>
                <connected.NumButtonConnected value="1" area="one"/>
                <connected.NumButtonConnected value="2" area="two"/>
                <connected.NumButtonConnected value="3" area="three"/>
                <connected.NumButtonConnected value="4" area="four"/>
                <connected.NumButtonConnected value="5" area="five"/>
                <connected.NumButtonConnected value="6" area="six"/>
                <connected.NumButtonConnected value="7" area="seven"/>
                <connected.NumButtonConnected value="8" area="eight"/>
                <connected.NumButtonConnected value="9" area="nine"/>
                <connected.NumButtonConnected value="0" area="zero"/>
                <connected.OpButtonConnected value="+" area="add"/>
                <connected.OpButtonConnected value="-" area="minus"/>
                <connected.OpButtonConnected value="*" area="multiply"/>
                <connected.OpButtonConnected value="/" area="divide"/>
                <connected.BackButtonConnected value={[<i className="fa fa-backspace"></i>]} area="back"/>
                <connected.DecimalButtonConnected value="." area="decimal"/>
                <connected.EqualButtonConnected value="=" area="equal"/>
            </Provider>
        </div>
    }
}

export default Calculator