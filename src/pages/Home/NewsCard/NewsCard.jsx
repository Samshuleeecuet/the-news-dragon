import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark,FaShareAlt,FaEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    const {_id,title,details,image_url,author,total_view,rating}= news;
    return (
        <>
            <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{height:'40px'}} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <h6>{author?.name}</h6>
                    <p><small>{moment(author.published_date).format('yyyy-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark/>
                    <FaShareAlt/>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                    details.length<250 ? <>{details}</>: <>{details.slice(0,250)}... <Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating placeholderRating={rating.number}
                    readonly
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar className='text-warning'/>}
  fullSymbol={<FaStar></FaStar>}>
                        
                    </Rating>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye/> {total_view}
                </div>
                
            </Card.Footer>
            </Card>
        </>
    );
};

export default NewsCard;