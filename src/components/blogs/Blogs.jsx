import { useEffect } from "react";
import { useState } from "react"


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('../../../public/blogsData.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    },[])





  return (
    <div>{blogs.length}hi</div>
  )
}

export default Blogs