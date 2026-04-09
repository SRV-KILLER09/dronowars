export interface Event {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  longDescription?: string;
  eligibilityNote?: string;
  image: string;
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
    slug: "drone-maneuvering",
    title: "Drone Maneuvering Challenge",
    date: "May 2, 2026",
    location: "JIIT Noida Campus",
    description:
      "Manual control challenge focused on sharp turns, hovering precision, and obstacle weaving.",
    longDescription:
      "A high-precision manual piloting event designed to evaluate smooth handling, throttle discipline, and control under pressure. Participants must complete a maneuvering course featuring tight gates, hover checkpoints, and directional transitions.\n\nEligibility: This event is strictly open to JIIT Noida students only. Valid JIIT Noida student ID verification will be required during registration and reporting.",
    eligibilityNote: "JIIT Noida Students Only",
    image: "/event-obstacle-navigation.jpg",
    color: "primary",
    category: "COMPETITION",
    skillsTested: [
      "Fine-grained throttle and yaw control",
      "Precision hover stability",
      "Tight-course maneuvering",
      "Consistent lap execution",
    ],
    prizePool: {
      total: "80,000",
      first: "40,000",
      second: "25,000",
      third: "15,000",
    },
    timeline: {
      day1: [
        { time: "13:30 - 15:00", activity: "Drone Maneuvering Challenge" },
      ],
    },
  },
  {
    slug: "fpv-racing",
    title: "FPV Racing Championship",
    date: "May 2-3, 2026",
    location: "JIIT Wish Town Campus",
    description:
      "Pilots control high-performance racing drones using first-person-view (FPV) goggles. Navigate a high-speed race track with precision control and obstacle avoidance.",
    longDescription:
      "An FPV Drone Racing Challenge is a high-intensity competition that puts a pilot's ability to the test as they navigate their drone through a fast-paced obstacle course. The event is crafted to showcase precision in control, rapid decision-making, agility, spatial awareness, and sharp reflexes in dynamic, real-world racing conditions.\n\nTo ensure fairness and technical merit, only custom-built multi-rotor drones are allowed. Ready-to-Fly (RTF) commercially purchased drones are strictly prohibited.",
    image: "/event-fpv-racing.jpg",
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
      "Simulates real-world drone logistics. Navigate, visually identify the drop zone, and release payload accurately.",
    image: "/event-payload-delivery.jpg",
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
      "Program your drone to complete mission stages without human control: autonomous takeoff, navigation, marker detection, and precision landing.",
    image: "/event-autonomous-mission.jpg",
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
      "Design, build, and fly a radio-controlled aircraft to demonstrate engineering skill and flying precision. The challenge focuses on executing smooth takeoff, controlled aerial maneuvers, and achieving an accurate landing within a designated zone while maintaining stability and efficiency.",
    image: "/obstacle-navigation.jpg",
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
      "Present a drone design or prototype demonstrating innovation, technical advancement, or a novel application. Focus on engineering creativity.",
    image: "/event-drone-design.jpg",
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
