import './post.css';

interface Props{
    title: string
    body: string
}

export const Post = (props:Props) =>{
    return (
        <section className='post'>
           <article className='post__info'>
              <h4>{props.title}</h4>
              <p>{props.body}</p>

           </article>
        </section>
    );
}