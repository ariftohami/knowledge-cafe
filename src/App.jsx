
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'

function App() {
  

  return (
    <>
      
      <Header />
      <div className='md:flex' >
        <Blogs />
        <Bookmark/>
      </div>
    </>
  )
}

export default App
