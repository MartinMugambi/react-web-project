import  './user.css';
import {PencilAltIcon} from '@heroicons/react/solid'
import {useDispatch} from "react-redux"
import { postId, username } from '../../redux';
 import {useNavigate} from "react-router-dom"

interface  Props{
    name: string
    username: string
    id: number
    postId: number
    setId: (id: number) => void
    setName: (name: string) => void
}

export const User = (props: Props) =>{
  
const dispatch = useDispatch();
const navigate = useNavigate()

  const handleClick =() =>{
      props.setId(props.id);
      dispatch(postId(props.id));
      dispatch(username(props.name))
      navigate('post')
  }

  console.log(props.postId);
  
    return (
         <section className='card'>
           <article className='card__details'>
               <h1>{props.name}</h1>
               <PencilAltIcon  className='card__icon' data-testid="icon"/>
           </article>
            <p className='card__title' data-testid ="username">@{props.username}</p>
           <article className='card__button' >
           <button className='card__btn' onClick={handleClick}>Show Post</button>
           </article>
         </section>
    );
}