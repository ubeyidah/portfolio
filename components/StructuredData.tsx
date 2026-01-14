export function PersonSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ubeyid Oumer",
    alternateName: ["Ubeyidah", "ubeyidah"],
    url: "https://ubeyidah.tech",
    image: "https://ubeyidah.tech/profile.jpg",
    description:
      "Student and self-taught software engineer who started coding in grade 10 and builds real-world systems across AI, Linux, open-source, and platform engineering.",
    jobTitle: "Student & Self-taught Software Engineer",
    nationality: {
      "@type": "Country",
      name: "Ethiopia",
    },
    educationalLevel: "University Freshman",
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "Linux",
      "Systems Engineering",
      "Open Source Software",
      "Platform Engineering",
      "Software Engineering",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Self-taught (Independent Study)",
    },
    sameAs: [
      "https://github.com/ubeyidah",
      "https://www.linkedin.com/in/ubeyidahh",
      "https://x.com/ubeyidah",
      "https://youtube.com/@ubeyidah",
      "https://medium.com/@ubeyidah",
      "https://t.me/ubeyidah",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
