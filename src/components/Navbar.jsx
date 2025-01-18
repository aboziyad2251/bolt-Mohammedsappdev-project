import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';

    export default function Navbar() {
      const [businessOpen, setBusinessOpen] = useState(true);
      const [entertainmentOpen, setEntertainmentOpen] = useState(true);
      const [devOpen, setDevOpen] = useState(true);
      const [notesOpen, setNotesOpen] = useState(true);
      const [educationOpen, setEducationOpen] = useState(true);
      const [isDarkMode, setIsDarkMode] = useState(false);

      useEffect(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode === 'dark') {
          setIsDarkMode(true);
        }
      }, []);

      useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }, [isDarkMode]);

      const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
      };

      return (
        <div style={styles.container}>
          <nav style={styles.nav}>
            <div style={styles.header}>
              <div style={styles.logo}>Mohammed's Daily Flow</div>
              <button onClick={toggleDarkMode} style={styles.toggleButton}>
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
            <div style={styles.categories}>
              <div style={styles.category}>
                <div 
                  style={styles.categoryHeader}
                  onClick={() => setBusinessOpen(!businessOpen)}
                >
                  <h3 style={styles.categoryTitle}>Business</h3>
                  <span style={styles.arrow}>{businessOpen ? '▼' : '▶'}</span>
                </div>
                {businessOpen && (
                  <ul style={styles.ul}>
                    <li style={styles.li}>
                      <a 
                        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        <span style={styles.icon}>📧</span>
                        <span style={styles.text}>Gmail</span>
                      </a>
                      <div style={styles.tooltip}>Access your emails</div>
                    </li>
                    <li style={styles.li}>
                      <a 
                        href="https://www.linkedin.com/feed/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        <span style={styles.icon}>🔗</span>
                        <span style={styles.text}>LinkedIn</span>
                      </a>
                      <div style={styles.tooltip}>Connect with professionals</div>
                    </li>
                  </ul>
                )}
              </div>

              <div style={styles.category}>
                <div 
                  style={styles.categoryHeader}
                  onClick={() => setEntertainmentOpen(!entertainmentOpen)}
                >
                  <h3 style={styles.categoryTitle}>Entertainment</h3>
                  <span style={styles.arrow}>{entertainmentOpen ? '▼' : '▶'}</span>
                </div>
                {entertainmentOpen && (
                  <ul style={styles.ul}>
                    <li style={styles.li}>
                      <a 
                        href="https://www.youtube.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        <span style={styles.icon}>🎥</span>
                        <span style={styles.text}>YouTube</span>
                      </a>
                      <div style={styles.tooltip}>Watch videos</div>
                    </li>
                    <li style={styles.li}>
                      <a 
                        href="https://www.netflix.com/browse" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        <span style={styles.icon}>🍿</span>
                        <span style={styles.text}>Netflix</span>
                      </a>
                      <div style={styles.tooltip}>Stream movies and shows</div>
                    </li>
                  </ul>
                )}
              </div>

              <div style={styles.category}>
                <div 
                  style={styles.categoryHeader}
                  onClick={() => setDevOpen(!devOpen)}
                >
                  <h3 style={styles.categoryTitle}>Mohammed's Dev</h3>
                  <span style={styles.arrow}>{devOpen ? '▼' : '▶'}</span>
                </div>
                {devOpen && (
                  <ul style={styles.ul}>
                    <li style={styles.li}>
                      <a 
                        href="https://github.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        <span style={styles.icon}>💻</span>
                        <span style={styles.text}>GitHub</span>
                      </a>
                      <div style={styles.tooltip}>Manage your code repositories</div>
                    </li>
                    <li style={styles.li}>
                      <a 
                        href="https://app.netlify.com/teams/tarj123/sites" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        <span style={styles.icon}>🌐</span>
                        <span style={styles.text}>Netlify</span>
                      </a>
                      <div style={styles.tooltip}>Deploy your projects</div>
                    </li>
                    <li style={styles.li}>
                      <a 
                        href="http://localhost:5173/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        <span style={styles.icon}>⚡</span>
                        <span style={styles.text}>Bolt.Diy</span>
                      </a>
                      <div style={styles.tooltip}>Explore Bolt.Diy</div>
                    </li>
                  </ul>
                )}
              </div>

              <div style={styles.category}>
                <div 
                  style={styles.categoryHeader}
                  onClick={() => setNotesOpen(!notesOpen)}
                >
                  <h3 style={styles.categoryTitle}>Important Notes</h3>
                  <span style={styles.arrow}>{notesOpen ? '▼' : '▶'}</span>
                </div>
                {notesOpen && (
                  <ul style={styles.ul}>
                    <li style={styles.li}>
                      <a 
                        href="https://github.com/stackblitz-labs/bolt.diy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        <span style={styles.icon}>📝</span>
                        <span style={styles.text}>Bolt.Diy</span>
                      </a>
                      <div style={styles.tooltip}>Check out Bolt.Diy</div>
                    </li>
                    <li style={styles.li}>
                      <a 
                        href="https://platform.deepseek.com/usage" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        <span style={styles.icon}>🔍</span>
                        <span style={styles.text}>DeepSeek Platform</span>
                      </a>
                      <div style={styles.tooltip}>Explore DeepSeek</div>
                    </li>
                  </ul>
                )}
              </div>

              <div style={styles.category}>
                <div 
                  style={styles.categoryHeader}
                  onClick={() => setEducationOpen(!educationOpen)}
                >
                  <h3 style={styles.categoryTitle}>My Education</h3>
                  <span style={styles.arrow}>{educationOpen ? '▼' : '▶'}</span>
                </div>
                {educationOpen && (
                  <ul style={styles.ul}>
                    <li style={styles.li}>
                      <a 
                        href="https://sis.midocean.ae/login" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        <span style={styles.icon}>🎓</span>
                        <span style={styles.text}>Midocean University</span>
                      </a>
                      <div style={styles.tooltip}>Access your university portal</div>
                    </li>
                    <li style={styles.li}>
                      <a 
                        href="https://www.coursera.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        <span style={styles.icon}>📚</span>
                        <span style={styles.text}>Coursera</span>
                      </a>
                      <div style={styles.tooltip}>Take online courses</div>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </nav>
        </div>
      );
    }

    const styles = {
      container: {
        minHeight: '100vh',
        background: 'var(--background)',
        color: 'var(--text)',
        padding: '1rem',
      },
      nav: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      },
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        background: 'var(--category-bg)',
        borderRadius: '10px',
        boxShadow: 'var(--shadow)',
      },
      logo: {
        fontSize: '2rem',
        fontWeight: 'var(--font-weight)',
        color: 'var(--text)',
      },
      toggleButton: {
        background: 'var(--item-bg)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        cursor: 'pointer',
        color: 'var(--text)',
        transition: 'background 0.3s ease',
        fontWeight: 'var(--font-weight)',
      },
      categories: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
      },
      category: {
        background: 'var(--category-bg)',
        borderRadius: '10px',
        padding: '1rem',
        boxShadow: 'var(--shadow)',
      },
      categoryHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '0.5rem',
      },
      categoryTitle: {
        margin: 0,
        fontSize: '1.2rem',
        color: 'var(--text)',
        fontWeight: 'var(--font-weight)',
      },
      arrow: {
        fontSize: '1rem',
        color: 'var(--text)',
        fontWeight: 'var(--font-weight)',
      },
      ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '0.75rem',
        marginTop: '0.75rem',
      },
      li: {
        background: 'var(--item-bg)',
        borderRadius: '8px',
        padding: '0.75rem',
        transition: 'transform 0.3s ease, background 0.3s ease',
        boxShadow: 'var(--shadow)',
        position: 'relative',
      },
      link: {
        textDecoration: 'none',
        color: 'var(--text)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.25rem',
        fontWeight: 'var(--font-weight)',
      },
      icon: {
        fontSize: '1.5rem',
        color: 'var(--icon)',
      },
      text: {
        fontSize: '0.9rem',
        fontWeight: 'var(--font-weight)',
      },
      tooltip: {
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--text)',
        color: 'var(--background)',
        padding: '0.5rem',
        borderRadius: '4px',
        fontSize: '0.8rem',
        whiteSpace: 'nowrap',
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
        fontWeight: 'var(--font-weight)',
      },
    };

    // Add hover effect for tooltips
    const liHoverStyle = {
      '&:hover $tooltip': {
        opacity: 1,
        visibility: 'visible',
      },
    };

    styles.li = { ...styles.li, ...liHoverStyle };
