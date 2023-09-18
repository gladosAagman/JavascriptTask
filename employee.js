const Employees = {
    employees: {
      "Aagman Mehto": {
        id: 1,
        name: "Aagman",
        position: "Junior Software Developer",
        salary: 75000,
        contact: {
          email: "aagman@gmail.com",
          phone: "+917697210928",
        },
      },
      "Goldy": {
        id: 2,
        name: "Goldy",
        position: "HR Manager",
        salary: 60000,
        contact: {
          email: "goldy@gmail.com",
          phone: "+916263418636",
        },
      },
    },
  };
  

  console.log(Employees.employees["Aagman Mehto"].name);
  console.log(Employees.employees["Goldy"].contact);
