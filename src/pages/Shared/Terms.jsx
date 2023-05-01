import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio aliquid odit, dicta minima maxime temporibus beatae officiis enim tempora? Ab aperiam labore in ad id distinctio quaerat veritatis aliquid blanditiis.</p> 
           <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;