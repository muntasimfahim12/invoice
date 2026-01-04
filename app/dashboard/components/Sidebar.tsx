"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Receipt, LogOut, ChevronRight,
  Zap, Compass
} from "lucide-react";

// Sudu matro proyojoniyo 3 ti menu item rakha hoyeche
const menuItems = [
  { name: "Overview", href: "/dashboard", icon: Compass },
  { name: "Clients", href: "/dashboard/clients", icon: Users },
  { name: "Invoices", href: "/dashboard/invoices", icon: Receipt },
];

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* --- DESKTOP SIDEBAR --- */}
      <motion.aside
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={false}
        animate={{ width: isHovered ? 260 : 88 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="fixed left-0 top-0 h-screen bg-white/70 backdrop-blur-2xl hidden md:flex flex-col z-[100] border-r border-white shadow-[10px_0_40px_rgba(0,0,0,0.02)]"
      >
        {/* --- PREMIUM LOGO --- */}
        <div className="h-24 flex items-center px-5 mb-2 overflow-hidden">
          <div className="relative group flex-shrink-0">
              <div className="w-12 h-12 rounded-[18px] p-[1.5px] bg-gradient-to-tr from-gray-300 via-gray-100 to-white shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:scale-105">
                <div className="w-full h-full bg-white rounded-[16px] flex items-center justify-center border border-gray-100/50">
                   <Zap size={20} fill="black" className="text-black" />
                </div>
              </div>
          </div>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                className="ml-4"
              >
                <h1 className="text-[16px] font-[1000] text-black tracking-tight leading-none uppercase">
                  Involy
                </h1>
                <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-1 text-nowrap">Enterprise Pro</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Navigation */}
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div className={`
                  group relative flex items-center h-[52px] rounded-[16px] transition-all duration-300
                  ${isActive ? "bg-black shadow-[0_15px_30px_rgba(0,0,0,0.1)]" : "hover:bg-gray-100/60"}
                `}>
                  <div className={`min-w-[56px] flex items-center justify-center transition-all ${isActive ? "text-white scale-110" : "text-gray-400 group-hover:text-black"}`}>
                    <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  </div>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 pr-4 flex items-center justify-between">
                        <span className={`text-[13px] font-[900] tracking-tight ${isActive ? "text-white" : "text-gray-500 group-hover:text-black"}`}>
                          {item.name}
                        </span>
                        {isActive && <ChevronRight size={12} className="text-white/40" />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* User Profile / Logout */}
        <div className="p-4 mb-4 border-t border-gray-50/50">
          <div className="flex items-center h-[52px] px-2 rounded-2xl hover:bg-rose-50 group transition-all cursor-pointer">
            <div className="min-w-[40px] flex items-center justify-center text-gray-400 group-hover:text-rose-600 transition-all">
              <LogOut size={18} strokeWidth={2.5} />
            </div>
            {isHovered && (
              <div className="flex flex-col ml-1">
                <span className="font-[1000] text-[12px] text-black">Tanvir Alam</span>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Sign Out</span>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* --- MOBILE NAVIGATION (Glass iPhone Dock) --- */}
      <div className="fixed bottom-8 left-0 right-0 px-6 md:hidden z-[100]">
        <nav className="mx-auto max-w-[360px] h-16 bg-white/60 backdrop-blur-3xl border border-white/40 flex justify-around items-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-[28px] relative overflow-hidden">
          
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="relative flex flex-col items-center py-2 px-4 transition-all">
                <div className={`transition-all duration-300 ${isActive ? "text-black scale-125 -translate-y-1" : "text-gray-400"}`}>
                  <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                {isActive && (
                  <motion.div 
                    layoutId="mobile-pill" 
                    className="absolute -bottom-1 w-1 h-1 bg-black rounded-full" 
                  />
                )}
              </Link>
            );
          })}
          
         
        </nav>
      </div>
    </>
  );
}