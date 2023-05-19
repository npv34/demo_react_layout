import React from "react";
import {Route, Router, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PageNotFound from "./pages/errors/PageNotFound";
import Layout from "./components/layouts/Layout";
import PostList from "./pages/posts/PostList";

function App() {
  return (
    <React.Fragment>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/admin" element={<Layout/>}>
                <Route path="home" element={<Home />}/>
                <Route path="posts" element={<PostList />}/>
            </Route>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </React.Fragment>
  );
}

export default App;
