import React, { useState } from "react";
import { FaClock } from "react-icons/fa6";
import HeroImg from "../assets/imghero.png";
import FAQ from "./FAQ";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showTime, setShowTime] = useState(false);
  const [style, setStyle] = useState(false);
  const timeArray = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ];

  return (
    <>
      <div className='hero'>
        <div className='text'>
          <h1>Credible Ecosystem providing Fixed Income solution for Retail</h1>
          <p>
            Restricted to high quality instruments. Comprehensive fixed income
            Solutions. Ease of execution.
          </p>
          <button className='call' onClick={onOpen}>
            Book a Free Call
          </button>
        </div>
        <div className='img'>
          <img src={HeroImg} alt='image' className='heroImg' />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"80%"} h={"80vh"}>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            py={"2.5rem"}
          >
            <div className='modal'>
              <div className='fir'>
                <p className='talk'>Talk to an advisor</p>
                <p className='min'>
                  <FaClock />
                  30 mins
                </p>
                <p className='desc'>
                  An average call usually lasts 30 minutes and you can get all
                  your queries addressed during this time
                </p>
              </div>
              <div className='sec'>
                {showTime ? (
                  <div className='t'>
                    <input type='date' name='' className='date' />
                    <div className='timing'>
                      {timeArray.map((time, i) => (
                        <div className='time'>{time}</div>
                      ))}
                      <input
                        type='button'
                        className='bookCall call1'
                        value='Confirm'
                        onClick={() => setShowTime(!showTime)}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <p className='talk'>
                      Please let us know if your query is regarding Lorem Ipsum,
                      Lorem Ipsume or both? *
                    </p>
                    <div className='radio'>
                      <input type='radio' name='lorem' className='rad' />
                      <span>Lorem Ipsum</span> <br />
                      <input type='radio' name='lorem' className='rad' />
                      <span>Lorem Ipsum</span> <br />
                      <input type='radio' name='lorem' className='rad' />
                      <span>Lorem Ipsum</span> <br />
                    </div>
                    <p className='talk'>Please let us know your query *</p>
                    <textarea></textarea>

                    <input
                      type='button'
                      className='bookCall call1'
                      value='Select Time'
                      onClick={() => setShowTime(!showTime)}
                    />
                  </>
                )}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      <FAQ open={onOpen} />
    </>
  );
}

export default Hero;
