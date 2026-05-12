import FadeIn from "@/src/app/components/FadeIn";
import Navbar from "@/src/app/components/Navbar";
import SkillsMarquee from "@/src/app/components/SkillsMarquee";
import TypewriterEffect from "@/src/app/components/TypewriterEffect";
import {
  Phone,
  Server,
  GraduationCap,
  Download,
  ChevronRight,
  Terminal,
  Network,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-purple-500/30 overflow-x-hidden relative">
      {/* Global Purple Glow Backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-200/50 dark:bg-purple-900/20 blur-[120px] rounded-full pointer-events-none -z-10 transition-colors duration-500"></div>

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-40 pb-20 px-4 md:px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20 min-h-[90vh]">
        {/* Background Grid Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf61a_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf61a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-20"></div>

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left w-full">
          <FadeIn>
            <h2 className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 dark:bg-purple-500/10 dark:border-purple-500/20 dark:text-purple-300 font-mono tracking-wide text-xs uppercase mb-6 shadow-sm dark:shadow-[0_0_10px_rgba(168,85,247,0.1)] transition-colors">
              <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse"></span>
              Networking Student
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4 leading-tight transition-colors">
              Arafat Sunny
            </h1>

            {/* TYPEWRITER EFFECT */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 h-10">
              <span className="text-slate-700 dark:text-slate-400 transition-colors">
                Expert in{" "}
              </span>
              <TypewriterEffect
                words={[
                  "Routing & Switching.",
                  "Linux System Admin.",
                  "VLAN Configuration.",
                  "Network Troubleshooting.",
                ]}
              />
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed transition-colors">
              Transforming complex topologies into seamless connectivity.
              Passionate about building and securing robust enterprise
              infrastructures.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start mb-8 gap-4">
              <a
                href="https://www.linkedin.com/in/md-arafat-sunny"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-800 p-3 shadow transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.036-1.849-3.036-1.851 0-2.134 1.446-2.134 2.941v5.663H9.356V9h3.414v1.561h.049c.476-.897 1.637-1.846 3.372-1.846 3.602 0 4.266 2.37 4.266 5.455v6.282zM5.337 7.433a2.07 2.07 0 1 1 0-4.139 2.07 2.07 0 0 1 0 4.139zm1.772 13.019H3.561V9h3.548v11.452z" />
                </svg>
              </a>
              <a
                href="https://github.com/arafat-net"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-800 p-3 shadow transition-all"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.238-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.465-1.11-1.465-.909-.621.069-.609.069-.609 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.252-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.104-.253-.447-1.271.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.508.338c1.909-1.295 2.748-1.026 2.748-1.026.546 1.379.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.566 4.936.359.309.679.92.679 1.855 0 1.339-.013 2.423-.013 2.753 0 .268.18.579.688.48C19.135 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/arafatsunny"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-800 p-3 shadow transition-all"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.633 7.997c.014.197.014.393.014.59 0 6.006-4.573 12.936-12.936 12.936-2.573 0-4.965-.754-6.978-2.047.36.041.722.061 1.087.061 2.136 0 4.099-.729 5.664-1.96-2-.037-3.693-1.357-4.278-3.172.28.053.569.08.867.08.418 0 .826-.054 1.212-.158-2.087-.419-3.66-2.265-3.66-4.48v-.057a4.522 4.522 0 0 0 2.04.561c-.846-.565-1.4-1.53-1.4-2.624 0-.577.155-1.117.427-1.581 1.556 1.91 3.885 3.164 6.51 3.297-.053-.23-.079-.471-.079-.713 0-1.737 1.41-3.148 3.151-3.148.906 0 1.725.383 2.299 1 .718-.141 1.39-.404 1.995-.765a3.13 3.13 0 0 1-1.384 1.731c.638-.076 1.247-.246 1.813-.499a6.61 6.61 0 0 1-1.573 1.629z" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start w-full">
              <a
                href="/cv.pdf"
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 dark:hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/20 dark:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <a
                href="#competencies"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 border border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-slate-700 dark:border-purple-900 dark:hover:border-purple-500 dark:hover:bg-purple-900/20 dark:text-slate-300 rounded-full transition-all"
              >
                View Capabilities <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-[280px] sm:max-w-sm relative mx-auto md:mx-0">
          <FadeIn delay={0.2}>
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl border border-purple-100 bg-white shadow-xl dark:border-purple-900/50 dark:bg-[#120822] p-2 dark:shadow-[0_0_40px_rgba(147,51,234,0.15)] transition-colors duration-500">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-transparent opacity-80 dark:from-purple-600/20 dark:opacity-60 rounded-3xl pointer-events-none z-10 transition-colors duration-500"></div>

              {/* Next.js Image Wrapper */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/sunny-profile.png"
                  alt="Arafat Sunny"
                  fill
                  priority
                  className="object-cover transition-all duration-700"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <SkillsMarquee />

      {/* TECHNICAL COMPETENCIES */}
      <section
        id="competencies"
        className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto relative"
      >
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-200/40 dark:bg-purple-900/10 blur-[100px] rounded-full pointer-events-none -z-10 transition-colors duration-500"></div>

        <FadeIn>
          <div className="flex items-center gap-4 mb-10 md:mb-16">
            <Server className="w-6 h-6 md:w-8 md:h-8 text-purple-600 dark:text-purple-400 transition-colors" />
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">
              Technical Competencies
            </h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <Network className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4 transition-colors" />
              ),
              title: "Routing & Switching",
              description:
                "Expertise in structuring scalable network paths and segregating traffic for security and efficiency.",
              points: [
                "VLAN & Inter-VLAN Routing",
                "Static Routing",
                "OSPF (Basic)",
                "Trunk Port Configuration",
              ],
            },
            {
              icon: (
                <Server className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4 transition-colors" />
              ),
              title: "Network Infrastructure",
              description:
                "Foundational setup, IP management, and rigorous connectivity verification across hardware.",
              points: [
                "IP Addressing & Subnetting",
                "DHCP & DNS Configuration",
                "Basic LAN Setup",
                "Ping & Troubleshooting",
              ],
            },
            {
              icon: (
                <Terminal className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4 transition-colors" />
              ),
              title: "Linux & CLI Administration",
              description:
                "Navigating and managing operating systems through the command line interface.",
              points: [
                "Basic Linux Commands",
                "User Management",
                "Networking Commands",
                "CLI Usage",
              ],
            },
          ].map((competency, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              <div className="h-full flex flex-col p-6 md:p-8 rounded-3xl bg-white border border-purple-100 shadow-md hover:border-purple-300 dark:bg-[#120822]/60 dark:border-purple-900/30 dark:hover:bg-[#1a0c33]/80 dark:hover:border-purple-600/50 transition-all duration-300">
                {competency.icon}
                <h4 className="text-lg md:text-xl font-medium text-slate-900 dark:text-slate-200 mb-3 transition-colors">
                  {competency.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 transition-colors">
                  {competency.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {competency.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-mono transition-colors"
                    >
                      <span className="text-purple-500">▹</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section
        id="education"
        className="py-20 md:py-32 px-4 md:px-6 max-w-4xl mx-auto border-t border-purple-100 dark:border-purple-900/20 transition-colors duration-500"
      >
        <FadeIn>
          <div className="relative pl-6 md:pl-0">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-purple-200 dark:bg-purple-900/40 -translate-x-1/2 transition-colors"></div>
            <div className="block md:hidden absolute left-[7px] top-0 bottom-0 w-px bg-purple-200 dark:bg-purple-900/40 transition-colors"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative">
              <div className="absolute hidden md:block left-[-5px] md:left-1/2 top-2 md:top-8 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white dark:bg-[#0b0514] border-2 border-purple-500 md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(168,85,247,0.3)] dark:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-colors"></div>

              <div className="flex-1 text-left md:text-right md:pr-12 w-full">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 transition-colors">
                  Diploma in Engineering
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-mono mt-1 md:mt-2 text-sm md:text-base transition-colors">
                  Telecommunication Technology
                </p>
              </div>
              <div className="flex-1 md:pl-12 w-full">
                <div className="p-5 md:p-6 rounded-2xl bg-white border border-purple-100 shadow-sm dark:bg-[#120822] dark:border-purple-900/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 transition-colors" />
                    <span className="text-slate-800 dark:text-slate-300 font-medium text-sm md:text-base transition-colors">
                      Feni Govt. Computer Institute
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs md:text-sm transition-colors">
                    2022 – 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="pt-16 pb-8 border-t border-purple-100 bg-white dark:border-purple-900/30 dark:bg-[#07030d] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Top Section: Brand, Links, & Socials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12 text-center md:text-left">
            {/* 1. Brand & Contact */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 border border-purple-200 dark:bg-purple-500/10 dark:border-purple-500/30 flex items-center justify-center transition-colors">
                <span className="text-purple-600 dark:text-purple-400 font-mono text-sm transition-colors">
                  AS
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs transition-colors">
                Aspiring Network Engineer passionate about building secure,
                scalable enterprise infrastructure and seamless connectivity.
              </p>
              <a
                href="tel:+8801234567890"
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm transition-colors mt-2"
              >
                <Phone className="w-4 h-4" />
                +880 1234 567 890
              </a>
            </div>

            {/* 2. Quick Links */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="text-slate-900 dark:text-slate-100 font-semibold transition-colors">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-3 text-sm">
                <a
                  href="#skills"
                  className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                >
                  Skills & Tools
                </a>
                <a
                  href="#competencies"
                  className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                >
                  Technical Competencies
                </a>
                <a
                  href="#education"
                  className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                >
                  Education & Background
                </a>
              </nav>
            </div>

            {/* 3. Social Media */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="text-slate-900 dark:text-slate-100 font-semibold transition-colors">
                Connect
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors">
                Feel free to reach out for collaborations or networking.
              </p>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/md-arafat-sunny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-purple-600 hover:text-white dark:bg-[#120822] dark:text-slate-400 dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/arafat-net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-purple-600 hover:text-white dark:bg-[#120822] dark:text-slate-400 dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-purple-600 hover:text-white dark:bg-[#120822] dark:text-slate-400 dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section: Copyright */}
          <div className="pt-8 border-t border-purple-100 dark:border-purple-900/30 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
            <p className="text-slate-500 text-xs md:text-sm transition-colors">
              © {new Date().getFullYear()} Arafat Sunny. All rights reserved.
            </p>
            <p className="text-slate-400 dark:text-slate-600 text-[10px] md:text-xs font-mono transition-colors">
              Crafted for Networking & Telecommunication
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
