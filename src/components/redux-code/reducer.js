const defaultState = {
    main: '0',
    operation: '',
    hist: '0',
    decimal: false,
    answer: 0
}

const NUMPRESS = 'NUMPRESS'
const CLEAR = 'CLEAR'
const DECIMAL = 'DECIMAL'
const OPERATION = 'OPERATION'
const EQUAL = 'EQUAL'
const BACK = 'BACK'

const numAction = function(txt) {
    return {
        type: NUMPRESS,
        txt
    }
}

const clrAction = function() {
    return {
        type: CLEAR
    }
}

const decAction = function() {
    return {
        type: DECIMAL
    }
}

const opPress = function(op) {
    return {
        type: OPERATION,
        op
    }
}

const eqPress = (n1, n2, op) => {
    return {
        type: EQUAL,
        n1,
        n2,
        op
    }
}

const backPress = () => {
    return {
        type: BACK
    }
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case NUMPRESS:
            return Object.assign({}, state, {
                main: `${Boolean(parseInt(state.main))?state.main:''}${action.txt}` //`${state.main}`
            })
        case CLEAR:
            return defaultState
        case DECIMAL:
            return Object.assign({}, state, {
                main: !state.decimal ? `${state.main}.` : state.main,
                decimal: true
            })
        case OPERATION:
            var obj = {
                operation: action.op,
                hist: `${Boolean(parseInt(state.hist))?state.hist:''}${state.main}${action.op}`,
                main: `0`,
                decimal: false
            }
            return Object.assign({}, state,
                state.main ? obj : state)
        case EQUAL:
            obj = {
                operation: '',
                hist: '0',
                main: `${state.main?eval(`${state.hist}${state.main}`):eval(`${state.hist.slice(0,state.hist.length-1)}`)}`
            }
            return Object.assign({}, state,
                state.main ? obj : state, {
                    decimal: !(obj.main == parseInt(obj.main))
                })
        case BACK:
            return Object.assign({}, state, {
                main: `${state.main.slice(0,state.main.length-1)}`
            })
        default:
            return state
    }
}

export default {
    reducer,
    numAction,
    clrAction,
    decAction,
    opPress,
    eqPress,
    backPress
}