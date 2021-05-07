import React from 'react';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';
//import * as axios from 'axios';

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div className={s.users} key={u.id}>
                <span className={s.user}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photoUrl} className={s.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                /* axios.delete(`http://localhost:4000/follow/${u.id}`, {
                                    withCredentials: true
                                })
                                    .then(response => {
                                        debugger;
                                        if (response.data[1].resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                    }); */

                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                /* axios.post(`http://localhost:4000/follow/${u.id}`, {}, {
                                    withCredentials: true
                                })
                                    .then(response => {
                                        debugger;
                                        if (response.data[1].resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    }); */

                                props.follow(u.id)
                            }} >Follow</button>}
                    </div>
                </span>
                <span className={s.userName}>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>from {u.location.city} {u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;