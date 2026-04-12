import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Direct logo import for the CTA section
import logo from '../assets/images/logos/mentorx.png';
// Country logo imports
import { 
  australia, egypt, fiji, india, japan, 
  mauritius, nepal, singapore, southAfrica, vietnam 
} from '../assets/images/index.js';

const Home = () => {
  // Animation Variants for staggered loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  // Content Arrays
  const coreOfferings = [
    { title: "School of Learning", desc: "Futuristic Technologies, Lifeskills & Entrepreneurship.", link: "/programs" },
    { title: "Faculty Development", desc: "Enhancing academic skills in AI, Robotics, and Data Science.", link: "/programs" },
    { title: "Incubation Centre", desc: "Bridging the gap from academia to industry for emerging startups.", link: "/coe" }
  ];

  const globalCountries = [
    { name: "India", logo: india },
    { name: "Australia", logo: australia },
    { name: "Japan", logo: japan },
    { name: "Singapore", logo: singapore },
    { name: "South Africa", logo: southAfrica },
    { name: "Egypt", logo: egypt },
    { name: "Mauritius", logo: mauritius },
    { name: "Vietnam", logo: vietnam },
    { name: "Fiji", logo: fiji },
    { name: "Nepal", logo: nepal }
  ];

  return (
    <div className="w-full overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[95vh] flex flex-col justify-center items-center text-center px-4 bg-[#050505] overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          className="max-w-5xl mx-auto z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          > 
            <span className="text-white">THE POWER BEHIND </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-light via-gold to-gold-dark">
              BUILDING YOU STRONG
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl tracking-[0.3em] mb-12 text-mid-gray uppercase font-bold"
          >
            Educate <span className="text-gold mx-2">|</span> Empower <span className="text-gold mx-2">|</span> Elevate
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          >
            <Link to="/contact" className="bg-gradient-to-r from-gold to-gold-dark text-primary hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all duration-500 hover:-translate-y-1 px-10 py-4 text-sm uppercase tracking-[3px] font-bold inline-block">
              Join MENTORx
            </Link>
            <Link to="/programs" className="bg-transparent border border-gold/50 text-white hover:bg-gold/5 hover:border-gold transition-all duration-500 px-10 py-4 text-sm uppercase tracking-[3px] inline-block">
              Explore Programs
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: BRAND INTRO */}
      <section className="py-32 px-6 max-w-site mx-auto relative">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
          <div className="md:col-span-4">
            <div className="sticky top-32">
              <div className="w-12 h-[2px] bg-gold mb-6"></div>
              <h2 className="text-gold-dark text-xs uppercase tracking-[5px] font-bold">About Us</h2>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 space-y-10 text-white/70 text-lg leading-loose font-light"
          >
            <p className="font-serif text-3xl md:text-4xl text-white leading-snug">
              MENTORx is a global conglomerate in education and technology (EdTech).
            </p>
            <p>
              Incorporated with the vision to educate, empower, and elevate. We partner with versatile organizations, universities, institutes, corporate houses, and leaders globally to drive innovation.
            </p>
            <p>
              We run highly specialized modules in AI & Robotics, Design Thinking, Startup Mentoring, Industry 5.0, and Ph.D frameworks to build the leaders of tomorrow.
            </p>
            <Link to="/about" className="inline-block mt-4 text-gold hover:text-gold-light text-sm uppercase tracking-widest border-b border-gold hover:border-gold-light transition-colors pb-1">
              Read Our Full Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: IMPACT STATISTICS */}
      <section className="bg-[#0A0A0A] py-32 border-y border-gold-dark/20 relative">
        <div className="max-w-site mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center divide-y md:divide-y-0 md:divide-x divide-gold-dark/20">
          <motion.div variants={statVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pt-8 md:pt-0">
            <h3 className="font-serif text-6xl text-gold mb-4 drop-shadow-[0_0_15px_rgba(201,168,76,0.2)]">2,000+</h3>
            <p className="text-mid-gray text-xs uppercase tracking-[3px] font-bold">Workshops Conducted</p>
          </motion.div>
          <motion.div variants={statVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="pt-8 md:pt-0">
            <h3 className="font-serif text-6xl text-gold mb-4 drop-shadow-[0_0_15px_rgba(201,168,76,0.2)]">2M+</h3>
            <p className="text-mid-gray text-xs uppercase tracking-[3px] font-bold">Lives Touched</p>
          </motion.div>
          <motion.div variants={statVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} className="pt-8 md:pt-0">
            <h3 className="font-serif text-6xl text-gold mb-4 drop-shadow-[0_0_15px_rgba(201,168,76,0.2)]">65+</h3>
            <p className="text-mid-gray text-xs uppercase tracking-[3px] font-bold">Global Countries</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CORE OFFERINGS */}
      <section className="py-32 px-6 max-w-site mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4">Our Expertise</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-white">Elevating the Future</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {coreOfferings.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#111111] border-t-[3px] border-gold-dark hover:border-gold p-10 group hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_rgba(201,168,76,0.1)] flex flex-col h-full"
            >
              <h4 className="font-serif text-2xl text-white mb-4 group-hover:text-gold transition-colors">{item.title}</h4>
              <p className="text-mid-gray text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
              <Link to={item.link} className="text-gold-light text-xs uppercase tracking-widest mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                Discover More →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: GLOBAL REACH */}
      <section className="bg-charcoal py-32 border-y border-gold-dark/20 overflow-hidden relative">
        <div className="max-w-site mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-6">Global Reach</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-white mb-8">Connecting the World Through Mentorship</h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                With an active presence in over 65 countries, our network of mentors, institutions, and leaders spans the globe. We bring international perspectives to local innovation.
              </p>
              <Link to="/partners" className="border border-gold text-gold hover:bg-gold hover:text-primary transition-all duration-300 px-8 py-3 text-xs uppercase tracking-[2px] font-bold inline-block">
                View All Partners
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-5 gap-4"
            >
              {globalCountries.map((country, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0A0A0A] border border-gold-dark/30 p-4 sm:p-8 flex flex-col items-center justify-center text-center hover:border-gold group transition-all duration-300 min-h-[160px]"
                >
                  <div className="flex-grow flex items-center justify-center w-full mb-4">
                    <img 
                      src={country.logo} 
                      alt={country.name} 
                      className="max-h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <span className="text-white font-bold text-[11px] uppercase tracking-wider group-hover:text-gold transition-colors">
                    {country.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-40 px-6 text-center relative bg-[#050505]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          className="max-w-3xl mx-auto"
        >
          {/* Swapped placeholder for real branding */}
          <img 
            src={logo} 
            alt="MENTORx Logo" 
            className="h-20 w-auto mx-auto mb-10 object-contain" 
          />
          
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to Transform Your Journey?</h2>
          <p className="text-mid-gray text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you are a student, an institution, or a corporate leader, there is a place for you in our global innovation network.
          </p>
          <Link to="/contact" className="bg-gold text-primary hover:bg-gold-light hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] transition-all duration-300 px-12 py-5 text-sm uppercase tracking-[3px] font-bold inline-block">
            Become a Member Today
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;