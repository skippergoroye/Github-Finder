import React from 'react'
import UserResults from '../components/users/UserResults'
import UserItem from '../components/users/UserItem'



const Home = () => {


  // .env
  // VITE_SOME_KEY=123
  // VITE_DB_PASSWORD=foobar

  // console.log(import.meta.env.VITE_SOME_KEY) // 123
  // console.log(import.meta.env.VITE_DB_PASSWORD) // undefined

 

  
  return (
    <>
      {/* {import.meta.env.VITE_SOME_KEY} */}
      {/* search component */}
      <UserResults />
      
    </>
  )
}

export default Home