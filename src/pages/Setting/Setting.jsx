import React from 'react'
import ChangePassword from '../../components/ChangePassword'
import Permission from '../../components/Permission/Permmission'
import Profile from '../../components/Profile/Profile'
import { useStateContext } from '../../contexts/ContextProvider'

const Setting = () => {
    const { currentColor } = useStateContext()
    return (
        <>
            <div className='grid md:grid-cols-1 gap-4 mt-24'>
                <ul
                    className="mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
                    role="tablist"
                    data-te-nav-ref>
                    <li role="presentation">
                        <a
                            href="#tabs-home"
                            className="my-2 font-bold text-xl block border-x-0 border-t-0 border-transparent px-7 pt-4 pb-3.5 uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                            data-te-toggle="pill"
                            data-te-target="#tabs-home"
                            data-te-nav-active
                            role="tab"
                            aria-controls="tabs-home"
                            aria-selected="true"
                        >Profile</a
                        >
                    </li>

                    <li role="presentation">
                        <a
                            href="#tabs-messages"
                            className="my-2 block border-x-0 border-t-0 border-transparent px-7 pt-4 pb-3.5  font-bold text-xl uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                            data-te-toggle="pill"
                            data-te-target="#tabs-messages"
                            role="tab"
                            aria-controls="tabs-messages"
                            aria-selected="false"
                        >Change Password</a
                        >
                    </li>
                    {/* <li role="presentation">
                        <a
                            href="#tabs-permission"
                            className="my-2 block border-x-0 border-t-0 border-transparent px-7 pt-4 pb-3.5  font-bold text-xl uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                            data-te-toggle="pill"
                            data-te-target="#tabs-permission"
                            role="tab"
                            aria-controls="tabs-permission"
                            aria-selected="false"
                        >Permission</a
                        >
                    </li> */}

                </ul>
                <div className="mb-6">
                    <div
                        className="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tabs-home"
                        role="tabpanel"
                        aria-labelledby="tabs-home-tab"
                        data-te-tab-active>
                        <Profile />
                    </div>

                    <div
                        className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tabs-messages"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tab">
                        <ChangePassword />
                    </div>
                    {/* <div
                        className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tabs-permission"
                        role="tabpanel"
                        aria-labelledby="tabs-permission">
                        <Permission />
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default Setting