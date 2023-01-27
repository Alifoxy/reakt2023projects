import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterEndpoints} from "./services/routes/routes";
import HomePage from "./pages/Home/HomePage";
import AlbumsPage from "./pages/Albums/AlbumsPage";
import TodosPage from "./pages/Todos/TodosPage";
import CommentsPage from "./pages/Comments/CommentsPage";
import MainLayout from "./layouts/MainLayout";
import {PostByCommentPage} from "./pages/PostByComment/PostByCommentPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={RouterEndpoints.index} element={<MainLayout/>}>
                    <Route path={RouterEndpoints.index} index element={<HomePage/>}/>
                    <Route path={RouterEndpoints.todos} element={<TodosPage/>}/>
                    <Route path={RouterEndpoints.albums} element={<AlbumsPage/>}/>
                    <Route path={RouterEndpoints.comments} element={<CommentsPage/>}>
                        <Route path={RouterEndpoints.postId} element={<PostByCommentPage/>}/>
                    </Route>
                        <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}


export default App;
