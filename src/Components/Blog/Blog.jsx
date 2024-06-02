import PropTypes from 'prop-types';
import bookmark from "../../assets/icons/bookmark.svg"
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const { id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
  return (
    <div className='mb-7 border-b'>
      <img className='w-full mb-6 rounded-md' src={cover} alt={`Cover picture of the tite ${title}`} />

      <div className='flex justify-between items-center mb-4'>
        <div className='flex gap-4'>
          <img className='w-11' src={author_img} alt="Author image" />
          <div>
            <p className='font-bold text-lg text-[#111111]'>{author}</p>
            <p className='font-semibold text-xs text-[#11111199]'>{posted_date}</p>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='font-medium text-base text-[#11111199]'>{reading_time} min read</p>
          <img onClick={() => handleAddToBookmark(blog)} src={bookmark} alt="Bookmark icon" />
        </div>
      </div>

      <h2 className='font-bold text-3xl text-[#111111] mb-3 leading-relaxed'>{title}</h2>
      <p className='mb-5 font-medium text-base text-[#11111199]' >
        {
          hashtags.map((hash, idx) => <span className='mr-3' key={idx}><a href="">#{hash}</a></span>)
        }
      </p>
      <button onClick={() => handleMarkAsRead(id, reading_time)} className='mb-6 font-semibold text-base text-[#6047EC] underline' >Mark as read</button>

    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;