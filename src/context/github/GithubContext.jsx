import { createContext, useEffect, useReducer, useState } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext()


const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN


export const GithubProvider = ({ children }) => {
   const initialState = {
     users: [],
     laoding: true
   }


   const [state, dispatch] = useReducer(githubReducer, initialState)
    

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetchUsers()
    },[])
    

    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`, {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`
          }
        })


        const data = await response.json()

            dispatch({
              type: 'GET_USERS',
              payload: data

            })
         

         
      }


    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
    }}>
      {children}
    </GithubContext.Provider>
}


export default GithubContext