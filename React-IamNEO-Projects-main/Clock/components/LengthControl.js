import "./LengthControl.css"

import { useSelector, useDispatch } from "react-redux"
import { incBreak, decBreak, incSession, decSession } from "../features/timerSlice"

const LengthControl = () => {
    const { breakLength, sessionLength } = useSelector( state => state.timer )
    const dispatch = useDispatch()


    return (
        <div className="controls-group">
            <div className="control">
                <h2 id="break-label">BRAKE LENGTH</h2>
                <h3 id="break-length">{breakLength}</h3>
                <button 
                    id="break-decrement"
                    onClick={ () => {
                        dispatch(decBreak())
                    }}>
                    -
                </button>
                <button 
                    id="break-increment"
                    onClick={ () => {
                        dispatch(incBreak())
                    }}>
                    +
                </button>
                <br></br><br></br>
                <br></br>
            </div>
            <div className="control">
                <h2 id="session-label"> ----SESSION LENGTH</h2>
                <h3 id="session-length">{sessionLength}</h3>
                <button 
                    id="session-decrement"
                    onClick={ () => {
                        dispatch(decSession())
                    }}>
                    -
                </button>
                <button 
                    id="session-increment"
                    onClick={ () => {
                        dispatch(incSession())
                    }}>
                    +
                    <br></br>
                </button>
                <br></br><br></br>
                <br></br>
            </div>
        </div>
    )
}

export default LengthControl