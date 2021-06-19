import Post from './Post'
import { useApiContext } from '../context/ApiContext'

function Posts() {
  const { posts } = useApiContext()
  console.log(posts)

  return (
    <div>
      <h1>POSTS </h1>
      <Post />
      <Post />
    </div>
  )
}

export default Posts
