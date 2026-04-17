import React from 'react';
import { motion } from 'framer-motion';

// Import the new optimized image with correct headspace
import founderImg from '../assets/images/about/dr-munish-jindal.jpg'; 

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
  <div className="bg-[#111111] border-t-[3px] border-gold group hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] transition-all duration-500 flex flex-col h-full overflow-hidden">
    {/* Image container with gold overlay hover effect - Grayscale removed */}
    <div className="aspect-square bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 transition-all duration-500 flex items-center justify-center text-mid-gray text-xs border-b border-gold/20 p-4 text-center">
         {imageRef}
      </div>
      {/* Subtle gold highlight on hover */}
      <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
      role: "Member — CAB | Founder Chairperson, Cremica",
      bio: "A Self Made Entrepreneur, the woman of substance who started an enterprise in 1978, unveiling her love for baking. President Awardee, as well as conferred with the highest honor by SBI. Mrs. Bector followed her passion to build an 800 crore industry.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Ms. Neeta Sood",
      role: "Member — CAB | Philanthropist",
      bio: "The renowned social activist of Ludhiana. Former President, Laxmi Ladies Club. With her life dedicated to 'live for a cause', she is associated with numerous causes for the underprivileged, being part of more than 50+ NGOs.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Dr. Arvind Dhingra",
      role: "Member — CAB | Executive Director, STEP-GNDEC",
      bio: "Executive Director of Science & Technology Entrepreneurs' Park. Mentoring multiple startups. Professor at Guru Nanak Dev Engineering College, Ludhiana. A young technocrat with varied experience of industry and academics of about 15+ years.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Dr. R S Sethi",
      role: "Member — CAB | Director, Vety & Livestock Innovation",
      bio: "A distinguished academician and researcher in the field of Veterinary and Animal Sciences. With over 27 years of professional experience, Dr. Sethi has made lasting contributions shaping the future of veterinary biotechnology.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Dr. Ati Priye",
      role: "Member — CAB | CEO, VentureNest — CGC University",
      bio: "Leading a rapidly expanding incubation ecosystem supporting 80+ startups, backed by 50+ strategic alliances with VC funds. With 15+ years of experience, he has built incubation centres from zero.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Dr. Mrigender S Bedi",
      role: "Member — CAB | Assistant Director, BIC — IKGPTU",
      bio: "A distinguished academician and researcher in the field of Placements and Entrepreneurship. Playing a key role in designing and implementing programs and initiatives to support startups and entrepreneurs.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Mr. Amit Madaan",
      role: "Member — CAB | Chairman, Int. Board of Startup",
      bio: "A startup ecosystem catalyst focusing on supporting & amplifying entrepreneurial growth. Over 22 years of expertise in marketing strategy, brand positioning, and enabling businesses to grow exponentially.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Mr. Sahil Makkar",
      role: "Member — CAB | MD, Bharat Angels Network",
      bio: "An ecosystem enabler fostering startup growth and investment. A Chartered Accountant (CA) and investment expert, specializing in venture debt, startup consulting, and bridging the digital divide.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Dr. Santanu Das",
      role: "Member — CAB | Secretary, North Bangalore Science Forum",
      bio: "A Biotechnologist by Profession and Environmentalist by Passion. A master trainer for waste segregation, disposal and management for smart cities. Nurturing young minds towards creating a livable planet.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Dr. Sanjiv Layek",
      role: "Member — CAB | Executive Secretary, WASME",
      bio: "World Association for Small and Medium Enterprises — an International Organisation having members in 112 countries. Having top-notch network of over 15 Ministries and 125 CEOs. Helped in funding 5 start-ups.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Dr. J K Sharma",
      role: "Member — CAB | Director, CT University",
      bio: "Convener at IPFC Steering Committee and Co-Chairman Education Committee of PHD Chamber of Commerce & Industries, Punjab. Former Chief Project Officer at IIT Ropar TBIF.",
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
    },
    {
      name: "Ms. Minnku Buttar",
      role: "Honorary Mentor | State President, WICCI",
      bio: "Mindful Practitioner, Certified Pranic Healer, and 'Emotion code' practitioner. Brings a diverse range of narratives and experiences and speaks Spanish & Malay, English, Hindi, and Punjabi.",
      imageRef: "[PicturePlaceholder51.jpg]"
    },
    {
      name: "Ms. Shellie Robinson",
      role: "Honorary Mentor — MENTORx USA",
      bio: "Created a media and live virtual business media networking platform dedicated to helping those in need, offering world economic support through a network of ethical business humanitarians.",
      imageRef: "[PicturePlaceholder51.jpg]"
    },
    {
      name: "Dr. Kusum Kanwar",
      role: "Honorary Mentor | Edupreneur & MD",
      bio: "Chairperson — Shield Yourself. Specialist in introduction of best global practices, 360-degree curriculum implementation, teacher training program, special needs cell and sports & performing arts.",
      imageRef: "[PicturePlaceholder51.jpg]"
    },
    {
      name: "Mr. Rohit Kumar",
      role: "Honorary Mentor",
      bio: "13 years of experience in Partnerships & Stakeholder Engagement. Expertise in sales and marketing with industry's associations like Railways, Govt. Ministries, UNDP and other leading government agencies.",
      imageRef: "[PicturePlaceholder51.jpg]"
    },
    {
      name: "Dr. Mehak Bansal",
      role: "Honorary Mentor | Senior Consultant Pediatrician",
      bio: "More than 15 years of experience. Specializes in critical care, neonatology, and pediatric pulmonology. Recognized for her work in managing high-risk neonatal cases.",
      imageRef: "[PicturePlaceholder51.jpg]"
    },
    {
      name: "Ms. Anima Mishra",
      role: "Honorary Mentor | Founder & CEO, Ekara Financial",
      bio: "A financial advisory firm established in 2019. A seasoned financial expert specializing in debt syndication, capital raising, and financial strategy. Aiding startups & MSMEs with financial planning.",
      imageRef: "[PicturePlaceholder46.jpg]"
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
          <motion.div variants={itemFade} className="bg-[#111111] border-t-[3px] border-gold p-8 md:p-12 group hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-500 overflow-hidden">
            <div className="w-48 h-48 mx-auto rounded-full bg-charcoal border-4 border-gold/30 mb-8 overflow-hidden relative">
               {/* THE FIX: grayscale removed. 
                  object-top added to force alignment to the top of the image (preventing top crop).
               */}
               <img 
                 src={founderImg} 
                 alt="Dr. Munish Jindal" 
                 className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
               />
               {/* Gold highlight on hover */}
               <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          <motion.div variants={itemFade} className="bg-[#111111] border-t-[3px] border-gold p-8 md:p-12 group hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-500 overflow-hidden">
            <div className="w-48 h-48 mx-auto rounded-full bg-charcoal border-4 border-gold/30 mb-8 overflow-hidden relative">
               {/* Grayscale removed from placeholder */}
               <div className="absolute inset-0 flex items-center justify-center text-mid-gray text-[10px] p-4 text-center transition-all">
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