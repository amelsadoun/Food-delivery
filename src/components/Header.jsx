import React from "react";
import logo from '../assets/logo.svg'
import {Outlet, Link} from "react-router-dom"

export default function Header() {
  return (
    <div className="top-0 inset-x-0 h-20 flex justify-between px-28">
      <div className="justify-self-start flex text-center align-center items-center">LOGO</div>
      <div className="justify-self-end self-center right-0 place-self-end flex space-x-20 font-semibold text-dark-blue">
        <Element link='/' title="Home"></Element>
        <Element link='/product' title="Product"></Element>
        <Element link='/faq' title="FAQ"></Element>
        <Element title="Contact"></Element>
      </div>
    </div>
  );
}

function Element(props) {
  return (
    <Link to={props.link} className="color-red">
      {props.title} 
    </Link>
  );
}
