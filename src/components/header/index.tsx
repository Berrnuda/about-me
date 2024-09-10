type HeaderProps = {
  activeSection: string | null;
  sectionRefs: { id: string; ref: React.RefObject<HTMLDivElement> }[];
  handleScrollToSection: (id: string) => void;
};

export default function Header({ activeSection, sectionRefs, handleScrollToSection }: HeaderProps) {
  return (
    <header className="fixed top-0 z-20 flex h-60 w-full items-center justify-around bg-bg-secondary px-30">
      {sectionRefs.map((section) => (
        <button
          key={section.id}
          onClick={() => handleScrollToSection(section.id)}
          className={`text-sm font-semibold md:text-xl ${
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
  );
}
