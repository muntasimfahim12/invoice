/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Bell, Search, Plus, Zap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="h-20 md:h-24 bg-white/60 backdrop-blur-[30px] border-b border-white/20 sticky top-0 z-[40] px-4 md:px-10 flex items-center justify-between transition-all duration-500">
      
      {/* --- LEFT: Logo Section --- */}
      <div className="flex items-center gap-3 md:gap-4 md:w-[200px] shrink-0">
        <div className="w-10 h-10 md:w-11 md:h-11 bg-black rounded-[12px] md:rounded-[14px] flex items-center justify-center shadow-xl shadow-black/10 group cursor-pointer transition-transform active:scale-95">
          <Zap size={18} fill="white" className="text-white transform group-hover:scale-110 transition-transform" />
        </div>
        
        <div className="hidden sm:block leading-tight">
          <h2 className="text-[14px] font-[900] tracking-tight text-black">Involy Pro</h2>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">v2.4.0</p>
          </div>
        </div>
      </div>

      {/* --- CENTER: Search Pill --- */}
      <div className="flex-1 flex justify-center px-2 md:px-4">
        {/* Desktop Search */}
        <div className="relative group w-full max-w-[400px] hidden md:block">
          <div className="absolute -inset-0.5 bg-black rounded-[20px] opacity-0 group-focus-within:opacity-[0.03] transition duration-500"></div>
          <div className="relative flex items-center">
            <div className="absolute left-5 text-gray-400 pointer-events-none">
              <Search size={15} strokeWidth={3} />
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-12 pr-12 py-3 bg-gray-100/40 border border-transparent rounded-[18px] text-[13px] font-bold transition-all outline-none text-black placeholder:text-gray-400 focus:bg-white/80 focus:border-gray-200 focus:shadow-sm"
            />
            <div className="absolute right-4 hidden lg:block">
               <span className="text-[9px] font-black text-gray-300 border border-gray-200 px-1.5 py-0.5 rounded-md">⌘ K</span>
            </div>
          </div>
        </div>

        {/* Mobile Search Button */}
        <button className="md:hidden w-10 h-10 bg-gray-100/80 rounded-xl flex items-center justify-center text-black active:scale-90 transition-transform">
          <Search size={18} strokeWidth={2.5} />
        </button>
      </div>

      {/* --- RIGHT: Profile & Actions --- */}
      <div className="flex items-center justify-end gap-2 md:gap-5 md:w-[200px] shrink-0">
        
        {/* Notifications - FIXED SIZE ERROR HERE */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-gray-100/50 rounded-xl md:rounded-2xl text-gray-500 active:bg-white transition-all border border-transparent"
        >
          {/* Responsive size logic using classes */}
          <Bell className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" strokeWidth={2} />
          <span className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-black rounded-full border-2 border-white"></span>
        </motion.button>

        {/* Profile Card */}
        <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
           <div className="hidden lg:flex flex-col items-end">
              <span className="text-[13px] font-[900] text-black">Tanvir</span>
              <div className="w-4 h-1 bg-black rounded-full opacity-10 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></div>
           </div>
           
           <div className="relative flex-shrink-0">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-[12px] md:rounded-[15px] overflow-hidden p-[2px] bg-gradient-to-tr from-gray-200 to-gray-50 group-hover:shadow-lg transition-all">
                 <div className="w-full h-full bg-white rounded-[10px] md:rounded-[13px] flex items-center justify-center font-black text-[10px] md:text-[11px] text-black border border-gray-100">
                   TA
                 </div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}