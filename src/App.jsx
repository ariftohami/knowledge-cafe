
import { useState } from 'react';
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'

import TimeTable from './components/TimeTable/TimeTable';

function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const[readTime,setReadTime]=useState(0)

  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
    
  }

  const handleReadTime = (id,time) => {
    const newTime = Number(readTime) + Number(time);
    setReadTime(newTime);

    //remove from book mark
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }

  return (
    <>
      
      <Header />
      <div className='md:flex max-w-7xl mx-auto' >
        <Blogs handleReadTime={handleReadTime}  handleAddToBookmark={handleAddToBookmark} />
        
        <div className='md:w-1/3'>
        <TimeTable readTime={readTime} />
        <Bookmark bookmarks={bookmarks} />
        </div>
      </div>
    </>
  )
}

export default App
