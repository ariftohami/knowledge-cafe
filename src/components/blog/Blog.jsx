import PropTypes from 'prop-types';
import thumb from '../../assets/image/authorthumbnail.png'
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ({ blog,handleAddToBookmark,handleReadTime }) => {

    const {id,cover,title,author,posted_date,reading_time,hashtag}=blog
    
    return (
      

      <div >
          <img className='mb-5 w-[700px] h-[400px] ' src={cover} alt="" />

          <div className='flex justify-between items-center w-[700px] ' >
              

              <div className='flex  p-[5px] ' >
                  <img className='rounded-full w-[50px] h-[50px]' src={thumb} alt="" />
                  <span className='ml-[20px]' >
                      <p>{ author}</p>
                      <p>{posted_date}</p>
                  </span>
              </div>



              <div>
                  <span>{reading_time} min read</span>
                  <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl' ><MdOutlineBookmarks /></button>
              </div>

              
          </div>



          <h2 className='text-4xl' >{title}</h2>

          <p className='mt-3 mb-5' >
              {hashtag.map((hash,index )=>
                  <span key={index} >
                  <a href="#"> {hash}</a>
              </span>)}
          </p>

          <button className='mx-[10px] text-pink-700 underline font-bold' onClick={()=>handleReadTime(id,reading_time)} >Mark as read</button>

          



    </div>
  )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadTime: PropTypes.func.isRequired,


}

export default Blog