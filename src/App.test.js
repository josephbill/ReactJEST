import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import App from "./App";
  
// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); 
})
  
describe("App Component" ,() => {
      
    // Test 1  //universal test 
    test("App Rendering", () => {
        render(<App/>); // Rendering the App
        const text = screen.getByTestId("text"); 
        const button = screen.getByTestId("button");
        expect(button).toBeInTheDocument();
        expect(text).toBeInTheDocument();
    })
   //specifics for my app.
    // Test 2
    test("Default Text", () => {
        render(<App/>); 
        const text = screen.getByTestId("text"); 
        expect(text).toHaveTextContent("Moringa SDFT03");
    })
      
    // Test 3
    test("Toggling Text", () => {
        render(<App/>);
        const text = screen.getByTestId("text"); 
        const button = screen.getByTestId("button"); 
        expect(text).toHaveTextContent("Moringa SDFT03");
        fireEvent.click(button); 
        expect(text).toBeEmptyDOMElement();  // checks whether element is empty : check the value. 
        fireEvent.click(button);
        expect(text).toHaveTextContent("Moringa SDFT03");
    })
})