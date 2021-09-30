import EmployeeIndex from "./components/employees/Index";
import EmployeeCreate from "./components/employees/Create";
import EmployeeEdit from "./components/employees/Edit";

export const routes = [
    {
        path: "/employees",
        name: "EmployeesIndex",
        component: EmployeeIndex
    },
    {
        path: "/employees/create",
        name: "EmployeesCreate",
        component: EmployeeCreate
    },
    {
        path: "/employees/:id",
        name: "EmployeesEdit",
        component: EmployeeEdit
    }
];
