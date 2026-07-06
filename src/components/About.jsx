import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaCode, FaTrophy, FaServer, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';

const stats = [
  { number: '2000+', label: 'Problems Solved', icon: <FaCode /> },
  { number: 'Top 5%', label: 'LeetCode Knight', icon: <FaTrophy /> },
  { number: '3★', label: 'CodeChef Rating', icon: <SiCodechef /> },
  { number: 'Pupil', label: 'Codeforces Rank', icon: <SiCodeforces /> },
];

const achievements = [
  { title: 'Finalist', event: 'Shaastra Programming Contest 2026 — IIT Madras' },
  { title: 'Top 8', event: 'Sushacks 3.0 Hackathon' },
];

const codingProfiles = [
  { name: 'CodeChef', img: '/codechef.jpg', link: 'https://www.codechef.com/users/harsha_314', badge: '3★ Rated' },
  { name: 'Codeforces', img: '/codeforces.png', link: 'https://codeforces.com/profile/harsha_314', badge: 'Pupil' },
  { name: 'LeetCode', img: '/leetcode.png', link: 'https://leetcode.com/u/harsha_112/', badge: 'Knight' },
];

const About = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section id="about" className="position-relative">
      <Container>
        {/* Section Title */}
        <div className="text-center mb-5">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About <span className="text-accent">Me</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            style={{ height: '4px', background: 'var(--accent-color)', margin: '10px auto', borderRadius: '2px' }}
          />
        </div>

        {/* Top Row: Image + Bio */}
        <Row className="align-items-center mb-5">
          <Col lg={5} className="mb-5 mb-lg-0 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              viewport={{ once: true }}
              className="about-img-wrapper"
            >
              <img
                src="/img2.png"
                alt="Harsha Vardhan"
                className="img-fluid about-hero-img"
              />
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-panel p-4 p-lg-5 about-bio-panel"
            >
              <p style={{ lineHeight: '1.9', color: '#ccc', fontSize: '1.05rem' }}>
                I'm <strong style={{ color: '#fff' }}>Harsha Vardhan</strong>, a{' '}
                <strong className="text-accent">Full-Stack MERN Developer</strong> and{' '}
                <strong className="text-accent">Competitive Programmer</strong> passionate about
                building scalable web applications and solving challenging problems.
              </p>

              <AnimatePresence>
                {readMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ lineHeight: '1.9', color: '#ccc', fontSize: '1.05rem' }}>
                      I enjoy building modern full-stack applications using the{' '}
                      <strong style={{ color: '#fff' }}>MERN Stack</strong>, designing secure backend
                      services, developing REST APIs, and continuously exploring
                      backend engineering, system design, and AI to build impactful software.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setReadMore(!readMore)}
                className="btn-outline-custom mt-2 d-flex align-items-center gap-2"
              >
                {readMore ? 'Read Less' : 'Read More'}
                {readMore ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
              </button>
            </motion.div>
          </Col>
        </Row>

        {/* Stats Counter Row */}
        <Row className="g-4 mb-5">
          {stats.map((stat, index) => (
            <Col xs={6} md={3} key={index}>
              <motion.div
                className="glass-panel p-4 text-center stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-icon mb-3">{stat.icon}</div>
                <h2 className="stat-number">{stat.number}</h2>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Achievements + Coding Profiles */}
        <Row className="g-4">
          {/* Achievements */}
          <Col lg={5}>
            <motion.div
              className="glass-panel p-4 p-lg-5 h-100"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="mb-4">
                🏆 <span className="text-accent">Achievements</span>
              </h4>
              {achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  className="achievement-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                >
                  <div className="achievement-badge">{ach.title}</div>
                  <p className="achievement-event">{ach.event}</p>
                </motion.div>
              ))}
            </motion.div>
          </Col>

          {/* Coding Profiles */}
          <Col lg={7}>
            <motion.div
              className="glass-panel p-4 p-lg-5 h-100"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="mb-4">
                💻 Coding <span className="text-accent">Profiles</span>
              </h4>
              <Row className="g-3">
                {codingProfiles.map((profile, index) => (
                  <Col md={4} key={index}>
                    <motion.a
                      href={profile.link}
                      target="_blank"
                      rel="noreferrer"
                      className="coding-profile-card glass-panel d-flex flex-column align-items-center p-3"
                      whileHover={{ y: -8, borderColor: 'var(--accent-color)' }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15 }}
                      style={{ textDecoration: 'none' }}
                    >
                      <img src={profile.img} alt={profile.name} className="coding-profile-img mb-2" />
                      <h6 style={{ color: '#fff', marginBottom: '4px' }}>{profile.name}</h6>
                      <span className="coding-profile-badge">{profile.badge}</span>
                    </motion.a>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .about-img-wrapper {
          position: relative;
          display: inline-block;
        }

        .about-hero-img {
          border-radius: 20px;
          border: 2px solid var(--accent-color);
          box-shadow: 0 0 40px rgba(139, 92, 246, 0.3);
          animation: float 6s ease-in-out infinite;
          max-width: 350px;
        }

        .about-bio-panel {
          border-left: 4px solid var(--accent-color) !important;
        }

        /* Stats */
        .stat-card {
          cursor: default;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: var(--accent-color);
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.3);
        }

        .stat-icon {
          font-size: 2rem;
          color: var(--accent-light);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 2px;
          background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          color: #999;
          font-size: 0.85rem;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Achievements */
        .achievement-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 16px;
          padding: 12px 16px;
          background: rgba(139, 92, 246, 0.08);
          border-radius: 12px;
          border: 1px solid rgba(139, 92, 246, 0.15);
          transition: all 0.3s ease;
        }

        .achievement-item:hover {
          background: rgba(139, 92, 246, 0.15);
          transform: translateX(5px);
        }

        .achievement-badge {
          background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.85rem;
          white-space: nowrap;
        }

        .achievement-event {
          color: #ccc;
          margin: 0;
          font-size: 0.95rem;
        }

        /* Coding Profiles */
        .coding-profile-card {
          border-radius: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .coding-profile-card:hover {
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.25);
        }

        .coding-profile-img {
          width: 55px;
          height: 55px;
          border-radius: 12px;
          object-fit: contain;
        }

        .coding-profile-badge {
          background: rgba(139, 92, 246, 0.15);
          color: var(--accent-light);
          padding: 3px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default About;