import {screen, render} from '@testing-library/react';
import { store } from '../../../redux/store';
import {Provider} from 'react-redux';
import UserList from '../userList';

const MockUserList = () =>{
    return (
        <Provider store={store}>
            <UserList />
        </Provider>
    );
}

beforeEach(()=>{
    render(<MockUserList />)
})

describe("Post Component Test", () =>{

 test("should render title Text", () =>{

    const titleElement = screen.getByText("Users")
    expect(titleElement).toBeInTheDocument();
 });

 test("should display headings", () =>{
  
    const headingElements = screen.queryAllByRole("heading");
    expect(headingElements.length).toBeGreaterThan(1)
 });

 test("should render apartment as number", async () =>{

    const apartmentElement  = await screen.findByTestId("apartment");

    expect(apartmentElement.textContent).toBe("0")
 })

 
 test("should render suite as number", async () =>{

    const suiteElement  = await screen.findByTestId("suite");

    expect(suiteElement.textContent).toBe("0")
 })

})