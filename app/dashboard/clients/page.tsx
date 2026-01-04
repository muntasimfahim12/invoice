"use client";

import { motion } from "framer-motion";
import { Plus, Search, Filter, Mail, ChevronRight } from "lucide-react";
import Link from "next/link";

const clients = [
    { id: "1", name: "Abstract Design Ltd.", email: "hello@abstract.com", status: "Active", billed: "$12,450.00", initial: "AD" },
    { id: "2", name: "Skyline Ventures", email: "info@skyline.io", status: "Active", billed: "$8,200.00", initial: "SV" },
    { id: "3", name: "Blue Whale Corp", email: "contact@bluewhale.co", status: "Inactive", billed: "$1,100.00", initial: "BW" },
    { id: "4", name: "Nova Softworks", email: "support@novasoft.com", status: "Active", billed: "$6,780.00", initial: "NS" },
];

export default function ClientsPage() {
    return (
        <div className="min-h-screen pb-32 pt-8 px-4 md:px-10 max-w-[1400px] mx-auto transition-all duration-500">

            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <h1 className="text-3xl font-[1000] text-black tracking-tight leading-none">
                        Clients
                    </h1>
                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mt-2">
                        Manage your customer relations
                    </p>
                </motion.div>

                <Link href="/dashboard/clients/add">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full md:w-auto flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-black/10 transition-all"
                    >
                        <Plus size={14} strokeWidth={4} />
                        Add New Client
                    </motion.button>
                </Link>
            </div>

            {/* --- SEARCH & FILTER --- */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative group w-full max-w-[400px]">
                    <div className="absolute -inset-0.5 bg-black rounded-[20px] opacity-0 group-focus-within:opacity-[0.03] transition duration-500"></div>
                    <div className="relative flex items-center">
                        <div className="absolute left-5 text-black pointer-events-none">
                            <Search size={15} strokeWidth={3} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search clients..."
                            className="w-full pl-12 pr-12 py-4 bg-gray-100/60 border border-transparent rounded-[18px] text-[13px] font-bold transition-all outline-none text-black placeholder:text-gray-400 focus:bg-white focus:border-gray-200 focus:shadow-sm"
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border-2 border-gray-100 px-6 py-4 rounded-[18px] text-[11px] font-[1000] uppercase tracking-widest text-black hover:border-black transition-all shadow-sm">
                        <Filter size={16} strokeWidth={2.5} />
                        Filters
                    </button>
                </div>
            </div>

            {/* --- CLIENTS TABLE --- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[35px] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.02)] overflow-hidden"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-gray-50">
                                <th className="px-6 md:px-8 py-6">Client Details</th>
                                <th className="px-8 py-6 hidden md:table-cell">Status</th>
                                <th className="px-8 py-6 text-right hidden sm:table-cell">Total Billed</th>
                                <th className="px-6 md:px-8 py-6"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50/50">
                            {clients.map((client) => (
                                <tr key={client.id} className="group relative hover:bg-gray-50/50 transition-all">
                                    <td className="p-0 relative">
                                        <Link href={`/dashboard/clients/${client.id}`} className="absolute inset-0 z-10" />
                                        <div className="px-6 md:px-8 py-6 flex items-center gap-4">
                                            <div className="min-w-[40px] h-10 rounded-[14px] bg-white border-2 border-gray-100 flex items-center justify-center font-black text-[11px] text-black shadow-sm group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300">
                                                {client.initial}
                                            </div>
                                            <div className="flex flex-col truncate">
                                                <span className="text-[14px] font-[900] text-black tracking-tight leading-tight truncate">
                                                    {client.name}
                                                </span>
                                                <div className="flex items-center gap-1.5 text-gray-400 mt-1">
                                                    <Mail size={10} className="text-black/40" />
                                                    <span className="text-[10px] font-bold lowercase truncate max-w-[120px] md:max-w-none">{client.email}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-8 py-6 hidden md:table-cell relative">
                                        <Link href={`/dashboard/clients/${client.id}`} className="absolute inset-0 z-10" />
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-[900] uppercase tracking-widest border ${client.status === 'Active'
                                            ? 'bg-emerald-50 text-emerald-600 border-emerald-100/50'
                                            : 'bg-gray-50 text-gray-400 border-gray-100'
                                        }`}>
                                            <div className={`w-1 h-1 rounded-full ${client.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`}></div>
                                            {client.status}
                                        </span>
                                    </td>

                                    <td className="px-8 py-6 text-right hidden sm:table-cell relative">
                                        <Link href={`/dashboard/clients/${client.id}`} className="absolute inset-0 z-10" />
                                        <span className="font-[1000] text-black text-[14px] tracking-tighter">
                                            {client.billed}
                                        </span>
                                    </td>

                                    <td className="px-6 md:px-8 py-6 text-right">
                                        <div className="flex justify-end items-center gap-2 relative z-20">
                                            <Link href={`/dashboard/clients/${client.id}`}>
                                                <div className="p-2 text-gray-300 hover:text-black hover:bg-white border-2 border-transparent hover:border-gray-100 rounded-xl transition-all shadow-none">
                                                    <ChevronRight size={18} strokeWidth={3} />
                                                </div>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* --- PAGINATION --- */}
                <div className="px-8 py-6 border-t border-gray-50 flex flex-col sm:flex-row gap-6 items-center justify-between bg-gray-50/20">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        Showing 4 of 24 Clients
                    </p>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none px-6 py-3 text-[10px] font-black uppercase tracking-widest border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-all">Prev</button>
                        <button className="flex-1 sm:flex-none px-6 py-3 text-[10px] font-black uppercase tracking-widest bg-black text-white rounded-xl shadow-lg shadow-black/10 transition-all">Next</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
