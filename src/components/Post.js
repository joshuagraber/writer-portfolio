import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

import { usePortfolioContext } from './Context';

import { StyledPost } from './Styled/StyledBlog';


const Post = () => {
  const  { slug }  = useParams();
  const [ postToDisplay, setPostToDisplay ] = useState(null);
  const [ comments, setComments ] = useState(null);
  const [ commentsToRender, setCommentsToRender ] = useState(null);

  const { postData } = usePortfolioContext().data;
  const { currentColors } = usePortfolioContext().darkMode;

  // Gets comment data
  const getCommentData = useCallback(() => {
    if (!postToDisplay) return;
    axios.get(`http://localhost:8888/wp-json/wp/v2/comments?post=${postToDisplay.id}`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, [postToDisplay] )

  // Renders comment data to div
  const renderComments = useCallback(() => {
    if (!comments) return;
    const coms = comments.map(com => 
        <div className="commentWrap" key={com.id}>
          <div className="name">{com.author_name} at <span>{com.date}</span></div>
          <div className="comment" dangerouslySetInnerHTML={{__html: com.content.rendered}}></div>
        </div>
      )
    const sortedComs = coms.sort((a,b) => a.id < b.id ? 1 : -1);
    setCommentsToRender(sortedComs);
  }, [comments])

  // Posts new comment from form
  const postComment = ( formData ) => {
    axios.post( `http://localhost:8888/wp-json/wp/v2/comments?post=${postToDisplay.id}`, formData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  // Sets post to display
  useEffect(() => {
    setPostToDisplay(postData.find(r => r.slug === slug));
    getCommentData();
  }, [postToDisplay, setPostToDisplay, slug, postData, getCommentData])

  // Sets comments to display
  useEffect(() => {
    renderComments();
  }, [comments, renderComments])


  return (
    <StyledPost currentColors={currentColors}>
      { postToDisplay ? 
        (
          <div className="blogPostWrap">
            <h2>{postToDisplay.title.rendered}</h2>
            <div className="blogPost" dangerouslySetInnerHTML={{__html: `${postToDisplay.content.rendered}`}} />
          
            <div className="comments">
              <div>
                {commentsToRender}
              </div>
            </div>
            <div>
              <h3>Join the Discussion!</h3>
              <Formik
                initialValues={{ email: '', name: '', comment: '' }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    const formData = {
                      post: postToDisplay.id,
                      author_name: values.name,
                      author_email: values.email,
                      content: values.comment,
                    };
                    postComment(formData);
                    setSubmitting(false);
                    resetForm();
                  }, 400);
                  setTimeout(() => {
                    getCommentData();
                  }, 2000)
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="commentForm">
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field as="textarea" name="comment" />
                    <ErrorMessage name="comment" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        ) 
        : ('')
      }
    </StyledPost>
  )
}


export default Post