export function formatSlugToTitle(slug) {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateMockData(slug, type) {
  const title = formatSlugToTitle(slug);

  // Assign images based on type and keywords in slug
  let image = "/hero-bg.png";
  if (type === "technology") {
    image = "/it-services.png";
    if (slug.includes("security") || slug.includes("incident") || slug.includes("patrol")) {
      image = "/security.png";
    } else if (slug.includes("digital") || slug.includes("automation")) {
      image = "/skills-scan.png";
    }
  } else if (type === "solutions") {
    image = "/industry.png";
    if (slug.includes("workforce") || slug.includes("staff")) {
      image = "/skills-arm.png";
    } else if (slug.includes("facility") || slug.includes("maintenance")) {
      image = "/construction.png";
    } else if (slug.includes("security") || slug.includes("surveillance")) {
      image = "/security.png";
    } else if (slug.includes("logistics") || slug.includes("warehouse")) {
      image = "/industry-logistics.png";
    } else if (slug.includes("infrastructure")) {
      image = "/industry-manufacturing.png";
    }
  }

  const data = {
    id: slug,
    title: title,
    slug: slug,
    shortDesc: `Discover how our comprehensive ${title} solutions can transform your operational efficiency and drive sustainable growth.`,
    description: `At KDS International, our ${title} capabilities are designed to meet the highest industry standards. We leverage cutting-edge strategies and deep domain expertise to ensure that your business stays ahead of the curve. Whether you are scaling operations, ensuring compliance, or optimizing resources, our customized approach delivers measurable results.`,
    image: image,
    features: [
      `Advanced ${title} Integration`,
      "24/7 Real-time Monitoring & Support",
      "Seamless Workflow Automation",
      "Comprehensive Data Analytics",
      "Strict Compliance & Policy Adherence",
      "Scalable Architecture for Growth"
    ],
    benefits: [
      "Significant cost reductions through optimized resource allocation.",
      "Enhanced operational transparency and reporting.",
      "Improved safety, security, and compliance metrics.",
      "Agile adaptation to changing market demands."
    ],
    content: [
      {
        type: "heading",
        text: `Why Choose Our ${title} Solutions?`
      },
      {
        type: "paragraph",
        text: `In today's fast-paced environment, having robust ${title} is not just an advantage—it is a necessity. Our team of experts works closely with your stakeholders to identify bottlenecks and deploy state-of-the-art methodologies that guarantee maximum uptime and productivity.`
      },
      {
        type: "takeaways",
        heading: "Core Advantages",
        items: [
          "Tailored strategies that fit your specific organizational needs.",
          "Deployment of the latest technological frameworks.",
          "Continuous improvement through regular audits and feedback loops."
        ]
      }
    ],
    locations: [
      { stateLabel: "Nationwide", stateValue: "nationwide" }
    ]
  };

  return data;
}
