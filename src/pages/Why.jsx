import React from 'react';

const Why = () => {
  // Data for the Six Pillars 
  const pillars = [
    {
      id: "01",
      title: "Rising People",
      desc: "MENTORx is the fastest-growing global network and leveraging opportunities for masses. Get the right mentoring at right stage of your life with seasoned Entrepreneurs, CEO, CXO, Directors, Educators, Professionals, Investors, Mentors and Experts — even to find Partners for your business."
    },
    {
      id: "02",
      title: "Advisory Board",
      desc: "We are mentoring and guiding emerging startups and growth companies on how to grow and scale, as well as finding ways to connect them to the people (mentors, investors, media) who can make all the difference. \"Find one or Be An Advisor\""
    },
    {
      id: "03",
      title: "Mentoring Services",
      desc: "MENTORx serves you with Traditional One-on-one Mentoring, Distance Mentoring, or Group Mentoring. Our mentors can help you build solutions to work problems creatively and efficiently and bring forth their experiential knowledge to tackle situations."
    },
    {
      id: "04",
      title: "Skill Building Workshops",
      desc: "Individuals constantly need to be learning, upgrading and growing. The best way to update yourself with new knowledge is to share your views and experiences with the right group of people. An added bonus is meeting other like-minded entrepreneurs to exchange ideas."
    },
    {
      id: "05",
      title: "Fund Raising and Other Mitigation",
      desc: "With the help of our experienced members, we can prepare you for the pitch deck and help you have a good preparation to show to your investor. We require modification in the Business Plan and IM."
    },
    {
      id: "06",
      title: "Global Reach",
      desc: "The dream of every entrepreneur is to establish their business and gain a global footprint. But to actually achieve them requires hard work and a focused strategy. The company would have to grow by acquisitions or joint ventures to achieve global reach."
    }
  ];

  // Data for the Success Roadmap
  const roadmapSteps = [
    { step: "STEP 1", title: "You Join MENTORx" },
    { step: "STEP 2", title: "We Identify Your Needs", desc: "Bringing you and experts together on the common digitally enabled platform." },
    { step: "STEP 3", title: "Get Globalized Framework", desc: "To provide you a global platform to share resources; being your Consistent Mentoring, International Outreach Partner & Promotional Partner." },
    { step: "STEP 4", title: "Making You More Skilled", desc: "Providing the best of skilled workshops for each community to increase the potential and stability & also providing the scalable growth." },
    { step: "STEP 5", title: "Reprogramming Yourself for Growth", desc: "Realize your Personal & Business Vision & Mission and providing you the guidance, resources & support accordingly." },
    { step: "STEP 6", title: "Reprogramming Yourself for Entrepreneurship Journey", desc: "Revup your Branding & Positioning." },
    { step: "STEP 7", title: "We Plan Your Success" }
  ];

  return (
    <div className="w-full pb-24">
      
      {/* HEADER SECTION */}
      <section className="pt-24 pb-16 px-6 max-w-site mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Why MENTORx</h1>
        <div className="h-[2px] w-24 bg-gold mx-auto mb-6"></div>
      </section>

      {/* SECTION 1: THE SIX PILLARS */}
      <section className="px-6 max-w-site mx-auto mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="bg-[#111111] border-t-2 border-gold-dark hover:border-gold p-8 group transition-all duration-300 hover:-translate-y-1">
              <span className="font-serif text-4xl text-gold/50 group-hover:text-gold transition-colors block mb-4">
                {pillar.id}.
              </span>
              <h3 className="text-white font-bold uppercase tracking-[2px] mb-4 text-sm pb-4 border-b border-gold/20">
                {pillar.title}
              </h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-[1px] bg-gold-dark/30 w-full max-w-site mx-auto mb-20"></div>

      {/* SECTION 2: MEMBER BENEFITS */}
      <section className="px-6 max-w-site mx-auto mb-20">
        <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-12 text-center">Member Benefits</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-[#0A0A0A] border border-gold/30 p-10 text-center hover:bg-charcoal transition-colors">
            <h3 className="font-serif text-2xl text-gold mb-4">Unlock the Key</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Members would be becoming part of one of the most promising learning and globally connecting platform of the country.
            </p>
          </div>
          {/* Benefit 2 */}
          <div className="bg-[#0A0A0A] border border-gold/30 p-10 text-center hover:bg-charcoal transition-colors">
            <h3 className="font-serif text-2xl text-gold mb-4">Value Addition</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              With recommendations of MENTORx you would get a very high standing at various platforms.
            </p>
          </div>
          {/* Benefit 3 */}
          <div className="bg-[#0A0A0A] border border-gold/30 p-10 text-center hover:bg-charcoal transition-colors">
            <h3 className="font-serif text-2xl text-gold mb-4">Globally Visible</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Get an access to various universities, boards, forums, international opportunities where we are already empanelled/engaged.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: YOUR SUCCESS ROADMAP */}
      <section className="bg-charcoal py-20 border-y border-gold-dark/30">
        <div className="max-w-site mx-auto px-6">
          <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-16 text-center">Your Success Roadmap</h2>
          
          <div className="max-w-3xl mx-auto pl-4 md:pl-0">
            {roadmapSteps.map((item, index) => (
              <div key={index} className="relative pl-10 md:pl-16 pb-12 border-l-2 border-gold/30 last:border-l-0 last:pb-0 group">
                {/* Gold Connector Dot */}
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-2 border-gold group-hover:bg-gold transition-colors"></div>
                
                <div className="-mt-1">
                  <span className="text-gold-dark text-xs font-bold uppercase tracking-widest block mb-2">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p className="text-mid-gray text-sm leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Why;