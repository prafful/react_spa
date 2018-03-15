import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Friend from "./Friend";

class FetchFriends extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            friendsList:[],
            id:'',
            name:'',
            location:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    getFriendsData(){
        axios.get("http://localhost:8080/friends/")
            .then((res)=>{
                 //console.log(res.data); 
                 this.setState({
                     friendsList: res.data
                 });
                 console.log(this.state.friendsList);   
            })
    }

    componentDidMount(){
        this.getFriendsData();
    }

    onChange(event){
        event.preventDefault();
        const state = this.state;
        state[event.target.name] = event.target.value;
        console.log(state[event.target.name]); 
        this.setState(state);

    }

    onSubmit(event){
        event.preventDefault();
        const { id, name, location} = this.state;
        axios.post('http://localhost:8080/friends/',{
                                    'id':this.state.id,
                                    'name':this.state.name,
                                    'location':this.state.location

                                }).then((response)=>{
                                    console.log("Post Success!")
                                });
    }

    render(){
        const allFriends = this.state.friendsList.map((f)=>(
            <Friend 
                key={'friend'-f.id}
                id={f.id}
                name={f.name}
                location={f.location}
            > </Friend>
        ));
        return(
            <div>
                <h3>Add Friend</h3>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="id" value={this.state.id} onChange={this.onChange} />
                    <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                    <input type="text" name="location" value={this.state.location} onChange={this.onChange} />
                    <button type="submit">Add Friend</button>
                </form>
                <div>
                    Friends List will come here from spring boot!
                    <br></br>
                    {allFriends}
                </div>    
            </div>
        );
    }


}

export default FetchFriends;