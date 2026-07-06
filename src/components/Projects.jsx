import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ai_mock_interview from '../assets/ai_mock_interview.png';
import quick_chat from '../assets/quick_chat.png';
import Recipe_Finder from '../assets/Recipe_Finder.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
const projects = [
  {
    title: 'AI Mock Interview Platform',
    description: 'An AI-powered mock interview platform generating personalized questions based on resumes and job descriptions using Groq Llama 3.3. Features Whisper Speech-to-Text for real-time voice interviews and an LLM-powered evaluation engine for scoring and feedback.',
    image: ai_mock_interview,
    link: 'https://github.com/harshavardhan314',
    Live:'https://ai-mock-interview-qnph.onrender.com'
  },
  {
    title: 'Tomato – Food Delivery Platform',
    description: 'A full-stack MERN food delivery platform with customer and admin dashboards. Implemented secure REST APIs, JWT Authentication, and RBAC. Integrated Stripe Payment Gateway and optimized MongoDB queries using indexing to improve API response time.',
    image: '/Food.png',
    link: 'https://github.com/harshavardhan314',
    Live:'https://tomato-frontend-new.onrender.com'
  },
  {
    title: 'Quick Chat – Real-Time Messaging',
    description: 'A real-time messaging platform using Socket.IO with low-latency bidirectional communication. Designed an event-driven backend for chat rooms, online presence, and read receipts, optimizing WebSocket event handling for 50+ concurrent users.',
    image: quick_chat,
    link: 'https://github.com/harshavardhan314',
    Live:'https://chat-app-frontend-pwh5.onrender.com'
  },
  {
    title: 'Recipe Finder',
    description: 'A responsive recipe search application integrating third-party REST APIs with dynamic search and filtering. Reduced redundant API requests by 40% using debouncing, significantly improving performance and user experience.',
    image: Recipe_Finder,
    link: 'https://github.com/harshavardhan314',
    Live:'https://recipefinder88.netlify.app'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="position-relative">
      <Container>
        <div className="text-center mb-5">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My <span className="text-accent">Projects</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            style={{ height: '4px', background: 'var(--accent-color)', margin: '10px auto', borderRadius: '2px' }}
          />
        </div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={6} key={index}>
              <motion.div 
                className="project-card d-flex flex-column"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <img src={project.image} alt={project.title} className="project-img" style={{ height: '250px' }} />
                <div className="p-4 flex-grow-1 d-flex flex-column">
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>{project.title}</h4>
                  <p style={{ color: '#a0a0a0', fontSize: '0.95rem', flexGrow: 1 }}>
                    {project.description}
                  </p>
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn-outline-custom text-center mt-3" style={{ alignSelf: 'flex-start' }}>
                    View on GitHub
                  </a>
                  {project.Live && (
                    <a href={project.Live} target="_blank" rel="noreferrer" className="btn-outline-custom text-center mt-2" style={{ alignSelf: 'flex-start' }}>
                      View Live
                    </a>
                  )}  
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
