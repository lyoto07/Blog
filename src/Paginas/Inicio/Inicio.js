import Styles from "./inicio.module.css";
import Post from "Componentes/PostCard";
import posts from "json/posts.json"

function inicio(){
    return(
        <ul className={Styles.posts}>
            {
                posts.map((post)=> (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))
            }
        </ul>
        
    )
}

export default inicio;