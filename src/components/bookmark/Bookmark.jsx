import PropTypes from 'prop-types';


const Bookmark = ({ bookmarks }) => {
  
  console.log(bookmarks);

  return (
      <>
      
      <div className=" text-start bg-slate-300 rounded-md p-[30px] " >
        
        <p className='text-2xl font-bold mb-3'>Bookmarked Blog:{bookmarks.length}</p>

        {bookmarks.map(blog => <div className='bg-slate-100 p-[20px] text-xl mb-2 rounded-md' key={blog.id} > {blog.title} </div>)}
      
      
      </div>
      

      </>
  )
}

Bookmark.propTypes = {
  bookmarks: PropTypes.array.isRequired,
}

export default Bookmark