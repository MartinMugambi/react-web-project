import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
//Lazy Loading components to make them loading information faster
const LazyUserList =  React.lazy(()=> import('./components/userList/userList')) 
const LazyPostList = React.lazy(()=> import('./components/postList/post'))

function App() {
  return (
    <Router>
   <>
    <Routes>
      <Route path ='/' element={
      <React.Suspense fallback ="loading...">
        <LazyUserList />
        </React.Suspense>
      }  />

      <Route path='post' element={
      <React.Suspense fallback ="loading...">
        <LazyPostList />
        </React.Suspense>
      }  /> 
    </Routes>
   </>
   </Router>
  );
}

export default App;
