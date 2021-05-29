import * as Redux from 'redux'
import {
    Provider,
    connect
} from 'react-redux'
import reducer from '../react-and-redux/reducer'
//importing components
import displays from '../react/display/display'
import buttons from '../react/Buttons/buttons'


const store = Redux.createStore(reducer)

const HistDispConnected = displays.HistDisp
const MainDispConnected = displays.MainDisp
const ClearButtonConnected = buttons.ClearButton
const NumButtonConnected = buttons.NumButton
const OpButtonConnected = buttons.OpButton
const EqualButtonConnected = buttons.EqualButton
const DecimalButtonConnected = buttons.DecimalButton

export default {
    store,
    HistDispConnected,
    MainDispConnected,
    ClearButtonConnected,
    NumButtonConnected,
    OpButtonConnected,
    EqualButtonConnected,
    DecimalButtonConnected
}