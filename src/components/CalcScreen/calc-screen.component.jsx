import '../CalcScreen/calc-screen.css'

const CalcScreen = ({displayText}) => {

    return(
        <div className = 'screen-container'>
            <label className="calculator-screen">
                {displayText}
            </label>
        </div>
        
    )

}

export default CalcScreen;