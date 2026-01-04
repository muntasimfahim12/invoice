/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { 
    ArrowLeft, FileText, DollarSign, Calendar, 
    Download, Mail, Printer, ShieldCheck, Hash, User 
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface InvoiceType {
    id: string;
    invoiceNo: string;
    clientName: string;
    email: string;
    amount: number;
    status: "Paid" | "Pending" | "Overdue";
    date: string;
    dueDate: string;
    items: { description: string; price: number; qty: number }[];
}

const dummyInvoice: InvoiceType = {
    id: "1",
    invoiceNo: "INV-9021-X",
    clientName: "Nexus Digital",
    email: "billing@nexus.com",
    amount: 1250,
    status: "Paid",
    date: "Jan 01, 2026",
    dueDate: "Jan 15, 2026",
    items: [
        { description: "Premium Web Design Service", price: 1000, qty: 1 },
        { description: "Domain & Cloud Hosting (Annual)", price: 250, qty: 1 },
    ],
};

export default function InvoiceDetailPage() {
    const router = useRouter();
    const params = useParams();
    const [invoice, setInvoice] = useState<InvoiceType | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInvoice(dummyInvoice);
    }, [params.id]);

    if (!invoice) return (
        <div className="min-h-screen flex items-center justify-center font-black uppercase tracking-widest text-gray-400">
            Syncing Financial Data...
        </div>
    );

    return (
        <div className="min-h-screen px-4 md:px-10 pt-8 pb-32 max-w-[1000px] mx-auto bg-[#F9FAFC]">
            
            {/* --- TOP NAVIGATION --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/invoices">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-11 h-11 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm hover:border-black transition-all cursor-pointer"
                        >
                            <ArrowLeft size={18} strokeWidth={3} className="text-black" />
                        </motion.div>
                    </Link>
                    <div>
                        <h1 className="text-xl font-[1000] text-black tracking-tight leading-none uppercase">
                            Transaction Ledger
                        </h1>
                        <p className="text-[9px] font-black text-gray-400 uppercase mt-1.5 tracking-[0.2em]">
                            Reference: {invoice.invoiceNo}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:border-black transition-all">
                        <Printer size={14} /> Print
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest shadow-xl shadow-black/10 hover:bg-slate-800 transition-all">
                        <Download size={14} /> Download PDF
                    </button>
                </div>
            </div>

            {/* --- INVOICE DOCUMENT --- */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[40px] border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.03)] overflow-hidden"
            >
                {/* STATUS BAR */}
                <div className={`py-4 px-8 text-center text-[10px] font-black uppercase tracking-[0.3em] ${
                    invoice.status === 'Paid' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                }`}>
                    Status: {invoice.status} — Processed via Secure Gateway
                </div>

                <div className="p-8 md:p-12">
                    {/* DOC HEADER */}
                    <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
                        <div className="space-y-4">
                            <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                                <ShieldCheck size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Billed To</p>
                                <h2 className="text-2xl font-[1000] text-black tracking-tight mt-1">{invoice.clientName}</h2>
                                <p className="text-[12px] font-bold text-gray-500">{invoice.email}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 text-left md:text-right">
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Issue Date</p>
                                <p className="text-[14px] font-black text-black mt-1">{invoice.date}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Due Date</p>
                                <p className="text-[14px] font-black text-rose-500 mt-1">{invoice.dueDate}</p>
                            </div>
                        </div>
                    </div>

                    {/* ITEMS TABLE */}
                    <div className="mb-12">
                        <div className="grid grid-cols-12 border-b-2 border-slate-900 pb-4 mb-4 px-2">
                            <div className="col-span-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Description</div>
                            <div className="col-span-4 text-right text-[10px] font-black uppercase tracking-widest text-gray-400">Amount</div>
                        </div>
                        <div className="space-y-4">
                            {invoice.items.map((item, i) => (
                                <div key={i} className="grid grid-cols-12 px-2 items-center">
                                    <div className="col-span-8">
                                        <p className="text-[14px] font-black text-black tracking-tight">{item.description}</p>
                                        <p className="text-[10px] font-bold text-gray-400 italic">Qty: {item.qty}</p>
                                    </div>
                                    <div className="col-span-4 text-right">
                                        <p className="text-[16px] font-[1000] text-black tracking-tighter">
                                            ${item.price.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TOTAL SECTION */}
                    <div className="bg-slate-50 rounded-[30px] p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm">
                                <DollarSign size={20} strokeWidth={3} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Total Payable</p>
                                <p className="text-[12px] font-bold text-slate-500 mt-1 italic">Including all applicable taxes</p>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <h3 className="text-4xl font-[1000] text-black tracking-tighter">
                                ${invoice.amount.toLocaleString()}
                            </h3>
                        </div>
                    </div>

                    {/* FOOTER ACTION */}
                    <div className="mt-12 pt-8 border-t border-dashed border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] font-bold text-gray-400 max-w-[300px] text-center md:text-left">
                            This is a system generated invoice. No signature is required. For billing queries, contact support.
                        </p>
                        <button className="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                            <Mail size={14} strokeWidth={3} /> Send to Client
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}