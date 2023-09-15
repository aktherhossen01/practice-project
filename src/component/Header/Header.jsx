import profile from '../../assets/images/profile.png'


const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 max-w-5xl mx-auto'>
            <h1 className="text-3xl font-bold">Love plus Love</h1>
            <img className='' src={profile}  />
        </div>
    );
};



export default Header;