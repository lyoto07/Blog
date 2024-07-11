import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "Componentes/Postmodelo";
import ReactMarkdown from "react-markdown";
import "./Post.css"
import Styles from "./Post.module.css"
import NaoEncontrada from "Paginas/NaoEncontrada";
import PaginaPadrao from "Componentes/PaginaPadrao";
import PostCard from "Componentes/PostCard";

export default function Post (){

    const parametros = useParams();
    const post = posts.find((post)=> {
        return post.id === Number(parametros.id);
    })

    if(!post){
        return <NaoEncontrada/>
    }

    const postRecomendado = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a,b) => b.id - a.id )
        .slice(0,4);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao/>}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown> 
                        </div>

                        <h2 className={Styles.tituloOutrosPosts}>
                            Outros Posts que você pode gostar:
                        </h2>

                        <ul className={Styles.postsRecomendados}>
                            {postRecomendado.map((post)=>(
                                <li key={post.id}>
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>

                    </PostModelo>
                }/>
            </Route>
        </Routes>
        
    )
}