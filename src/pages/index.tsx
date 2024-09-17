import Header from "@/components/header";
import ScrollProgressBar from "@/components/header/ScrollProgressBar";
import Education from "@/components/sections/Education";
// import Experience from "@/components/sections/Experience";
import Introduction from "@/components/sections/Introduction";
import Portfolio from "@/components/sections/Portfolio";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import ViewPort from "@/components/viewport";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect, useRef, useState } from "react";

type VisitCount = {
  total: number;
  today: number;
};

interface ViewPortProps {
  initialVisitCount: VisitCount;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const uri = process.env.NEXT_PUBLIC_SITE_URL;

  try {
    const response = await axios.get(`${uri}/api/visit`);
    const { total, today } = response.data;

    return {
      props: {
        initialVisitCount: {
          total,
          today,
        },
      },
    };
  } catch (error) {
    console.error("방문자 수 가져오기 실패:", error);
    return {
      props: {
        initialVisitCount: {
          total: 0,
          today: 0,
        },
      },
    };
  }
};

export default function Home({ initialVisitCount }: ViewPortProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const introductionRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  // const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = [
    { id: "introduction", ref: introductionRef },
    { id: "skills", ref: skillsRef },
    // { id: "experience", ref: experienceRef },
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
      <ScrollProgressBar />
      <Header
        activeSection={activeSection}
        sectionRefs={sectionRefs}
        handleScrollToSection={handleScrollToSection}
      />

      <main className="pt-60 md:px-160 lg:px-240 xl:px-350">
        <Introduction ref={introductionRef} />
        <Skills ref={skillsRef} />
        {/* <Experience ref={experienceRef} /> */}
        <Projects ref={projectsRef} />
        <Portfolio ref={portfolioRef} />
        <Education ref={educationRef} />
      </main>
      <ViewPort initialVisitCount={initialVisitCount} />
    </div>
  );
}
