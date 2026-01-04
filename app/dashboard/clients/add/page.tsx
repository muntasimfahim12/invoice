/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Save, Globe, Mail, User,
  Plus, Trash2, Calendar, ShieldCheck, 
  ReceiptText, Wallet, Check, Phone, MapPin
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddClientPage() {
  const router = useRouter();
  const today = new Date().toISOString().slice(0, 10);

  // --- States ---
  const [totalAmount, setTotalAmount] = useState<number | "">(5000);
  const [advancedPayments, setAdvancedPayments] = useState([
    { amount: 1000, date: today, method: "Bank Transfer" }
  ]);

  const handleFocus = (e: any) => {
    if (e.target.value === "0") e.target.select();
  };

  // --- Math Logic ---
  const summary = useMemo(() => {
    const total = Number(totalAmount) || 0;
    const totalAdvanced = advancedPayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
    const due = total - totalAdvanced;
    return { total, totalAdvanced, due: due < 0 ? 0 : due };
  }, [totalAmount, advancedPayments]);

  const addAdvancedPayment = () => {
    setAdvancedPayments([...advancedPayments, { amount: 0, date: today, method: "Cash" }]);
  };

  const updateAdvanced = (index: number, key: string, value: any) => {
    const updated = [...advancedPayments];
    (updated[index] as any)[key] = value;
    setAdvancedPayments(updated);
  };

  return (
    <div className="min-h-screen pb-20 pt-6 px-4 md:px-8 max-w-[1100px] mx-auto bg-[#F9FAFC] text-slate-900 font-sans">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <button onClick={() => router.back()} className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:border-black transition-all shadow-sm">
          <ArrowLeft size={16} />
        </button>
        <div>
          <h1 className="text-lg font-black tracking-tight text-slate-900 uppercase">New Registration</h1>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Setup Client Profile & Audit</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT: Full Client Information & Payments */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Section 1: Client Profile (Modern Grid) */}
          <section className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-8 text-slate-800 border-b border-slate-50 pb-4">
              <ShieldCheck size={14} className="text-indigo-600" />
              <h3 className="text-[10px] font-black uppercase tracking-widest">Client Identity Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              {[
                { label: "Company/Client Name", icon: Globe, p: "e.g. Nexus Lab Ltd" },
                { label: "Signatory Person", icon: User, p: "e.g. Alex Smith" },
                { label: "Billing Email", icon: Mail, p: "billing@company.com" },
                { label: "Official Contact", icon: Phone, p: "+880 1XXX XXXXXX" },
              ].map((f, i) => (
                <div key={i} className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase ml-1 tracking-wider">{f.label}</label>
                  <div className="relative group">
                    <f.icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={14} />
                    <input type="text" placeholder={f.p} className="w-full bg-slate-50/50 border border-transparent rounded-xl py-3 pl-10 pr-3 text-[11px] font-bold outline-none focus:bg-white focus:border-indigo-100 focus:ring-4 focus:ring-indigo-50/30 transition-all" />
                  </div>
                </div>
              ))}
              
              {/* Full Width Office Address */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[9px] font-bold text-slate-400 uppercase ml-1 tracking-wider">Office Address</label>
                <div className="relative group">
                  <MapPin className="absolute left-3.5 top-4 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={14} />
                  <textarea rows={2} placeholder="Street address, City, Country" className="w-full bg-slate-50/50 border border-transparent rounded-xl py-3 pl-10 pr-3 text-[11px] font-bold outline-none focus:bg-white focus:border-indigo-100 focus:ring-4 focus:ring-indigo-50/30 transition-all resize-none" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Advanced Payment Records */}
          <section className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Wallet size={14} className="text-indigo-600" />
                <h3 className="text-[10px] font-black uppercase tracking-widest">Advanced Payment History</h3>
              </div>
              <button onClick={addAdvancedPayment} className="text-[9px] font-black bg-slate-900 text-white px-4 py-2 rounded-xl flex items-center gap-1.5 hover:bg-indigo-600 transition-all shadow-md shadow-slate-200">
                <Plus size={12} strokeWidth={3} /> Add Payment
              </button>
            </div>

            <div className="space-y-3">
              <AnimatePresence>
                {advancedPayments.map((p, i) => (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={i} className="flex items-center gap-4 p-4 bg-slate-50/50 rounded-xl border border-slate-100 hover:bg-white transition-all">
                    <div className="flex-1">
                      <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Amount</p>
                      <input type="number" onFocus={handleFocus} value={p.amount} onChange={(e) => updateAdvanced(i, "amount", e.target.value)} className="w-full bg-transparent text-[11px] font-black outline-none" />
                    </div>
                    <div className="flex-1 border-l border-slate-200 pl-4">
                      <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Date</p>
                      <input type="date" value={p.date} onChange={(e) => updateAdvanced(i, "date", e.target.value)} className="w-full bg-transparent text-[10px] font-bold outline-none text-slate-600" />
                    </div>
                    {advancedPayments.length > 1 && (
                      <button onClick={() => setAdvancedPayments(advancedPayments.filter((_, idx) => idx !== i))} className="text-slate-300 hover:text-rose-500 transition-colors">
                        <Trash2 size={14}/>
                      </button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>
        </div>

        {/* RIGHT: Compact Small Financial Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-6 space-y-4">
            <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-500">Financial Audit</h3>
                <ReceiptText size={14} className="text-slate-400" />
              </div>

              <div className="p-7 space-y-6">
                {/* Total Input */}
                <div className="space-y-2">
                  <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Total Project Value</label>
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <span className="text-sm font-bold text-slate-300">$</span>
                    <input type="number" onFocus={handleFocus} value={totalAmount} onChange={(e) => setTotalAmount(e.target.value === "" ? "" : Number(e.target.value))} className="text-2xl font-black outline-none w-full bg-transparent tracking-tighter" />
                  </div>
                </div>

                {/* Advanced Summary Row */}
                <div className="flex justify-between items-center bg-indigo-50/40 p-3.5 rounded-xl border border-indigo-100/50">
                  <span className="text-[9px] font-bold text-indigo-600 uppercase">Advanced Total</span>
                  <span className="text-[11px] font-black text-indigo-700">${summary.totalAdvanced.toLocaleString()}</span>
                </div>

                {/* Remaining Due */}
                <div className="pt-2 text-center">
                  <p className="text-[8px] font-black text-rose-500 uppercase tracking-[0.2em] mb-1">Remaining Due</p>
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">
                    ${summary.due.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <button className="w-full bg-indigo-600 text-white py-4.5 rounded-[20px] font-black text-[10px] uppercase tracking-[0.15em] shadow-lg shadow-indigo-100 hover:bg-slate-900 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
              <Check size={14} strokeWidth={3} /> Save Client Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}