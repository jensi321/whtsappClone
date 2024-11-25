import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyList = ({close}) => {
  return (
    <>
         <div className="w-full h-full newchat overflow-hidden top-0 left-0 right-0 bottom-0 ml-[64px] flex absolute">
                <div className="newchat-inner flex overflow-hidden box-border relative z-[300] w-full h-full">
                    <div className="overflow-hidden w-full h-full flex flex-col bg-[#fff] ">
                        <header className='min-h-[64px] text-[#3b4a54] pr-[20px] pl-[20px] flex items-center bg-[#fff] '>
                            <div className="w-full flex items-center text-[#111b21]">
                                <div className="w-[54px]">
                                    <Link onClick={close}>
                                        <span>
                                            <img src="assets/Images/ArrowLeft.svg" alt="" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="overflow-hidden w-full max-h-[46px] mt-[-4px] text-[1rem] ">
                                    <span className='leading-[32px] text-inherit'>Privacy</span>
                                </div>
                                
                            </div>
                        </header>

                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col relative grow opacity-[1] bg-[white] ">
                           
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default PrivacyList