import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumService} from "../../services/albumService";


const AlbumPhotosPage = () => {
    const {id} = useParams()
    const [photo, setPhotos] = useState([]);

    useEffect(() => {
        albumService.getByAlbumPhotos(id).then(value => setPhotos( [...value]))
    }, [id])
    return (
        <div>
            <div>
                <h2> Album Photos:</h2>
            </div>
            {
                photo.map( photo => <div key={photo.id}>
                    <hr/>
                    <h4>albumId: {photo.albumId}</h4>
                    <h4>id: {photo.id}</h4>
                    <h4>title: {photo.title}</h4>
                    <h4> <img src={photo.thumbnailUrl} alt={'photo'}/></h4>
                    <h4> <img src={photo.url} alt={'photo'}/></h4>
                    <hr/>
                </div> )
            }
        </div>
    );
};

export {AlbumPhotosPage};