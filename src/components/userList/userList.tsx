import {useSelector} from "react-redux"
import { RootState } from "../../redux/store";
import { User } from "../users/user";
import { useEffect, useState } from 'react';
import  {useDispatch} from 'react-redux'
import { fetchUserData } from '../../redux';
import {TailSpin} from "react-loader-spinner"
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
 const UserList = () =>{

const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(fetchUserData())
  },[dispatch])


  const[id, setId]=useState<number>(0)

  const[name, setName] = useState<string>("")
  

    const userData:Users[]  = useSelector((state:RootState) => state.user.data)
    const loading = useSelector((state:RootState) => state.user.loading);
 
    const postData = useSelector((state:RootState) => state.post.data);
    
   const apartment = userData.filter(user => user.address.suite.includes("Apt")).length;
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