import React from 'react';
import './CourseRecommendations.css';

const CourseRecommendations = ({ courses }) => {
  return (
    <div className="recommendations-container">
      <h2>Recommended Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <a href={course.link} className="course-link">Enroll Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseRecommendations;