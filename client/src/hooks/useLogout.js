import { useAuthContext } from "./useAuthContext" 
import axios from "axios"
 
export const useLogout = ()=>{

    const {dispatch} = useAuthContext()
    
    const logout = ()=>{
        //remove user from storage
        localStorage.removeItem('user')
        
        // axios.post("/logout",{}, {withCredentials:true})
        
        //dispatch logout action
        dispatch({type:'LOGOUT'})
    }

    return {logout}
}