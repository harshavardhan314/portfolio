import { Container } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '40px 0', marginTop: '50px', background: 'rgba(11, 15, 25, 0.8)' }} className="position-relative z-10">
      <Container className="text-center">
        <div className="d-flex justify-content-center gap-4 mb-4">
          <a href="https://github.com/harshavardhan314" target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/harsha_vardhan_112" target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/harsha-vardhan-71aa622b6/" target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon">
            <FaLinkedin />
          </a>
        </div>
        
        <div className="d-flex justify-content-center gap-4 mb-4" style={{ flexWrap: 'wrap' }}>
          <a href="#experience" style={{ color: '#ccc', textDecoration: 'none' }}>Experience</a>
          <a href="#projects" style={{ color: '#ccc', textDecoration: 'none' }}>Projects</a>
          <a href="#skills" style={{ color: '#ccc', textDecoration: 'none' }}>Skills</a>
          <a href="#contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</a>
          <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>FAQ</a>
        </div>

        <p style={{ color: '#777', margin: 0 }}>
          © {new Date().getFullYear()} Harsha Vardhan | All rights reserved
        </p>
      </Container>
      <style>{`
        .social-icon:hover {
          color: var(--accent-color) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
