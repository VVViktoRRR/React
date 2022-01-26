import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import {albumService} from "../../services/albumService";
import css from './AlbumPage.module.css'

const AlbumsPage = () => {
    const {id} = useParams()
    const [album, setAlbum] = useState([]);

   useEffect(()=> {
       albumService.getAllUsersAlbum(id).then(value => setAlbum( [...value]))
   }, [id])
    return (
        <div>
           <h2> AlbumPage :</h2>
                <div className={css.album_page}>
                    {
                        album.map(album => <div key={album.id}>
                            <hr/>
                            <h4> userId: {album.userId} --- id: {album.id}</h4>
                            <h4> title: {album.title}</h4>
                            <Link to={`${id}/photos`.toString()}><button> Album photos </button></Link>
                            <hr/>
                         </div> )
                    }
                </div>
                <div>
                   <Outlet/>
               </div>
        </div>
    );
};

export {AlbumsPage};