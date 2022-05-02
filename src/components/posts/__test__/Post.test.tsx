import {screen, render} from "@testing-library/react"
import {Provider} from "react-redux"
import { store } from "../../../redux/store"
import { Post } from "../post"


const MockPost = () =>{
    return (
        <Provider store={store}>
            <Post title={""} body={""} />
        </Provider>
    );
}

beforeEach(()=>{
    render(<MockPost />)
})


describe("Post Component Test", () =>{

    test("should render Post title", () =>{

     const titleElement = screen.getByRole("heading");

     expect(titleElement).toBeInTheDocument();
    });

  test("should render Post Body", ()=>{

    const bodyElement = screen.getByTestId("body")
    expect(bodyElement).toBeVisible();
  })

})