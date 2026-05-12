"use client";

import { motion } from "framer-motion";

const marqueeSkills = [
  "IP Addressing & Subnetting",
  "VLAN Configuration",
  "Inter-VLAN Routing",
  "Static Routing",
  "OSPF",
  "DHCP & DNS",
  "Cisco Packet Tracer",
  "Wireshark",
  "GNS3",
  "Linux CLI",
  "Troubleshooting",
];

export default function SkillsMarquee() {
  return (
    <section
      id="skills"
      className="relative flex overflow-hidden w-full py-10 md:py-14 border-y border-purple-100 bg-purple-50/50 dark:border-purple-900/20 dark:bg-[#120822]/50 transition-colors duration-500"
    >
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-slate-50 dark:from-[#0b0514] to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-slate-50 dark:from-[#0b0514] to-transparent z-10 pointer-events-none transition-colors duration-500"></div>

      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
        {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
          <div key={index} className="flex items-center gap-4 px-4 md:px-8">
            <span className="text-slate-700 dark:text-slate-400 font-mono text-sm md:text-base whitespace-nowrap">
              {skill}
            </span>
            <span className="text-purple-400/50 dark:text-purple-600/50 text-xl">
              •
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}