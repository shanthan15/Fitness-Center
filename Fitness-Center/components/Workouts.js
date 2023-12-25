import React from 'react'
import {MenuList} from '../helpers/MenuList';
import MenuItem  from '../components/MenuItem';
import '../styles/workouts.css';
import { Link } from 'react-router-dom';
export default function Workouts() {
  return (
    <div className='menu'>
<h1 className='menuTitle'>Workouts</h1>   
<div className='menuList'>
{MenuList.map((menuItem, Key) =>{
  return <MenuItem 
  Key={Key}
  image={menuItem.image} 
  
  name={menuItem.name} 
  disc={menuItem.disc} />
})}
</div>
    </div>
  )
}
 