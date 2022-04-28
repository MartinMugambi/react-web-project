import  './user.css';
import {PencilAltIcon} from '@heroicons/react/solid'
export const User = () =>{
    return (
         <section className='card'>
           <article className='card__details'>
               <h1>Martin Mwenda</h1>
               <PencilAltIcon  className='card__icon'/>
           </article>
            <p className='card__title'>@Martin</p>
           <article className='card__button' >
           <button className='card__btn'>Get Post</button>
           </article>
         </section>
    );
}