export const manaboardProjectData = [
  {
    title: "Dynamic Task Creation",
    content:
      "Create and modify tasks with real-time validation and instant updates",
    src: "/screens/recents-and-reminders.jpg",
    alt: "recents & reminders view",
    details: [
      "Hierarchical project structure with task assignment and comment / discussion capabilities",
      "Due Date Management - Set and track task deadlines with automated scheduling and dynamic navigation",
      "Task Assignment - Assign tasks to specific projects with relational data management",
      "Create and modify tasks with real-time validation and instant UI updates as well as auto save / edit",
    ],
  },

  {
    title: "Projects and Real-Time Activity",
    content: "Threaded conversation system attached to individual projects",
    src: "/screens/project-view.jpg",
    alt: "project view",
    details: [
      "View, edit, save and delete your assigned tasks in any of your project view instances, with auto save & edit debouncing",
      "Activity Streams - Chronological display of project conversations and updates",
      "Project Comments - Threaded conversation system attached to individual projects",
      "Real-Time Updates - Instant synchronization across all connected clients",
    ],
  },
  {
    title: "Views & Navigation",
    content:
      "Interactive schedule / timeline view, Smart Inbox, priority tasks and personal notes, Project views, Inventory overview, data analytics and more",
    src: "/screens/schedule.jpg",
    alt: "schedule view",
    details: [
      "Interactive Schedule View - X/Y scrollable timeline automatically scoped to user's date range (current date to furthest due date)",
      "Smart Inbox - Centralized task management with advanced sorting and search functionality",
      "Priority View - Filtered dashboard displaying priority tasks, this is also where the user can view and modify their personal notes.",
      "Project Views - modify your assigned tasks, leave project specific comments, change and update project details for each project",
      "Inventory Overview - a set of lists that visualise user generated items across relational data models",
    ],
  },

  {
    title: "Search & Filtering",
    content: "Advanced search with typo tolerance across all task properties",
    src: "/screens/inbox-view.jpg",
    alt: "ipad view",
    details: [
      "Global Search Modal - Dashboard accessible search with instant results",
      "Post-Search Sorting - Apply sorting filters to search results",
      "Multi-Property Filtering - Filter by creation date, due date, priority, and custom properties",
      "Smart Inbox - Centralized task management with advanced sorting (createdAt, dueDate, priority) and fuzzy search",
    ],
  },
  {
    title: "Responsive Architecture",
    content:
      "Layout dynamically changes in structure and functionality to any viewport dimensions",
    src: "/screens/ipad-ux.jpg",
    src2: "/screens/mobile-first-ux-2.jpg",
    alt: "ipad view",
    details: [
      "Skeleton Adapter Integration - Utilises a flexible container system that accepts any React element as data props, allowing different content types to seamlessly adapt to various screen sizes without code duplication or layout breaks",
      "Gesture Navigation - Touch optimised expandable panels and tap interactions, providing intuitive access to secondary content without losing primary workflow focus",
      "Breakpoint-Aware State Management - Preserves scroll positions, filter states, and user selections when transitioning between layout modes, ensuring uninterrupted user experience across all viewport changes",
    ],
  },
  {
    title: "Productivity & Analytics",
    content:
      "Extra Features for tracking interactions over time, and more options for storing personal data",
    src: "/screens/analytics.jpg",
    alt: "ipad view",
    details: [
      "Time Chart - Visual analytics showing task distribution by days remaining until due date",
      "Deadline Tracking - Automated monitoring of approaching and overdue tasks",
      "Personal Notes - Standalone note-taking system independent of task management (without the pressure of due dates and assignments)",
      "Inventory Overview - Comprehensive listing of all user-created items across all views (tasks, projects, notes, etc.)",
      "Workload Distribution - Visual representation of task allocation over time",
    ],
  },
];
