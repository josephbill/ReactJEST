// to pass the props : 
// pass them in as arguments for your components 
const Text = ({toggle, displayText}) => {
    return  <h1 data-testid="text" >{toggle ? displayText : " "}</h1>
}

export default Text;