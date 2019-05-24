import axios from 'axios';

export const updatePost = (thisApuntador, post) => {
    
    console.log(post)
     const {id} = post;
    
     axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {post})
        .then(res => {
            if(res.status === 200) {

                let postId = res.data.id;

                const posts = [...thisApuntador.state.posts];

                const postEditar = posts.findIndex(post => postId === post.id );

                posts[postEditar] = post;

                thisApuntador.setState({
                    posts
                })
            }
        })
}