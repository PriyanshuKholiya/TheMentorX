import React from 'react';
import { motion } from 'framer-motion';

// ==========================================
// STATIC ASSET IMPORTS 
// ==========================================
// Main Logo
import mainCoeLogo from '../assets/images/partners/mentorx-coe-logo.png';

// COE & TBI Partners
import gadvasuLogo from '../assets/images/partners/gadvasu.png';
import ikgptuLogo from '../assets/images/partners/ikgptu.png';
import cgcLogo from '../assets/images/partners/cgc-mohali.png';
import gndecLogo from '../assets/images/partners/gndec.png';
import seshadripuramLogo from '../assets/images/partners/seshadripuram.png';
import iitRoparLogo from '../assets/images/partners/iit-ropar.png';
import pcteLogo from '../assets/images/partners/pcte.png';
import ctUnivLogo from '../assets/images/partners/ct-university.png';

// MoU Partners
import chitkaraLogo from '../assets/images/partners/chitkara.png';
import dStreetLogo from '../assets/images/partners/d-street-srcc.png';
import thaparLogo from '../assets/images/partners/thapar.png';
import msmeLogo from '../assets/images/partners/msme-chamber.png';
import iitTirupatiLogo from '../assets/images/partners/iit-tirupati.png';
import shardaLogo from '../assets/images/partners/sharda.png';
import shivNadarLogo from '../assets/images/partners/shiv-nadar.png';
// Note: Assuming full name for the truncated file in the screenshot
import ioeLogo from '../assets/images/partners/institution-of-engineers.png'; 
import punjabUnivLogo from '../assets/images/partners/punjab-university.png';
import amityLogo from '../assets/images/partners/amity.png';

// Global Partners
import indoCanadianLogo from '../assets/images/partners/indo-canadian-arts.png';
import greenwichLogo from '../assets/images/partners/greenwich.png';
import cpaLogo from '../assets/images/partners/cpa-australia.png';
import circoloLogo from '../assets/images/partners/circolo-didattico.png';

// Workshop Venues
import bhartiyamLogo from '../assets/images/partners/bhartiyam.png';
import jimsLogo from '../assets/images/partners/jims-delhi.png';
import chandigarhUnivLogo from '../assets/images/partners/chandigarh-univ.png';
import icsiLogo from '../assets/images/partners/icsi.png';
import iitDelhiLogo from '../assets/images/partners/iit-delhi.png';
import pauLogo from '../assets/images/partners/punjab-ag-univ.png';
import lpuLogo from '../assets/images/partners/lpu.png';
import ndimLogo from '../assets/images/partners/ndim.png';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Reusable Logo Component
const LogoCard = ({ name, description, img }) => (
  <motion.div 
    variants={itemFade}
    className="bg-charcoal border border-gold-dark/30 hover:border-gold transition-colors duration-300 aspect-[3/2] flex flex-col items-center justify-center p-6 text-center group cursor-default"
  >
    <div className="w-16 h-16 bg-[#111111] rounded-full mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
      {img ? (
        <img 
          src={img} 
          alt={`${name} Logo`} 
          className="w-full h-full object-contain p-2"
        />
      ) : (
        <span className="text-[10px] text-mid-gray uppercase tracking-widest">Logo</span>
      )}
    </div>
    <p className="text-white/90 text-xs font-bold uppercase tracking-wider">{name}</p>
    {description && <p className="text-mid-gray text-[10px] mt-1 hidden md:block">{description}</p>}
  </motion.div>
);

