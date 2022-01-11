import {useEffect, useState} from "react";

export default function Comments() {
    let [comments, setComments] = useState( []);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });
    }, []);
    return (
        <div>
            <ul>
                {
                    comments.map(value => <li key={value.id}> {value.body}</li>)
                }
            </ul>
        </div>
    );
}