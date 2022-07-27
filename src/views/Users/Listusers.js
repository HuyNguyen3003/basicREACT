import React from "react";
import axios from "axios";
import './user.scss'
import{withRouter} from 'react-router-dom'


class ListUsers extends React.Component{

    state = {
        ListUsers :[],
    }

    async componentDidMount(){
      let res = await axios.get('https://reqres.in/api/users?page=1')
      this.setState({
        ListUsers : res && res.data && res.data.data ? res.data.data : []
      })

    }
    handleClickView = (user) =>{
        this.props.history.push(`/user/${user.id}`)
    }



    render(){
        let {ListUsers} = this.state;

        return(
            <>
            <div className="List-User">
                <div className="Title">
                    Fetch all list users (click)
                </div>
                <div className="list user">
                  {ListUsers && ListUsers.length>0 &&
                    ListUsers.map((item,index)=>{
                        return(
                            <div className="child" key={item.id}
                            onClick={()=>this.handleClickView(item)}
                            >
                                {index + 1} - {item.first_name} - {item.last_name} - {item.email}
                            </div>
                        )
                    })

                    }
                </div>

            </div>


            
            
            
            
            </>

        )
        }
}

export default withRouter(ListUsers);