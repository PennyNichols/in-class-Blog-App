import React, { useContext, useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Input,
} from 'reactstrap';
import { Layout } from '../components/';
import { AiOutlineSend } from 'react-icons/ai';
import { BiLike, BiCommentDots, BiBullseye } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const BlogCardDetails = () => {
  const {id} = useParams();

  const {getSingleBlog, currentBlog} = useContext(BlogContext)

  useEffect(() =>{
    if (id) getSingleBlog(id);
  }, [id])




  return (
    <Layout>
      <Card
        className="container d-flex flex-column justify-content-center align-items-center mt-3"
        style={{
          padding: '0',
        }}
      >
        <CardImg
          src={currentBlog?.image}
          alt="post_image"
          style={{
            height: '20rem',
            objectFit: 'cover',
          }}
          width="100%"
        />
        <div
          style={{
            width: '100%',
          }}
        >
          <CardBody
            style={{
              width: '100%',
            }}
          >
            <CardTitle tag="h3" className="text-center">
              {currentBlog?.title}
            </CardTitle>
            <div className="d-flex justify-content-between">
              <CardSubtitle className="text-muted">Author: {currentBlog?.author}</CardSubtitle>
              <CardSubtitle className="text-muted">{new Date(currentBlog?.published_date).toLocaleString()}</CardSubtitle>
            </div>
            <CardText className="mt-4">{currentBlog?.content}</CardText>
          </CardBody>
        </div>
        <div className="d-flex gap-2">
          <span className="d-flex align-items-center justify-content-center">
          {currentBlog?.like_count}
            <BiLike className="fs-4" />
          </span>
          <span>
          {currentBlog?.comment_count}
            <BiCommentDots className="fs-4" />
          </span>
          <span>
          {currentBlog?.view_count}
            <BiBullseye className="fs-4" />
          </span>
        </div>
      </Card>

      {/* Comment Section */}

      <div className="container mt-3">
        <p className="fs-4 text-center">Comments</p>
        <div className="m-2">
          <p className="fw-normal">comment</p>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">user</span>
            <span className="fw-normal">date time</span>
          </div>
          <hr />
        </div>

        <form>
          <div className="d-flex align-items-center gap-2">
            <Input placeholder="Add a comment" />
            <AiOutlineSend className="fs-2" />
          </div>
        </form>
      </div>

      <div className="d-flex justify-content-center m-2">
        <Button className="m-1" color="primary">
          Edit
        </Button>
        <Button className="m-1" color="danger">
          Delete
        </Button>
      </div>
    </Layout>
  );
};

export default BlogCardDetails;
