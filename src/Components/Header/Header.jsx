import profile from '../../assets/images/profile.png';
const Header = () => {
  return (
    <header className='flex justify-between items-center mt-9 mb-6 border-b pb-6'>
      <h1 className='font-bold text-3xl text-[#111111]'>React Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;