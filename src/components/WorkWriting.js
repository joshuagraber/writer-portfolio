import React from 'react';
import { TransitionGroup } from 'react-transition-group';

const WorkWriting = () => {
  return (
    <TransitionGroup
    className='workInner'
    type='div'
    in='true'
    >
      <h3>Hello WRITING DIV</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit amet consectetur. Consequat id porta nibh venenatis cras sed felis. Donec ac odio tempor orci dapibus ultrices in. Lorem sed risus ultricies tristique nulla aliquet enim. </p>
      <p>Integer quis auctor elit sed vulputate. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Sed elementum tempus egestas sed. Amet porttitor eget dolor morbi non arcu. Nunc id cursus metus aliquam eleifend. Hendrerit dolor magna eget est lorem ipsum. Ullamcorper a lacus vestibulum sed arcu non. Massa vitae tortor condimentum lacinia quis vel. </p>
    </TransitionGroup>
  )
}

export default WorkWriting