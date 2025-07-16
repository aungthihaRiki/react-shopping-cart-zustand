import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-5 py-4">
      <Container>
        <div className="flex justify-between">
          <Link to={"/"} className="text-3xl font-bold">Online Shop</Link>
          <Link to={"/my-cart"} className="border px-4 py-2 relative cursor-pointer hover:bg-gray-200">
            Cart{" "}
            <span className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 px-2 text-xs bg-red-600 text-white">
              1
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
