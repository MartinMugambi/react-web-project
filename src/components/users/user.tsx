import  './user.css';
import {PencilAltIcon} from '@heroicons/react/solid'
import {useDispatch} from "react-redux"
import { postId, username } from '../../redux';
 import {useNavigate} from "react-router-dom"
import React, { ChangeEvent, useState} from 'react';


interface  Props{
    name: string
    username: string
    id: number
    postId: number
    setId: (id: number) => void
    setName: (name: string) => void
}

export const User = (props: Props) =>{
  
 const[edit, setEdit] = useState<boolean>(true)
 
 const[name, setName] = useState<string>(props.name);



const dispatch = useDispatch();
const navigate = useNavigate()

  const handleClick =() =>{
      props.setId(props.id);
      dispatch(postId(props.id));
      dispatch(username(name))
      navigate('post')
  }

  
  //toggleEditButton

  const makeEditable=() =>{
    setEdit(prev => !prev)
  }
  
  //change name inputfield

   const changeNameInput =(event: ChangeEvent<HTMLInputElement>) =>{
     setName(event.target.value);
    
   }

   //submitInput field to redux store

   const submitInputField = (event: React.KeyboardEvent) =>{
       if(event.key === "Enter"){
        dispatch(username(name));
        setEdit(true)
       }
   
   }

    return (
         <section className='card'>
           <article className='card__details'>
              <input type="text" value={name} disabled={edit} className ={ edit ? "card__input--false": "card__input"} onChange ={changeNameInput}  onKeyDown ={submitInputField} />
               <PencilAltIcon  className='card__icon' data-testid="icon"  onClick={makeEditable}  />
           </article>
            <p className='card__title' data-testid ="username">@{props.username}</p>
           <article className='card__button' >
           <button className='card__btn' onClick={handleClick}>Show Post</button>
           </article>
         </section>
    );
}