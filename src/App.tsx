import React, { useState, useEffect } from 'react';
import { NewspaperFrontPage } from './components/NewspaperFrontPage';
import { NewspaperPageShell } from './components/NewspaperPageShell';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { EducationSection } from './components/EducationSection';
import { BeyondTechSection } from './components/BeyondTechSection';
import { ContactSection } from './components/ContactSection';
import { ResumeView } from './components/ResumeView';
import { PortfolioPageId } from './data/portfolioData';

const VALID_PAGES: PortfolioPageId[] = [
  'home',
  'about',
  'skills',
  'projects',
  'achievements',
  'education',
  'beyond',
  'contact',
  'resume',
];

function getInitialPageFromHash(): PortfolioPageId {
  if (typeof window === 'undefined') return 'home';
  const raw = window.location.hash.replace('#', '').toLowerCase();
  if (VALID_PAGES.includes(raw as PortfolioPageId)) {
    return raw as PortfolioPageId;
  }
  return 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<PortfolioPageId>(getInitialPageFromHash);

  const handleNavigatePage = (pageId: PortfolioPageId) => {
    setActivePage(pageId);
    if (typeof window !== 'undefined') {
      const nextHash = pageId === 'home' ? '' : `#${pageId}`;
      window.history.pushState(null, '', nextHash || window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onPopState = () => {
      setActivePage(getInitialPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <div className="min-h-screen bg-newsprint text-[#111111] antialiased">
      {activePage === 'home' && (
        <NewspaperFrontPage onNavigatePage={handleNavigatePage} />
      )}

      {activePage === 'about' && (
        <NewspaperPageShell
          pageId="about"
          sectionNumber="01"
          headline="The Person Behind The Code"
          subheadline="Discovering my background, interests, academic mindset, and continuous journey into technology and practical software engineering."
          categoryTag="SECTION 01 // EDITORIAL PROFILE"
          onNavigateHome={() => handleNavigatePage('home')}
        >
          <AboutSection />
        </NewspaperPageShell>
      )}

      {activePage === 'skills' && (
        <NewspaperPageShell
          pageId="skills"
          sectionNumber="02"
          headline="The Engineer's Toolkit"
          subheadline="Structured technical proficiencies across programming languages, data structures, algorithms, frameworks, developer tools, and local AI engineering."
          categoryTag="SECTION 02 // TECHNICAL COMPETENCIES"
          onNavigateHome={() => handleNavigatePage('home')}
        >
          <SkillsSection />
        </NewspaperPageShell>
      )}

      {activePage === 'projects' && (
        <NewspaperPageShell
          pageId="projects"
          sectionNumber="03"
          headline="Ideas Become Reality"
          subheadline="Engineering showcases: JARVIS Python AI Desktop Assistant (v4.5) and Django Hospital Management System."
          categoryTag="SECTION 03 // FEATURED ENGINEERING WORK"
          onNavigateHome={() => handleNavigatePage('home')}
        >
          <ProjectsSection />
        </NewspaperPageShell>
      )}

      {activePage === 'achievements' && (
        <NewspaperPageShell
          pageId="achievements"
          sectionNumber="04"
          headline="Milestones That Matter"
          subheadline="Smart India Hackathon team qualification and university scholastic performance records."
          categoryTag="SECTION 04 // HONOURS & RECORD"
          onNavigateHome={() => handleNavigatePage('home')}
        >
          <AchievementsSection />
        </NewspaperPageShell>
      )}

      {activePage === 'education' && (
        <NewspaperPageShell
          pageId="education"
          sectionNumber="05"
          headline="Knowledge In The Making"
          subheadline="Vertical academic timeline at Jain Deemed-to-be University (B.Tech CSE Artificial Intelligence & Machine Learning) and pre-university distinctions."
          categoryTag="SECTION 05 // ACADEMIC PROGRESSION"
          onNavigateHome={() => handleNavigatePage('home')}
        >
          <EducationSection />
        </NewspaperPageShell>
      )}

      {activePage === 'beyond' && (
        <NewspaperPageShell
          pageId="beyond"
          sectionNumber="06"
          headline="Beyond Technology — Court Discipline"
          subheadline="Badminton as an extracurricular discipline: teamwork, stamina, consistency, and sportsmanship."
          categoryTag="SECTION 06 // EXTRACURRICULAR"
          onNavigateHome={() => handleNavigatePage('home')}
        >
          <BeyondTechSection />
        </NewspaperPageShell>
      )}

      {activePage === 'contact' && (
        <NewspaperPageShell
          pageId="contact"
          sectionNumber="07"
          headline="Let's Connect"
          subheadline="Direct correspondence for software development opportunities, academic collaborations, and local AI projects."
          categoryTag="SECTION 07 // CORRESPONDENCE DISPATCH"
          onNavigateHome={() => handleNavigatePage('home')}
        >
          <ContactSection onNavigatePage={handleNavigatePage} />
        </NewspaperPageShell>
      )}

      {activePage === 'resume' && (
        <NewspaperPageShell
          pageId="resume"
          sectionNumber="DOC"
          headline="Curriculum Vitae"
          subheadline="Complete professional and academic credentials formatted in a clean, black-and-white printable and downloadable theme."
          categoryTag="OFFICIAL DOCUMENT // RESUME"
          onNavigateHome={() => handleNavigatePage('home')}
        >
          <ResumeView onBack={() => handleNavigatePage('home')} />
        </NewspaperPageShell>
      )}
    </div>
  );
}
