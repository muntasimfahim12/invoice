/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
    FileText, ChevronRight, DollarSign, Calendar, 
    ArrowUpRight, Clock, CheckCircle2, AlertCircle, Filter, Download
} from "lucide-react";

interface InvoiceType {
    id: string;
    clientName: string;
    amount: number;
    status: "Paid" | "Pending" | "Overdue";
    date: string;
    invoiceNo: string;
}

const dummyInvoices: InvoiceType[] = [
    { id: "1", clientName: "Nexus Digital", amount: 1250, status: "Paid", date: "Jan 01, 2026", invoiceNo: "INV-9021" },
    { id: "2", clientName: "Skyline Ventures", amount: 3200, status: "Pending", date: "Jan 03, 2026", invoiceNo: "INV-9022" },
    { id: "3", clientName: "Blue Whale Corp", amount: 1100, status: "Overdue", date: "Dec 28, 2025", invoiceNo: "INV-8994" },
];

export default function InvoicesPage() {
    const [invoices, setInvoices] = useState<InvoiceType[]>([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInvoices(dummyInvoices);
    }, []);

    return (
        <div className="min-h-screen px-4 md:px-10 pt-8 pb-32 max-w-[1400px] mx-auto bg-[#F9FAFC]">
            
            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white shadow-lg shadow-black/10">
                            <FileText size={20} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-[1000] text-black tracking-tight leading-none">Invoices</h1>
                            <p className="text-[10px] font-black text-gray-400 uppercase mt-2 tracking-[0.2em]">
                                Revenue & Billing Audit
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-3.5 rounded-[18px] text-[10px] font-black uppercase tracking-widest hover:border-black transition-all shadow-sm">
                        <Download size={14} strokeWidth={3} /> Export PDF
                    </button>
                    <button className="flex items-center gap-2 bg-black text-white px-6 py-3.5 rounded-[18px] text-[10px] font-black uppercase tracking-widest shadow-xl shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Create Invoice
                    </button>
                </div>
            </div>

            {/* --- QUICK STATS --- */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                    { label: "Total Invoiced", val: "$5,550", icon: DollarSign, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Pending Dues", val: "$3,200", icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
                    { label: "Overdue", val: "$1,100", icon: AlertCircle, color: "text-rose-500", bg: "bg-rose-50" },
                ].map((stat, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-center justify-between"
                    >
                        <div>
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-[1000] text-black tracking-tighter">{stat.val}</h3>
                        </div>
                        <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
                            <stat.icon size={22} strokeWidth={2.5} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* --- INVOICE TABLE --- */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="bg-white rounded-[35px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-gray-50">
                                <th className="px-8 py-6">Reference No.</th>
                                <th className="px-8 py-6">Client Entity</th>
                                <th className="px-8 py-6 text-center">Amount</th>
                                <th className="px-8 py-6 hidden md:table-cell">Issuance Date</th>
                                <th className="px-8 py-6 text-center">Status</th>
                                <th className="px-8 py-6"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {invoices.map((inv) => (
                                <tr key={inv.id} className="group hover:bg-gray-50/50 transition-all cursor-pointer">
                                    <td className="px-8 py-6">
                                        <span className="text-[11px] font-[1000] text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg tracking-wider">
                                            #{inv.invoiceNo}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex flex-col">
                                            <span className="text-[14px] font-black text-black tracking-tight group-hover:text-blue-600 transition-colors">
                                                {inv.clientName}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <span className="text-[15px] font-[1000] text-black tracking-tighter">
                                            ${inv.amount.toLocaleString()}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 hidden md:table-cell">
                                        <div className="flex items-center gap-2 text-gray-400 font-bold text-[12px]">
                                            <Calendar size={13} strokeWidth={2.5} />
                                            {inv.date}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <span
                                            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                                                inv.status === "Paid"
                                                    ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                                                    : inv.status === "Pending"
                                                    ? "bg-amber-50 text-amber-600 border-amber-100"
                                                    : "bg-rose-50 text-rose-600 border-rose-100"
                                            }`}
                                        >
                                            <div className={`w-1.5 h-1.5 rounded-full ${
                                                inv.status === "Paid" ? "bg-emerald-500" : inv.status === "Pending" ? "bg-amber-500" : "bg-rose-500 animate-pulse"
                                            }`} />
                                            {inv.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <Link href={`/dashboard/invoices/${inv.id}`}>
                                            <div className="w-10 h-10 rounded-xl border border-transparent group-hover:border-gray-200 group-hover:bg-white flex items-center justify-center text-gray-300 group-hover:text-black transition-all">
                                                <ChevronRight size={18} strokeWidth={3} />
                                            </div>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* --- TABLE FOOTER --- */}
                <div className="px-8 py-6 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        Total 3 Invoices Found
                    </p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest border border-gray-200 rounded-lg bg-white disabled:opacity-50" disabled>Prev</button>
                        <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest border border-gray-200 rounded-lg bg-white">Next</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}