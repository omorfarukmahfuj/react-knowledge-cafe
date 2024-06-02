import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className='md:w-1/3  ml-5'>

      <div className='bg-[#6047EC1A] border border-[#6047EC] rounded-md px-9 py-4 mb-5'>
        <h2 className='font-bold text-lg text-[#6047EC]'>Spent time on read: {readingTime} min</h2>
      </div>

      <div className="h-fit bg-[#1111110D] rounded-md p-5">
        <h2 className='font-bold text-lg text-[#111111] mb-3'>Bookmarked Blogs : {bookmarks.length}</h2>
        {
          bookmarks.map((bookmark, idx) =>
            <Bookmark
              key={idx}
              bookmark={bookmark}>
            </Bookmark>)
        }
      </div>

    </div>

  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
};

export default Bookmarks;