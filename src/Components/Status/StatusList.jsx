import React, { useState } from 'react'
import { HiOutlinePlusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom'

const StatusList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlusMenuOpen, setIsPlusMenuOpen] = useState(false);


  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  const handlePlusMenuToggle = () => {
    setIsPlusMenuOpen(!isPlusMenuOpen);
  };
  return (
    <>
      <div className="chatlist">
        <header>
          <div className="h-[59px] color-[#3b4a54] pr-[20px] pl-[25px] box-border flex items-center bg-[#fff]">
            <div className="w-full flex items-center justify-center">
              <div className="-mt-[3px] text-[#111b21] grow text-[1.375rem]">
                <h1 className='leading text-[22px] font-bold'>Status</h1>
              </div>
              <div className="">
                <div className="flex items-center">
                  <span className='flex items-center  justify-center'>
                    <Link className="relative w-[40px] h-[40px]" onClick={handlePlusMenuToggle}>
                      <div className="flex items-center p-[8px]">
                        <span>
                          <img className='w-full h-full' src="assets/Images/plus.svg" alt="Plus" />
                        </span>
                      </div>
                    </Link>
                    <Link className="relative rounded-[50%] ml-[10px] w-[40px] h-[40px] overflow-hidden" onClick={handleOpen}>
                      <div className={`flex items-center p-[8px] bg-white ${isOpen && 'bg-[#0b141a1a]'}`}>
                        <span>
                          <img className='w-full h-full' src="assets/Images/Dots.svg" alt="" />
                        </span>
                      </div>

                    </Link>

                    {isPlusMenuOpen && (
                      <span>
                        <div className="absolute block z-[10000] scale-100 opacity-100 top-[52px] right-[80px] max-w-[340px] py-[9px] bg-[#fff] rounded-[3px] shadow-shadow1">
                          <ul>
                            <li>
                              <Link className='relative overflow-hidden text-ellipsis nowrap flex items-center pr-[20px] pl-[15px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'><img src="assets/Images/media.svg" className='mr-[15px]' alt="" />Photos & videos</Link>
                            </li>
                            <li>
                              <Link className='relative overflow-hidden text-ellipsis nowrap flex items-center pr-[20px] pl-[15px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'><img src="assets/Images/edit.svg" className='mr-[15px]' alt="" />Text</Link>
                            </li>
                          </ul>
                        </div>
                      </span>
                    )}
                    {
                      isOpen &&
                      <span>
                        <div className="absolute block z-[10000] scale-100 opacity-100 top-[52px] right-[30px]  max-w-[340px] py-[9px] bg-[#fff] rounded-[3px] shadow-shadow1">
                          <ul>
                            <li>
                              <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Status Privacy</Link>
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

        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col flex relative grow opacity-[1]">
          <div className="mb-[10px] shrink-0 relative grow-0 shadow-custom bg-[white]  ">
            <div className="h-[69px] w-full flex items-center justify-between flex-row  pl-[2px]">
              <div className="relative">
                <div className="h-[64px] w-[68px] justify-center flex items-center flex-row text-[white]">
                  <div className="h-[40px] w-[40px] rounded-[50%] relative ">
                    <img src="assets/Images/Single.svg" alt="" />
                  </div>
                  <div className="bottom-[8px] right-[8px] height-[17px] width-[17px] p-[2px] z-[100] uppercase font-[500] text-[white] flex items-center text-[.875px] bg-[white] rounded-[50%] absolute">
                    <div className="h-[17px] w-[17px] justify-center rounded-[50%] flex items-center font-[500] bg-[#00a884] text-white text-[.875rem]">
                      <HiOutlinePlusSm />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[36px] min-w-[52px] mr-auto flex-col flex justify-between">
                <div className="text-[1rem]">My status</div>
                <div className="text-[.8125rem] text-[#667781]">Click to add status update</div>
              </div>
            </div>
          </div>
          <div className="relative grow shrink shadow-custom bg-[white]">
            <div className="pb-[24px] overflow-y-auto relative ">
              <div className="statusList">
                <div className="">
                  <div className="mt-[-1px] relative h-auto overflow-hidden">
                    <span>
                      <div className="z-[15] h-[72px] w-full ">
                        <div className="pb-[15px] pt-[30px] h-[72px] uppercase box-border pl-[32px] text-[#008069] text-[1rem]">Recent</div>
                      </div>
                      <div className="z-[5] h-[72px] w-full ">
                        <div className="flex flexx-row bg-wihte h-[72px] hover:bg-[#f5f6f6]">
                          <div className="flex">
                            <div className="my-[12px] pt-[2px] h-[40px] w-[40px] ml-[13px] mr-[15px]">
                              <svg class="mt-[-4px] ml-[-4px] absolute" width="48" height="48" viewBox="0 0 104 104">
                                <circle cx="52" cy="52" r="50" fill="none" stroke-linecap="round" class="stroke-[teal]" stroke-width="4"></circle>
                              </svg>
                              <div className="h-[40px] w-[40px] rounded-[50%] bg-[#cacaca] ">
                                <img src="assets/Images/Single.svg" alt="" className='overflow-hidden h-[40px] w-[40px] rounded-[50%]' />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center grow shrink pr-[15px] border-t border-solid border-[#e9edef]">
                            <div className="flex items-center w-full">
                              <div className="flex grow overflow-hidden text-[17px] text-[#111b21] text-left break-words">
                                <span className='overflow-hidden text-ellipsis relative grow '>DSFdc vnncv</span>
                              </div>
                            </div>
                            <div className="flex items-center min-h-[20px] mt-[2px] w-full text-[13px] leading-[20px] text-[#667781]">
                              <div className="grow overflow-hidden text-[14px] leading-[20px] text-left text-ellipsis ">Today at 11:45 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="z-[5] h-[72px] w-full ">
                        <div className="flex flexx-row bg-wihte h-[72px] hover:bg-[#f5f6f6]">
                          <div className="flex">
                            <div className="my-[12px] pt-[2px] h-[40px] w-[40px] ml-[13px] mr-[15px]">
                              <svg class="mt-[-4px] ml-[-4px] absolute" width="48" height="48" viewBox="0 0 104 104">
                                <circle cx="52" cy="52" r="50" fill="none" stroke-linecap="round" class="stroke-[teal]" stroke-width="4"></circle>
                              </svg>
                              <div className="h-[40px] w-[40px] rounded-[50%] bg-[#cacaca] ">
                                <img src="assets/Images/Single.svg" alt="" className='overflow-hidden h-[40px] w-[40px] rounded-[50%]' />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center grow shrink pr-[15px] border-t border-solid border-[#e9edef]">
                            <div className="flex items-center w-full">
                              <div className="flex grow overflow-hidden text-[17px] text-[#111b21] text-left break-words">
                                <span className='overflow-hidden text-ellipsis relative grow '>DSFdc vnncv</span>
                              </div>
                            </div>
                            <div className="flex items-center min-h-[20px] mt-[2px] w-full text-[13px] leading-[20px] text-[#667781]">
                              <div className="grow overflow-hidden text-[14px] leading-[20px] text-left text-ellipsis ">Today at 11:45 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="z-[5] h-[72px] w-full ">
                        <div className="flex flexx-row bg-wihte h-[72px] hover:bg-[#f5f6f6]">
                          <div className="flex">
                            <div className="my-[12px] pt-[2px] h-[40px] w-[40px] ml-[13px] mr-[15px]">
                              <svg class="mt-[-4px] ml-[-4px] absolute" width="48" height="48" viewBox="0 0 104 104">
                                <circle cx="52" cy="52" r="50" fill="none" stroke-linecap="round" class="stroke-[teal]" stroke-width="4"></circle>
                              </svg>
                              <div className="h-[40px] w-[40px] rounded-[50%] bg-[#cacaca] ">
                                <img src="assets/Images/Single.svg" alt="" className='overflow-hidden h-[40px] w-[40px] rounded-[50%]' />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center grow shrink pr-[15px] border-t border-solid border-[#e9edef]">
                            <div className="flex items-center w-full">
                              <div className="flex grow overflow-hidden text-[17px] text-[#111b21] text-left break-words">
                                <span className='overflow-hidden text-ellipsis relative grow '>DSFdc vnncv</span>
                              </div>
                            </div>
                            <div className="flex items-center min-h-[20px] mt-[2px] w-full text-[13px] leading-[20px] text-[#667781]">
                              <div className="grow overflow-hidden text-[14px] leading-[20px] text-left text-ellipsis ">Today at 11:45 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="z-[15] h-[72px] w-full ">
                        <div className="pb-[15px] pt-[30px] h-[72px] uppercase box-border pl-[32px] text-[#008069] text-[1rem]">Viewed</div>
                      </div>
                      <div className="z-[5] h-[72px] w-full ">
                        <div className="flex flexx-row bg-wihte h-[72px] hover:bg-[#f5f6f6]">
                          <div className="flex">
                            <div className="my-[12px] pt-[2px] h-[40px] w-[40px] ml-[13px] mr-[15px]">
                              <svg class="mt-[-4px] ml-[-4px] absolute" width="48" height="48" viewBox="0 0 104 104">
                                <circle cx="52" cy="52" r="50" fill="none" stroke-linecap="round" class="stroke-[#bbbec4]" stroke-width="4"></circle>
                              </svg>
                              <div className="h-[40px] w-[40px] rounded-[50%] bg-[#cacaca] ">
                                <img src="assets/Images/Single.svg" alt="" className='overflow-hidden h-[40px] w-[40px] rounded-[50%]' />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center grow shrink pr-[15px] border-t border-solid border-[#e9edef]">
                            <div className="flex items-center w-full">
                              <div className="flex grow overflow-hidden text-[17px] text-[#111b21] text-left break-words">
                                <span className='overflow-hidden text-ellipsis relative grow '>DSFdc vnncv</span>
                              </div>
                            </div>
                            <div className="flex items-center min-h-[20px] mt-[2px] w-full text-[13px] leading-[20px] text-[#667781]">
                              <div className="grow overflow-hidden text-[14px] leading-[20px] text-left text-ellipsis ">Today at 11:45 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="z-[5] h-[72px] w-full ">
                        <div className="flex flexx-row bg-wihte h-[72px] hover:bg-[#f5f6f6]">
                          <div className="flex">
                            <div className="my-[12px] pt-[2px] h-[40px] w-[40px] ml-[13px] mr-[15px]">
                              <svg class="mt-[-4px] ml-[-4px] absolute" width="48" height="48" viewBox="0 0 104 104">
                                <circle cx="52" cy="52" r="50" fill="none" stroke-linecap="round" class="stroke-[#bbbec4]" stroke-width="4"></circle>
                              </svg>
                              <div className="h-[40px] w-[40px] rounded-[50%] bg-[#cacaca] ">
                                <img src="assets/Images/Single.svg" alt="" className='overflow-hidden h-[40px] w-[40px] rounded-[50%]' />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center grow shrink pr-[15px] border-t border-solid border-[#e9edef]">
                            <div className="flex items-center w-full">
                              <div className="flex grow overflow-hidden text-[17px] text-[#111b21] text-left break-words">
                                <span className='overflow-hidden text-ellipsis relative grow '>DSFdc vnncv</span>
                              </div>
                            </div>
                            <div className="flex items-center min-h-[20px] mt-[2px] w-full text-[13px] leading-[20px] text-[#667781]">
                              <div className="grow overflow-hidden text-[14px] leading-[20px] text-left text-ellipsis ">Today at 11:45 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="z-[5] h-[72px] w-full ">
                        <div className="flex flexx-row bg-wihte h-[72px] hover:bg-[#f5f6f6]">
                          <div className="flex">
                            <div className="my-[12px] pt-[2px] h-[40px] w-[40px] ml-[13px] mr-[15px]">
                              <svg class="mt-[-4px] ml-[-4px] absolute" width="48" height="48" viewBox="0 0 104 104">
                                <circle cx="52" cy="52" r="50" fill="none" stroke-linecap="round" class="stroke-[#bbbec4]" stroke-width="4"></circle>
                              </svg>
                              <div className="h-[40px] w-[40px] rounded-[50%] bg-[#cacaca] ">
                                <img src="assets/Images/Single.svg" alt="" className='overflow-hidden h-[40px] w-[40px] rounded-[50%]' />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center grow shrink pr-[15px] border-t border-solid border-[#e9edef]">
                            <div className="flex items-center w-full">
                              <div className="flex grow overflow-hidden text-[17px] text-[#111b21] text-left break-words">
                                <span className='overflow-hidden text-ellipsis relative grow '>DSFdc vnncv</span>
                              </div>
                            </div>
                            <div className="flex items-center min-h-[20px] mt-[2px] w-full text-[13px] leading-[20px] text-[#667781]">
                              <div className="grow overflow-hidden text-[14px] leading-[20px] text-left text-ellipsis ">Today at 11:45 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="z-[5] h-[72px] w-full ">
                        <div className="flex flexx-row bg-wihte h-[72px] hover:bg-[#f5f6f6]">
                          <div className="flex">
                            <div className="my-[12px] pt-[2px] h-[40px] w-[40px] ml-[13px] mr-[15px]">
                              <svg class="mt-[-4px] ml-[-4px] absolute" width="48" height="48" viewBox="0 0 104 104">
                                <circle cx="52" cy="52" r="50" fill="none" stroke-linecap="round" class="stroke-[#bbbec4]" stroke-width="4"></circle>
                              </svg>
                              <div className="h-[40px] w-[40px] rounded-[50%] bg-[#cacaca] ">
                                <img src="assets/Images/Single.svg" alt="" className='overflow-hidden h-[40px] w-[40px] rounded-[50%]' />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center grow shrink pr-[15px] border-t border-solid border-[#e9edef]">
                            <div className="flex items-center w-full">
                              <div className="flex grow overflow-hidden text-[17px] text-[#111b21] text-left break-words">
                                <span className='overflow-hidden text-ellipsis relative grow '>DSFdc vnncv</span>
                              </div>
                            </div>
                            <div className="flex items-center min-h-[20px] mt-[2px] w-full text-[13px] leading-[20px] text-[#667781]">
                              <div className="grow overflow-hidden text-[14px] leading-[20px] text-left text-ellipsis ">Today at 11:45 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="z-[5] h-[72px] w-full ">
                        <div className="flex flexx-row bg-wihte h-[72px] hover:bg-[#f5f6f6]">
                          <div className="flex">
                            <div className="my-[12px] pt-[2px] h-[40px] w-[40px] ml-[13px] mr-[15px]">
                              <svg class="mt-[-4px] ml-[-4px] absolute" width="48" height="48" viewBox="0 0 104 104">
                                <circle cx="52" cy="52" r="50" fill="none" stroke-linecap="round" class="stroke-[#bbbec4]" stroke-width="4"></circle>
                              </svg>
                              <div className="h-[40px] w-[40px] rounded-[50%] bg-[#cacaca] ">
                                <img src="assets/Images/Single.svg" alt="" className='overflow-hidden h-[40px] w-[40px] rounded-[50%]' />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center grow shrink pr-[15px] border-t border-solid border-[#e9edef]">
                            <div className="flex items-center w-full">
                              <div className="flex grow overflow-hidden text-[17px] text-[#111b21] text-left break-words">
                                <span className='overflow-hidden text-ellipsis relative grow '>DSFdc vnncv</span>
                              </div>
                            </div>
                            <div className="flex items-center min-h-[20px] mt-[2px] w-full text-[13px] leading-[20px] text-[#667781]">
                              <div className="grow overflow-hidden text-[14px] leading-[20px] text-left text-ellipsis ">Today at 11:45 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="z-[5] h-[72px] w-full ">
                        <div className="flex flexx-row bg-wihte h-[72px] hover:bg-[#f5f6f6]">
                          <div className="flex">
                            <div className="my-[12px] pt-[2px] h-[40px] w-[40px] ml-[13px] mr-[15px]">
                              <svg class="mt-[-4px] ml-[-4px] absolute" width="48" height="48" viewBox="0 0 104 104">
                                <circle cx="52" cy="52" r="50" fill="none" stroke-linecap="round" class="stroke-[#bbbec4]" stroke-width="4"></circle>
                              </svg>
                              <div className="h-[40px] w-[40px] rounded-[50%] bg-[#cacaca] ">
                                <img src="assets/Images/Single.svg" alt="" className='overflow-hidden h-[40px] w-[40px] rounded-[50%]' />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center grow shrink pr-[15px] border-t border-solid border-[#e9edef]">
                            <div className="flex items-center w-full">
                              <div className="flex grow overflow-hidden text-[17px] text-[#111b21] text-left break-words">
                                <span className='overflow-hidden text-ellipsis relative grow '>DSFdc vnncv</span>
                              </div>
                            </div>
                            <div className="flex items-center min-h-[20px] mt-[2px] w-full text-[13px] leading-[20px] text-[#667781]">
                              <div className="grow overflow-hidden text-[14px] leading-[20px] text-left text-ellipsis ">Today at 11:45 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default StatusList