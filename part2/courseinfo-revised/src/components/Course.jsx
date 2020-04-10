import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => {
  const { parts } = course;

  const gettotalExercises = (parts) => {
    const sum = parts.reduce((prev, curr) => {
      return prev + curr.exercises;
    }, 0);

    return sum;
  };

  return (
    <>
      <Header courseName={course.name} />
      <Content parts={parts} />
      <Total totalExercises = {gettotalExercises(parts)}/>
    </>
  );
};

export default Course;
