import React from "react";

const About = () => {
  return React.createElement("div", { style: { maxWidth: "1200px", margin: "0 auto", padding: "2rem" } },
    React.createElement("h1", null, "About JobLynk.live"),
    React.createElement("p", null, React.createElement("strong", null, "JobLynk.live"), " is a premier digital platform dedicated to bridging the gap between executive talent and career opportunities in the hospitality and maritime industries across India, the Middle East, and international markets."),
    React.createElement("p", null, React.createElement("strong", null, "Founded by hospitality executive Nigel Thomas"), ", our mission is to provide Indian professionals with comprehensive career guides, industry insights, salary benchmarks, and direct connections to top employers."),
    React.createElement("p", null, "We cover ", React.createElement("strong", null, "14 executive sectors"), " including Cruise Line Operations, Luxury Hotels, Middle East Hospitality, F&B Management, Front Office, Housekeeping, Culinary Arts, Revenue Management, HR, Engineering, Maritime Deck & Engine, Wellness, and Retail & Casino.")
  );
};

export default About;
