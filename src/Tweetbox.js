import React, { useState } from 'react';
import './Tweetbox.css';
import { Avatar, Button } from '@mui/material';
import db from './Firebase';

function Tweetbox() {

    const [twitMessage, setTwitMessage] = useState("");
    const [twitImage, setTwitImage] = useState("");
    const sendTweet = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Ananta singh",
            userName: "anantkumarsingh08@gmail.com",
            verified: true,
            text: twitMessage,
            image: twitImage,
            avatar: "https://www.shutterstock.com/image-illustration/avatar-modern-young-guy-working-remotely-2015853839"
        });
        setTwitMessage("");
        setTwitImage("");
    };
    return (
        <div className='tweetbox'>
            <form>
                <div className="twitterbox__input">
                    <Avatar src="https://www.shutterstock.com/image-vector/people-line-icon-vector-template-1916229154"></Avatar>
                    <input
                        onChange={(e) => setTwitMessage(e.target.value)}
                        value={twitMessage} placeholder='whats happening' type="text" />
                </div>
                <input
                    value={twitImage}
                    onChange={(e) => setTwitImage(e.target.value)}
                    className='tweetbox__imageinput'
                    placeholder='Enter image URL'
                    type="text" />
                <Button onClick={sendTweet} className="twitbox__button">Tweet</Button>
            </form>

        </div>
    )
}

export default Tweetbox