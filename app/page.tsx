'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Orb from './components/orb';
import Header from './components/Header';
import Section from './components/Section';
import SkillBar from './components/SkillBar';
import ProjectCard from './components/ProjectCard';
import TrueFocus from '../components/TrueFocus';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Orb Background */}
      <div className="fixed inset-0 z-0">
        <Orb hue={0} hoverIntensity={0.2} rotateOnHover={true} />
      </div>

      {/* Dark Overlay for Readability */}
      <div className="fixed inset-0 z-1 bg-black/30" />

      {/* Content */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Fahad Farhan Adan 
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-6">
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              I build amazing web experiences with modern technologies
            </p>
          </div>
        </section>

      {/* TrueFocus Standalone Section */}
<section className="py-20 bg-linear-to-br from-gray-900 to-black">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white mb-4">
        Experience True Focus
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
       Hey! i'm glad your reveweing my portfolio , My name is Fahad and a Fullstack developer, And this is my portfolio :)
      </p>
    </div>
    
    <div className="flex justify-center items-center min-h-[200px]">
      <TrueFocus 
        sentence="Fullstack developer"  
        blurAmount={8}
        borderColor="#00ff88"
        glowColor="rgba(0, 255, 136, 0.6)"
        animationDuration={0.4}
        pauseBetweenAnimations={1.5}
      />
    </div>
  </div>
</section>

        {/* Skills Section */}
        <Section title="Skills" id="skills">  
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Frontend</h3>
              <div className="space-y-4">
                <SkillBar skill="JavaScript" percentage={90} />
                <SkillBar skill="TypeScript" percentage={85} />
                <SkillBar skill="React" percentage={88} />
                <SkillBar skill="Next.js" percentage={82} />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Backend</h3>
              <div className="space-y-4">
                <SkillBar skill="Node.js" percentage={85} />
                <SkillBar skill="Python" percentage={78} />
                <SkillBar skill="MongoDB" percentage={80} />
                <SkillBar skill="PostgreSQL" percentage={75} />
              </div>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Projects" id="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ProjectCard
              title="E-Commerce Platform"
              description="Full-stack e-commerce solution with React, Node.js, and MongoDB"
              technologies={["React", "Node.js", "MongoDB", "Stripe"]}
            />
            <ProjectCard
              title="Task Management App"
              description="Collaborative task management tool with real-time updates"
              technologies={["Next.js", "TypeScript", "Socket.io", "PostgreSQL"]}
            />
            <ProjectCard
              title="Weather Dashboard"
              description="Real-time weather monitoring dashboard with analytics"
              technologies={["Vue.js", "Express", "Chart.js", "API Integration"]}
            />
          </div>
        </Section>

        {/* Contact Section */}
        <Section title="Get In Touch" id="contact">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-300 text-lg mb-8">
              Interested in working together? Let's talk about your project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => router.push('/contact')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Me
              </button>
              <button 
                onClick={() => router.push('/download-cv')}
                className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Download Resume
              </button>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 bg-black/20">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
            <p>© 2025 Fahad Farhan . All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
