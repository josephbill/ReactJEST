import { render, screen , cleanup} from "@testing-library/react"
//jest imports 
import '@testing-library/jest-dom'
import Button from "./Button"


beforeEach(() => {
    cleanup(); //resets the DOM 
    //logic 
})

afterEach(() => {
    cleanup(); //resets the DOM 
})

  
describe("Button Component" ,() => {
    const setToggle= jest.fn();  // fn() : mock of the logic 
    render(<Button setToggle={setToggle} btnTxt="Click Me!"/>); 
    const button = screen.getByTestId("button"); 
      
    // Test 1
    test("Button Rendering", () => {
        expect(button).toBeInTheDocument();  // checks for presence in DOM. 
    })
  
    // Test 2 
    test("Button Text", () => {
        expect(button).toHaveTextContent("Click Me!");  // checks for text content 
    })
})