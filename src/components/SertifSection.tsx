// src/components/SertifSection.tsx
import SertifCarousel from './SertifCarousel';

// Define the Certification interface here since your data is local to this file
export interface Certification {
  id: number;
  slug: string; // Add slug for dynamic routing
  imageSrc: string;
  title: string;
  issuedIn: string; // Add issuedIn field
  description: string; // This will be the full description for the detail page
}

// Export the posts array here
export const posts: Certification[] = [ // <--- Add 'export' here
  {
    id: 1,
    slug: 'linkedin-learning-level-up-javascript',
    imageSrc: '/sertif/linkedin-learning-level-up-javascript.png',
    title: 'Level Up: JavaScript (LinkedIn Learning)',
    issuedIn: 'July 2025',
    description: 'This certification delves into advanced JavaScript concepts, building upon foundational knowledge. It covers topics like asynchronous programming (Promises, async/await), modern ES6+ features, functional programming paradigms, and best practices for writing clean, efficient, and maintainable JavaScript code. Ideal for developers looking to deepen their understanding and build more complex applications.',
  },
  {
    id: 2,
    slug: 'linkedin-learning-react-full-stack',
    imageSrc: '/sertif/linkedin-learning-react-creating-and-hosting-a-full-stack-site.png',
    title: 'React: Creating and Hosting a Full-Stack Site (LinkedIn Learning)',
    issuedIn: 'July 2025',
    description: 'This course focuses on building complete full-stack applications using React for the frontend and integrating it with backend services. It covers topics from API integration, state management, authentication, to deployment strategies. Learn how to connect your React app to a database, handle server-side logic, and host your application for public access.',
  },
  {
    id: 3,
    slug: 'linkedin-learning-react-essential-training',
    imageSrc: '/sertif/linkedin-learning-react-essential-training.png',
    title: 'React Essential Training (LinkedIn Learning)',
    issuedIn: 'July 2025',
    description: 'An introductory course to React, covering the core concepts necessary to build modern single-page applications. This training includes understanding components, props, state, hooks (useState, useEffect), handling events, and basic routing. It provides a solid foundation for anyone starting their journey with the React library.',
  },
  {
    id: 4,
    slug: 'ccna-itn',
    imageSrc: '/sertif/ccna-itn.png',
    title: 'CCNA: Introduction to Networks (ITN)',
    issuedIn: 'May 2025',
    description: 'This is the first course in the CCNA curriculum, introducing the architecture, structure, functions, components, and models of the Internet and computer networks. It covers the principles of IP addressing and the basics of Ethernet concepts, media, and operations to provide a foundation for developing skills in network design and support.',
  },
  {
    id: 5,
    slug: 'ccna-srwe',
    imageSrc: '/sertif/ccna-srwe.png',
    title: 'CCNA: Switching, Routing, and Wireless Essentials (SRWE)',
    issuedIn: 'June 2025',
    description: 'The second course in the CCNA curriculum, focusing on switching technologies and router operations that support small to medium business networks and ISPs. It covers VLANs, inter-VLAN routing, STP, EtherChannel, and wireless LAN concepts, along with basic routing configurations for IPv4 and IPv6.',
  },
  {
    id: 6,
    slug: 'ccna-ensa',
    imageSrc: '/sertif/ccna-ensa.png',
    title: 'CCNA: Enterprise Networking, Security, and Automation (ENSA)',
    issuedIn: 'June 2025',
    description: 'The third and final course in the CCNA curriculum, delving into advanced routing concepts, enterprise network security, WAN technologies, and network automation. Topics include OSPF, EIGRP, VPNs, ACLs, NAT, QoS, cloud and virtualization concepts, and an introduction to network programmability with Python.',
  },
];

const SertifSection = () => {
  return (
    <section id="sertificate" className="pt-36 pb-32 bg-slate-100 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Sertificate</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Latest Certifications</h2>
            <p className="font-medium text-base text-secondary md:text-lg">
              Explore my latest certifications and achievements in various fields of technology.
            </p>
          </div>
          <SertifCarousel posts={posts} />
        </div>
      </div>
    </section>
  );
};

export default SertifSection;