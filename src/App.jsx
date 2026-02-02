import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#fff' }}>
      {/* NAVBAR */}
      <nav ref={navRef} className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-4 px-md-5">
          <span className="navbar-brand fw-bold fs-4" style={{ background: 'linear-gradient(to right, #60a5fa, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Amrutha
          </span>

          {/* Desktop Menu */}
          <div className="d-none d-md-flex gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="btn btn-link text-light text-decoration-none"
                style={{ fontSize: '14px', color: '#d1d5db !important' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="btn btn-link d-md-none text-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: '#fff', margin: '4px 0' }}></span>
            <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: '#fff', margin: '4px 0' }}></span>
            <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: '#fff', margin: '4px 0' }}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="d-md-none mt-3 pb-3 border-top border-light border-opacity-25" style={{ paddingTop: '15px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="btn btn-link d-block w-100 text-start text-decoration-none"
                style={{ color: '#d1d5db' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="min-vh-100 d-flex justify-content-center px-3 position-relative overflow-hidden"
        style={{ alignItems: 'flex-start', paddingTop: '120px' }}
      >

        <div className="position-absolute" style={{ top: '80px', right: '40px', width: '288px', height: '288px', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        <div className="position-absolute" style={{ bottom: '80px', left: '40px', width: '288px', height: '288px', backgroundColor: 'rgba(6, 182, 212, 0.2)', borderRadius: '50%', filter: 'blur(80px)' }}></div>

        <div className="position-relative text-center" style={{ maxWidth: '800px', zIndex: 10 }}>
          <h1 className="display-3 fw-bold mb-4" style={{ lineHeight: 1.2 }}>
            Hi, I'm <span style={{ background: 'linear-gradient(to right, #60a5fa, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Amrutha</span>
          </h1>

          <p className="fs-4 fw-semibold mb-4" style={{ color: '#06b6d4' }}>
            Full Stack Developer
          </p>

          <p className="fs-5 mb-5" style={{ color: '#9ca3af', lineHeight: 1.6 }}>
            Computer Science Engineering student passionate about learning, building, and improving real-world web applications.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn fw-semibold px-4 py-2"
              style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)', color: '#fff', border: 'none' }}
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn fw-semibold px-4 py-2"
              style={{ border: '2px solid #06b6d4', color: '#06b6d4', backgroundColor: 'transparent' }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-5 px-4 px-md-5"
        style={{ scrollMarginTop: '60px', paddingTop: '60px' }}
      >

        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center">About Me</h2>

          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <p className="fs-5 mt-4" style={{ color: '#d1d5db', lineHeight: 1.8 }}>
                I’m a Computer Science Engineering student at Sahyadri College of Engineering and Management with a strong interest in building clean, scalable full-stack applications.
              </p>

              <p className="fs-5 mt-4" style={{ color: '#d1d5db', lineHeight: 1.8 }}>
                Driven by curiosity and continuous learning, I enjoy solving real-world problems by developing practical and impactful digital solutions.
              </p>

              <p className="fs-5" style={{ color: '#d1d5db', lineHeight: 1.8 }}>
                When I'm not coding, you'll find me exploring new technologies, learning languages, or working on projects that push the boundaries of modern web development and AI.
              </p>

            </div>

            <div className="col-md-6">
              <div className="rounded-3 p-5" style={{ background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(96, 165, 250, 0.3)', textAlign: 'center' }}>
                <p className="display-5 fw-bold mb-2" style={{ color: '#06b6d4' }}>9.42</p>
                <p className="fs-4" style={{ color: '#d1d5db' }}>Current CGPA</p>
                <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>B.E in CSE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section
        id="education"
        className="py-5 px-4 px-md-5"
        style={{ scrollMarginTop: '60px', paddingTop: '60px' }}
      >
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center">Education</h2>

          <div className="row g-4">
            {/* Education Card 1 */}
            <div className="col-12">
              <div className="p-5 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-8">
                    <h3 className="fs-4 fw-bold mb-2" style={{ color: '#06b6d4' }}>B.E in Computer Science Engineering</h3>
                    <p className="fs-5" style={{ color: '#d1d5db' }}>Sahyadri College of Engineering and Management, Mangalore</p>
                    <p style={{ color: '#9ca3af' }}>2022 – 2026</p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <p className="display-6 fw-bold" style={{ color: '#3b82f6' }}>9.42</p>
                    <p style={{ color: '#9ca3af' }}>CGPA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card 2 */}
            <div className="col-12">
              <div className="p-5 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-8">
                    <h3 className="fs-4 fw-bold mb-2" style={{ color: '#06b6d4' }}>Pre-University Course (PUC)</h3>
                    <p className="fs-5" style={{ color: '#d1d5db' }}>Christ King PU College, Karkala</p>
                    <p style={{ color: '#9ca3af' }}>2020 – 2022</p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <p className="display-6 fw-bold" style={{ color: '#3b82f6' }}>94.16%</p>
                    <p style={{ color: '#9ca3af' }}>Percentage</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Education Card 3 */}
            <div className="col-12">
              <div
                className="p-5 rounded-3"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-8">
                    <h3 className="fs-4 fw-bold mb-2" style={{ color: '#06b6d4' }}>
                      High School
                    </h3>
                    <p className="fs-5" style={{ color: '#d1d5db' }}>
                      Church English Medium School, Ajekar
                    </p>
                    <p style={{ color: '#9ca3af' }}>2020</p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <p className="display-6 fw-bold" style={{ color: '#3b82f6' }}>
                      93.28%
                    </p>
                    <p style={{ color: '#9ca3af' }}>Percentage</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="py-5 px-4 px-md-5"
        style={{ scrollMarginTop: '60px', paddingTop: '60px' }}
      >
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center">Skills</h2>

          <div className="row g-5">
            {/* Technical Skills */}
            <div className="col-md-6">
              <h3 className="fs-3 fw-bold mb-4" style={{ color: '#06b6d4' }}>Technical Skills</h3>

              <div className="mb-4">
                <p style={{ color: '#9ca3af', fontWeight: 600, marginBottom: '12px' }}>Languages</p>
                <div className="d-flex flex-wrap gap-2">
                  {['C', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Python'].map((skill) => (
                    <span key={skill} className="badge" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(96, 165, 250, 0.5)', color: '#93c5fd', padding: '8px 16px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p style={{ color: '#9ca3af', fontWeight: 600, marginBottom: '12px' }}>Frameworks & Technologies</p>
                <div className="d-flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'Express.js', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'Flask', 'Docker'].map((skill) => (
                    <span key={skill} className="badge" style={{ backgroundColor: 'rgba(6, 182, 212, 0.2)', border: '1px solid rgba(6, 182, 212, 0.5)', color: '#67e8f9', padding: '8px 16px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p style={{ color: '#9ca3af', fontWeight: 600, marginBottom: '12px' }}>Databases</p>
                <div className="d-flex flex-wrap gap-2">
                  {['MySQL', 'MongoDB'].map((skill) => (
                    <span key={skill} className="badge" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', border: '1px solid rgba(34, 197, 94, 0.5)', color: '#86efac', padding: '8px 16px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p style={{ color: '#9ca3af', fontWeight: 600, marginBottom: '12px' }}>Developer Tools</p>
                <div className="d-flex flex-wrap gap-2">
                  {['GitHub', 'VS Code', 'Postman', 'MySQL Workbench', 'MongoDB Compass'].map((skill) => (
                    <span key={skill} className="badge" style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', border: '1px solid rgba(168, 85, 247, 0.5)', color: '#d8b4fe', padding: '8px 16px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="col-md-6">
              <h3 className="fs-3 fw-bold mb-4" style={{ color: '#06b6d4' }}>Soft Skills</h3>

              <div className="row g-3">
                {[
                  { skill: 'Teamwork', icon: '👥' },
                  { skill: 'Problem-Solving', icon: '🧠' },
                  { skill: 'Time Management', icon: '⏱️' },
                  { skill: 'Adaptability', icon: '🎯' },
                  { skill: 'Quick Learner', icon: '📚' }
                ].map((item) => (
                  <div key={item.skill} className="col-12">
                    <div className="d-flex gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <span style={{ fontSize: '24px' }}>{item.icon}</span>
                      <span style={{ color: '#d1d5db', fontWeight: 500 }}>{item.skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-5 px-4 px-md-5"
        style={{ scrollMarginTop: '60px', paddingTop: '60px' }}
      >
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center">Projects</h2>

          <div className="row g-4">
            {/* Project 1 */}
            <div className="col-md-6">
              <div className="p-5 rounded-3 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'; e.currentTarget.style.transform = 'translateY(-8px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <h3 className="fs-4 fw-bold mb-2" style={{ color: '#06b6d4' }}>Areca Health Vision</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '4px' }}>Smart System for Arecanut Crop Disease Detection</p>
                <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '16px' }}>DeiT-III Vision Transformer | Full-Stack Web App</p>

                <p style={{ color: '#d1d5db', marginBottom: '16px', lineHeight: 1.6 }}>
                  Developed a full-stack disease detection system integrated with a wearable hat for real-time image capture. Trained DeiT-III for disease classification with multilingual and audio features.
                </p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {['React.js', 'Node.js', 'MySQL', 'Python', 'DeiT-III', 'ESP32'].map((tech) => (
                    <span key={tech} style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', color: '#93c5fd', borderRadius: '20px' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/amruthapoojary/Areca_Health_Vision-arecanut-disease-detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-semibold"
                  style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)', color: '#fff', border: 'none' }}
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-6">
              <div className="p-5 rounded-3 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'; e.currentTarget.style.transform = 'translateY(-8px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <h3 className="fs-4 fw-bold mb-2" style={{ color: '#06b6d4' }}>Crop Insight</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '4px' }}>Interactive Platform for Crop Suitability Analysis</p>
                <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '16px' }}>Full-Stack Web Application</p>

                <p style={{ color: '#d1d5db', marginBottom: '16px', lineHeight: 1.6 }}>
                  Designed a full-stack web platform that analyzes crop suitability based on environmental factors. Integrated MySQL for data management and advanced analytics with pie, bar, and line charts.
                </p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {['React.js', 'Node.js', 'Express.js', 'MySQL', 'Charts.js'].map((tech) => (
                    <span key={tech} style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(34, 197, 94, 0.2)', border: '1px solid rgba(34, 197, 94, 0.3)', color: '#86efac', borderRadius: '20px' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/amruthapoojary/Crop-Insight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-semibold"
                  style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)', color: '#fff', border: 'none' }}
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-6">
              <div className="p-5 rounded-3 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'; e.currentTarget.style.transform = 'translateY(-8px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <h3 className="fs-4 fw-bold mb-2" style={{ color: '#06b6d4' }}>Heavens Food</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '4px' }}>Canteen Management System</p>
                <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '16px' }}>Full-Stack MERN Application</p>

                <p style={{ color: '#d1d5db', marginBottom: '16px', lineHeight: 1.6 }}>
                  Built a responsive canteen management system with React.js frontend and Node.js backend. Includes admin panel for menu management, category organization, and stock tracking with MongoDB.
                </p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'].map((tech) => (
                    <span key={tech} style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(168, 85, 247, 0.2)', border: '1px solid rgba(168, 85, 247, 0.3)', color: '#d8b4fe', borderRadius: '20px' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/amruthapoojary/canteen-management-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-semibold"
                  style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)', color: '#fff', border: 'none' }}
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="col-md-6">
              <div className="p-5 rounded-3 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'; e.currentTarget.style.transform = 'translateY(-8px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <h3 className="fs-4 fw-bold mb-2" style={{ color: '#06b6d4' }}>Traffic Prediction System</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '4px' }}>Machine Learning-Based Traffic Forecasting</p>
                <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '16px' }}>ML & Web Application</p>

                <p style={{ color: '#d1d5db', marginBottom: '16px', lineHeight: 1.6 }}>
                  Built a web application to predict traffic patterns using Random Forest algorithm. Analyzes vehicle count, date, time, and day-of-week to classify traffic as High, Low, or Normal.
                </p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {['Python', 'Flask', 'Machine Learning', 'Random Forest', 'HTML/CSS'].map((tech) => (
                    <span key={tech} style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(249, 115, 22, 0.2)', border: '1px solid rgba(249, 115, 22, 0.3)', color: '#fed7aa', borderRadius: '20px' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/amruthapoojary/Traffic_Prediction_System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-semibold"
                  style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)', color: '#fff', border: 'none' }}
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="py-5 px-4 px-md-5"
        style={{ scrollMarginTop: '60px', paddingTop: '60px' }}
      >
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center">Experience</h2>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-5 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="row justify-content-between align-items-start mb-4">
                  <div className="col-md-8">
                    <h3 className="fs-4 fw-bold mb-2" style={{ color: '#06b6d4' }}>Software Intern</h3>
                    <p className="fs-5" style={{ color: '#d1d5db' }}>Ukshati Technologies Private Limited, Mangalore</p>
                    <p style={{ color: '#9ca3af' }}>Hybrid | Jan 2026 – Present</p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <p style={{ fontSize: '12px', fontWeight: 600, color: '#3b82f6', marginBottom: '8px' }}>Tech Stack</p>
                    <div className="d-flex flex-wrap gap-2 justify-content-md-end">
                      {['Next.js', 'MySQL', 'Docker'].map((tech) => (
                        <span key={tech} style={{ fontSize: '11px', padding: '4px 8px', backgroundColor: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', color: '#93c5fd', borderRadius: '12px' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <ul style={{ color: '#9ca3af', paddingLeft: '20px' }}>
                  <li className="mb-3">
                    Analyzed the existing ERP system codebase to understand its structure, workflow, and non-functional components.
                  </li>
                  <li>
                    Designed and developed a new Accounting module using Next.js, MySQL, and Docker, integrating it with the existing ERP system.
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section
        id="about"
        className="py-5 px-4 px-md-5"
        style={{ scrollMarginTop: '60px', paddingTop: '60px' }}
      >
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center">Certifications & Achievements</h2>

          <div className="row g-4">
            {/* Certification 1 */}
            <div className="col-md-6">
              <div className="p-4 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="d-flex gap-3">
                  <div style={{ fontSize: '32px' }}>🏆</div>
                  <div>
                    <h3 className="fs-5 fw-bold mb-2" style={{ color: '#06b6d4' }}>Full Stack Development</h3>
                    <p style={{ color: '#d1d5db', marginBottom: '4px' }}>Skill Labs, TCE</p>
                    <p style={{ fontSize: '12px', color: '#9ca3af' }}>March 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification 2 */}
            <div className="col-md-6">
              <div className="p-4 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="d-flex gap-3">
                  <div style={{ fontSize: '32px' }}>🥈</div>
                  <div>
                    <h3 className="fs-5 fw-bold mb-2" style={{ color: '#06b6d4' }}>MERN: Think Outside the Stack</h3>
                    <p style={{ color: '#d1d5db', marginBottom: '4px' }}>2nd Place Winner - Skill Labs, TCE</p>
                    <p style={{ fontSize: '12px', color: '#9ca3af' }}>July 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification 3 */}
            <div className="col-md-6">
              <div className="p-4 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="d-flex gap-3">
                  <div style={{ fontSize: '32px' }}>📊</div>
                  <div>
                    <h3 className="fs-5 fw-bold mb-2" style={{ color: '#06b6d4' }}>Database and SQL</h3>
                    <p style={{ color: '#d1d5db', marginBottom: '4px' }}>Infosys Springboard</p>
                    <p style={{ fontSize: '12px', color: '#9ca3af' }}>December 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification 4 */}
            <div className="col-md-6">
              <div className="p-4 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="d-flex gap-3">
                  <div style={{ fontSize: '32px' }}>🌍</div>
                  <div>
                    <h3 className="fs-5 fw-bold mb-2" style={{ color: '#06b6d4' }}>NAT Japanese Language Test</h3>
                    <p style={{ color: '#d1d5db', marginBottom: '4px' }}>N5 Level Certification</p>
                    <p style={{ fontSize: '12px', color: '#9ca3af' }}>April 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LANGUAGES & HOBBIES SECTION */}
      <section
        id="about"
        className="py-5 px-4 px-md-5"
        style={{ scrollMarginTop: '60px', paddingTop: '60px' }}
      >
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center">Languages & Interests</h2>

          <div className="row g-5">
            {/* Languages */}
            <div className="col-md-6">
              <h3 className="fs-3 fw-bold mb-4" style={{ color: '#06b6d4' }}>Languages</h3>
              <div className="d-flex flex-column gap-3">
                <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 style={{ color: '#d1d5db', marginBottom: 0 }}>English</h4>
                    <span style={{ color: '#06b6d4', fontWeight: 'bold', fontSize: '12px' }}>Professional</span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', height: '8px' }}>
                    <div style={{ backgroundColor: 'linear-gradient(to right, #60a5fa, #06b6d4)', height: '8px', borderRadius: '8px', width: '95%' }}></div>
                  </div>
                </div>

                <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 style={{ color: '#d1d5db', marginBottom: 0 }}>Kannada</h4>
                    <span style={{ color: '#06b6d4', fontWeight: 'bold', fontSize: '12px' }}>Native</span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', height: '8px' }}>
                    <div style={{ backgroundColor: 'linear-gradient(to right, #60a5fa, #06b6d4)', height: '8px', borderRadius: '8px', width: '100%' }}></div>
                  </div>
                </div>

                <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 style={{ color: '#d1d5db', marginBottom: 0 }}>Japanese</h4>
                    <span style={{ color: '#06b6d4', fontWeight: 'bold', fontSize: '12px' }}>Basic (N5)</span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', height: '8px' }}>
                    <div style={{ backgroundColor: 'linear-gradient(to right, #60a5fa, #06b6d4)', height: '8px', borderRadius: '8px', width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="col-md-6">
              <h3 className="fs-3 fw-bold mb-4" style={{ color: '#06b6d4' }}>Hobbies & Interests</h3>
              <div className="d-grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                {[
                  { hobby: 'Dancing & singing in my own space', icon: '💃' },
                  { hobby: 'Losing myself in music', icon: '🎧' },
                  { hobby: 'Gardening', icon: '🌱' },
                  { hobby: 'Learning Japanese', icon: '🇯🇵' },
                  { hobby: 'Cooking', icon: '🍳' }
                ].map((item) => (
                  <div key={item.hobby} className="d-flex gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <span style={{ fontSize: '24px' }}>{item.icon}</span>
                    <span style={{ color: '#d1d5db', fontWeight: 500 }}>{item.hobby}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-5 px-4 px-md-5"
        style={{ scrollMarginTop: '60px', paddingTop: '60px' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold mb-3">Let's Connect</h2>
              <p className="fs-5" style={{ color: '#9ca3af', marginBottom: '48px' }}>Feel free to reach out for collaborations or just a friendly hello!</p>

              <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4 mb-5">
                {/* Email */}
                <a href="mailto:amruthapoojary2001@gmail.com" className="d-flex flex-column align-items-center p-4 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none', minWidth: '150px' }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>📧</div>
                  <p style={{ color: '#9ca3af', marginBottom: '8px' }}>Email</p>
                  <p style={{ fontSize: '12px', color: '#6b7280' }}>amruthapoojary2001@gmail.com</p>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/amrutha-poojary" target="_blank" rel="noopener noreferrer" className="d-flex flex-column align-items-center p-4 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none', minWidth: '150px' }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>💼</div>
                  <p style={{ color: '#9ca3af', marginBottom: '8px' }}>LinkedIn</p>
                  <p style={{ fontSize: '12px', color: '#6b7280' }}>amrutha-poojary</p>
                </a>

                {/* GitHub */}
                <a href="https://github.com/amruthapoojary" target="_blank" rel="noopener noreferrer" className="d-flex flex-column align-items-center p-4 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none', minWidth: '150px' }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>🚀</div>
                  <p style={{ color: '#9ca3af', marginBottom: '8px' }}>GitHub</p>
                  <p style={{ fontSize: '12px', color: '#6b7280' }}>amruthapoojary</p>
                </a>
              </div>

              {/* Location */}
              <div className="p-5 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <p style={{ color: '#9ca3af', marginBottom: '8px' }}>📍 Based in</p>
                <p className="fs-3 fw-bold mb-2" style={{ color: '#06b6d4' }}>Udupi, Karnataka, India</p>
                <p style={{ fontSize: '12px', color: '#6b7280' }}>Open to remote opportunities and on-site roles in Bengaluru</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '32px 0' }}>
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-3">
            <div style={{ color: '#9ca3af', fontSize: '12px' }}>
              © 2026 Amrutha. All rights reserved.
            </div>
            <div className="d-flex gap-4">
              <a href="https://github.com/amruthapoojary" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none' }}>GitHub</a>
              <a href="https://linkedin.com/in/amrutha-poojary" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none' }}>LinkedIn</a>
              <button onClick={() => scrollToSection('hero')} className="btn btn-link" style={{ color: '#9ca3af', textDecoration: 'none', padding: 0 }}>Back to Top</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
