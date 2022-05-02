import  {screen, render, fireEvent} from "@testing-library/react"
import { User } from "../user"
import  {Provider} from "react-redux"
import { store } from "../../../redux/store"
import {BrowserRouter as Router} from "react-router-dom"

const MockUser = () =>{
    return (
         <Router>
        <Provider store={store}>
            <User name={""} username={""} id={0} postId={0} setId={function (id: number): void {
                throw new Error("Function not implemented.")
            } } setName={function (name: string): void {
                throw new Error("Function not implemented.")
            } } />
        </Provider>
        </Router>
    );
}

beforeEach(()=>{
    render(<MockUser />)
})


describe("User Component Test", () =>{

     
    test("should render button text", ()=>{

        const buttonElement = screen.getByRole("button");
        expect(buttonElement.textContent).toBe("Show Post");
    })

    // test("button should be clickable", () =>{
        
    //     const buttonElement = screen.getByRole("button");
    //     fireEvent.click(buttonElement)
    //     expect(buttonElement).toBeVisible()
    // })

    test("should render username", () =>{
        const usernameElement = screen.getByTestId("username");
        expect(usernameElement).toBeVisible();
    })

    test("should be able to change input value", () =>{

        const inputElement = screen.getByTestId("input");
        fireEvent.change(inputElement, {target: { value: "title"}});
    })

    test("input should be disabled on initial render", () =>{

        const inputElement = screen.getByTestId("input");
        expect(inputElement).toBeDisabled();
    })

    test("input value should be disabled after click", ()=>{

        const inputElement = screen.getByTestId("input");
        fireEvent.click(inputElement)
        expect(inputElement).toBeDisabled();
    })

    test("should render icon", () =>{

        const iconelement = screen.getByTestId("icon")
        expect(iconelement).toBeInTheDocument();
    })

    test("icon should be clickable", ()=>{

        const iconElement = screen.getByTestId("icon");

        fireEvent.click(iconElement);

        expect(iconElement).toBeEnabled();
    })
})