import './App.css';
import {Route, Routes} from "react-router-dom";
import {CarsPage, CommentsPage, HomePage, PostsPage, UsersPage} from "./pages";


function App() {

  return (
    <div>
     <Routes>
         <Route path={'/'} element={<HomePage/>}/>
         <Route path={'/users'} element={<UsersPage/>}/>
         <Route path={'/posts'} element={<PostsPage/>}/>
         <Route path={'/comments'} element={<CommentsPage/>}/>
         <Route path={'/cars'} element={<CarsPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
