import {useSelector} from "react-redux"
import { RootState } from "../../redux/store";
import { User } from "../users/user";
import { useEffect } from 'react';
import  {useDispatch} from 'react-redux'
import { fetchUserData } from '../../redux';
import './userList.css'

interface Users{
  id: number
  name: string
  email: string
  username: string
  address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
          lat: string
          lng: string
      }
  }

}

export const UserList = () =>{

const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(fetchUserData())
  },[])

    const userData:Users[]  = useSelector((state:RootState) => state.user.data)
    const loading = useSelector((state:RootState) => state.user.loading);
 
    const user = userData.slice(0, 5)
    
    console.log(user);
    

    return (
         <section>
             <h1>Users</h1>
        <article className="details">
         {loading && <h1>Loading....</h1>}
         {userData.map(users => <User key={users.id} name ={users.name} username ={users.username} />)}
        </article>
        </section>
    );
}