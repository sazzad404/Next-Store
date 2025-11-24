import { motion } from "framer-motion";
import Image from "next/image";

const comments = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "https://i.pravatar.cc/100?img=1",
    comment: "Amazing app! Really helps me organize my tasks efficiently.",
    time: "2 days ago",
  },
  {
    id: 2,
    name: "Mark Thompson",
    avatar: "https://i.pravatar.cc/100?img=2",
    comment: "The collaboration features are top-notch. Love it!",
    time: "5 days ago",
  },
  {
    id: 3,
    name: "Sara Williams",
    avatar: "https://i.pravatar.cc/100?img=3",
    comment: "User-friendly and intuitive design. Highly recommended!",
    time: "1 week ago",
  },
];

export default function AppFeedback() {
  return (
    <section className="py-12 bg-[#131318] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
          What Users Say
        </h2>

        <div className="flex flex-col gap-6">
          {comments.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
              className="bg-[#1e1e2e] rounded-xl p-6 shadow-lg flex gap-4 items-start hover:scale-105 transition-transform duration-300"
            >
              <div className="flex-shrink-0">
                <Image
                  src={c.avatar}
                  alt={c.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg text-white">{c.name}</p>
                <p className="mt-1 text-gray-400 text-sm">{c.time}</p>
                <p className="mt-2 text-gray-300">{c.comment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
