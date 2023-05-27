import React from "react";
import Image from "next/image";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black">
        <p className="text-center text-Thover">© Kevin Marin Diaz - 2023 ©</p>
        <div className="flex justify-center">
          <a href="https://github.com/kevin11oc" className="text-white flex items-center mr-4">
            <Image src={github} alt="" className="iconGyL" />
          </a>
          <a href="https://www.linkedin.com/in/kevin-marin-angular-sql/" className="text-white flex ">
            <Image src={linkedin} alt="" className="iconGyL" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
