import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ChannelMsgItems from '../Items/ChannelMsgItems';
import FindChannelMsgList from '../Items/FindChannelMsgList';

const ChannelsList = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
          
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className="chatlist bg-[white]">
                <header>
                    <div className="h-[59px] color-[#3b4a54] pr-[20px] pl-[25px] box-border flex items-center bg-[#fff]">
                        <div className="w-full flex items-center justify-center">
                            <div className="-mt-[3px] text-[#111b21] grow text-[1.375rem]">
                                <h1 className='leading text-[22px] font-bold'>Channels</h1>
                            </div>
                            <div className="">
                                <div className="flex items-center">
                                    <span className='flex items-center  justify-center'>

                                        <Link className="relative rounded-[50%] ml-[10px] w-[40px] h-[40px] overflow-hidden" onClick={toggleMenu} ref={menuRef}>
                                            <div className={`flex items-center p-[8px] bg-white ${isMenuOpen && 'bg-[#0b141a1a]'}`}>
                                                <span>
                                                    <img className='w-full h-full' src="assets/Images/plus.svg" alt="" />
                                                </span>
                                            </div>

                                        </Link>
                                        {
                                            isMenuOpen &&
                                            <span >
                                                <div className="absolute block z-[10000] scale-100 opacity-100 top-[52px] right-[30px]  max-w-[340px] py-[9px] bg-[#fff] rounded-[3px] shadow-shadow1">
                                                    <ul>
                                                        <li className='hover:bg-[#f5f6f6]'>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Create Channels</Link>
                                                        </li>
                                                        <li className='hover:bg-[#f5f6f6]'>
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
                        <div className="p-[16px] flex items-center justify-center ">
                        <button className='border border-solid py-[10px] border-transparent leading-[1.1429] px-[24px] font-[500] text-[white] rounded-[24px] inline-block relative text-[.875rem] bg-[#008069]'>
                                            <div className="flex items-center justify-center flex-row">
                                                <div className="grow shrink flex-nowrap justify-center gap-[8px] flex items-center flex-row font-[500]">Discover more</div>
                                            </div>
                                        </button>                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ChannelsList