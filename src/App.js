import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./components/index";
import {
    AlbumPhotosPage,
    AlbumsPage,
    PostCommentsPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UserPostsPage,
    UsersPage
} from "./pages";

function App() {
  return (
      <Routes>

          <Route path={'/'} element={<Layout/>}>
             <Route index element={<Navigate to={'users'}/>}/>
             <Route path={'users'} element={<UsersPage/>}>
                  <Route path={':id'} element={<UserDetailsPage/>}>
                      <Route path={'posts'} element={<UserPostsPage/>}/>
                  </Route>
                  <Route path={':id/albums'} element={<AlbumsPage/>}>
                      <Route path={':userId/photos'} element={<AlbumPhotosPage/>}/>
                  </Route>
              </Route>
              <Route path={'posts'} element={<PostsPage/>}>
                  <Route path={':id'} element={<PostDetailsPage/>}>
                      <Route path={'comments'} element={<PostCommentsPage/>}/>
                  </Route>
              </Route>
          </Route>

      </Routes>
  );
}

export default App;
