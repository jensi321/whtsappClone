import React, { useState } from 'react'
import { GoTriangleDown } from 'react-icons/go'
import { Link } from 'react-router-dom'

const ChatHistory = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div className=" chat-history h-full border-l border-solid border-[#d1d7db] w-full z-[100] grow relative">
                <div className="flex flex-col h-full bg-[#efeae2] ">
                    <div className="w-full h-full top-0 left-0 absolute bg-img"></div>
                    {/* Header */}
                    <header className='relative z-[1000] border-box flex items-center w-full h-[59px] px-[16px] py-[10px] bg-[#f0f2f5]'>
                        <div className="-mt-[1px] pr-[15px]">
                            <div className="h-[40px] w-[40px] rounded-[50%] relative " >
                                <div className="w-full h-full flex justify-center">
                                    <span>
                                        <img src="assets/Images/single.svg" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col grow justify-center ">
                            <div className="flex items-start mt-[-1px] ">
                                <div className="flex grow overflow-hidden text-[16px] leading-[16px] color-[#111b21] text-left text-ellipsis	">
                                    <div className="inline-flex items-center">
                                        <span className='text-ellipsis	inline-block relative grow '>+91 83899 33232</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-[20px] ">
                            <div className="flex items-center">
                                <div className="border h-full pb-[3px] pt-[5px] leading-[1] px-[10px] relative border-solid border-[#d1d7db] rounded-[100px]">
                                    <button className=''>
                                        <div className="flex justify-center items-center text-[#54656f80]">
                                            <span className='mr-[6px]'>
                                                <img src="assets/Images/video-call.svg" alt="" />
                                            </span>
                                            <span className=''><GoTriangleDown />
                                            </span>
                                        </div>
                                    </button>
                                </div>
                                <div className="pl-10px rounded-[50%]">
                                    <div className="flex-items-center p-[8px]">
                                        <span>
                                            <img src="assets/Images/search.svg" alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="pl-10px rounded-[50%]">
                                    <div className="flex-items-center p-[8px]">
                                        <span>
                                            <img src="assets/Images/dots.svg" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </header>

                    {/* Chat */}
                    <div className="z-[1] relative oreder-2 flex-[1]">
                        <div className="">
                            <div className="w-full overflow-x-[hidden] overflow-y-scroll h-full top-0 z-[100] flex-col border-box flex left absolute">
                                <div className="flex-1 min-h-[12px]"></div>
                                <div className="pb-[8px] flex-initial">
                                    <div className="flex flex-row justify-center mb-[12px] px-[9%]">
                                        <div className="mb-0 border-box inline-block flex-none max-w-[100%] pt-[5px] px-[12px] pb-[6px] text-[12.5px] leading-[21px] rounded-[7.5px] text-[#54656f] text-center bg-[#fffffff2] shadow-custom">
                                            <span>Today</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="resivemsg">
                                            <div className="mb-[12px] relative">
                                                <div className="items-start px-[63px] flex flex-col ">
                                                    <div className="max-w-[65%] relative text-[14.2px] leading-[19px] color-[#111b21] rounded-[7.5px]">
                                                        <span className='absolute left-[-8px] top-0 z-index-[100] block w-[8px] h-[13px] '>
                                                            <img src="assets/Images/Resivemsg.svg" alt="" />
                                                        </span>
                                                        <div className="rounded-tl-[0] bg-[#fff] shadow-custom relative z-[200] rounded-[7.5px]">
                                                            <div className="pb-[8px] pt-[6px] box-border pl-[9px] pr-[7px] ">
                                                                <div className="flex flex-row justify-start items-start ">
                                                                    <span>Hello ...!</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sendmsg">
                                            <div className="mb-[12px] relative">
                                                <div className="items-end px-[63px] flex flex-col ">
                                                    <div className="max-w-[65%] relative text-[14.2px] leading-[19px] color-[#111b21] rounded-[7.5px]">
                                                        <span className='absolute right-[-8px] top-0 z-index-[100] block w-[8px] h-[13px] '>
                                                            <img src="assets/Images/sendmsg.svg" alt="" />
                                                        </span>
                                                        <div className="rounded-tr-[0] bg-[#d9fdd3] shadow-custom relative z-[200] rounded-[7.5px]">
                                                            <div className="pb-[8px] pt-[6px] box-border pl-[9px] pr-[7px] ">
                                                                <div className="flex flex-row justify-start items-start ">
                                                                    <span>Hello ...!</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className='relative z-[2] box-border order-3 w-full h-[62px] block'>
                        <div className="pb-[5px] min-h-[62px] items-end z-[2] box-border flex px-[16px] flex-row relative bg-[#f0f2f5]">
                            <div className="w-full min-w-0 min-h-[52px] relative flex-[1]">
                                <span>
                                    <div className='flex items-center'>
                                        <div className="flex text-[#54656f] items-center justify-center border-box min-h-[52px]">
                                            <div className="w-[26px] flex mx-[8px] h-[42px]">
                                                <button className='bottom-[8px] w-[26px] top-[9px] opacity-[0] rounded-[2px] absolute block'>
                                                    <div className="m-[1px]">
                                                        <span>
                                                            <img src="assets/Images/Close-grey.svg" alt="" />
                                                        </span>
                                                    </div>
                                                </button>
                                                <button className='bottom-[8px] w-[26px] top-[9px] opacity-[1] rounded-[2px] absolute block'>
                                                    <div className="m-[1px]">
                                                        <span>
                                                            <img src="assets/Images/Emoji.svg" alt="" />
                                                        </span>
                                                    </div>
                                                </button>
                                                <button className='bottom-[8px] w-[26px] top-[9px] opacity-[0] rounded-[2px] absolute block'>
                                                    <div className="m-[1px]">
                                                        <span>
                                                            <img src="assets/Images/gif.svg" alt="" />
                                                        </span>
                                                    </div>
                                                </button>
                                                <button className='bottom-[8px] w-[26px] top-[9px] opacity-[0] rounded-[2px] absolute block'>
                                                    <div className="m-[1px]">
                                                        <span>
                                                            <img src="assets/Images/stiker.svg" alt="" />
                                                        </span>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="flex items-center ">
                                                <div className={`rounded-[50%]  relative ${isMenuOpen === true && 'bg-[#0b141a1a] rotate-[135deg]' } ease-in-out	duration-[.3s] transition-transform	`}>
                                                    <Link className="p-[8px] flex items-center" onClick={toggleMenu}>
                                                        <span>
                                                            <img src="assets/Images/plus.svg" alt="" />
                                                        </span>
                                                    </Link>

                                                </div>
                                                {isMenuOpen && (
                                                <span>
                                                    <div className="bottom-[54px] scale-100	left-[38px] rounded-[16px] absolute z-[10000] max-w-[340px] py-[9px] bg-[white] shadow-shadow1">
                                                        <ul>
                                                            <div className="py-[3px]">
                                                                <div className="mx-[8px]">
                                                                    <li className='hover:bg-[#f5f6f6]'>
                                                                        <div className="h-[40px] flex items-center flex-row justify-start ml-[8px] mr-[32px] ">
                                                                            <span className='min-w-[20px] mr-[12px]'>
                                                                                <img src="assets/Images/Document.svg" alt="" />
                                                                            </span>
                                                                            <span className='text-[#3b4a54] overflow-hidden text-ellipsis leading-[21px]'>Document</span>
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                                <div className="mx-[8px]">
                                                                    <li className='hover:bg-[#f5f6f6]'>
                                                                        <div className="h-[40px] flex items-center flex-row justify-start ml-[8px] mr-[32px] ">
                                                                            <span className='min-w-[20px] mr-[12px]'>
                                                                                <img src="assets/Images/Photos.svg" alt="" />
                                                                            </span>
                                                                            <span className='text-[#3b4a54] overflow-hidden text-ellipsis leading-[21px]'>Photos & videos</span>
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                                <div className="mx-[8px]">
                                                                    <li className='hover:bg-[#f5f6f6]'>
                                                                        <div className="h-[40px] flex items-center flex-row justify-start ml-[8px] mr-[32px] ">
                                                                            <span className='min-w-[20px] mr-[12px]'>
                                                                                <img src="assets/Images/Camera.svg" alt="" />
                                                                            </span>
                                                                            <span className='text-[#3b4a54] overflow-hidden text-ellipsis leading-[21px]'>Camera</span>
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                                <div className="mx-[8px]">
                                                                    <li className='hover:bg-[#f5f6f6]'>
                                                                        <div className="h-[40px] flex items-center flex-row justify-start ml-[8px] mr-[32px] ">
                                                                            <span className='min-w-[20px] mr-[12px]'>
                                                                                <img src="assets/Images/Contact.svg" alt="" />
                                                                            </span>
                                                                            <span className='text-[#3b4a54] overflow-hidden text-ellipsis leading-[21px]'>Contact</span>
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                                <div className="mx-[8px]">
                                                                    <li className='hover:bg-[#f5f6f6]'>
                                                                        <div className="h-[40px] flex items-center flex-row justify-start ml-[8px] mr-[32px] ">
                                                                            <span className='min-w-[20px] mr-[12px]'>
                                                                                <img src="assets/Images/Poll.svg" alt="" />
                                                                            </span>
                                                                            <span className='text-[#3b4a54] overflow-hidden text-ellipsis leading-[21px]'>Poll</span>
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                                <div className="mx-[8px]">
                                                                    <li className='hover:bg-[#f5f6f6]'>
                                                                        <div className="h-[40px] flex items-center flex-row justify-start ml-[8px] mr-[32px] ">
                                                                            <span className='min-w-[20px] mr-[12px]'>
                                                                                <img src="assets/Images/New sticker.svg" alt="" />
                                                                            </span>
                                                                            <span className='text-[#3b4a54] overflow-hidden text-ellipsis leading-[21px]'>New sticker</span>
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                                <div className="mx-[8px]">
                                                                    <li className='hover:bg-[#f5f6f6]'>
                                                                        <div className="h-[40px] flex items-center flex-row justify-start ml-[8px] mr-[32px] ">
                                                                            <span className='min-w-[20px] mr-[12px]'>
                                                                                <img src="assets/Images/Event.svg" alt="" />
                                                                            </span>
                                                                            <span className='text-[#3b4a54] overflow-hidden text-ellipsis leading-[21px]'>Event</span>
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                            </div>

                                                        </ul>
                                                    </div>
                                                </span>
                                            )}
                                            </div>

                                        </div>
                                        <div className="flex items-end w-full">
                                            <div className="my-[5px] border w-full border-[white] border-solid min-h-[20px] px-[12px] mx-[8px] bg-white rounded-[8px] flex text-[.9375rem] leading-[20px] py-[9px]">
                                                <input type="text" className='w-full outline-none' placeholder='Type a message' />
                                            </div>
                                            <div className="min-w-[40px] pt-[5px] w-[40px] justify-center border-box flex items-center">
                                                <button className="w-[40px] h-[40px] flex items-center justify-center">
                                                    <span>
                                                        <img src="assets/Images/MicroPhone.svg" alt="" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default ChatHistory