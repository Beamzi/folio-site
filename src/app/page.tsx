"use client";

import ScrollingContainer from "@/components/ScrollingContainer";

const firstProjectData = [
  {
    title: "Dynamic Task Creation",
    content:
      " Create and modify tasks with real-time validation and instant updates",
    src: "/screens/recents-and-reminders.jpg",
    alt: "recents & reminders view",
  },
  {
    title: "Project Organization",
    content:
      "Hierarchical project structure with task assignment and comment / discussion capabilities",
    src: "/screens/project-view.jpg",
    alt: "project view",
  },
  {
    title: "Due Date Management",
    content:
      "Set and track task deadlines with automated scheduling and dynamic navigation",
    src: "/screens/schedule.jpg",
    alt: "schedule view",
  },
  {
    title: "Task Assignment",
    content:
      "Assign tasks to specific projects with relational data management",
    src: "/screens/ipad-ux.jpg",
    alt: "ipad view",
  },
];

export default function page() {
  return (
    <main>
      <section className="h-screen sticky top-0 bg-white"></section>
      <section className="flex justify-center flex-col items-center">
        {firstProjectData.map((item) => (
          <ScrollingContainer
            title={item.title}
            content={item.content}
            src={item.src}
            alt={item.alt}
            key={item.title}
          ></ScrollingContainer>
        ))}
      </section>
      <section className="h-[400vh]"></section>
    </main>
  );
}
