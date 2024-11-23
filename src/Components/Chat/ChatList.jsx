import { Tabs } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import AllChatList from './AllChatList'
import UnreadChat from './UnreadChat'
import GroupsChat from './GroupsChat'
import AddFavorites from './AddFavorites'
import { Link } from 'react-router-dom'
import NewChat from './NewChat'
import ChatListDotsModel from '../Models/ChatListDotsModel'

const ChatList = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNewChatListOpen, setIsNewChatListOpen] = useState(false);
    const menuRef = useRef(null);

    const closeNewChatList = () => {
        setIsNewChatListOpen(false);
    };
    const openNewChatList = () => {
        setIsNewChatListOpen(true);
    };

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
                                <h1 className='leading text-[22px] font-bold'>Chats</h1>
                            </div>
                            <div className="">
                                <div className="flex items-center">
                                    <span className='flex items-center  justify-center'>
                                        <div className="relative w-[40px] h-[40px]">
                                            <Link className="flex items-center p-[8px]" onClick={openNewChatList}>
                                                <span>
                                                    <img className='w-full h-full' src="assets/Images/ChatPluse.svg" alt="" />
                                                </span>
                                            </Link>
                                        </div>
                                        
                                        <Link className="relative rounded-[50%] ml-[10px] w-[40px] h-[40px] overflow-hidden" onClick={toggleMenu} ref={menuRef}>
                                            <div className={`flex items-center p-[8px] bg-white ${isMenuOpen && 'bg-[#0b141a1a]'}`}>
                                                <span>
                                                    <img className='w-full h-full' src="assets/Images/Dots.svg" alt="" />
                                                </span>
                                            </div>

                                        </Link>
                                        {
                                            isMenuOpen &&
                                            <ChatListDotsModel/>
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
            {isNewChatListOpen && <NewChat close={closeNewChatList}/>}
        </>
    )
}

export default ChatList