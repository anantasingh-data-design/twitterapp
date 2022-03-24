import React from 'react'
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';


function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search twitter" />
            </div>
            <div className="widgets__widhetsContainer">
                <h2>Whats happening?</h2>
                <TwitterTweetEmbed tweetId='933354946111705097' />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{ height: 400 }} />
                <TwitterShareButton
                    url={'https://facebook.com/ananta.singh.509'}
                    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
                />
            </div>
        </div>
    )
}

export default Widgets

//twitter developers acount details
//goto https://developer.twitter.com/en/portal/register/welcome
//create app
//my app name -Twitterappbuild  --same as appname in firebase
//API key- ZaZTDvuQNF0ChxZCzVZtlaKh8
//API key Secret-bxQVzdwyoVsIq6jS6lHozL4GWqdTzhCy1AihHeIxwucFEvaFJX
//Bearer Token-AAAAAAAAAAAAAAAAAAAAAHwMagEAAAAA3EVgxcU%2FOJFjZ3DftYyh86uI6Sw%3DLEw2JVyBAhN7z1bV0EELhRU6f3BAAMVlA62XclKuLbCgs5GWbT
//goto dashboard select ur appproject then goto keys and token
//we get generate access token and secret for my current account that is the current account developer

