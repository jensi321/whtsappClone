import React from 'react'

const SettingsList = () => {
    const items = [
        {
            img: 'assets/Images/Account.svg',
            name: 'Account',
        },
        {
            img: 'assets/Images/Privacy.svg',
            name: 'Privacy',
        },
        {
            img: 'assets/Images/ChatsSettings.svg',
            name: 'Chats',
        },
        {
            img: 'assets/Images/NotificationSettings.svg',
            name: 'Notifications',
        },
        {
            img: 'assets/Images/Keyboard.svg',
            name: 'Keyboard shortcuts',
        },
        {
            img: 'assets/Images/Help.svg',
            name: 'Help',
        },
    ]
    return (
        <>
            <div className="chatlist bg-[white]">
                <header>
                    <div className="h-[59px] color-[#3b4a54] pr-[20px] pl-[25px] box-border flex items-center bg-[#fff]">
                        <div className="w-full flex items-center justify-center">
                            <div className="-mt-[3px] text-[#111b21] grow text-[1.375rem]">
                                <h1 className='leading text-[22px] font-bold'>Settings</h1>
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
                                <input type="text" className='ml-[30px] bg-transparent w-full text-[15px] outline-none' placeholder='Search Settings' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shrink flex-nowrap overflow-hidden flex-col flex justify-start items-stretch ">
                    <div className="w-full h-full flex grow ">
                        <div className="h-full w-full overflow-hidden block">
                            <div className="h-full overflow-y-auto ">
                                <button className="w-full overflow-hidden flex text-start grow">
                                    <div className="w-full box-border flex relative grow">
                                        <div className="min-h-[60px]  wrap-nowrap box-border flex items-stretch flex-row justify-start ">
                                            <div className="py-[8px] min-w-[40px] flex-nowrap flex items-center px-[16px] flex-row ">
                                                <div className="w-[82px] h-[82px] relative rounded-[50%] overflow-hidden">
                                                    <img src="assets/Images/user.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 py-[8px] flex-nowrap justify-center flex-col border-box flex items-stretch pr-[16px]">
                                            <div className="shrink flex-nowrap flex  items-center flex-row justify-start">
                                                <div className="grow overflow-hidden shrink border-box">
                                                    <div className="text-[#111b21] leading-[1.2941] text-[1.0625rem] ">
                                                        <span className='overflow-hidden text-ellipsis relative'>Lucas...🦋</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                {
                                    items.map((i, index) => {
                                        return (
                                            <button className='w-full overflow-hidden flex grow hover:bg-[#f5f6f6]'>
                                                <div className="w-full box-border">
                                                    <div className="min-h-[60px] shrink flex-nowrap box-border  flex items-stretch flex-row justify-start grow ">
                                                        <div className="py-[8px] min-w-[40px] flex-nowrap justify-center flex items-center px-[16px] flex-row">
                                                            <span><img src={i.img} alt="" /></span>
                                                        </div>
                                                        <div className="flex-1 py-[8px] border-b border-[#e9edef] flex-nowrap justify-center flex-col box-border flex items-stretch">
                                                            <div className="shrink flex-nowrap flex justify-start">
                                                                <div className="grow overflow-hidden shrink box-border">
                                                                    <div className="text-[#111b21] leading-[1.2941] text-[1.0625rem] text-left">{i.name}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        )
                                    })
                                }
                                <button className='w-full overflow-hidden flex grow '>
                                    <div className="w-full box-border">
                                        <div className="min-h-[60px] shrink flex-nowrap box-border  flex items-stretch flex-row justify-start grow ">
                                            <div className="py-[8px] min-w-[40px] flex-nowrap justify-center flex items-center px-[16px] flex-row">
                                                <span><img src='assets/Images/Logout.svg' alt="" /></span>
                                            </div>
                                            <div className="flex-1 py-[8px]  flex-nowrap justify-center flex-col box-border flex items-stretch">
                                                <div className="shrink flex-nowrap flex justify-start">
                                                    <div className="grow overflow-hidden shrink box-border">
                                                        <div className="text-[#ea0038] leading-[1.2941] text-[1.0625rem] text-left">Log out</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SettingsList