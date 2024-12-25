import posts from '../data/posts.json'

const PostList = () => {
    return (
        <>
        <h1>Hi this is a Title !</h1>
        {posts.map(item => {
            return(
                <div key = {item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.content} </p>
                </div>
            )
        })}

        </>
    )
}

export default PostList