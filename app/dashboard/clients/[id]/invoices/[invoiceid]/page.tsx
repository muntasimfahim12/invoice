"use client";

import { motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ArrowLeft, Printer, Download, Share2, ShieldCheck, Mail, Building2, Globe } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

export default function InvoiceDetailsPage() {
    const router = useRouter();
    const { id, invoiceId } = useParams();

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen pb-32 pt-8 px-4 md:px-10 max-w-[1000px] mx-auto">
            
            {/* --- TOP ACTIONS (Hidden on Print) --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 print:hidden">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => router.back()} 
                        className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm hover:border-black transition-all"
                    >
                        <ArrowLeft size={20} strokeWidth={3} />
                    </button>
                    <div>
                        <h1 className="text-xl font-[1000] text-black tracking-tight uppercase italic">
                            #{invoiceId}
                        </h1>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">
                            System Generated Statement
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button 
                        onClick={handlePrint}
                        className="flex items-center gap-2 bg-white border-2 border-gray-100 px-5 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:border-black transition-all"
                    >
                        <Printer size={16} /> Print
                    </button>
                    <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-black/10 transition-all hover:scale-105 active:scale-95">
                        <Download size={16} /> Get PDF
                    </button>
                </div>
            </div>

            {/* --- INVOICE PAPER --- */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[40px] border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.03)] overflow-hidden print:shadow-none print:border-none print:m-0"
            >
                {/* INVOICE HEADER */}
                <div className="p-10 md:p-16 flex flex-col md:flex-row justify-between gap-12 border-b border-gray-50">
                    <div>
                        <div className="w-14 h-14 bg-black rounded-[20px] flex items-center justify-center text-white mb-6">
                            <ShieldCheck size={30} strokeWidth={2.5} />
                        </div>
                        <h2 className="text-2xl font-[1000] text-black tracking-tighter uppercase mb-1">Your Company Name</h2>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                            123 Business Avenue, Suite 500<br/>
                            Silicon Valley, CA 94025<br/>
                            contact@yourbrand.com
                        </p>
                    </div>

                    <div className="text-left md:text-right flex flex-col justify-end">
                        <h3 className="text-[50px] font-[1000] text-gray-100 leading-none mb-4 uppercase select-none">Yasin</h3>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Date Issued</p>
                            <p className="text-[14px] font-[900] text-black tracking-tight">January 04, 2026</p>
                        </div>
                    </div>
                </div>

                {/* BILL TO & SHIP TO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-10 md:p-16 bg-gray-50/30">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <Building2 size={12} strokeWidth={3} />
                            </div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Bill To:</h4>
                        </div>
                        <div>
                            <p className="text-[16px] font-black text-black">Abstract Design Ltd.</p>
                            <p className="text-[12px] font-bold text-gray-500 mt-1">Client ID: {id}</p>
                            <p className="text-[12px] font-bold text-gray-400 leading-relaxed mt-2">
                                45 Market Street, Floor 2<br/>
                                San Francisco, CA 94103
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:items-end justify-center space-y-4">
                         <div className="text-right">
                            <span className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-[9px] font-[1000] uppercase tracking-widest">
                                Status: Fully Paid
                            </span>
                         </div>
                    </div>
                </div>

                {/* LINE ITEMS */}
                <div className="p-10 md:p-16">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b-2 border-black">
                                <th className="pb-6 text-[11px] font-black uppercase tracking-widest text-black">Description</th>
                                <th className="pb-6 text-center text-[11px] font-black uppercase tracking-widest text-black">Qty</th>
                                <th className="pb-6 text-right text-[11px] font-black uppercase tracking-widest text-black">Rate</th>
                                <th className="pb-6 text-right text-[11px] font-black uppercase tracking-widest text-black">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { desc: "UI/UX Strategy & Branding", qty: 1, rate: "$2,500.00" },
                                { desc: "Frontend Development (Next.js)", qty: 2, rate: "$1,250.00" },
                                { desc: "Backend API Integration", qty: 1, rate: "$1,500.00" },
                            ].map((item, i) => (
                                <tr key={i}>
                                    <td className="py-8">
                                        <p className="text-[14px] font-[900] text-black">{item.desc}</p>
                                        <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tight italic">Service Charge</p>
                                    </td>
                                    <td className="py-8 text-center text-[13px] font-black text-gray-400">{item.qty}</td>
                                    <td className="py-8 text-right text-[13px] font-black text-gray-400">{item.rate}</td>
                                    <td className="py-8 text-right text-[15px] font-[1000] text-black tracking-tight">{item.rate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* TOTALS */}
                    <div className="mt-12 flex justify-end">
                        <div className="w-full md:w-1/2 space-y-4">
                            <div className="flex justify-between items-center px-4">
                                <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">Subtotal</span>
                                <span className="text-[14px] font-black text-black">$6,500.00</span>
                            </div>
                            <div className="flex justify-between items-center px-4">
                                <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">Tax (0%)</span>
                                <span className="text-[14px] font-black text-black">$0.00</span>
                            </div>
                            <div className="flex justify-between items-center bg-black p-6 rounded-[25px]">
                                <span className="text-[12px] font-black uppercase tracking-widest text-white/60">Grand Total</span>
                                <span className="text-[24px] font-[1000] text-white tracking-tighter leading-none">$6,500.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="p-10 md:p-16 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-bold text-gray-400 max-w-[300px] leading-relaxed italic">
                        * Thank you for your business. Please ensure payment is made via Stripe or Direct Bank Transfer within 30 days.
                    </p>
                    <div className="flex gap-4 grayscale opacity-40">
                         <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-black text-[10px]">VISA</div>
                         <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-black text-[10px]">GPay</div>
                         <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-black text-[10px]">Pay</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}