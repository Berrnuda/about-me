import Header from "@/components/header";
import ScrollProgressBar from "@/components/header/ScrollProgressBar";
import Education from "@/components/sections/Education";
// import Experience from "@/components/sections/Experience";
import Introduction from "@/components/sections/Introduction";
import Projects from "@/components/sections/Projects";
// import Projects from "@/components/sections/Projects_";
import Skills from "@/components/sections/Skills";
import axios from "axios";
import { GetStaticProps } from "next";
import { useEffect, useRef, useState } from "react";

export interface PreviewData {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface HomeProps {
  previews: PreviewData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const urls = [
    "https://github.com/12Team-Project/git12Team",
    "https://broken-princess-732.notion.site/12-47d7f99cca2d45edbdb711cedfec0f42?pvs=74",
    "https://open-mind-12team.netlify.app",
    "https://github.com/sprint6-team12/arbaba-40owners",
    "https://tan-maize-34b.notion.site/part3-12-2e36b18474754374ba9640bd24dac669?pvs=74",
    "https://the-julge-6-12.vercel.app",
    "https://github.com/Codeit-Sprint-6th-Part-4-Team-6/Teamagotchi",
    "https://copper-garlic-708.notion.site/4-6-1a606fabfbf64b7194551d0321f984eb?pvs=74",
    "https://teamagotchi.netlify.app",
  ];

  const fetchPreview = async (url: string) => {
    try {
      const response = await axios.get(
        `https://about-bermuda.vercel.app/api/preview?url=${encodeURIComponent(url)}`
      );
      const data = await response.data;

      return {
        title: data.title || "No Title",
        description: data.description || "No Description",
        image: data.image || "/default-image.png",
        url: data.url || url,
      };
    } catch (error) {
      console.error("Failed to fetch preview", error);
      return null;
    }
  };

  const previews = await Promise.all(urls.map(fetchPreview));

  return {
    props: {
      previews: previews.filter((preview) => preview !== null),
    },
    revalidate: 60 * 60 * 24, // 1일
  };
};

export default function Home({ previews }: HomeProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const introductionRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  // const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  // const portfolioRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = [
    { id: "introduction", ref: introductionRef },
    { id: "skills", ref: skillsRef },
    // { id: "experience", ref: experienceRef },
    { id: "projects", ref: projectsRef },
    // { id: "portfolio", ref: portfolioRef },
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
        {/* <Projects ref={projectsRef} /> */}
        <Projects ref={projectsRef} previews={previews} />
        <Education ref={educationRef} />
      </main>
    </div>
  );
}
