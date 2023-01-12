// class based /functional based
const Button = ({setToggle,btnText}) => {

    return <button data-testid="button"  onClick={() => {
        setToggle((prev) => !prev )
    }}>
        {btnText}
    </button>
}

export default Button;
