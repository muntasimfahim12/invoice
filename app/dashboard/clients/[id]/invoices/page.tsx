"use client";

import { motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ArrowLeft, Download, ExternalLink, Filter, Plus, Search } from "lucide-react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

const clientInvoices = [
    { id: "INV-892", date: "Dec 12, 2025", amount: "$4,200.00", status: "Paid", method: "Stripe" },
    { id: "INV-893", date: "Nov 10, 2025", amount: "$2,100.00", status: "Pending", method: "Bank Transfer" },
    { id: "INV-894", date: "Oct 01, 2025", amount: "$1,850.00", status: "Paid", method: "PayPal" },
    { id: "INV-895", date: "Sep 15, 2025", amount: "$3,300.00", status: "Overdue", method: "Stripe" },
];

export default function SpecificClientInvoices() {
    const router = useRouter();
    const { id } = useParams(); // URL theke client id nibe

    return (
        <div className="min-h-screen pb-32 pt-8 px-4 md:px-10 max-w-[1200px] mx-auto">
            
            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-4">
                    <button onClick={() => router.back()} className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center hover:border-black transition-all">
                        <ArrowLeft size={18} strokeWidth={3} />
                    </button>
                    <div>
                        <h1 className="text-2xl font-[1000] text-black tracking-tight leading-none uppercase">
                            Client Ledger
                        </h1>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">
                            Transaction History for Client #{id}
                        </p>
                    </div>
                </div>

                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-black/10 transition-all">
                    <Plus size={14} strokeWidth={4} /> Create Invoice
                </button>
            </div>

            {/* --- TABLE CONTAINER --- */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[35px] border border-gray-100 shadow-sm overflow-hidden"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 text-[10px] font-black uppercase tracking-widest border-b border-gray-50 bg-gray-50/30">
                                <th className="px-8 py-6">Invoice ID</th>
                                <th className="px-8 py-6">Issued Date</th>
                                <th className="px-8 py-6">Method</th>
                                <th className="px-8 py-6">Status</th>
                                <th className="px-8 py-6 text-right">Amount</th>
                                <th className="px-8 py-6"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {clientInvoices.map((inv) => (
                                <tr key={inv.id} className="group hover:bg-gray-50/50 transition-all">
                                    <td className="px-8 py-6 font-black text-[13px] text-black uppercase tracking-tighter">{inv.id}</td>
                                    <td className="px-8 py-6 text-[12px] font-bold text-gray-500">{inv.date}</td>
                                    <td className="px-8 py-6 text-[11px] font-black text-gray-400 uppercase tracking-widest">{inv.method}</td>
                                    <td className="px-8 py-6">
                                        <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${
                                            inv.status === 'Paid' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                                            inv.status === 'Overdue' ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                                        }`}>
                                            {inv.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right font-[1000] text-[14px] text-black tracking-tight">{inv.amount}</td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 text-gray-400 hover:text-black transition-colors">
                                                <Download size={16} />
                                            </button>
                                            <Link href={`/dashboard/clients/${id}/invoices/${inv.id}`}>
                                                <button className="p-2 text-gray-400 hover:text-black transition-colors">
                                                    <ExternalLink size={16} />
                                                </button>
                                            </Link>
                                        </div>
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