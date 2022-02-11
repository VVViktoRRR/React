import './App.css';
import { Route, Routes} from "react-router-dom";
import {CarsPage, CommentsPage, HomePage, PostsPage, UsersPage} from "./pages";
import {Layout} from "./components/layout/Layout";


function App() {

  return (
        <div>
            <Routes>
                <Route  path={'/'}  element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                </Route>
             </Routes>
        </div>

  );
}

export default App;
