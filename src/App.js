import Button from './components/Button/Button';
import Text from './components/Text/Text'
import { useState } from 'react';
const App = () => {
  //states
  // objects that contain info /data 
  //toggle is the current value in the App component 
  //setToggle will be used to update this value 
  const [toggle,setToggle] = useState(true);
  return (
    <div className="App">
        <Text toggle={toggle} 
              displayText="Moringa SDFT03"
        />
    
        <Button
             setToggle={setToggle}
             btnText="Click Me"
        />
    
    </div>
  );
}
  
export default App;