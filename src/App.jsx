import './App.css'
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(time + readingTime);

    // Remove Item
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  return (

    <div className='w-11/12 md:w-9/12 mx-auto'>
      <Header></Header>
      <main className='md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

      </main>
    </div>
  )
}

export default App
