import { Outlet } from "react-router-dom";
import Navigacio from "../components/Navigacio";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <Header>
        <Navigacio />
      </Header>
      <Outlet />
    </>
  );
}
