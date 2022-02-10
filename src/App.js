import './App.css';
import {Route, Routes} from "react-router-dom";
import {CarsPage, CommentsPage, HomePage, PostsPage, UsersPage} from "./pages";


function App() {

  return (
    <div>
        <div className={'header'}>
            <a href={"/"}>Home</a>
            <a href={"/users"}>Users</a>
            <a href={"/posts"}>Posts</a>
            <a href={"/comments"}>Comments</a>
            <a href={"/cars"}>Cars</a>
        </div>
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}/>
                <Route path={'/comments'} element={<CommentsPage/>}/>
                <Route path={'/cars'} element={<CarsPage/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
