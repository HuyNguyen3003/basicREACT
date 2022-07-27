import React from "react";
import "./listdoto.scss"
import Addtodo from "./addtodo";
import { toast } from 'react-toastify';
import colorrandom from "../HOC/color";

class Listtodo extends React.Component{
    state = {
        Work : [
            {id : 1, nameWork : `Doing homework` },
            {id : 2, nameWork : `Making Videos`},
            {id : 3, nameWork : `Fixing Bug`},
            {id : 4, nameWork : `Playing Game`},
        ],
        edittodo :{},
    }
    addwork = (addnewwork) =>{
        this.setState({
           Work : [...this.state.Work,addnewwork] 
        })
        toast.success("Wow so easy!");
    }
    delwork = (work)=>{
        let arrdel = this.state.Work
        arrdel = arrdel.filter(item => item.id !== work.id)
        this.setState({
            Work : arrdel
        })
        toast.success(`delete ${work.nameWork}`)
        
        
    }
    edit = (todo)=>{
        let isEmptyobj = Object.keys(this.state.edittodo).length === 0;
        // chuan bi save
        if(isEmptyobj === false){

            let edittodocp = [...this.state.Work];

            let objIndex = edittodocp.findIndex((item => item.id === todo.id));

            edittodocp[objIndex].nameWork = this.state.edittodo.nameWork;
            this.setState({
                Listtodo : edittodocp,
                edittodo : {},
            })

            toast.success("done");
            return
        }
        this.setState({
            edittodo : todo
        })
    }
    
    changetodo = (even) =>{
        let edittodocy = {...this.state.edittodo};
        edittodocy.nameWork = even.target.value;
        this.setState({
            edittodo : edittodocy
        })
    }

    render(){
        let isEmptyobj = Object.keys(this.state.edittodo).length === 0;
        return(
            <>
            <div>Simple Todo app With REACT.JS ( ZIILLA )</div>
            <Addtodo
            addwork = {this.addwork}
            ></Addtodo>

            <div>
                
                {
                      this.state.Work.map((item,index)=> 
                      <div className="outPut" key={item.id}>
                        {isEmptyobj === true ?  
                        <span>
                            {index+1} - {item.nameWork}
                        </span>
                        :
                        <>
                        {this.state.edittodo.id===item.id ? 
                        <span>
                        {index+1} - <input value={this.state.edittodo.nameWork}
                        onChange={this.changetodo}
                        ></input>
                        </span>                        
                        :
                        <span>
                            {index+1} - {item.nameWork}
                        </span>
                            }
                        </>
                       
                        }
                       
                        
                          <button className="edit"
                          onClick={()=>this.edit(item)}
                          >
                            {isEmptyobj === false && this.state.edittodo.id === item.id 
                            ? `Save`:`Edit`}
                            </button> 
                          <button className="delete"
                           onClick={()=>this.delwork(item)}
                           >Delete</button>
                      </div>
                      )
                }

                
            </div>
            </>
        )
    }

}

export default colorrandom(Listtodo);