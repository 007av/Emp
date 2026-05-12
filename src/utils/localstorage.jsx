const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website Banner",
        taskDescription: "Change the homepage banner for summer sale.",
        taskDate: "2026-05-10",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login issue on mobile devices.",
        taskDate: "2026-05-05",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Weekly Report",
        taskDescription: "Create and submit weekly performance report.",
        taskDate: "2026-05-12",
        category: "Management"
      }
    ]
  },

  {
    id: 2,
    firstName: "Amit",
    email: "employee2@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Attend project discussion meeting with client.",
        taskDate: "2026-05-11",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Take backup of production database.",
        taskDate: "2026-05-03",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate payment gateway API.",
        taskDate: "2026-05-06",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Testing Dashboard",
        taskDescription: "Perform testing on admin dashboard features.",
        taskDate: "2026-05-14",
        category: "Testing"
      }
    ]
  },

  {
    id: 3,
    firstName: "Sneha",
    email: "employee3@example.com",
    password: "123",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Create API usage documentation.",
        taskDate: "2026-05-15",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests from junior developers.",
        taskDate: "2026-05-02",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy latest build to staging server.",
        taskDate: "2026-05-07",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress website images for faster loading.",
        taskDate: "2026-05-16",
        category: "Performance"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO Improvements",
        taskDescription: "Improve meta tags and SEO score.",
        taskDate: "2026-05-18",
        category: "Marketing"
      }
    ]
  },

  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Wireframes",
        taskDescription: "Design wireframes for mobile app.",
        taskDate: "2026-05-01",
        category: "UI/UX"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update User Profile",
        taskDescription: "Add profile picture upload feature.",
        taskDate: "2026-05-17",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Monitoring",
        taskDescription: "Monitor CPU and memory usage on server.",
        taskDate: "2026-05-08",
        category: "Infrastructure"
      }
    ]
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",

    taskNumbers: {
      active: 4,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Research Competitors",
        taskDescription: "Analyze competitor product features.",
        taskDate: "2026-05-20",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve responsive navbar issue.",
        taskDate: "2026-05-04",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup Analytics",
        taskDescription: "Integrate Google Analytics into website.",
        taskDate: "2026-05-13",
        category: "Analytics"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Campaign",
        taskDescription: "Send promotional emails to customers.",
        taskDate: "2026-05-09",
        category: "Marketing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build FAQ Page",
        taskDescription: "Create FAQ page with common questions.",
        taskDate: "2026-05-21",
        category: "Content"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Presentation",
        taskDescription: "Prepare slides for sprint presentation.",
        taskDate: "2026-05-22",
        category: "Presentation"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocolstorage = ()=>{

  localStorage.setItem("employees",JSON.stringify(employees));
  localStorage.setItem("admin",JSON.stringify(admin));
}

export const getLocalstorage = ()=>{
 const employeeData = JSON.parse(localStorage.getItem("employees"));
 const adminData = JSON.parse(localStorage.getItem('admin'));

//  console.log(employees,admin);

 return{employeeData,adminData}
 
}