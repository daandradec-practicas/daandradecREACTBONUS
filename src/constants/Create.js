import axios from 'axios';

export const createPost = (thisApuntador, post) => {
         axios.post(`https://jsonplaceholder.typicode.com/posts`, {post})
            .then(res => {
                if(res.status === 201) {

                    let postId = {id: res.data.id};
                    const nuevoPost = Object.assign({}, res.data.post, postId);
                    
                    
                   thisApuntador.setState(prevState => ({
                       posts: [...prevState.posts, nuevoPost]
                   }))
                }
            })
}