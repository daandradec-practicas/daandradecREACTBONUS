class BackEndpoints {
    static POSTS = {
        index : 'https://jsonplaceholder.typicode.com/posts', 
        create : 'https://jsonplaceholder.typicode.com/posts', 
        update_put : 'https://jsonplaceholder.typicode.com/posts/:id',
        update_patch : 'https://jsonplaceholder.typicode.com/posts/:id',
        show : 'https://jsonplaceholder.typicode.com/posts/:id'
    }
}

export default BackEndpoints;