const Partners = () => {
  // Arrays using the imported variables directly
  const coePartners = [
    { name: "GADVASU", img: gadvasuLogo },
    { name: "IKGPTU", img: ikgptuLogo },
    { name: "CGC University, Mohali", img: cgcLogo },
    { name: "GNDEC", img: gndecLogo },
    { name: "Seshadripuram College", img: seshadripuramLogo },
    { name: "IIT Ropar (TBIF)", img: iitRoparLogo },
    { name: "PCTE", img: pcteLogo },
    { name: "CT University", img: ctUnivLogo }
  ];

  const mouPartners = [
    { name: "Chitkara University", img: chitkaraLogo },
    { name: "D-Street, SRCC", img: dStreetLogo },
    { name: "Thapar University", img: thaparLogo },
    { name: "MSME Chamber", img: msmeLogo },
    { name: "IIT Tirupati", img: iitTirupatiLogo },
    { name: "Sharda University", img: shardaLogo },
    { name: "Shiv Nadar University", img: shivNadarLogo },
    { name: "Institution of Engineers", img: ioeLogo },
    { name: "Punjab University", img: punjabUnivLogo },
    { name: "Amity University", img: amityLogo }
  ];

  const globalPartners = [
    { name: "Indo-Canadian Arts", img: indoCanadianLogo },
    { name: "Greenwich University", img: greenwichLogo },
    { name: "CPA Australia", img: cpaLogo },
    { name: "Circolo Didattico Italy", img: circoloLogo }
  ];

  const workshopVenues = [
    { name: "Bhartiyam College", img: bhartiyamLogo },
    { name: "JIMS Delhi", img: jimsLogo },
    { name: "Chandigarh Univ", img: chandigarhUnivLogo },
    { name: "ICSI", img: icsiLogo },
    { name: "IIT Delhi", img: iitDelhiLogo },
    { name: "Punjab Ag Univ", img: pauLogo },
    { name: "LPU", img: lpuLogo },
    { name: "NDIM", img: ndimLogo }
  ];

  return (
    <div className="w-full pb-24 bg-primary overflow-hidden font-sans">
      
      {/* HEADER SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="pt-24 pb-16 px-6 max-w-site mx-auto text-center"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Partners & Institutions</h1>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[2px] bg-gold mx-auto mb-6"
        ></motion.div>
        <p className="text-mid-gray max-w-2xl mx-auto tracking-widest text-sm uppercase">
          Collaborating for global impact and excellence
        </p>
      </motion.section>

      {/* SECTION 1: COE & TBI Partners */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          {/* Main COE Logo */}
          <div className="inline-block border border-gold-dark p-4 mb-6 bg-charcoal hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] transition-shadow">
            <img 
              src={mainCoeLogo} 
              alt="MENTORx COE Logo" 
              className="h-20 object-contain"
            />
          </div>
          <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4">COE & TBI University Partners</h2>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
            MENTORx has its COE Centre of Excellence and TBI Technology Business Incubator at various Institutions / Universities to foster entrepreneurship by jointly working towards facilitating young students and early stage start-ups.
          </p>
        </motion.div>
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {coePartners.map((partner, index) => (
            <LogoCard key={index} {...partner} />
          ))}
        </div>
      </motion.section>

      <div className="h-[1px] bg-gold-dark/30 w-full max-w-site mx-auto mb-20"></div>

      {/* SECTION 2: MoU Partner Institutions */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4">MoU Partner Institutions (India)</h2>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
            We have signed MoU with various Institutions / Universities to foster entrepreneurship and support those who have exhibited strong entrepreneurial interests.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mouPartners.map((partner, index) => (
            <LogoCard key={index} {...partner} />
          ))}
        </div>
      </motion.section>

      <div className="h-[1px] bg-gold-dark/30 w-full max-w-site mx-auto mb-20"></div>

      {/* SECTION 3: Global University Partners */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4">Global University Partners</h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {globalPartners.map((partner, index) => (
            <LogoCard key={index} {...partner} />
          ))}
        </div>
      </motion.section>

      <div className="h-[1px] bg-gold-dark/30 w-full max-w-site mx-auto mb-20"></div>

      {/* SECTION 4: Workshop Venues */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4">Workshop Venues</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {workshopVenues.map((venue, index) => (
            <motion.div 
              variants={itemFade}
              key={index} 
              className="bg-[#111111] border-l-4 border-gold-dark p-6 flex items-center hover:bg-charcoal transition-colors group"
            >
              <div className="w-12 h-12 bg-primary border border-gold/20 rounded-full flex-shrink-0 flex items-center justify-center mr-6 overflow-hidden">
                {venue.img ? (
                  <img 
                    src={venue.img} 
                    alt={venue.name}
                    className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform"
                  />
                ) : (
                  <span className="text-[8px] text-mid-gray">IMG</span>
                )}
              </div>
              <p className="text-white/90 text-sm font-bold uppercase tracking-wider">{venue.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default Partners;