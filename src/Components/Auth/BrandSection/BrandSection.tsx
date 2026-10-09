const stats = [
  { value: "ECE", label: "Engineering" },
  { value: "React", label: "Current Focus" },
  { value: "JS", label: "Core Language" },
  { value: "Vite", label: "Build Tool" },
  { value: "2026", label: "Project Year" },
];

function BrandSection() {
  return (
    <section className="order-2 w-full max-w-xl text-center lg:order-1 lg:text-left">
      <h1 className="hidden text-5xl font-extrabold tracking-tight text-primary sm:text-6xl lg:block">
        Saif's Hub
      </h1>

      <p className="mt-4 hidden text-2xl font-medium leading-snug text-slate-800 lg:block">
        Connect with friends and the world around you on Saif Posts.
      </p>

      <div className="brand-card">
        <p className="brand-label">About the Developer</p>

        <p className="brand-title">
          ECE Engineering Student &amp; Frontend Developer
        </p>

        <p className="brand-description">
          I&apos;m an Electronics &amp; Communication Engineering student
          exploring modern frontend development with React, JavaScript, and
          modern web technologies. Saif Posts is a project built to practice
          real-world application structure, reusable components, responsive
          design, and API integration.
        </p>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="stat-value">{stat.value}</p>

              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandSection;

