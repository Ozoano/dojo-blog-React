
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = ( ) => {
const {data: blogs, error, isLoading} = useFetch("http://localhost:8000/blogs")
 
    return ( 
        <div className="home">
        
        {/* Only when isLoading  is True, I want you to show a loading msg */}
        {isLoading && <div> Loading... </div>}
        {/* display the err.message to the DOM */}
        {error && <div> {error} </div>}
        {blogs && <BlogList Blogs = {blogs} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;