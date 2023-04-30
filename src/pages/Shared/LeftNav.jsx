import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(response => response.json())
        .then(data=> setCategories(data))
        .catch(err=> console.log(err))
    },[])
    console.log(categories);
    return (
        <div>
            <h4>All Catagories</h4>
            <div className='ps-4'>
            {
                categories.map(catagory=> 
                    <p key={catagory.id}><Link to={`/catagory/${catagory.id}`} className='text-decoration-none text-black'>{catagory.name}</Link></p>
                    )
            }
            </div>
        </div>
    );
};

export default LeftNav;