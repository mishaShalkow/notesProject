import LoginForm from "../components/pages/LoginForm";
import Main from "../components/pages/Main";

export const publishRoutes = [{ path: "/main", component: Main, exact: true }];

export const privateRoutes = [
  { path: "/login", component: LoginForm, exact: true },
];
