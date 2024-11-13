import { useEffect } from "react";
import { useState } from "react"
import Blog from "../blog/Blog";

import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmark,handleReadTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('../../../public/blogsData.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    },[])





  return (
      <>
          <div className="md:w-2/3" >{
              blogs.map(blog => <Blog handleReadTime={handleReadTime} handleAddToBookmark={handleAddToBookmark} key={blog.id} blog={blog} />)

      }</div>
      </>
  )
}

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadTime: PropTypes.func.isRequired,

}


export default Blogs