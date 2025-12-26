import React, { useState, useEffect } from 'react';
import bgImage from './bg.png';
import logo from './LOGO.png';
import donor from './donor.png';
import ap from './AP.png';
import App from "../App"; 
console.log("MAIN ENTRY LOADED");

function Main() {
  const [showNav, setShowNav] = useState(true);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const styles = {
    nav: {
      height: isMobile ? 'auto' : '240px',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      backdropFilter: 'blur(6px)',
      transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.35s ease-in-out',
      overflow: 'hidden'

    },


    navTop: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: isMobile ? 'auto' : '120px',
      maxWidth: '1400px',
      margin: '0 auto',
      background: 'transparent',
      gap: isMobile ? '8px' : '0',
      padding: isMobile ? '12px 16px' : '20px 40px',
    },


    navBrand: {
      fontSize: '76px',
      fontWeight: '700',
      letterSpacing: '-0.5px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
    },
    navLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '0px',
      marginTop: '0px'
    },


    logoBlock: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '0px'
    },

    navLogo: {
      height: isMobile ? '60px' : '110px',
      width: 'auto',
      objectFit: 'contain'
    },

    navTitle: {
      marginTop: '6px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#bffcff',
      letterSpacing: '0.5px',
      textAlign: 'center'
    },
    navRight: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '0px',
      marginLeft: 'auto',
      marginRight: '0px',
    },

    navRightImage: {
      height: isMobile ? '60px' : '120px',
      width: 'auto',
      objectFit: 'contain',
      opacity: 0.9
    },


    navBottom: {
      background: 'transparent',
      borderTop: '1px solid rgba(255, 255, 255, 0.25)',
      paddingTop: '10px',
      paddingBottom: '8px',
      maxWidth: '1400px',
      margin: '20px auto',
      padding: isMobile ? '8px 0' : '12px 0'
    },

    navLinks: {
      display: 'flex',
      gap: isMobile ? '14px' : '36px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      background: 'transparent',
      fontSize: isMobile ? '14px' : '16px',
    },

    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      position: 'relative',
      padding: '4px 0'
    },
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    content: {
      padding: '40px 24px',
      paddingTop: isMobile ? '320px' : '260px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '64px',
      color: '#1a1a1a'
    },
    headerTitle: {
      fontSize: isMobile ? '32px' : '56px',
      fontWeight: '800',
      marginBottom: '16px',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-1px'
    },
    headerSubtitle1: {
      fontSize: '20px',
      color: '#6c757d',
      fontWeight: '400',
      lineHeight: '1.6'
    },
    headerSubtitle: {
      fontSize: '45px',
      color: '#6c757d',
      fontWeight: '500',
      lineHeight: '1.6'
    },
    section: {
      maxWidth: '1000px',
      margin: '0 auto 48px auto',
      padding: isMobile ? '20px' : '40px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
      border: '1px solid rgba(0, 0, 0, 0.06)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    sectionTitle: {
      color: '#1a1a1a',
      fontSize: isMobile ? '24px' : '32px',
      fontWeight: '700',
      marginBottom: '24px',
      paddingBottom: '16px',
      borderBottom: '3px solid #2a5298',
      letterSpacing: '-0.5px'
    },
    paragraph: {
      color: '#4a5568',
      fontSize: '16px',
      lineHeight: '1.8',
      marginBottom: '16px',
      textAlign: 'justify'
    },
    featureList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0
    },
    featureItem: {
      marginBottom: '20px',
      paddingLeft: '32px',
      position: 'relative',
      color: '#4a5568',
      fontSize: '16px',
      lineHeight: '1.6',
      textAlign: 'justify'
    },
    featureBullet: {
      position: 'absolute',
      left: 0,
      top: '2px',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold'
    },
    divisionGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '24px',
      marginTop: '32px'
    },
    divisionCard: {
      padding: '28px',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      border: '1px solid rgba(0, 0, 0, 0.06)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'default'
    },
    divisionTitle: {
      color: '#1a1a1a',
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '12px'
    },
    divisionText: {
      color: '#6c757d',
      fontSize: '15px',
      lineHeight: '1.6'
    },
    buttonContainer: {
      textAlign: 'center',
      marginTop: '64px',
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    button: {
      padding: isMobile ? '14px 28px' : '16px 40px',
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: '600',
      textDecoration: 'none',
      borderRadius: '12px',
      display: 'inline-block',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
      border: 'none',
      cursor: 'pointer'
    },
    adminButton: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    },
    facultyButton: {
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: 'white'
    },
    footer: {
      textAlign: 'center',
      marginTop: '80px',
      padding: '40px 24px',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      fontSize: '15px',
      fontWeight: '400'
    },
    donorContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '32px',
      marginTop: '24px'
    },
    donorText: {
      flex: 1,
      color: '#4a5568',
      fontSize: '16px',
      lineHeight: '1.8',
      textAlign: 'justify'
    },
    donorImageContainer: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    donorButton: {
      marginTop: '20px',
      padding: '10px 24px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#2a5298',
      backgroundColor: '#ffffff',
      border: '2px solid #2a5298',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    donorButtonHover: {
      backgroundColor: '#2a5298',
      color: '#ffffff',
    },
    donorBottomButton: {
      marginTop: '28px',
      padding: '12px 28px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#ffffff',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    }


  };

  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <div style={styles.navTop}>

          {/* LEFT: Logo + Title */}
          <div style={styles.navLeft}>
            <div style={styles.logoBlock}>
              <img src={logo} alt="NATCO Logo" style={styles.navLogo} />
              <span style={styles.navTitle}>NATCO Cancer Centre</span>
            </div>
          </div>

          {/* RIGHT: Extra Image (future use) */}
          <div style={styles.navRight}>
            <div style={styles.logoBlock}>
              <img src={ap} alt="Govt Logo" style={styles.navRightImage} />
            </div>
          </div>

        </div>

        <div style={styles.navBottom}>
          <div style={styles.navLinks}>
            {['about', 'overview', 'departments', 'FAQs', 'contact us'].map(link => (
              <a
                key={link}
                href={`#${link}`}
                style={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(link);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}

              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>


      {/* Main Content */}
      <div style={styles.content}>
        <header style={styles.header}>
          <h1 style={styles.headerTitle}>Welcome to NATCO Cancer Centre </h1>
          <h7 style={styles.headerSubtitle}>Government General Hospital, </h7>
          <h7 style={styles.headerSubtitle}>Guntur, Andhra Pradesh</h7>
          <p style={styles.headerSubtitle1}>
            Advancing Cancer Research and Care Through Innovation and Excellence
          </p>
        </header>
        <section
          id="donor"
          style={{
            ...styles.section,
            transform: hoveredSection === 'donor' ? 'translateY(-4px)' : 'translateY(0)',
            boxShadow: hoveredSection === 'donor' ? '0 12px 40px rgba(0, 0, 0, 0.12)' : '0 4px 24px rgba(0, 0, 0, 0.06)'
          }}
          onMouseEnter={() => setHoveredSection('donor')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h2 style={styles.sectionTitle}>Donor</h2>
          <div style={styles.donorContent}>
            <p style={styles.donorText}>
              Mr. VC Nannapaneni (VCN) born on 30-11-1945 is a self driven technocrat and entrepreneur with a strong will to contribute to the society. He is the founder of NATCO Charitable Trust which runs NATCO Cancer Care Centre at Guntur.
            </p>

            <div style={styles.donorImageContainer}>
              <img src={donor} alt="NATCO donor" style={{
                height: isMobile ? '140px' : '180px',
                maxWidth: '100%'
              }} />
            </div>
          </div>

          {/* Know More button at the bottom */}
          <div style={{ textAlign: 'center' }}>
            <button
              className="btn"
              onClick={() => window.location.href = "/donor"}
            >
              Know More
            </button>

          </div>

        </section>
        <section
          id="about"
          style={{
            ...styles.section,
            transform: hoveredSection === 'about' ? 'translateY(-4px)' : 'translateY(0)',
            boxShadow: hoveredSection === 'about' ? '0 12px 40px rgba(0, 0, 0, 0.12)' : '0 4px 24px rgba(0, 0, 0, 0.06)'
          }}
          onMouseEnter={() => setHoveredSection('about')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h2 style={styles.sectionTitle}>About NATCO Cancer Centre</h2>
          <p style={styles.paragraph}>
            The NATCO Cancer Care Centre is a state-of-the-art, comprehensive cancer facility located within the premises of the Government General Hospital (GGH) in Guntur, Andhra Pradesh. Established through a public-private partnership between the NATCO Trust (the CSR wing of NATCO Pharma) and the Government of Andhra Pradesh, the center is dedicated to providing world-class oncology services to the underprivileged at no cost.
          </p>

        </section>

        <section
          id="overview"
          style={{
            ...styles.section,
            transform: hoveredSection === 'overview' ? 'translateY(-4px)' : 'translateY(0)',
            boxShadow: hoveredSection === 'overview' ? '0 12px 40px rgba(0, 0, 0, 0.12)' : '0 4px 24px rgba(0, 0, 0, 0.06)'
          }}
          onMouseEnter={() => setHoveredSection('overview')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h2 style={styles.sectionTitle}>Overview</h2>
          <ul style={styles.featureList}>
            {[
              { title: 'Designation', desc: 'Level-1 Cancer Centre (Government of Andhra Pradesh).' },
              { title: 'Inauguration', desc: 'July 1, 2020.' },
              { title: 'Capacity', desc: 'Currently expanding from 110 beds to a total of 260 beds with the addition of a new block.' },
              { title: 'Location', desc: 'GGH Campus, Sambasivapet, Guntur.' },

            ].map((feature, i) => (
              <li key={i} style={styles.featureItem}>
                <span style={styles.featureBullet}>✓</span>
                <strong style={{ color: '#1a1a1a' }}>{feature.title}:</strong>
                <span style={{ textAlign: 'justify', display: 'inline-block' }}>
                  {feature.desc}
                </span>

              </li>
            ))}
          </ul>
        </section>

        <section
          id="departments"
          style={{
            ...styles.section,
            transform: hoveredSection === 'departments' ? 'translateY(-4px)' : 'translateY(0)',
            boxShadow: hoveredSection === 'departments' ? '0 12px 40px rgba(0, 0, 0, 0.12)' : '0 4px 24px rgba(0, 0, 0, 0.06)'
          }}
          onMouseEnter={() => setHoveredSection('departments')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h3 style={styles.sectionTitle}>Our Departments</h3>
          <div style={styles.divisionGrid}>
            {[
              { title: 'Preventive Oncology', desc: 'Cancer screening facilities for Breast, Cervical, and Oral Cancers.' },
              { title: 'Radiation Oncology', desc: 'Precise tumor targeting with minimal side effects. Features the Varian Vitalbeam Linear Accelerator, Brachytherapy units, and a CT simulator.' },
              { title: 'Surgical Oncology', desc: 'Complex cancer surgeries and post-operative care.' },
              { title: 'Medical Oncology', desc: 'Chemotherapy and targeted therapies.' },
              { title: 'Palliative Medicine', desc: 'Supportive care and pain management for advanced stages. Homecare services for terminally ill cancer patients 30 kms in and around Guntur.' },
              { title: 'Nuclear Medicine', desc: 'PET CT facility installed and to be inaugurated soon.' },
              { title: 'Diagnostic Radiology', desc: 'Comprehensive lab services, mammography, and Ultrasound imaging.' }
            ].map((division, i) => (
              <div
                key={i}
                style={{
                  ...styles.divisionCard,
                  transform: hoveredCard === i ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredCard === i ? '0 12px 32px rgba(0, 0, 0, 0.12)' : 'none'
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h4 style={styles.divisionTitle}>{division.title}</h4>
                <p style={styles.divisionText}>{division.desc}</p>
              </div>
            ))}
          </div>
        </section>


        <section
          id="FAQs"
          style={{
            ...styles.section,
            transform: hoveredSection === 'FAQs' ? 'translateY(-4px)' : 'translateY(0)',
            boxShadow: hoveredSection === 'FAQs' ? '0 12px 40px rgba(0, 0, 0, 0.12)' : '0 4px 24px rgba(0, 0, 0, 0.06)'
          }}
          onMouseEnter={() => setHoveredSection('FAQs')}
          onMouseLeave={() => setHoveredSection(null)}
        >

          <h3 style={styles.sectionTitle}>Frequently Asked Questions (FAQs)</h3>

          <ul style={styles.featureList}>
            {[
              {
                question: 'Is the treatment at NATCO Cancer Centre really free?',
                answer:
                  'Yes. All treatments, including major surgeries, chemotherapy, and advanced radiation therapy (Linear Accelerator), are provided free of cost for eligible patients under the Dr. NTR Vaidyaseva and other government health schemes.'
              },
              {
                question: 'Do I need a prior appointment for the first visit?',
                answer:
                  "While a formal appointment isn't strictly required for the first visit, you must first register at the Main Outpatient (OP) Counter. From there, you will be directed to the Oncology department. It is best to arrive early (between 8:00 AM and 9:00 AM)."
              },
              {
                question: 'What documents should I bring for Aarogyasri benefits?',
                answer:
                  'Please carry your Aarogyasri Card or Rice Card, Aadhar Card of the patient, all previous medical reports (biopsy, scans, blood tests), and a referral letter from a local government hospital if available.'
              },
              {
                question: 'Does the center provide food for patients and attendants?',
                answer:
                  'Nutritious meals are provided free of cost for patients as prescribed by the doctor. Attendants can access subsidized canteens and NGO-supported food services nearby.'
              },
              {
                question: 'How long is the waiting period for Radiation Therapy?',
                answer:
                  'The waiting period depends on the urgency of the case. The Varian Vitalbeam machine helps reduce delays. Your doctor will confirm the schedule after the simulation process.'
              },
              {
                question: 'Are diagnostic tests like PET-CT and Mammography available?',
                answer:
                  'Yes. Digital mammography is available. PET-CT availability can be confirmed at the reception for scheduling.'
              },
              {
                question: 'Can I get my medicines from the hospital pharmacy?',
                answer:
                  'Yes. All chemotherapy drugs and supportive medicines prescribed are supplied free of charge for eligible patients through the Government Hospital Pharmacy.'
              }
            ].map((faq, i) => (
              <li key={i} style={{ ...styles.featureItem, marginBottom: '20px' }}>
                <span style={styles.featureBullet}>Q</span>
                <div>
                  <div style={styles.faqQuestion}>{faq.question}</div>
                  <div style={styles.faqAnswer}>{faq.answer}</div>
                </div>
              </li>
            ))}

          </ul>
        </section>

        <section
          id="contact us"
          style={{
            ...styles.section,
            transform: hoveredSection === 'contact us' ? 'translateY(-4px)' : 'translateY(0)',
            boxShadow: hoveredSection === 'contact us' ? '0 12px 40px rgba(0, 0, 0, 0.12)' : '0 4px 24px rgba(0, 0, 0, 0.06)'
          }}
          onMouseEnter={() => setHoveredSection('contact us')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h3 style={styles.sectionTitle}>Contact Us</h3>
          <p style={styles.paragraph}>
            For inquiries, collaborations, or more information about NATCO Cancer Centre:
          </p>
          <p style={{ ...styles.paragraph, fontWeight: '500', color: '#1a1a1a' }}>
            Address: GGH Campus, Sambasivapet, Guntur, Andhra Pradesh 522001.<br />
            Phone: +91 9848212569<br />
            Contact Person: Dr. Gorijavolu Durga Prasad, HOD Radiation Oncology and Deputy Superintendent. <br />
            Email: gghgunturrt@gmail.com<br />
            Website: www.natco-cancercentre.org<br />
            Appointment: Recommended to visit the GGH Outpatient (OP) department for referral to the NATCO block.
          </p>
        </section>

        <div style={styles.buttonContainer}>
          <a
            href="/admin/login"
            style={{
              ...styles.button,
              ...styles.adminButton,
              transform: hoveredButton === 'admin' ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
              boxShadow: hoveredButton === 'admin' ? '0 8px 24px rgba(102, 126, 234, 0.4)' : '0 4px 16px rgba(0, 0, 0, 0.12)'
            }}
            onMouseEnter={() => setHoveredButton('admin')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Admin Login
          </a>
          <a
            href="/faculty/login"
            style={{
              ...styles.button,
              ...styles.facultyButton,
              transform: hoveredButton === 'faculty' ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
              boxShadow: hoveredButton === 'faculty' ? '0 8px 24px rgba(245, 87, 108, 0.4)' : '0 4px 16px rgba(0, 0, 0, 0.12)'
            }}
            onMouseEnter={() => setHoveredButton('faculty')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Faculty Login
          </a>
        </div>
      </div>

      <footer style={styles.footer}>
        <p>&copy;NATCO Cancer Centre.</p>
      </footer>
    </div>
  );
}

export default Main;