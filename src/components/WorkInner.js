import React from 'react';
import { TransitionGroup } from 'react-transition-group';

const WorkInner = ({ data, displayed }) => {
  const text = data[displayed];
  const body = Array.from(text.body);
  console.log(text.body);

  return (
    <TransitionGroup className="workInner" type="div" in="true">
      <h3>{text.headline}</h3>
      {body.map((p) => (
        <p>{p}</p>
      ))}
      ;
    </TransitionGroup>
  );
};

export default WorkInner;
