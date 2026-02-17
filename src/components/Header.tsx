import React from 'react';
import { Settings, LogOut, Bell } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className="bg-thp-red text-white h-16 flex items-center px-4 md:px-6 shadow-md z-50 fixed top-0 w-full">
            <div className="flex items-center gap-3">
                <div className="bg-white p-1.5 rounded-full shadow-sm">
                    {/* Placeholder for Logo - In real app use <img> */}
                    <div className="w-8 h-8 rounded-full bg-thp-red flex items-center justify-center font-bold text-xs border-2 border-white">
                        THP
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-lg leading-tight hidden md:block">Thailand Post | Business Booking</h1>
                    <h1 className="font-bold text-lg leading-tight md:hidden">THP Booking</h1>
                    <span className="text-xs text-red-100 hidden md:block">ระบบนัดหมายรับงานลูกค้าธุรกิจ</span>
                </div>
            </div>

            <div className="ml-auto flex items-center gap-2 md:gap-4">
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-2 w-2 h-2 bg-yellow-400 rounded-full border border-thp-red"></span>
                </button>
                <div className="h-8 w-[1px] bg-red-400 mx-1 hidden md:block"></div>
                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden md:block">
                        <div className="text-sm font-semibold">Admin User</div>
                        <div className="text-xs text-red-100">Department ID: 8888</div>
                    </div>
                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                        <span className="font-bold">A</span>
                    </div>
                </div>
            </div>
        </header>
    );
};
