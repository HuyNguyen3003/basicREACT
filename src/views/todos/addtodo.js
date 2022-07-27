import React from "react";
import { toast } from 'react-toastify';
class Addtodo extends React.Component{
    state = {
        nameWorkadd : ``,
    }
    handelonchange = (event)=>{
        this.setState({
            nameWorkadd : event.target.value,
        })
    }

    handelonadd =(even) =>{
        if(!this.state.nameWorkadd){
            toast.warning("errol")
        } else{
        this.props.addwork({
            id : Math.floor(Math.random()*100),
            nameWork:this.state.nameWorkadd
        })
        this.setState({
            nameWorkadd : ``,
        })
    }
    }
    render(){
        return(
            <>
              <div>
                <input className="Input-input" value={this.state.nameWorkadd} onChange={this.handelonchange}></input>
                <button className="Input-button" onClick={this.handelonadd}>ADD</button>
            </div></>
        )
    }
}
export default Addtodo;