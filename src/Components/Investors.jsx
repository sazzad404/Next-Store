import Image from "next/image";

const teamMembers = [
  {
    name: "Jerome Bell",
    role: "Co founder, Chairman, Executive Director",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png",
  },
  {
    name: "Jenny Wilson",
    role: "Co founder, Chairman, Executive Director",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png",
  },
  {
    name: "Kristin Watson",
    role: "Co founder, Chairman, Executive Director",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png",
  },
  {
    name: "Cameron Williamson",
    role: "Co founder, Chairman, Executive Director",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png",
  },
];

const partnerLogos = [
  "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-waverio.svg",
  "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-squarestone.svg",
  "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-creaty.svg",
];

export default function Investors() {
  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
            Our Investors & Board of Directors
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid max-w-6xl grid-cols-1 px-10 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="hover:scale-105 transition-transform duration-300">
              <Image
                className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale hover:grayscale-0 filter shadow-lg"
                src={member.img}
                alt={member.name}
                width={176}
                height={176}
              />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">
                {member.name}
              </p>
              <p className="mt-2 text-sm font-normal text-gray-400 font-pj">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Divider / SVG */}
        <div className="mt-12 sm:mt-16">
          <svg
            className="w-auto h-4 mx-auto text-gray-600"
            viewBox="0 0 172 16"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
            />
          </svg>
        </div>

        {/* Partner Logos */}
        <div className="max-w-3xl mx-auto mt-12 space-y-8 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:mt-16 sm:gap-x-16">
          {partnerLogos.map((logo, idx) => (
            <div key={idx}>
              <Image
                className="w-auto mx-auto h-11 filter brightness-90 hover:brightness-110 transition duration-300"
                src={logo}
                alt={`Partner Logo ${idx + 1}`}
                width={176}
                height={44}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
