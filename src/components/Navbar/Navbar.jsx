import React from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <div className={style.crx}>
      <div className={style.item}>
        <NavLink to="/profile/21851" className={navData => navData.isActive ? style.active : style.item}>Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" className={navData => navData.isActive ? style.active : style.item}>Message</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/users" className={navData => navData.isActive ? style.active : style.item}>Users</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" className={navData => navData.isActive ? style.active : style.item}>News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" className={navData => navData.isActive ? style.active : style.item}>Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/setting" className={navData => navData.isActive ? style.active : style.item}>Settings</NavLink>
      </div>
    </div>
  )
}

export default Navbar