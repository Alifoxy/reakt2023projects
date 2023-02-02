import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterEndpoints} from "./services/routes/routes";
import HomePage from "./pages/Home/HomePage";
import CommentsPage from "./pages/Comments/CommentsPage";
import MainLayout from "./layouts/MainLayout";
import {PostsPage} from "./pages/Posts/PostsPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={RouterEndpoints.index} element={<MainLayout/>}>
                    <Route path={RouterEndpoints.index} index element={<HomePage/>}/>
                    <Route path={RouterEndpoints.comments} element={<CommentsPage/>}/>
                    <Route path={RouterEndpoints.posts} element={<PostsPage/>}/>
                        <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}


export default App;
