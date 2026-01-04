/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { motion } from "framer-motion";
import { 
  TrendingUp, Users, FileText, ArrowUpRight, 
  Plus, MoreHorizontal, ArrowDownRight, Activity,
  ArrowRight
} from "lucide-react";

export default function DashboardHome() {
  const stats = [
    { 
      label: "Total Revenue", 
      value: "$45,285.00", 
      growth: "+12.5%", 
      isUp: true,
      icon: TrendingUp,
      // Premium Soft Colors
      bgColor: "bg-[#EEF2FF]", 
      iconBg: "bg-indigo-500",
      accent: "text-indigo-600",
      ring: "ring-indigo-100"
    },
    { 
      label: "Active Clients", 
      value: "1,240", 
      growth: "+3.2%", 
      isUp: true,
      icon: Users,
      bgColor: "bg-[#ECFDF5]", 
      iconBg: "bg-emerald-500",
      accent: "text-emerald-600",
       ring: "ring-emerald-100"
    },
    { 
      label: "Pending Invoices", 
      value: "23", 
      growth: "-5.0%", 
      isUp: false,
      icon: FileText,
      bgColor: "bg-[#FFF7ED]", 
      iconBg: "bg-orange-500",
      accent: "text-orange-600",
       ring: "ring-orange-100"
    },
  ];

  return (
    <div className="min-h-screen pb-32 pt-8 px-4 md:px-10 max-w-[1400px] mx-auto transition-all duration-500">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-3xl font-[1000] text-black tracking-tight leading-none">
            Overview
          </h1>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">
            Welcome back, Tanvir Alam
          </p>
        </motion.div>

        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: "#000" }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-black/10"
        >
          <Plus size={14} strokeWidth={4} />
          New Invoice
        </motion.button>
      </div>

      {/* --- REFINED COMPACT STATS GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`group relative p-6 rounded-[32px] border border-white ${stat.bgColor} shadow-[0_15px_40px_rgba(0,0,0,0.02)] transition-all duration-500`}
          >
            <div className="flex justify-between items-center mb-6">
              {/* Profile-Icon Style Container */}
              <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ring-4 ${stat.ring} group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon size={20} className={`${stat.accent}`} strokeWidth={2.5} />
              </div>

              {/* Minimal Growth Badge */}
              <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-[900] bg-white shadow-sm ${stat.isUp ? 'text-emerald-500' : 'text-rose-500'}`}>
                {stat.isUp ? <TrendingUp size={10} strokeWidth={3} /> : <ArrowDownRight size={10} strokeWidth={3} />}
                {stat.growth}
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest opacity-70">
                {stat.label}
              </p>
              <div className="flex items-center justify-between">
                {/* Choto ebong Premium Amount Text */}
                <h3 className="text-2xl font-[1000] text-gray-900 tracking-tighter">
                  {stat.value}
                </h3>
                <div className="p-1.5 rounded-lg bg-white/50 group-hover:bg-white transition-colors cursor-pointer">
                  <ArrowRight size={14} className="text-gray-400 group-hover:text-black" />
                </div>
              </div>
            </div>

            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </motion.div>
        ))}
      </div>

      {/* --- RECENT ACTIVITY (More Compact Table) --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[35px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden"
      >
        <div className="px-8 py-6 border-b border-gray-50 flex justify-between items-center">
          <h2 className="text-sm font-black text-black uppercase tracking-widest">Recent Activity</h2>
          <button className="text-[10px] font-black text-indigo-600 hover:underline">Explore All</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <tbody className="divide-y divide-gray-50/50">
              {[1, 2, 3].map((_, i) => (
                <tr key={i} className="group hover:bg-gray-50/50 transition-all cursor-pointer">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center font-black text-[10px] text-gray-400 border border-gray-200">
                        {["AD", "SK", "BW"][i]}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-[800] text-black">Abstract Design</span>
                        <span className="text-[9px] font-bold text-gray-400">2 hours ago</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex flex-col items-end">
                      <span className="font-black text-black text-[13px]">+$2,450.00</span>
                      <span className="text-[9px] font-black text-emerald-500 uppercase tracking-tighter">Completed</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-gray-300 hover:text-black">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}