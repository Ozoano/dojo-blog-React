import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom";


const BlogDetails = () => {

const {id} = useParams();
const {data:blog, error, isLoading} = useFetch("http://localhost:8000/blogs/" + id)
const history = useHistory();


const handleDelete = () =>{
  fetch("http://localhost:8000/blogs" + blog.id, {
    method:'DELETE'
  }).then(() =>{
    history.pushState('/');
  })
}
return ( 
        <div className="blog-details">
        { isLoading && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { blog && (
          <article>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <div>{ blog.body }</div>
          </article>
        )}

        <button onClick={handleDelete}>Delete Blog</button>
      </div>
     );
}
 
export default BlogDetails;