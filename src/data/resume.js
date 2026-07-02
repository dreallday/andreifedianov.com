// Single source of truth for all resume content.
// Edit this file to update the site — no markup changes needed.

export const profile = {
  name: "Andrei Fedianov",
  title: "Staff Backend Engineer",
  tagline: "I build scalable backend platforms and cloud infrastructure.",
  summary:
    "Senior/Staff backend engineer with ~15 years of experience across large companies and start-ups. I specialize in scalable backend services, API platforms, and AWS cloud architecture — with a focus on solving business problems through pragmatic, reliable engineering.",
}

export const contact = {
  email: "andrei.fedianov@gmail.com",
  linkedin: "https://www.linkedin.com/in/andreifedianov",
  github: "https://github.com/dreallday",
}

export const experience = [
  {
    company: "Rula (via Insight Global)",
    location: "Atlanta, GA",
    role: "Staff Backend Engineer — Contractor",
    start: "December 2025",
    end: "Present",
    highlights: [
      "Designed and built scalable backend services and platform APIs using TypeScript, Node.js, and Fastify across multiple microservices on AWS EKS, supporting a HIPAA-compliant healthcare platform for patient scheduling, billing, and care team communication.",
      "Drove a strangler-pattern migration replacing a legacy API gateway with a Node.js/Fastify proxy, using an OpenAPI 3.x driven architecture to keep routing and contracts in sync across services.",
      "Migrated the platform's authentication to Auth0 JWT with end-to-end type safety, converting 40+ client call sites across 8 API clients to a secure, token-based fetch path.",
      "Integrated the service with a Kong API gateway, registering routes from the OpenAPI spec and resolving cross-origin and gateway-routing issues at the edge.",
      "Designed ElastiCache/Redis caching strategies with cache stampede mitigation for high-traffic endpoints on EKS.",
      "Strengthened deployment reliability by adding automated CI gates that caught configuration and type-safety issues before they reached production.",
      "Integrated upstream services across medical billing and patient-data domains within a PHI/HIPAA-compliant architecture.",
      "Owned the end-to-end deployment pipeline across multiple repositories, spanning frontend delivery to S3/CloudFront and containerized services to AWS EKS via Harness.",
      "Leveraged agentic coding tools (Copilot/Claude Code via AWS Bedrock) to accelerate development workflows.",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Fastify",
      "OpenAPI",
      "Okta/Auth0",
      "Kong",
      "ElastiCache/Redis",
      "AWS EKS",
      "S3/CloudFront",
      "Harness",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    company: "Brickhouse Resources",
    location: "Atlanta, GA (Remote)",
    role: "Senior Backend Engineer — StreamLabs Water",
    start: "April 2024",
    end: "May 2025",
    highlights: [
      "Designed, developed and deployed new software functions and features for IoT products & services.",
      "Developed AWS functionality to process data and alerts from Smart-Home water meters which notify homeowners via Push/SMS/Email.",
      "Implemented support APIs for mobile apps, web apps, subscription management and third-party integrations.",
      "Developed new features for the internal-facing web dashboard to enhance customer support functions such as device troubleshooting, user account management, and subscription management.",
    ],
    tech: ["JavaScript", "Node", "AWS", "Lambda", "OpenTofu"],
  },
  {
    company: "AutoFi",
    location: "San Francisco, CA (Remote)",
    role: "Senior Backend Engineer",
    start: "July 2022",
    end: "February 2024",
    highlights: [
      "Lead development of new products, features, APIs, and user experiences.",
      "Built robust infrastructure to support new services and products.",
      "Contributed to engineering best-practices.",
      "Worked with product and design to inform trade-offs and scalability concerns.",
    ],
    tech: ["JavaScript", "Node", "MongoDB", "Docker", "Heroku", "AWS"],
  },
  {
    company: "ThingTech",
    location: "Atlanta, GA",
    role: "Senior Software Engineer / Lead DevOps & Architect",
    start: "August 2015",
    end: "July 2022",
    highlights: [
      "Responsible for infrastructure design, implementation, and support.",
      "Led the transition to AWS for Series A funding by modernizing legacy infrastructure.",
      "Architected APIs which handle matching GPS coordinates to a logical model of the real world.",
      "Developed internal analytics and statistics tracking tools with AWS integration.",
      "Implemented a distributed web-socket back-end service which increased the capability of gathering, sorting and distribution of incoming JSON messages from 1,000 to 5,000.",
      "Led the architecture, implementation, and development of advanced customer-facing reporting API features using NodeJS/TypeScript, integrating metadata with static data from AWS RDS and AWS Redshift.",
      "Spearheaded the development of several real-time mobile applications utilizing React-Native, NodeJS, and Elixir, enhancing operational efficiency and user engagement.",
      "Engineered a comprehensive Scaffolding Inventory Management System, enabling precise tracking of inventory, maintenance, and safety status of each structure.",
    ],
    tech: [
      "AWS",
      "JavaScript",
      "React",
      "Node",
      "React-Native",
      "Elixir",
      "Postgres",
      "Docker",
      "Terraform",
      "TypeScript",
    ],
  },
  {
    company: "Tin Roof Software",
    location: "Atlanta, GA",
    role: "Contractor",
    start: "March 2015",
    end: "August 2015",
    highlights: [
      "Developed and maintained COX Communications' Video-on-Demand (VOD) back-end reporting system.",
      "Responsible for the development of internal error management tools for the COX VOD system.",
      "Developed a dashboard interface to interact with VOD analytics data.",
      "Implemented UAT for back-end and front-end applications to support VOD.",
    ],
    tech: ["Ruby on Rails"],
  },
  {
    company: "Premiere Global Services Inc.",
    location: "Atlanta, GA",
    role: "Software Engineer — iMeet (now GlobalMeet)",
    start: "July 2011",
    end: "August 2014",
    highlights: [
      "Developed the Java back-end for iMeet, an online meeting service with webcam, chat, phone, file sharing, etc.",
      "Responsible for planning, developing, deploying and testing new back-end features and services.",
      "Collaborated with the front-end, mobile, and operations teams in order to ensure features were added smoothly throughout every platform with no service interruption.",
    ],
    tech: [
      "Java",
      "Apache MINA",
      "MySQL",
      "Hibernate",
      "Ruby on Rails",
      "Redis",
      "CentOS",
    ],
  },
]

export const education = [
  {
    credential: "AWS Solutions Architect",
    institution: "Certification",
    location: "",
    date: "March 2020",
  },
  {
    credential: "Bachelor of Science in Computer Science",
    institution: "Emory University",
    location: "Atlanta, GA",
    date: "August 2007 – May 2011",
  },
]

export const skills = [
  {
    group: "Programming Expertise",
    items: [
      "NodeJS",
      "TypeScript",
      "React",
      "React-Native",
      "Redux",
      "Elixir",
      "Phoenix",
      "Postgres",
      "DynamoDB",
      "Lambda & other AWS Tools",
      "Docker",
      "Kubernetes",
      "Java",
      "Ruby/Sinatra",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    group: "Tools & Process",
    items: ["Git", "SVN", "#!/bin/bash", "Agile Process"],
  },
  {
    group: "Certifications",
    items: ["AWS Solutions Architect"],
  },
  {
    group: "Languages",
    items: ["English", "Russian (fluent)"],
  },
  {
    group: "Entrepreneurship",
    items: [
      "Business start-up tactics",
      "Analytical problem solving",
      "Critical thinking",
      "Time management",
      "Business planning & management",
      "Branding",
      "Marketing strategies",
      "Networking",
    ],
  },
]
