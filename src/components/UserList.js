  
import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {fetchUsers} from '../redux/actions/userAction'

function UserList({userData}) {


    const dispatch = useDispatch()
   
    const users = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchUsers()) 
      }, [])
      console.log('fetching')

      return (
      
      /* userData.loading ? (
        <h2>Loading</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : ( */
           <div> 

            <h2>Users List</h2>

            {/*  <div>
            {userData &&
              userData.users &&
              userData.users.map(userd => <p>{userd.name}</p>)}
          </div>  */}
        </div>
      )
    }

export default UserList
