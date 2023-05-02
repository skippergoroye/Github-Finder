import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext()


const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN


export const GithubProvider = ({ children }) => {
   const initialState = {
     users: [],
     laoding: false,
   }


   const [state, dispatch] = useReducer(githubReducer, initialState)
    


  //  https://api.github.com/search/users?q=brad

   // Get Search Result
    const searchUsers = async (text) => {
      setLoading()

      const params = new URLSearchParams({
        q: text
      })

      const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`
        }
      })


      const { items } = await response.json()

          dispatch({
            type: 'GET_USERS',
            payload: items
          })  
      }

        // set Loading
        const setLoading = () => dispatch({type: 'SET_LOADING'})


    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
    }}>
      {children}
    </GithubContext.Provider>
}


export default GithubContext