export const baseURL = 'https://jsonplaceholder.typicode.com'

export const urls = {
    users: '/users',
    comments: 'post/1/comments',
    posts:'/posts/ID',
    todos:'/todos',
    albums:'/albums',
    postId: ':postId',
    postById: (id) => `/posts/${id}`,
}