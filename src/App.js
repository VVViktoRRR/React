import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/home.page/HomePage";
import UsersPage from "./pages/users.page/UsersPage";
import PostsPage from "./pages/posts.page/PostsPage";
import Layout from "./components/Layout/Layout";
import {UserDetails} from "./components/User.Details/User.Details";
import {UserPosts} from "./components/User.Posts/User.Posts";
import {PostDetails} from "./components/Post.Details/Post.Details";
import {PostComments} from "./components/Post.Comments/Post.Comments";

function App() {
    return (
     <>
    <Routes>
        <Route path={'/'} element={<Layout/>} >
            <Route index element={<HomePage/>}/>
            <Route path={'users'} element={<UsersPage/>}>
                <Route path={':id'} element={<UserDetails/>}>
                <Route path={'posts'} element={<UserPosts/>}/>
                </Route>
            </Route>
            <Route path={'posts'} element={<PostsPage/>}>
                <Route path={':id'} element={<PostDetails/>}>
                    <Route path={'comments'} element={<PostComments/>}/>
                </Route>
            </Route>
        </Route>
    </Routes>
      </>
  );
}

export default App;
