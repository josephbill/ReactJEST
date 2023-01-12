# to run app 
npm install 
npm start 


# test scenarios to research 
Button Component 
 - Testing if button receives props 
 - If button is rendered correctly in DOM 
Text Component 
 - Test whether toggle is set to true in default load / false on click.
 - DOM
App Component 
 - Integration Tests : App component.  

 1. Whether all components have rendered : all
 2. Test cases for this project : default value for the text , toggle ability of the button 


JEST in react 
1. render (Component) : mock of the screen or component inside the test files 
2. screen: reference the mock screen 
3. cleanUp() : resets the DOM : React - DOM 
4. afterEach() : they take callback functions as parameters ,the function here runs after all tests are run 
5. beforeEach() : the function here runs before running the tests
6. describe 
7. test/it 
8. fireevent : stimulates a specific event 

