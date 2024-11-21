import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ChannelMsgItems from '../Items/ChannelMsgItems';
import FindChannelMsgList from '../Items/FindChannelMsgList';

const ChannelsList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="chatlist">
                <header>
                    <div className="h-[59px] color-[#3b4a54] pr-[20px] pl-[25px] box-border flex items-center bg-[#fff]">
                        <div className="w-full flex items-center justify-center">
                            <div className="-mt-[3px] text-[#111b21] grow text-[1.375rem]">
                                <h1 className='leading text-[22px] font-bold'>Channels</h1>
                            </div>
                            <div className="">
                                <div className="flex items-center">
                                    <span className='flex items-center  justify-center'>

                                        <Link className="relative rounded-[50%] ml-[10px] w-[40px] h-[40px] overflow-hidden" onClick={handleOpen}>
                                            <div className={`flex items-center p-[8px] bg-white ${isOpen && 'bg-[#0b141a1a]'}`}>
                                                <span>
                                                    <img className='w-full h-full' src="assets/Images/plus.svg" alt="" />
                                                </span>
                                            </div>

                                        </Link>
                                        {
                                            isOpen &&
                                            <span>
                                                <div className="absolute block z-[10000] scale-100 opacity-100 top-[52px] right-[30px]  max-w-[340px] py-[9px] bg-[#fff] rounded-[3px] shadow-shadow1">
                                                    <ul>
                                                        <li>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Create Channels</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Find Channels</Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </span>
                                        }

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex flex-col">
                    <div className="flex">
                        <div className="h-[49px] w-full flex items-center px-[12px] z-[100] relative box-border">
                            <div className="bg-[#f0f2f5] rounded-[8px] flex items-center justify-center w-full h-[35px] pl-[10px]">
                                <button className=' flex items-center justify-center  '>
                                    <img src="assets/Images/search.svg" className='w-[24px] h-[24px]' alt="" />
                                </button>
                                <input type="text" className='ml-[30px] bg-transparent w-full text-[15px] outline-none' placeholder='Search' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="channels-items h-full overflow-hidden ">
                    <div className="channels-items-inner h-full overflow-y-auto">
                        <ChannelMsgItems/>
                        <div className="flex flex-col items-center justify-start">
                            <div className="pt-[16px] pb-[4px] w-full shrink flex items-center px-[16px] justify-between flex-row ">
                                <div className="text-[#111b21] leading-[1.2941] text-[1.0625rem] ">Find channels to follow</div>
                            </div>
                        </div>
                        <FindChannelMsgList/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ChannelsList