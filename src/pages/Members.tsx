import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const memberData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Member',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    role: 'Member',
  },
  {
    id: 4,
    name: 'Bob Brown',
    email: 'bob.brown@example.com',
    role: 'Moderator',
  },
];

function Members() {
  const [members, setMembers] = useState(memberData);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center justify-between"
      >
        <h1 className="text-3xl font-bold text-gray-800">Members</h1>
        <button className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-blue-700">
          <FaPlus className="mr-2" /> Add Member
        </button>
      </motion.div>

      <div className="grid gap-4">
        {/* Header Row */}
        <div className="grid grid-cols-[2fr,2fr,1fr,1fr] gap-4 rounded-lg bg-gray-200 p-4 font-semibold text-gray-600">
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>Actions</div>
        </div>

        {/* Members Rows */}
        {members.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-[2fr,2fr,1fr,1fr] gap-4 rounded-lg bg-white p-4 shadow transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="font-medium text-gray-800">{member.name}</div>
            <div className="text-gray-600">{member.email}</div>
            <div className="text-gray-600">{member.role}</div>
            <div className="flex gap-4">
              <button className="text-blue-500 hover:text-blue-700">
                <FaEdit />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Members;
