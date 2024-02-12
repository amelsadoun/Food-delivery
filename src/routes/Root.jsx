import React from 'react'
import {Outlet, Link} from "react-router-dom"
import Header from '../components/Header'
import Landing from './Landing'

function Root() {
  return (
    <>
    <Header ></Header>
    <Outlet/>
    </>
  )
}

export default Root