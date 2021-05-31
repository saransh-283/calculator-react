import * as Redux from 'redux'
import {
    Provider,
    connect
} from 'react-redux'
import connector from '../redux-code/reducer'
//importing components
import displays from '../react/display/display'
import buttons from '../react/Buttons/buttons'


const store = Redux.createStore(connector.reducer)

const mapStateToProps = function(state) {
    return {
        main: state.main,
        hist: state.hist,
        op: state.op
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        numPress: function(txt) {
            dispatch(connector.numAction(txt))
        },
        clrPress: function() {
            dispatch(connector.clrAction())
        },
        decPress: function() {
            dispatch(connector.decAction())
        },
        opPress: function(op) {
            dispatch(connector.opPress(op))
        },
        eqPress: function(n1, n2, op) {
            dispatch(connector.eqPress(n1, n2, op))
        },
        backPress: function() {
            dispatch(connector.backPress())
        }
    }
}

const HistDispConnected = connect(mapStateToProps)(displays.HistDisp)
const MainDispConnected = connect(mapStateToProps)(displays.MainDisp)
const ClearButtonConnected = connect(null, mapDispatchToProps)(buttons.ClearButton)
const NumButtonConnected = connect(null, mapDispatchToProps)(buttons.NumButton)
const OpButtonConnected = connect(null, mapDispatchToProps)(buttons.OpButton)
const EqualButtonConnected = connect(mapStateToProps, mapDispatchToProps)(buttons.EqualButton)
const DecimalButtonConnected = connect(null, mapDispatchToProps)(buttons.DecimalButton)
const BackButtonConnected = connect(null, mapDispatchToProps)(buttons.BackButton)

export default {
    store,
    HistDispConnected,
    MainDispConnected,
    ClearButtonConnected,
    NumButtonConnected,
    OpButtonConnected,
    EqualButtonConnected,
    DecimalButtonConnected,
    BackButtonConnected
}