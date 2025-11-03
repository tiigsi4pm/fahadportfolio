'use client';

import { useState, useEffect, lazy, Suspense } from 'react';

// Dynamically import components
const Orb = lazy(() => import('./components/orb'));
const Header = lazy(() => import('./components/Header'));
const Section = lazy(() => import('./components/Section'));
const SkillBar = lazy(() => import('./components/SkillBar'));
const ProjectCard = lazy(() => import('./components/ProjectCard'));

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Orb Background - Full screen */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <Orb 
            hue={0}
            hoverIntensity={0.2}
            rotateOnHover={true}
          />
        </Suspense>
      </div>

      {/* Dark overlay for readability */}
      <div className="fixed inset-0 z-1 bg-black/40" />

      {/* Content */}
      <div className="relative z-10">
        <Suspense fallback={<div className="h-16 bg-transparent" />}>
          <Header />
        </Suspense>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Fahad's portfolio
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-6">
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              I build amazing web experiences with modern technologies
            </p>
          </div>
        </section>

        {/* About Section */}
        <Suspense fallback={<div className="h-96 bg-transparent" />}>
          <Section title="About Me">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate full-stack developer with 3+ years of experience building modern web applications. 
                I love creating efficient, scalable solutions with great user experiences.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-8 text-gray-400">
                <div>📍 New York, NY</div>
                <div>📧 alex.johnson@email.com</div>
              </div>
            </div>
          </Section>
        </Suspense>

        {/* Skills Section */}
        <Suspense fallback={<div className="h-96 bg-transparent" />}>
          <Section title="Skills">
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
        </Suspense>

        {/* Projects Section */}
        <Suspense fallback={<div className="h-96 bg-transparent" />}>
          <Section title="Projects">
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
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<div className="h-96 bg-transparent" />}>
          <Section title="Get In Touch">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-300 text-lg mb-8">
                Interested in working together? Let's talk about your project!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Me
                </button>
                <button className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Download Resume
                </button>
              </div>
            </div>
          </Section>
        </Suspense>

        {/* Footer */}
        <Suspense fallback={<div className="h-20 bg-transparent" />}>
          <footer className="border-t border-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
              <p>© 2024 Alex Johnson. All rights reserved.</p>
            </div>
          </footer>
        </Suspense>
      </div>
    </main>
  );
}
