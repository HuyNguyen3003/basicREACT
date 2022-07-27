import React from "react";
class Deltodo extends React.Component{

    getwork = (item)=>{
        this.props.Deltodo(item)
    }

    render(){

        return(
            <>
            <div>
                
                { 
                      this.props.state0.Work.map((item,index)=> 
                      <div className="outPut" key={item.id}>
                          {index+1} - {item.nameWork} <button className="edit">Edit</button> <button className="delete" onClick={this.getwork(item)}>Delete</button>
                      </div>
                      )
                }

                
            </div>
            
            </>
        )

    }

}
export default Deltodo;