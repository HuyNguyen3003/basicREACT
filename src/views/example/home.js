import React from "react";
import { withRouter } from "react-router";
import colorrandom from "../HOC/color";
import logo from '../../asstes/images/281822730_767414617756373_3582252050542322670_n.jpg'
import {connect} from 'react-redux'
import { type } from "@testing-library/user-event/dist/type";
class Home extends React.Component{

    next = () =>{
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 10000000);
    }
    handlclick = (user)=>{
        console.log("check users",user)
        this.props.deleteclick(user)
    }
    handlcreat=()=>{
        this.props.creatclick()

    }


    render(){
        let listUsers = this.props.dataRedux;
        return(
            <>
            
            <div>Hello Nguyen Huy</div>
            <div>
                <img src={logo} style={{whith:'200px',height:'200px',marginTop:'20px'}}></img>
            </div>
            <div>
                {
                    
                    listUsers && listUsers.length >0 &&
                    listUsers.map((item,index)=>{
                        return(
                            <div key={item.id}>
                                {index + 1} - {item.name}	&nbsp; <span onClick={()=>this.handlclick(item)} >x</span>
                              	&nbsp;  
                            </div>
                        )
                    })
                }
                <button onClick={this.handlcreat} >ADD NEW</button> 
              
              
            </div>
            <this.next></this.next>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
      return{  
        dataRedux: state.users


      }
}
const mapDispathToProps = (dispatch)=>{
    return{
        deleteclick:(handleclick)=> dispatch({type: 'DELETE_USER',payload:handleclick}),
        creatclick:()=>dispatch({type:'CREAT_USER'}),
    }

}







export default connect(mapStateToProps,mapDispathToProps)(withRouter(colorrandom(Home)));
//export default connect(mapStateToProps)(colorrandom(Home))
