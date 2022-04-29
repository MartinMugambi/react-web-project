import  './user.css';
import {PencilAltIcon} from '@heroicons/react/solid'

interface  Props{
    name: string
    username: string
}

export const User = (props: Props) =>{
  
    return (
         <section className='card'>
           <article className='card__details'>
               <h1>{props.name}</h1>
               <PencilAltIcon  className='card__icon'/>
           </article>
            <p className='card__title'>@{props.username}</p>
           <article className='card__button' >
           <button className='card__btn'>Show Post</button>
           </article>
         </section>
    );
}