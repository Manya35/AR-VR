import React, { useState } from 'react';
import './App.css';
import LoadingPage from './LoadingPage';
import CourseRecommendations from './CourseRecommendations';

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};

const Input = ({ type, placeholder, ...props }) => {
  return (
    <input type={type} placeholder={placeholder} className="input-field" {...props} />
  );
};

const Textarea = ({ placeholder, ...props }) => {
  return (
    <textarea placeholder={placeholder} className="textarea-field" {...props} />
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [courses, setCourses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate backend call
    setTimeout(() => {
      const mockCourses = [
        {
          title: 'Advanced React',
          description: 'Master React with advanced concepts and best practices.',
          image: 'https://via.placeholder.com/300',
          link: '#'
        },
        {
          title: 'Node.js Fundamentals',
          description: 'Learn the basics of Node.js and build scalable applications.',
          image: 'https://via.placeholder.com/300',
          link: '#'
        },
        {
          title: 'Data Science with Python',
          description: 'Explore data science techniques using Python.',
          image: 'https://via.placeholder.com/300',
          link: '#'
        }
      ];
      setCourses(mockCourses);
      setIsLoading(false);
      setShowRecommendations(true);
    }, 3000);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">SkillAscend</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact" className="get-started">Get Started</a>
        </div>
      </nav>

      {isLoading ? (
        <LoadingPage />
      ) : showRecommendations ? (
        <CourseRecommendations courses={courses} />
      ) : (
        <>
          <div id="home" className="home-section">
            <div className="text-content">
              <h1>UNLOCK YOUR POTENTIAL WITH</h1>
              <p>SkillAscend is a smart course recommendation system designed to help you find the best courses tailored to your interests and career goals.</p>
              <a href="#contact" className="get-started">Get Started</a>
            </div>
            <div className="image-content">
              <img src="https://res.cloudinary.com/duptmanu9/image/upload/c_crop,ar_1:1/v1739737039/Untitled_design_h8tsgx.jpg" alt="SkillAscend" />
            </div>
          </div>

          <div id="about" className="about-section">
            <h2>About Us</h2>
            <div className="about-content">
              <p>SkillAscend is built using state-of-the-art AI algorithms to match learners with the best courses available online. Our mission is to help individuals grow and advance their skills with ease.</p>
            </div>
            <h3>Meet The Team</h3>
            <div className="team-container">
              <div className="team-member">
                <img src="/team1.jpg" alt="Team Member" />
                <p>John Doe</p>
              </div>
              <div className="team-member">
                <img src="/team2.jpg" alt="Team Member" />
                <p>Jane Smith</p>
              </div>
              <div className="team-member">
                <img src="/team3.jpg" alt="Team Member" />
                <p>Alice Brown</p>
              </div>
            </div>
          </div>

          <div id="contact" className="contact-section">
            <h2>Get Your Course Recommendations</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <Input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <Input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <Textarea placeholder="Your Interests" />
              </div>
              <Button type="submit" className="submit-button">Submit</Button>
            </form>
          </div>
        </>
      )}

      <footer className="footer">
        &copy; 2025 SkillAscend. All rights reserved.
      </footer>
    </div>
  );
};

export default App;