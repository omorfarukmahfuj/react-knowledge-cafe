import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  
  return (
    <div className=' mb-4 p-4 bg-white rounded-md'>
      <h3 className='font-semibold text-sm text-[#111111]'>{title}</h3>
    </div>

  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object
};

export default Bookmark;