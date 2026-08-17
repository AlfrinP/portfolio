/**
 * Edit this file to update personal details and shared links across the site.
 * Leave an optional link as an empty string to hide it from navigation/footer.
 */
export const siteData = {
  profile: {
    name: "Alfrin Poulose",
    shortName: "Alfrin",
    role: "Software Engineer",
    titleSuffix: "Engineering Notebook",
    description:
      "Software Engineer building high-performance systems, AI inference engines, and database internals.",
    bio: "I build reliable, high-performance software systems. My core interest lies in understanding abstractions deeply—from the database engine up to distributed AI inference layers—and removing friction for other developers.",
    interests: ["AI", "Systems", "Performance", "Open Source"],
    currentlyExploring: "Distributed Consensus & Hardware Acceleration",
  },
  links: {
    github: "https://github.com/AlfrinP",
    linkedin: "https://www.linkedin.com/in/alfrinpoulose",
    email: "alfrinpoulose@gmail.com",
    resume: "https://drive.google.com/file/d/1AEz0DDbYDZNH4sr37gOw6oJ9wLroTdyY/view",
    rss: "/rss.xml",
  },
  footer: {
    copyrightYear: 2026,
    tagline: "Built with technical precision.",
  },
} as const
