import React, { Component } from 'react';
import axios from "axios";

import YoutubeVideo from './YoutubeVideo';

const API_KEY='AIzaSyCojCp66RLS9OY8hOwnW0UWLNdC56z24Os';
const URL1 = 'https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=';
const MAX_RESULT = 5;
const QUERY = 'cognizant+global';

var finalURL = `${URL1}${QUERY}&maxResults=${MAX_RESULT}&key=${API_KEY}`;

class YouTube extends React.Component{
    constructor(props){
        super(props);
        this.state={
            youtubeSearch:[]
        }
    }
   
    //https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=cognizant&maxResults=50&key=AIzaSyCojCp66RLS9OY8hOwnW0UWLNdC56z24Os
    componentDidMount(){
        axios.get(finalURL)
        .then((response) =>{
            console.log(response.data.items);
            this.setState({
                youtubeSearch:response.data.items
            });
            console.log(this.state.youtubeSearch);   
        });
    }

    render(){

        const allYoutubeResults = this.state.youtubeSearch.map((yt)=>(
            <YoutubeVideo
                key={yt.id.videoId}
                id={yt.id.videoId}
            ></YoutubeVideo> 
        ));

        return(
            <div>
                The content from youtube will come here...
                {allYoutubeResults}
            </div>    
        );
    }

}

export default YouTube;