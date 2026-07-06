import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub, FaDocker, FaCode, FaDatabase, FaTools
} from 'react-icons/fa';
import { 
  SiJavascript, SiPython, SiCplusplus, SiC, SiExpress, SiMongodb, SiPostgresql, 
  SiPostman, SiSocketdotio, SiAxios, SiReactrouter, SiJsonwebtokens
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaCode />,
    skills: [
      { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
      { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
      { name: 'Python', icon: <SiPython color="#3776AB" /> },
      { name: 'C', icon: <SiC color="#A8B9CC" /> },
      { name: 'SQL', icon: <FaDatabase color="#F29111" /> },
    ]
  },
  {
    title: 'Frameworks',
    icon: <FaReact />,
    skills: [
      { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
      { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
      { name: 'Express.js', icon: <SiExpress color="#FFF" /> },
      { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
    ]
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
    ]
  },
  {
    title: 'Developer Tools',
    icon: <FaTools />,
    skills: [
      { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
      { name: 'GitHub', icon: <FaGithub color="#FFF" /> },
      { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
      { name: 'VS Code', icon: <VscVscode color="#007ACC" /> },
      { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
    ]
  },
  {
    title: 'Libraries',
    icon: <FaCode />,
    skills: [
      { name: 'Socket.IO', icon: <SiSocketdotio color="#FFF" /> },
      { name: 'Mongoose', icon: <SiMongodb color="#880000" /> },
      { name: 'Axios', icon: <SiAxios color="#5A29E4" /> },
      { name: 'React Router', icon: <SiReactrouter color="#CA4245" /> },
      { name: 'JWT', icon: <SiJsonwebtokens color="#FB015B" /> },
      { name: 'Clerk Auth', icon: <FaCode color="#6C47FF" /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="position-relative">
      <Container>
        <div className="text-center mb-5">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical <span className="text-accent">Skills</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            style={{ height: '4px', background: 'var(--accent-color)', margin: '10px auto', borderRadius: '2px' }}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="g-4 justify-content-center">
            {skillCategories.map((category, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div variants={itemVariants} className="glass-panel p-4 h-100 skill-category-card">
                  <h4 className="mb-4 d-flex align-items-center" style={{ color: '#fff', fontSize: '1.25rem' }}>
                    <span className="text-accent me-2" style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                    {category.title}
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-chip">
                        <span className="skill-chip-icon">{skill.icon}</span>
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>

      <style>{`
        .skill-category-card {
          transition: all 0.3s ease;
        }
        
        .skill-category-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
        }

        .skill-chip {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #e0e0e0;
          transition: all 0.3s ease;
          cursor: default;
        }

        .skill-chip:hover {
          background: rgba(139, 92, 246, 0.15);
          border-color: var(--accent-light);
          color: #fff;
          transform: translateY(-2px);
        }

        .skill-chip-icon {
          display: flex;
          align-items: center;
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
};

export default Skills;
