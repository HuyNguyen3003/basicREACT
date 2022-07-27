
import React from "react";
import './demo.scss'
import colorrandom from "../HOC/color";



class MyComponent extends React.Component {
    state = {
        name : ``,
        salary : ``,
        job : [
            {id : 1 ,title : `nhan vien`, salary : `200`},
            {id : 2 ,title : `bac si`, salary : `500`},
            {id : 3 ,title : `ki su`, salary : `800`}
        ],
        showjob : false
    }
    handleshow =()=>{
        this.setState({
            showjob :!this.state.showjob
        })
    }
    handlename = (even)=>{
        this.setState({
            name : even.target.value
        })
    }
    handlesalary = (even)=>{
        this.setState({
            salary : even.target.value
        })
    }
    addjob = (addnewjob) =>{
        this.setState({
            job : [...this.state.job,addnewjob]
        })

    }
    handleonclick =(even)=>{
        if(!this.state.name||!this.state.salary){
                alert("errol")
        }
        this.addjob({
            id : Math.floor(Math.random()*100),
            title : this.state.name,
            salary : this.state.salary

        })
        this.setState({
            name : ``,
            salary: ``
        })

    }
    deljob = (job) =>{
        let arr = this.state.job
        arr = arr.filter(item => item.id !== job.id)
        this.setState({
            job : arr
        })
    }
    getjob = (item)=>{
        this.deljob(item)
    }



    render() {
        return (
 <>
         <div className="login">
             <form>
             <label >Title</label><br/>
            <input type="text" value={this.state.name} 
            onChange={this.handlename}
            /><br/>
            <label >Salary</label><br/>
            <input type="text" value={this.state.salary}
            onChange={this.handlesalary}
            /><br/><br></br>
        <input type="button" value="Submit"
        onClick={this.handleonclick}
        />
             </form>
         </div>
         {this.state.showjob===false ? <div onClick={this.handleshow}>
            <button className="btn-show">Show</button></div>

         :

         <div> 
             <br></br>
                    {
                      this.state.job.map((item) =>  <div key={item.id}>
                           {item.title} - {item.salary}$ <></> 
                           <span onClick={()=>this.getjob(item)} >x</span>
                           <br></br>  
                           </div>)
                    }<br></br>
                     <div onClick={this.handleshow}><button>Hide</button></div>
               </div>
               
                  
                }
 </>
        )
  
    }
}

export default  colorrandom(MyComponent);