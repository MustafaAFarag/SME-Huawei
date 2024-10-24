import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

function TeamMember({ name, role, image, linkedin }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-start rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition duration-300 hover:shadow-2xl"
    >
      <img
        src={image}
        alt={`${name}'s photo`}
        className="mb-4 h-24 w-24 rounded-full object-cover"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500">{role}</p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4"
      >
        <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-800" />
      </a>
    </motion.div>
  );
}

function MeetTheTeam() {
  const teamMembers = [
    {
      name: 'Amr Medhat',
      role: 'Cloud Architect',
      image: './amr.png',
      linkedin: 'https://www.linkedin.com/in/amr-medhat',
    },
    {
      name: 'Mustafa Ashraf',
      role: 'Full Stack Developer',
      image: './mustafa.png',
      linkedin: 'your_linkedin_url',
    },
    {
      name: 'Mohamed Atwan',
      role: 'AI Engineer',
      image: './mohamed.png',
      linkedin: 'https://www.linkedin.com/in/mohamed-atwan',
    },
    {
      name: 'Khaled',
      role: 'AI Engineer',
      image: './default-user.jpg',
      linkedin: 'https://www.linkedin.com/in/khaled-profile',
    },
  ];

  return (
    <section className="bg-gray-200 py-10">
      <div className="px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Meet The <span className="text-blue-600">Team</span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, // Delay between each card
              },
            },
          }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.4 }}
            >
              <TeamMember {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default MeetTheTeam;
