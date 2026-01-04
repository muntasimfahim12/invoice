"use client";
import { motion } from "framer-motion";
import { 
    ArrowLeft, Edit3, Mail, Phone, Briefcase, 
    DollarSign, Calendar, FileText, ChevronRight, MapPin, Globe
} from "lucide-react";
import { useRouter, useParams } from "next/navigation"; // useParams add kora hoyeche
import Link from "next/link"; // Link add kora hoyeche

export default function ClientDetailsPage() {
    const router = useRouter();
    const { id } = useParams(); // URL theke client ID nibe

    return (
        <div className="min-h-screen pb-32 pt-6 px-4 md:px-10 max-w-[1300px] mx-auto transition-all duration-500 bg-[#fcfcfc]">
            
            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.back()} 
                        className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm hover:border-black transition-all"
                    >
                        <ArrowLeft size={18} strokeWidth={3} className="text-black" />
                    </motion.button>
                    <div>
                        <h1 className="text-xl md:text-2xl font-[1000] text-black tracking-tight leading-none">
                            Abstract Design Ltd.
                        </h1>
                        <div className="flex items-center gap-2 mt-1.5">
                            <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[8px] font-black uppercase tracking-widest">
                                Active
                            </span>
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">ID: #{id}</span>
                        </div>
                    </div>
                </div>
                
                <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-xl font-black text-[9px] uppercase tracking-[0.15em] shadow-lg shadow-black/10"
                >
                    <Edit3 size={12} strokeWidth={3} /> Edit Profile
                </motion.button>
            </div>

            {/* --- COMPACT STATS --- */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                    { label: "Revenue", value: "$24.5k", icon: DollarSign, color: "bg-blue-600" },
                    { label: "Projects", value: "04", icon: Briefcase, color: "bg-orange-500" },
                    { label: "Joined", value: "Oct 23", icon: Calendar, color: "bg-purple-600" },
                ].map((stat, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="bg-white p-5 rounded-[24px] border border-gray-100 flex items-center gap-4 shadow-sm"
                    >
                        <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-white`}>
                            <stat.icon size={18} strokeWidth={3} />
                        </div>
                        <div>
                            <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                            <h4 className="text-lg font-[1000] text-black tracking-tighter">{stat.value}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* --- CONTACT DETAIL --- */}
                <motion.div className="lg:col-span-4 bg-black rounded-[30px] p-6 text-white">
                    <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-6 flex items-center gap-2">
                        <div className="w-1 h-3 bg-blue-500 rounded-full"></div> Contact Detail
                    </h3>
                    <div className="space-y-6">
                        {[
                            { icon: Mail, label: "Email", val: "billing@abstract.com", color: "text-blue-400" },
                            { icon: Phone, label: "Phone", val: "+1 (555) 000-1234", color: "text-emerald-400" },
                            { icon: MapPin, label: "Office", val: "San Francisco, CA 94103", color: "text-orange-400" },
                            { icon: Globe, label: "Web", val: "www.abstract.com", color: "text-purple-400" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <div className={`p-2.5 bg-white/5 rounded-xl ${item.color}`}>
                                    <item.icon size={16} strokeWidth={2.5} />
                                </div>
                                <div className="truncate">
                                    <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest">{item.label}</p>
                                    <p className="text-[12px] font-black text-white/90 truncate">{item.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* --- INVOICING HISTORY (Navigation Fixed) --- */}
                <motion.div className="lg:col-span-8 bg-[#f4f7ff] rounded-[30px] p-6 border border-blue-100/50">
                    <div className="flex justify-between items-center mb-6 px-2">
                        <div>
                            <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-900/40">Invoicing History</h3>
                            <p className="text-[14px] font-[1000] text-blue-950 tracking-tight">Recent Transactions</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <FileText size={16} strokeWidth={3} />
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        {[
                            { id: "892", date: "12 Dec", price: "$4,200", status: "Paid", bg: "bg-white" },
                            { id: "893", date: "10 Nov", price: "$2,100", status: "Late", bg: "bg-red-50/50" },
                            { id: "894", date: "01 Nov", price: "$1,850", status: "Paid", bg: "bg-white" },
                        ].map((inv, i) => (
                            /* Link add kora hoyeche dynamic route-er jonno */
                            <Link key={i} href={`/dashboard/clients/${id}/invoices/${inv.id}`}>
                                <div className={`flex items-center justify-between p-4 ${inv.bg} rounded-[20px] border border-blue-200/20 hover:border-blue-500 transition-all shadow-sm group cursor-pointer mb-3`}>
                                    <div className="flex items-center gap-4">
                                        <div className="text-[10px] font-black text-blue-900/20 group-hover:text-blue-600 transition-colors">#{inv.id}</div>
                                        <div>
                                            <p className="text-[11px] font-black text-blue-950 uppercase tracking-tight">Invoice Issued</p>
                                            <p className="text-[9px] font-bold text-blue-400">{inv.date}, 2023</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <p className="text-[13px] font-[1000] text-blue-950 tracking-tight">{inv.price}</p>
                                            <span className={`text-[8px] font-black uppercase ${inv.status === 'Late' ? 'text-red-500' : 'text-emerald-500'}`}>
                                                ● {inv.status}
                                            </span>
                                        </div>
                                        <ChevronRight size={14} strokeWidth={4} className="text-blue-200 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}