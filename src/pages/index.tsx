import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const introductionRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = [
    { id: "introduction", ref: introductionRef },
    { id: "skills", ref: skillsRef },
    { id: "experience", ref: experienceRef },
    { id: "projects", ref: projectsRef },
    { id: "portfolio", ref: portfolioRef },
    { id: "education", ref: educationRef },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = sectionRefs.find((section) => section.id === id);
    if (section?.ref.current) {
      section.ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <header className="fixed top-0 flex h-60 w-full items-center justify-around bg-bg-secondary px-30">
        {sectionRefs.map((section) => (
          <button
            key={section.id}
            onClick={() => handleScrollToSection(section.id)}
            className={`text-lg font-semibold ${
              activeSection === section.id ? "text-text-primary" : "text-text-secondary"
            }`}
          >
            {section.id === "introduction" && "자기소개"}
            {section.id === "skills" && "기술스택"}
            {section.id === "experience" && "경력"}
            {section.id === "projects" && "프로젝트"}
            {section.id === "portfolio" && "포트폴리오"}
            {section.id === "education" && "교육"}
          </button>
        ))}
      </header>

      <main className="pt-60">
        <div id="introduction" ref={introductionRef} className="h-screen scroll-mt-60 border-b p-8">
          <h2 className="text-2xl font-semibold">자기소개</h2>
        </div>

        <div id="skills" ref={skillsRef} className="h-screen scroll-mt-60 border-b p-8">
          <h2 className="text-2xl font-semibold">기술스택</h2>
        </div>

        <div id="experience" ref={experienceRef} className="h-screen scroll-mt-60 border-b p-8">
          <h2 className="text-2xl font-semibold">경력</h2>
        </div>

        <div id="projects" ref={projectsRef} className="h-screen scroll-mt-60 border-b p-8">
          <h2 className="text-2xl font-semibold">프로젝트</h2>
        </div>

        <div id="portfolio" ref={portfolioRef} className="h-screen scroll-mt-60 border-b p-8">
          <h2 className="text-2xl font-semibold">포트폴리오</h2>
        </div>

        <div id="education" ref={educationRef} className="h-screen scroll-mt-60 p-8">
          <h2 className="text-2xl font-semibold">교육</h2>
        </div>
      </main>
    </div>
  );
}
