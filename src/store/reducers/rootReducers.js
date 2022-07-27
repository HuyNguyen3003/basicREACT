const initstate = {
        
    users: [
        {id:1,name:`huy`},
        {id:2,name:`nhi`},
        {id:3,name:`trong`}
    ],
    posts:[],
}

const rootReducers = (state=initstate,action)=>{
    switch(action.type) {
        case 'DELETE_USER':
          console.log(">> run into delete",action)
          
          let users= state.users
          users = users.filter(item => item.id !== action.payload.id)

          return {
            ...state,users
          }
          break;
         case 'CREAT_USER':

           let id = Math.floor(Math.random()*10000)
            let user ={id : id ,name : `random - ${id}`}
            return{
                ...state,users:  [...state.users,user]
            }
            break;
        default:
          return state
      }





}
export default rootReducers;