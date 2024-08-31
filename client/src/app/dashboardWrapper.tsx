"use client";

import React, { useEffect } from 'react'
import Navbar from '@/app/(components)/Navbar';
import Sidebar from '@/app/(components)/Sidebar';
import StoreProvider, { useAppSelector } from './redux';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    // useAppSelector is a safer version of useSelector Hook to extract the state from react redux

    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    
    );

    const isDarkMode = useAppSelector(
        (state) => state.global.isDarkMode
    );

    useEffect(
        () => {
            if (isDarkMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.add("light");
            }
        }
    )


    return (
        <div className={` ${isDarkMode ? "dark":"light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}> 
            <Sidebar />
            {/* change the size of the sidebar */}
            <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-200 ${isSidebarCollapsed ? "md:pl-24": "md:pl-72"}`}>
  
                <Navbar />
  
            {children}
                </main>
  
            
      </div>
    )
}
  
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
      <StoreProvider>
          <DashboardLayout>{children}</DashboardLayout>
      </StoreProvider>
  )
}

export default DashboardWrapper