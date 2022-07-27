import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom"
import "./user.scss"



class DetailUsers extends React.Component{

    state = {
        user : {}
}


    async componentDidMount(){
        if(this.props.match && this.props.match.params){
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user : res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    handleback = () =>{
        this.props.history.push("/user")
    }
     handlenext = () =>{
        this.props.history.push("/user/3")
    }
   

render(){
    let {user} = this.state
    let isEmptyobj = Object.keys(user).length === 0;

    return(
        <>
    
        <div>heloo world i from detailUsers user with id : {this.props.match.params.id}</div>
        {isEmptyobj === false &&
        <> 
        <div className="nameDetail">first name is {user.first_name} - last name is {user.last_name}</div>
        <div>
            <img src={user.avatar}></img>
        </div>
        <button className="handleback"
        onClick={this.handleback}
        >BACK</button>
        <button className="handleback"
        onClick={this.handlenext}
        >Next</button>
        </>

        }
        
        
        </>
    )
}

}

export default withRouter(DetailUsers);