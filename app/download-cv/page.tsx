'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

export default function DownloadCV() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const router = useRouter();

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDownloading(false);
            // In a real app, you would trigger the actual file download here
            const link = document.createElement('a');
            link.href = '/cv-fahad-farhan.pdf';
            link.download = 'Fahad_Farhan_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code', 'Postman'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Agile Methodology', 'Communication', 'Time Management'] }
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Developed and maintained web applications using React, Node.js, and MongoDB.'
    },
    {
      title: 'Frontend Developer',
      company: 'Startup Inc',
      period: '2022 - 2023',
      description: 'Built responsive user interfaces and collaborated with backend team on API integration.'
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2021 - 2022',
      description: 'Started my career building websites and web applications for various clients.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      period: '2018 - 2022',
      description: 'Graduated with honors. Focus on web technologies and software engineering.'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Coding Academy',
      period: '2020',
      description: 'Intensive 6-month program covering modern web development technologies.'
    }
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 to-black text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Download My CV
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get a comprehensive overview of my skills, experience, and qualifications.
          </p>
          
          {/* Download Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
            >
              {isDownloading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Downloading... {downloadProgress}%
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV (PDF)
                </>
              )}
            </button>
            
            <button
              onClick={() => router.push('/contact')}
              className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Contact Me
            </button>
          </div>

          {/* Progress Bar */}
          {isDownloading && (
            <div className="max-w-md mx-auto">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-linear-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* CV Preview Sections */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Skills Preview */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Skills & Technologies
              </h2>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Preview */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-purple-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Experience Preview */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Work Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Preview */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">fahadfarhaan9@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+252654006888/+252657831647</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">Hargeisa, somaliland</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span className="text-gray-300">github.com/VAHTKA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-linear-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/contact')}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Me
              </button>
              <button
                onClick={() => router.push('/')}
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}