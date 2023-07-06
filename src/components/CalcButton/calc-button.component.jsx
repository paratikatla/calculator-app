

const CalcButton = ({className, val, onClick}) => {
    return (
        <button className = {className} onClick={onClick}>
            {val}
        </button>
    );
};

export default CalcButton;