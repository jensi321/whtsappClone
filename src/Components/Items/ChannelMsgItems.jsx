import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChannelList } from '../data'
import { FaAngleDown } from 'react-icons/fa6';

const ChannelMsgItems = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = (index) => {

        setIsOpen(prevIndex => (prevIndex === index ? null : index));
    }
  return (
    <>
          {
                ChannelList.map((i, index) => {
                    return (
                        <div className={`item  ${i.status}`} key={index}>
                            <div className="items-inner relative flex w-full flex-row h-[72px] ">
                                <div className="img-content flex items-center justify-center">
                                    <div className="pl-[13px] pr-[15px] ">
                                        <div className="h-[49px] w-[49px] rounded-[50%]">
                                            <img src={i.img} alt="" />

                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full justify-center items-center pr-[15px] text-content">
                                    <div className="flex items-center justify-between w-full text-left">
                                        <div className="name grow flex ">
                                            <span className='text-[17px] font-[400]'>{i.name}</span>
                                        </div>
                                        <div className="time mt-[3px] ml-[6px] text-[12px] leading-[14px]">{i.time}</div>
                                    </div>
                                    <div className="message mt-[2px] flex items-center w-full justify-between truncate text-[#667781]" >
                                        <span className='truncate '>
                                            {i.message}
                                        </span>
                                        <span className='flex items-center'>
                                            <div className="messagecount hidden">{i.msgcount}</div>
                                            <Link className='downarrow hidden text-[#667781] ml-[3px]' onClick={() => handleOpen(index)}>
                                                <FaAngleDown />
                                            </Link>
                                            {
                                                isOpen === index &&
                                                <span>
                                                    <div className="absolute block z-[10000] scale-100 opacity-100 top-[52px] right-[30px]  max-w-[340px] py-[9px] bg-[#fff] rounded-[3px] shadow-shadow1">
                                                        <ul>
                                                            <li>
                                                                <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px]  text-[#3b4a54] hover:text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Channel info</Link>
                                                            </li>
                                                            <li>
                                                                <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] hover:text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Pin Channel</Link>
                                                            </li>
                                                            <li>
                                                                <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] hover:text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Unmute notifications</Link>
                                                            </li>
                                                            <li>
                                                                <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] hover:text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Mark as {i.status === 'read' ? 'Unread' : 'Read'}</Link>
                                                            </li>
                                                            <li>
                                                                <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] hover:text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Copy Link</Link>
                                                            </li>
                                                            <li>
                                                                <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] hover:text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Unfollow</Link>
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
                    )
                })
            }


    </>
  )
}

export default ChannelMsgItems