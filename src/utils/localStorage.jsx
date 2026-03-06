
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "rahul@company.com",
    password: "123",
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI",
        taskDate: "2026-03-05",
        category: "Design"
      },
      {
        active: false,
        new: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navbar issue",
        taskDate: "2026-03-02",
        category: "Development"
      },
      {
        active: false,
        new: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate payment API",
        taskDate: "2026-03-01",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "priya@company.com",
    password: "123",
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Admin dashboard design",
        taskDate: "2026-03-06",
        category: "Design"
      },
      {
        active: false,
        new: false,
        completed: true,
        failed: false,
        taskTitle: "Update Profile Page",
        taskDescription: "Improve profile layout",
        taskDate: "2026-03-03",
        category: "UI/UX"
      },
      {
        active: false,
        new: false,
        completed: false,
        failed: true,
        taskTitle: "Test Authentication",
        taskDescription: "Check login validation",
        taskDate: "2026-03-02",
        category: "Testing"
      }
    ]
  },
  {
    id: 3,
    firstName: "Amit",
    email: "amit@company.com",
    password: "123",
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        taskTitle: "Build REST API",
        taskDescription: "Create user endpoints",
        taskDate: "2026-03-07",
        category: "Backend"
      },
      {
        active: false,
        new: false,
        completed: true,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Design MongoDB schema",
        taskDate: "2026-03-04",
        category: "Database"
      },
      {
        active: false,
        new: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve DB performance",
        taskDate: "2026-03-01",
        category: "Database"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "sneha@company.com",
    password: "123",
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        taskTitle: "Create Logo",
        taskDescription: "Design company logo",
        taskDate: "2026-03-08",
        category: "Design"
      },
      {
        active: false,
        new: false,
        completed: true,
        failed: false,
        taskTitle: "Social Media Banner",
        taskDescription: "Design marketing banner",
        taskDate: "2026-03-02",
        category: "Marketing"
      },
      {
        active: false,
        new: false,
        completed: false,
        failed: true,
        taskTitle: "Client Presentation",
        taskDescription: "Prepare slides for client",
        taskDate: "2026-03-01",
        category: "Presentation"
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikas",
    email: "vikas@company.com",
    password: "123",
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure GitHub Actions",
        taskDate: "2026-03-09",
        category: "DevOps"
      },
      {
        active: false,
        new: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy Website",
        taskDescription: "Deploy on VPS server",
        taskDate: "2026-03-03",
        category: "Deployment"
      },
      {
        active: false,
        new: false,
        completed: false,
        failed: true,
        taskTitle: "Security Audit",
        taskDescription: "Check vulnerabilities",
        taskDate: "2026-03-02",
        category: "Security"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Arjun",
    email: "admin@company.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees')) 
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
} 
