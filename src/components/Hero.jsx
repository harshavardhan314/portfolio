import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ fontSize: '3.5rem', fontWeight: 700 }}>
                Hii , It's <span className="text-accent">Harsha</span>
              </h1>
              
              <h3 style={{ fontSize: '2rem', margin: '20px 0' }}>
                I'm a{' '}
                <span className="text-accent">
                  <Typewriter
                    words={['Web Developer', 'Competitive Programmer', 'MERN Stack Developer']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h3>
              
              <p style={{ fontSize: '1.1rem', color: '#a0a0a0', marginBottom: '30px' }}>
                I'm Harsha Vardhan, a passionate developer building clean & responsive websites.
              </p>

              <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-4">
                <motion.a 
                  href="https://github.com/harshavardhan314" 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ y: -5, color: 'var(--accent-color)' }}
                  style={{ color: '#fff', fontSize: '1.8rem', transition: 'color 0.3s' }}
                >
                  <FaGithub />
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/harsha-vardhan-71aa622b6/" 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ y: -5, color: 'var(--accent-color)' }}
                  style={{ color: '#fff', fontSize: '1.8rem', transition: 'color 0.3s' }}
                >
                  <FaLinkedin />
                </motion.a>
              </div>

              <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                <a 
                  href="mailto:hharshavardhan974@gmail.com?subject=Hire%20Request" 
                  className="btn-primary-custom"
                >
                  Hire Me
                </a>
                <a href="#contact" className="btn-outline-custom">
                  Contact
                </a>
              </div>
            </motion.div>
          </Col>
          <Col lg={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/img2.png" alt="Harsha Vardhan" className="hero-img img-fluid" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
