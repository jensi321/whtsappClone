import { Tabs } from 'antd'
import React, { useState } from 'react'
import AllChatList from './AllChatList'
import UnreadChat from './UnreadChat'
import GroupsChat from './GroupsChat'
import AddFavorites from './AddFavorites'
import { Link } from 'react-router-dom'

const ChatList = () => {
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
                                <h1 className='leading text-[22px] font-bold'>Chats</h1>
                            </div>
                            <div className="">
                                <div className="flex items-center">
                                    <span className='flex items-center  justify-center'>
                                        <div className="relative w-[40px] h-[40px]">
                                            <div className="flex items-center p-[8px]">
                                                <span>
                                                    <img className='w-full h-full' src="assets/Images/ChatPluse.svg" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <Link className="relative rounded-[50%] ml-[10px] w-[40px] h-[40px] overflow-hidden" onClick={handleOpen}>
                                            <div className={`flex items-center p-[8px] bg-white ${isOpen && 'bg-[#0b141a1a]'}`}>
                                                <span>
                                                    <img className='w-full h-full' src="assets/Images/Dots.svg" alt="" />
                                                </span>
                                            </div>

                                        </Link>
                                        {
                                            isOpen &&
                                            <span>
                                                <div className="absolute block z-[10000] scale-100 opacity-100 top-[52px] right-[30px]  max-w-[340px] py-[9px] bg-[#fff] rounded-[3px] shadow-shadow1">
                                                    <ul>
                                                        <li>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>New group</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Starred messages</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Select chats</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Log out</Link>
                                                        </li>
                                                        <hr className='border-t border-solid border-[#e9edef] mx-[1px] my-[4px]' />
                                                        <li>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center  px-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Get WhatsApp for Windows</Link>
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

                <Tabs
                    defaultActiveKey="1"
                    className='msglist overflow-hidden'
                    items={[
                        {
                            label: 'All',
                            key: '1',
                            children: <AllChatList />,
                        },
                        {
                            label: 'Unread',
                            key: '2',
                            children: <UnreadChat />,
                        },
                        {
                            label: 'Favorites',
                            key: '3',
                            children: <AddFavorites />,
                        },
                        {
                            label: 'Groups',
                            key: '4',
                            children: <GroupsChat />,
                        },
                    ]}
                />
            </div>
        </>
    )
}

export default ChatList