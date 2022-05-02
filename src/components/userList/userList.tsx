import {useSelector} from "react-redux"
import { RootState } from "../../redux/store";
import { User } from "../users/user";
import { useEffect, useState } from 'react';
import  {useDispatch} from 'react-redux'
import { fetchUserData } from '../../redux';
import {TailSpin} from "react-loader-spinner"
import {User as Users} from '../../types/types' 
import './userList.css'

 
 const UserList = () =>{

const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(fetchUserData())
  },[dispatch])


  const[id, setId]=useState<number>(0)

  const[, setName] = useState<string>("")
  
      //selecting post data from redux store
    const userData:Users[]  = useSelector((state:RootState) => state.user.data)
      //selecting loading status from redux store
    const loading = useSelector((state:RootState) => state.user.loading);
 
 
   //filtering data to check if it includes Apt   
   const apartment = userData.filter(user => user.address.suite.includes("Apt")).length;
   //filtering data to check if it includes Apt  
   const suite = userData.filter(user => user.address.suite.includes("Suite")).length;

    return (
         <section>
               <h1>Users</h1>
             <article className="user__info">
                 <p>Number of users living in a Apartment: <span data-testid="apartment">{apartment}</span> </p> 
                 <p>Number of users living in a suite: <span data-testid="suite">{suite}</span></p>
             </article>
        <article className="details">
         {loading && <TailSpin height={100} width = {100} color ="purple" ariaLabel="loading" />}
         {userData.map(users => <User key={users.id} name ={users.name} username ={users.username} id= {users.id} setId = {setId} postId = {id} setName ={setName} />)}
        </article>
        </section>
    );
}

export default UserList