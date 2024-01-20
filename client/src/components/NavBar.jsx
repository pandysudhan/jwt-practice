import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,

} from "flowbite-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Component() {
  const [name, setName] = useState("sudhan");
  function handleClick(name) {
    console.log(name);
    if (name == "sudhan") {
      setName("pandey");
    } else {
      setName("sudhan");
    }
  }

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <img
          src="/vite.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <NavLink to="/login">
          <Button>Login</Button>
        </NavLink>
        <NavbarToggle />
      </div>
    </Navbar>
  );
}

export default Component;
