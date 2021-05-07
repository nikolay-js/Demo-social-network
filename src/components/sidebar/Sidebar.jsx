import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
//import * as axios from 'axios';

let Sidebar = (props) => {

    return <div className={s.sidebar}>        
        {
            props.users.map(u => <div className={s.users} key={u.id}>
                <span className={s.user}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photoUrl} className={s.userPhoto} />
                        </NavLink>
                    </div>
                    
                </span>
                <span className={s.userName}>
                    <span>
                        <div>{u.fullName}</div>                        
                    </span>                    
                </span>                
            </div>)
        }
        <span className={s.toggle}>=</span>
    </div>
    
}


export default Sidebar;