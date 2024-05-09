import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function FAQ({ open }) {
  return (
    <div className='faq'>
      <div className='title'>
        <p className='head'>FAQs</p>
        <p className='txt'>
          Have a few questions? We are more than happy to provide you with
          answers
        </p>
      </div>
      <div className='section'>
        <Accordion defaultIndex={[0]} w={"80vw"} allowToggle>
          <AccordionItem border={"1px solid #dee2e6"} borderBottom={"none"}>
            <h2>
              <AccordionButton flex={1}>
                <Box
                  as='span'
                  flex='1'
                  display={"flex"}
                  alignItems={"center"}
                  textAlign='left'
                  h={9}
                >
                  What constituents Cost of Living?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <b>
                The affordable cost of living in India can often mean having a
                good quality of life. For the most, these typically constitute
                fixed costs towards food item, rentals, education expenses,
                transportation, etc. Needless to mention, financial freedom can
                significantly be achieved by ensuring fixed income to cover the
                regular fixed expenses
              </b>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={"1px solid #dee2e6"} borderBottom={"none"}>
            <h2>
              <AccordionButton>
                <Box
                  as='span'
                  flex='1'
                  textAlign='left'
                  display={"flex"}
                  alignItems={"center"}
                  h={9}
                >
                  How to earn Regular Income (RBI)?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <b>
                Typically regular income is earned through interest from the
                fixed income instruments. Traditionally, interest income is
                earned from the bank deposits however, there is an increasing
                trend in favour of bonds/other fixed income instruments
                considering higher interest rates/yield on them than bank
                deposits.
              </b>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={"1px solid #dee2e6"} borderBottom={"none"}>
            <h2>
              <AccordionButton>
                <Box
                  as='span'
                  flex='1'
                  textAlign='left'
                  display={"flex"}
                  alignItems={"center"}
                  h={9}
                >
                  What is Term Investment Plan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <b>
                Typically different interest rates are offered across tenors.
                Mostly, higher rates are offered for longer maturities. This is
                also referred as 'Term Premium'. Sometimes, this positive
                interest differential is as high as 3-4%. Therefore, it is
                critical to consider investment in long term bonds in order to
                maximize interest income.
              </b>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={"1px solid #dee2e6"}>
            <h2>
              <AccordionButton>
                <Box
                  as='span'
                  flex='1'
                  textAlign='left'
                  display={"flex"}
                  alignItems={"center"}
                  h={9}
                >
                  What are different types of investment risks?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <b>
                While business risk is considered as the most significant across
                all instruments, there are additional risks associated with debt
                instruments. Some of the major risks are default risk, liquidity
                risk, market risk, interest rate risk, reinvestment risk, etc.
              </b>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border={"1px solid #dee2e6"}>
            <h2>
              <AccordionButton>
                <Box
                  as='span'
                  flex='1'
                  textAlign='left'
                  display={"flex"}
                  alignItems={"center"}
                  h={9}
                >
                  What is Risk Adjusted Return?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <b>
                Risk-adjusted return is a critical element to successful
                long-term investing, and one often overlooked by newer
                investors. Investors may make the mistake of focusing on gross
                return in its most basic form, without considering the risks
                they're exposed to in order to achieve those returns. While no
                investment is 100% risk-free, Central government securities are
                often used as the proxy for risk-adjusted comparisons. Higher
                risk adjusted returns typically considered desirable and healthy
              </b>
            </AccordionPanel>
          </AccordionItem>

          <div className='vmore'>
            <button className='vmb'>View More</button>
          </div>
        </Accordion>

        <div className='more-que'>
          <div>
            <p className='q'>Have more questions?</p>
            <p className='lt'>Let's talk</p>
          </div>
          <p className='desc'>
            Our team of highly trained professionals will clear all your doubts
            with utmost transparency and clarity.
          </p>
          <div className='btns'>
            <button className='joinUS'>Join Us</button>
            <button className='bookCall' onClick={open}>
              Book a Free Call
            </button>
          </div>
          <p className='avail'>
            We are available on all days between 10 AM to 7PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
