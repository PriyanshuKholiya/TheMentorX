import React from 'react';
import { motion } from 'framer-motion';

// Import the specific image
import risingBharatImg from '../assets/images/socialimpact/risingbharat.jpg';

const SocialImpact = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="w-full pb-24 bg-primary overflow-hidden font-sans min-h-screen">
      
      {/* HEADER SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="pt-24 pb-16 px-6 max-w-site mx-auto text-center"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 italic tracking-tight">
          Social <span className="text-gold">Impact</span>
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[2px] bg-gold mx-auto mb-6"
        ></motion.div>
        <p className="text-mid-gray max-w-2xl mx-auto tracking-widest text-sm uppercase">
          Empowering communities and elevating the world
        </p>
      </motion.section>

      {/* SECTION 1: RISING BHARAT FOUNDATION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        // FIXED: Changed max-w-site to max-w-5xl to reduce the overall card width
        className="px-6 max-w-5xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="flex flex-col border border-gold-dark/40 bg-[#0A0A0A] shadow-2xl overflow-hidden">
          
          {/* Top: Foundation Image */}
          <div className="w-full relative group bg-[#050505]">
            <img 
              src={risingBharatImg} 
              alt="Rising Bharat Foundation" 
              className="w-full h-auto object-contain block"
            />
            {/* Subtle gold tint overlay on hover */}
            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* Bottom: Content */}
          <div className="p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden border-t border-gold-dark/40">
            {/* Decorative Quotes */}
            <div className="absolute -top-10 right-12 text-gold-dark/10 text-[180px] font-serif leading-none hidden sm:block select-none pointer-events-none">"</div>
            
            <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4 relative z-10">MENTORx Social Endeavour</h2>
            <h3 className="font-serif text-4xl text-white mb-8 italic relative z-10">Rising Bharat Foundation</h3>
            
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-3xl relative z-10 font-light">
              MENTORx Social Endeavour — the 'Rising Bharat Foundation' — to shallow barriers of borders and language. We decide to educate, empower and elevate the world by the immense learning of inherent past wisdom of our country.
            </p>

            <div className="border-t-2 border-gold pt-8 mt-auto relative z-10 w-full max-w-lg">
              <p className="text-gold-light italic font-serif text-2xl tracking-wide">
                Educate <span className="text-gold-dark mx-3">|</span> Empower <span className="text-gold-dark mx-3">|</span> Elevate
              </p>
            </div>
          </div>

        </motion.div>
      </motion.section>

    </div>
  );
};

export default SocialImpact;