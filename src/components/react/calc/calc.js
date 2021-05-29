import React from 'react';
import connected from '../../react-and-redux/connect-components'
import { Provider, connect } from 'react-redux'

class Calculator extends React.Component {
    render() {
        return <div id="calc">
            <Provider store={connected.store}>
                <connected.HistDispConnected />
                <connected.MainDispConnected />
                <connected.ClearButtonConnected />
                <connected.NumButtonConnected />
                <connected.NumButtonConnected />
                <connected.NumButtonConnected />
                <connected.NumButtonConnected />
                <connected.NumButtonConnected />
                <connected.NumButtonConnected />
                <connected.NumButtonConnected />
                <connected.NumButtonConnected />
                <connected.NumButtonConnected />
                <connected.NumButtonConnected />
                <connected.OpButtonConnected />
                <connected.OpButtonConnected />
                <connected.OpButtonConnected />
                <connected.OpButtonConnected />
                <connected.DecimalButtonConnected />
                <connected.EqualButtonConnected />
            </Provider>
        </div>
    }
}

export default Calculator