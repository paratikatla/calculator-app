import '../ButtonBox/button-box.css'

const ButtonBox = ({buttons}) => {
   
    return(
        <div className = 'button-box'>
            {buttons}
        </div>
    );

};

export default ButtonBox;