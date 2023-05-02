import React from 'react'
import Userresults from '../components/users/Userresults'
import Useritem from '../components/users/Useritem'



const Home = () => {


  // .env
  // VITE_SOME_KEY=123
  // VITE_DB_PASSWORD=foobar

  // console.log(import.meta.env.VITE_SOME_KEY) // 123
  // console.log(import.meta.env.VITE_DB_PASSWORD) // undefined

  // .env
  // VITE_GITHUB_URL = https://api.github.com
  // VITE_GITHUB_TOKEN=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


  // console.log(import.meta.env.VITE_GITHUB_URL) // 123
  // console.log(import.meta.env.VITE_GITHUB_TOKEN) // undefined

  
  return (
    <>
      {/* {import.meta.env.VITE_GITHUB_TOKEN} */}
      {/* search component */}
      <Userresults />
      {/* <Useritem /> */}
      
    </>
  )
}

export default Home