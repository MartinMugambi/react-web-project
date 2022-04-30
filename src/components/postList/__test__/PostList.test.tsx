import {screen, render} from '@testing-library/react';
import PostList from '../post';
import {Provider} from "react-redux"
import { store } from '../../../redux/store';

const MockPostList = () =>{
    return (
        <Provider store={store}>
            <PostList />
        </Provider>
    ); 
}

beforeEach(()=>{
    render(<MockPostList />)
});

describe("PostList Component Test", ()=>{

    test("should display previous text", ()=>{

        const textElement = screen.getByText(/Back to HomePage/i)
        expect(textElement).toBeVisible();
    });

    test("Should render username text", () =>{
  
        const usernameElement= screen.getByRole("heading");
        expect(usernameElement).toBeInTheDocument();
    });

    test("should render a list of items", () =>{
        
        const listElement = screen.getByRole("article")
        expect(listElement).toBeVisible();
    })

})