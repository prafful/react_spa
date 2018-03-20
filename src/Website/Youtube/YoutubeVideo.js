import React from "react";

class YoutubeVideo extends React.Component{
    //<iframe width="560" height="315" src="https://www.youtube.com/embed/T_XibtN6GEU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    render(){
        
        return(    
        <div>
           <iframe width="320" height="240" src={"https://www.youtube.com/embed/"+this.props.id} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
           <br></br><br></br>
        </div>
        )
    }

}

export default YoutubeVideo;