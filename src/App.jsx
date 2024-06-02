import './App.css'
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';

function App() {

  return (
    <body className='w-9/12 mx-auto'>
      <Header></Header>
      <main className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </body>
  )
}

export default App
