
// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Bloges = ({handleClick}) => {
    const [bloges,setBloges]= useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data =>setBloges(data))
    },[])
    return (
        <div className="w-2/3">
            <h1>Blog {bloges.length}</h1>
            {bloges.map(blog=><Blog handleClick={handleClick} key={blog.id} blog={blog}></Blog>)}
        </div>
    );
};

// Bloges.propTypes = {
    
// };

export default Bloges;