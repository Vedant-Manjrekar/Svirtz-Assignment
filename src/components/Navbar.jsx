import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDisclosure } from "@chakra-ui/react";
import { CgDetailsMore } from "react-icons/cg";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import Carousel from "./Carousel";

const words = [
  "Welcome to Test-BOND!",
  "Bonds worth ₹600+ crores sold with 0 defaults.",
  "Trusted by 38000+ investors in India.",
];

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav className={`navbar ${isExpanded ? "navbar2" : ""}`}>
      <div className='list1'>
        <li>
          <IoHomeOutline size={"1.8rem"} />
        </li>
        <li>
          <CgDetailsMore
            size={"1.8rem"}
            onClick={() => setIsExpanded(!isExpanded)}
          />
        </li>
      </div>
      <div className={isExpanded ? "list2" : "none"}>
        <li>Values</li>
        <li>Leadership</li>
        <li>Knowledge-Hub</li>
        <li>Framework</li>
        <li>Testimonials</li>
        <button className='reg' onClick={onOpen}>
          Register/SignIn <FaArrowRightLong />
        </button>
      </div>

      <div className='list'>
        <li>
          <IoHomeOutline size={"1.8rem"} />
        </li>
        <li>Values</li>
        <li>Leadership</li>
        <li>Knowledge-Hub</li>
        <li>Framework</li>
        <li>Testimonials</li>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"80%"} h={"50%"}>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            py={"2.5rem"}
          >
            <div className='modal'>
              <div className='carousel'>
                <>
                  <div className='banner'>
                    <p className='test'>TEST</p>
                    <p className='bond'>BOND+</p>
                  </div>
                  <Carousel words={words} />
                </>
              </div>

              <div className='signin'>
                Sign In to know more...
                <span>
                  <p>Phone Number</p>
                  <input
                    type='number'
                    className='input'
                    placeholder='Phone Number'
                  />
                </span>
                <input type='button' className='bookCall' value={"Get OTP"} />
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      <button className='reg' onClick={onOpen}>
        Register/SignIn <FaArrowRightLong />
      </button>
    </nav>
  );
}

export default Navbar;
