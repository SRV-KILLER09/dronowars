export interface Event {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  longDescription?: string;
  eligibilityNote?: string;
  image: string;
  rulebookPdf?: string;
  color: string;
  category:
    | "COMPETITION"
    | "EXHIBITION"
    | "TECHNICAL"
    | "ENTREPRENEURIAL"
    | "MISCELLANEOUS";
  skillsTested: string[];
  prizePool: {
    total: string;
    first: string;
    second: string;
    third: string;
    other?: string;
  };
  timeline: {
    day1?: { time: string; activity: string }[];
    day2?: { time: string; activity: string }[];
  };
}

export const events: Event[] = [
  {
    slug: "fpv-racing",
    title: "FPV Racing Championship",
    date: "May 2-3, 2026",
    location: "JIIT Wish Town Campus",
    description:
      "Pilots control high-performance racing drones using first-person-view (FPV) goggles. Navigate a high-speed race track with precision control and obstacle avoidance.",
    longDescription:
      "This event challenges participants to design and operate high-performance FPV drones capable of navigating a predefined racing track consisting of gates, obstacles, and sharp turns in the minimum possible time.\n\nThe objective is to demonstrate precision control, agility, and speed while maintaining stability and consistency throughout multiple laps. Teams are expected to optimize their drone configuration and piloting skills to efficiently complete the course under competitive conditions.",
    image: "/event-fpv-racing.jpg",
    rulebookPdf: "/FPV-rulebook-DronoWar.pdf",
    color: "primary",
    category: "COMPETITION",
    skillsTested: [
      "High-speed drone piloting",
      "Precision control through gates",
      "Rapid reaction and spatial awareness",
      "Race strategy and consistency",
    ],
    prizePool: {
      total: "2,00,000",
      first: "1,00,000",
      second: "60,000",
      third: "40,000",
    },
    timeline: {
      day1: [{ time: "09:30 - 11:30", activity: "Qualifying Rounds" }],
      day2: [{ time: "11:00 - 12:30", activity: "Semi-Finals and Finals" }],
    },
  },
  {
    slug: "payload-delivery",
    title: "Payload Delivery Mission",
    date: "May 2-3, 2026",
    location: "JIIT Wish Town Campus",
    description:
      "The Payload Delivery Mission simulates a real-world drone logistics challenge. Teams must navigate obstacles, transport a payload, and deliver it accurately to the target zone. The mission tests precision flying, stability under load, and safe landing capabilities. It reflects practical applications such as medical supply and disaster relief delivery.",
    image: "/event-payload-delivery.jpg",
    rulebookPdf: "/Payload rulebook DronoWar.pdf",
    color: "secondary",
    category: "COMPETITION",
    skillsTested: [
      "Mission planning and navigation",
      "Payload stabilization during flight",
      "Visual marker detection",
      "Accurate payload deployment",
      "System integration",
    ],
    prizePool: {
      total: "1,60,000",
      first: "80,000",
      second: "50,000",
      third: "30,000",
    },
    timeline: {
      day1: [{ time: "14:00 - 16:00", activity: "Preliminary Rounds" }],
      day2: [{ time: "13:30 - 14:30", activity: "Finals" }],
    },
  },
  {
    slug: "autonomous-mission",
    title: "Autonomous Drone Mission",
    date: "May 3, 2026",
    location: "JIIT Wish Town Campus",
    description:
      "The Autonomous Drone Mission is designed to test the ability of UAV systems to operate independently in structured environments. This competition focuses on developing drones that can perceive surroundings, process data, and execute precise movements without manual control. It reflects real-world applications such as surveillance, inspection, and smart navigation, where reliability, accuracy, and autonomy are essential.",
    image: "/event-autonomous-mission.jpg",
    rulebookPdf: "/Autonomous rulebook DronoWar.pdf",
    color: "accent",
    category: "COMPETITION",
    skillsTested: [
      "Autonomous navigation",
      "Computer vision and marker detection",
      "Drone stabilization and control algorithms",
      "Precision landing accuracy",
    ],
    prizePool: {
      total: "1,60,000",
      first: "80,000",
      second: "50,000",
      third: "30,000",
    },
    timeline: {
      day2: [{ time: "09:00 - 11:00", activity: "Autonomous Drone Mission" }],
    },
  },
  {
    slug: "RC PLANE",
    title: "RC Aircraft Challenge",
    date: "May 2, 2026",
    location: "JIIT Wish Town Campus",
    description:
      "The RC Plane Challenge is designed to test participants’ skills in aircraft design, flight control, and maneuvering. Teams must build and operate a remote-controlled plane capable of stable flight, precise navigation, and accurate mission execution within the defined arena and challenge constraints.",
    image: "/obstacle-navigation.jpg",
    rulebookPdf: "/RC rulebook DronoWar.pdf",
    color: "yellow",
    category: "COMPETITION",
    skillsTested: [
      "Aerodynamic design and stability",
      "Aircraft construction and engineering efficiency",
      "Precision flight control",
      "Flight endurance and payload management",
      "Real-time problem solving during flight",
    ],
    prizePool: {
      total: "1,20,000",
      first: "60,000",
      second: "40,000",
      third: "20,000",
    },
    timeline: {
      day1: [
        {
          time: "11:30 - 13:00",
          activity: "RC Aircraft Design & Flight Challenge",
        },
      ],
    },
  },
  {
    slug: "drone-design",
    title: "Drone Design & Innovation",
    date: "May 2-3, 2026",
    location: "JIIT Wish Town Campus",
    description:
      "In a world driven by creativity and rapid technological evolution, Unmanned Aerial Vehicles (UAVs) have become platforms for both engineering precision and imaginative design. The Design & Innovation Challenge celebrates this fusion by encouraging participants to build drones beyond conventional norms, exploring unique structures, materials, and functionalities. It empowers innovators to transform bold ideas into tangible aerial systems that redefine performance, aesthetics, and technological possibilities.",
    image: "/event-drone-design.jpg",
    rulebookPdf: "/Design.pdf",
    color: "cyan",
    category: "EXHIBITION",
    skillsTested: [
      "Engineering design",
      "Innovation and creativity",
      "System architecture and integration",
      "Presentation and technical communication",
    ],
    prizePool: {
      total: "1,20,000",
      first: "50,000",
      second: "30,000",
      third: "20,000",
      other: "Best Innovation Award: 40,000",
    },
    timeline: {
      day1: [{ time: "16:00 - 17:00", activity: "Exhibition Setup" }],
      day2: [
        { time: "14:30 - 15:30", activity: "Presentations and Final Judging" },
      ],
    },
  },
];
