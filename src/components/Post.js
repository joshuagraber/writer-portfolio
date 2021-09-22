import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';

// External Libraries
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';

// Context
import { usePortfolioContext } from './Context';

// Styled Component
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
    const coms = comments.map(com => {

      // Normalize  date for user timezone
      let date = new Date(com.date);
      let timezoneOffset = new Date(com.date).getTimezoneOffset();
      date.setMinutes(date.getMinutes() - timezoneOffset);

      return (
        <div className="commentWrap" key={com.id}>
          <div className="info">
            <div className="name">
              {com.author_name}
            </div>
            <div className="date"> 
              {<Moment // Uses Moment to easily format the date
                local={true} 
                format='MMMM Do, YYYY, h:mm A'>
              {date}
              </Moment>}
            </div>
          </div>
          {/* The comment itself */}
          <div className="comment" dangerouslySetInnerHTML={{__html: com.content.rendered}} />
        </div>
        )}
      )
    const sortedComs = coms.sort((a,b) => a.id < b.id ? 1 : -1); // Re-sorts comments oldest first
    setCommentsToRender(sortedComs); // updates state
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

    {/* Display the post */}
      { postToDisplay ? 
        (
          <div className="blogPostWrap">
            <h2>{postToDisplay.title.rendered}</h2>
            <div className="blogPost" dangerouslySetInnerHTML={{__html: `${postToDisplay.content.rendered}`}} />
      
      {/* Now the comment section */}
            <div className="comments">
              <h3>Comments</h3>
              <div className="commentsContainer">
                {commentsToRender}
              </div>
            </div>
            <div>

      {/* Now the comment form using Formik */}
              <div className="formDiv">
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
                      const formData = { // Gets data from the form
                        post: postToDisplay.id,
                        author_name: values.name,
                        author_email: values.email,
                        content: values.comment,
                      };
                      postComment(formData); // sends data to the postComment func
                      setSubmitting(false);
                      resetForm();
                    }, 400);
                    setTimeout(() => {
                      getCommentData(); // Gets new comment and displays in div
                    }, 2000)
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="commentForm">
                      <div className="nameDiv">
                        <label htmlFor="name">Name</label>
                      <Field type="text" name="name"/>
                      <ErrorMessage name="name" component="div" />
                      </div>
                      <div className="emailDiv">
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="div" />
                      </div>
                      <div className="commentDiv">
                        <label htmlFor="comment">Your Comment</label>
                        <Field as="textarea" name="comment" />
                        <ErrorMessage name="comment" component="div" />
                      </div>
                      <button type="submit" disabled={isSubmitting}>
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        ) 
        : ('')
      }
    </StyledPost>
  )
}


export default Post