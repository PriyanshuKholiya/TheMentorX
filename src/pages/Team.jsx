import React from 'react';
import { motion } from 'framer-motion';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Reusable component for the standard team grid (CAB & Mentors)
const TeamCard = ({ name, role, bio, imageRef }) => (
  <div className="bg-[#111111] border-t-[3px] border-gold group hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] transition-all duration-500 flex flex-col h-full">
    {/* Image container with grayscale & gold overlay hover effect */}
    <div className="aspect-square bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center text-mid-gray text-xs border-b border-gold/20 p-4 text-center">
         {imageRef}
      </div>
      <div className="absolute inset-0 bg-gold/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    
    <div className="p-8 flex-grow flex flex-col">
      <h3 className="font-serif text-2xl text-gold mb-2">{name}</h3>
      <p className="text-white/90 text-xs font-bold uppercase tracking-[2px] mb-4 border-b border-gold-dark/30 pb-4">{role}</p>
      <p className="text-mid-gray text-sm leading-relaxed flex-grow">{bio}</p>
    </div>
  </div>
);

const Team = () => {
  const cabMembers = [
    {
      name: "Dr. Gaurav Arora",
      role: "Director — MENTORx | CTO, CyberOne Technology",
      bio: "Icon of the year — Excellence in Mentoring Technology Startups. Over 22+ years of international experience in technology, service delivery, management and mentorship. One of the earlier adapters in India for Artificial Intelligence from the late 90s.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Mrs. Rajni Bector",
      role: "Member — Corporate Advisory Board | Founder Chairperson, Cremica",
      bio: "A Self Made Entrepreneur, the woman of substance who started an enterprise in 1978, unveiling her love for baking. President Awardee, as well as conferred with the highest honor by SBI. Mrs. Bector followed her passion to build an 800 crore industry.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Ms. Neeta Sood",
      role: "Member — Corporate Advisory Board | Philanthropist",
      bio: "The renowned social activist of Ludhiana. Former President, Laxmi Ladies Club. With her life dedicated to 'live for a cause', she is associated with numerous causes for the underprivileged, being part of more than 50+ NGOs.",
      imageRef: "[PicturePlaceholder52.jpg]"
    }
  ];

  const mentors = [
    {
      name: "Dr. Harish Chaudhry",
      role: "Honorary Mentor | Professor, IIT Delhi",
      bio: "Has conducted more than 100 training programs in expert systems, marketing & sales, behavioral sciences and technology management. Also conducted international study tours for school principals.",
      imageRef: "[PicturePlaceholder51.jpg]"
    },
    {
      name: "Dr. Madhavi Advani",
      role: "International Mentor — MENTORx Singapore",
      bio: "A Luxury Consultant in the world of Art, Real Estate, Hospitality, Bespoke Events and Destination Weddings (Italy). Madhavi bridges the gap from lifestyle and luxury that only the rich understand!",
      imageRef: "[PicturePlaceholder51.jpg]"
    },
    {
      name: "Dr. Chhaya Dhar Sinha",
      role: "Honorary Mentor — MENTORx",
      bio: "An experienced HR professional, providing thought leadership & coaching to a diverse set of stakeholders at LEGO. Committed to driving transformational change through a meritocratic workplace culture.",
      imageRef: "[PicturePlaceholder51.jpg]"
    }
  ];

  return (
    <div className="w-full pb-24 bg-primary overflow-hidden">
      
      {/* HEADER SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="pt-24 pb-16 px-6 max-w-site mx-auto text-center"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Our Team</h1>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[2px] bg-gold mx-auto mb-6"
        ></motion.div>
        <p className="text-mid-gray max-w-2xl mx-auto tracking-widest text-sm uppercase">
          The brilliant minds driving global transformation
        </p>
      </motion.section>

      {/* SECTION 1: FOUNDERS (Hero Style Cards) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <motion.h2 variants={fadeInUp} className="text-gold text-xs uppercase tracking-[4px] font-bold mb-8 text-center">Founders</motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Dr. Munish Jindal */}
          <motion.div variants={itemFade} className="bg-[#111111] border-t-[3px] border-gold p-8 md:p-12 group hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-500">
            <div className="w-48 h-48 mx-auto rounded-full bg-charcoal border-4 border-gold/30 mb-8 overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center text-mid-gray text-[10px] p-4 text-center grayscale group-hover:grayscale-0 transition-all">
                  Dr. Munish Jindal<br/>(PicturePlaceholder15.jpg)
               </div>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-3xl text-gold mb-2">Dr. Munish Jindal</h3>
              <p className="text-white/90 text-sm font-bold uppercase tracking-[2px] mb-6">Founding President — MENTORx</p>
              <p className="text-mid-gray text-sm leading-relaxed text-left">
                A Serial Entrepreneur, Robostronaut, International Business Consultant, Philanthropist, Fashion Icon, Brand Ambassador, Intellectual Speaker, Corporate Trainer, Mentor & Angel Investor. Conferred with highest civilian honor the "Karmaveer Chakra" by United Nations-iCongo and the "Noble Asian of the Year 2018". Dr. Munish Jindal is the one who launched the concept of "Educate, Empower, Elevate" in India.
              </p>
            </div>
          </motion.div>

          {/* Dr. Nancy Juneja */}
          <motion.div variants={itemFade} className="bg-[#111111] border-t-[3px] border-gold p-8 md:p-12 group hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-500">
            <div className="w-48 h-48 mx-auto rounded-full bg-charcoal border-4 border-gold/30 mb-8 overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center text-mid-gray text-[10px] p-4 text-center grayscale group-hover:grayscale-0 transition-all">
                  Dr. Nancy Juneja<br/>(PicturePlaceholder9.jpg)
               </div>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-3xl text-gold mb-2">Dr. Nancy Juneja</h3>
              <p className="text-white/90 text-sm font-bold uppercase tracking-[2px] mb-6">Co-Founder — MENTORx</p>
              <p className="text-mid-gray text-sm leading-relaxed text-left">
                An Educationist, Influencer, Communication Strategist, Leadership Mentor, Start-Up Coach, Keynote Speaker and Social Activist. Conferred with highest civilian honor the "Karmaveer Chakra" by United Nations-iCongo and the "Promising Indian of the Year 2019". A highly acclaimed trainer with 15+ years of experience delivering multiple success breakthroughs in domain areas of youth empowerment, woman empowerment and start-up success.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* SECTION 2: CxO */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="px-6 max-w-site mx-auto mb-20"
      >
         <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-8 text-center">Executive Leadership</h2>
         {/* max-w-sm constraint aligns this card perfectly with the grids below */}
         <div className="max-w-sm mx-auto">
            <TeamCard 
              name="Dr. Payal Garg"
              role="Chief Experience Officer — MENTORx"
              bio="Conferred with the Award of Leadership 2020, Global Branding Award 2021, and Dr. Sarvepalli Radhakrishnan Award. A Doctorate in Marketing and Business Management. Being a Business Development professional, she understands the core of each and every business and has emerged as a guide for startups and young entrepreneurs."
              imageRef="[PicturePlaceholder52.jpg]"
            />
         </div>
      </motion.section>

      <div className="h-[1px] bg-gold-dark/30 w-full max-w-site mx-auto mb-20"></div>

      {/* SECTION 3: CORPORATE ADVISORY BOARD */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <motion.h2 variants={fadeInUp} className="text-gold text-xs uppercase tracking-[4px] font-bold mb-12 text-center">Corporate Advisory Board</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabMembers.map((member, index) => (
            <motion.div variants={itemFade} key={index}>
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="h-[1px] bg-gold-dark/30 w-full max-w-site mx-auto mb-20"></div>

      {/* SECTION 4: OUR MENTORS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto"
      >
        <motion.h2 variants={fadeInUp} className="text-gold text-xs uppercase tracking-[4px] font-bold mb-12 text-center">Our Mentors</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div variants={itemFade} key={index}>
              <TeamCard {...mentor} />
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default Team;