import { FaBookmark} from 'react-icons/fa';
import PropTypes from 'prop-types';


const Blog = ({blog,handleClick}) => {
    const {hashtags,reading_time,posted_date,author,author_img,title,cover}=blog
    return (
        <div className="mb-11">
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between items-center mt-6 mb-4">
                <div className="flex gap-5">
                    <img className="w-12" src={author_img} alt="" />
                    <div>
                        <h1>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} per min</span>
                    <button onClick={()=>handleClick(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>
                {hashtags.map((has, idx)=><span key={idx}><a href="">#{has}</a></span>)}
            </p>
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleClick:PropTypes.func
}

export default Blog;