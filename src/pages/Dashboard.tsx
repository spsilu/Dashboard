import React from 'react';
import { TrendingUp, ShoppingBag, Wallet, CreditCard, ChevronUp } from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const data = [
  { name: 'Mon', value: 2400 },
  { name: 'Tue', value: 1398 },
  { name: 'Wed', value: 9800 },
  { name: 'Thu', value: 3908 },
  { name: 'Fri', value: 4800 },
  { name: 'Sat', value: 3800 },
  { name: 'Sun', value: 4300 },
];

const MetricCard = ({ icon: Icon, label, value, trend, subtext, color = "white", gradient = false }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "p-6 rounded-[2rem] shadow-xl transition-all duration-300",
        gradient 
          ? "stat-card-gradient text-white shadow-indigo-100" 
          : "bg-white border border-slate-100 shadow-slate-200/50"
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={cn("p-2 rounded-xl", gradient ? "bg-white/20" : "bg-indigo-50 text-indigo-600")}>
          <Icon className="w-5 h-5" />
        </div>
        <div className={cn(
          "flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
          gradient ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-600"
        )}>
          <TrendingUp className="w-3 h-3" />
          {trend}
        </div>
      </div>
      <p className={cn("text-xs font-medium mb-1 uppercase tracking-widest", gradient ? "text-white/80" : "text-slate-500")}>
        {label}
      </p>
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className={cn("text-xs mt-2 font-medium", gradient ? "text-white/60" : "text-slate-400")}>
        {subtext}
      </p>
    </motion.div>
  );
};

export const Dashboard = () => {
  return (
    <div className="space-y-8 mt-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold w-fit">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
          LIVE DATA STREAMING
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard 
          icon={ShoppingBag} 
          label="Total Orders" 
          value="1,284" 
          trend="+8.2%" 
          subtext="94 pending fulfillment" 
          gradient
        />
        <MetricCard 
          icon={Wallet} 
          label="Total GMV" 
          value="$1,284,500" 
          trend="+15.4%" 
          subtext="Annual target: 82% achieved"
        />
        <MetricCard 
          icon={CreditCard} 
          label="Daily Revenue" 
          value="$24,592" 
          trend="+12.5%" 
          subtext="Vs. $21,840 yesterday"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h4 className="text-xl font-bold text-slate-900">Sales Trend</h4>
              <p className="text-sm text-slate-500 font-medium">Hourly revenue tracking</p>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center cursor-pointer hover:bg-slate-100"><TrendingUp className="w-4 h-4 text-slate-400" /></div>
            </div>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 600 }} 
                  dy={15}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '12px'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#6366f1" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col">
          <h4 className="text-xl font-bold text-slate-900 mb-1">Top Categories</h4>
          <p className="text-sm text-slate-500 font-medium mb-10 tracking-tight">Performance breakdown</p>
          
          <div className="space-y-8 flex-1">
            {[
              { label: 'Electronics', amount: '$12.4k', progress: 85, color: 'bg-indigo-600' },
              { label: 'Apparel', amount: '$8.2k', progress: 62, color: 'bg-indigo-400' },
              { label: 'Home & Decor', amount: '$5.1k', progress: 44, color: 'bg-indigo-300' },
              { label: 'F&B', amount: '$2.9k', progress: 28, color: 'bg-indigo-200' },
            ].map((item) => (
              <div key={item.label} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold text-slate-700">{item.label}</span>
                  <span className="text-xs font-bold text-slate-400">{item.amount}</span>
                </div>
                <div className="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className={cn("h-full rounded-full transition-all duration-1000", item.color)} 
                  />
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-10 py-4 text-[10px] font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-2xl transition-all uppercase tracking-widest leading-none shadow-sm shadow-indigo-100/50">
            View Full Breakdown
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden mb-12">
        <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center">
          <div>
            <h4 className="text-xl font-bold text-slate-900">Recent Orders</h4>
            <p className="text-sm text-slate-500 font-medium tracking-tight">Live transaction stream</p>
          </div>
          <button className="text-sm font-bold text-indigo-600 hover:underline tracking-tight">View All Orders</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-50 bg-slate-50/30">
                <th className="px-8 py-5">Order ID</th>
                <th className="px-8 py-5">Channel</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Date</th>
                <th className="px-8 py-5 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { id: '#ORD-89241', name: 'James Dalton', initials: 'JD', channel: 'Online Store', status: 'Completed', date: 'Oct 24, 14:22', amount: '$1,240.00' },
                { id: '#ORD-89240', name: 'Sarah Miller', initials: 'SM', channel: 'In-Store', status: 'Processing', date: 'Oct 24, 14:15', amount: '$425.50' },
                { id: '#ORD-89239', name: 'Robert Wilson', initials: 'RW', channel: 'Mobile App', status: 'Pending', date: 'Oct 24, 13:58', amount: '$89.00' },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/80 transition-all group cursor-pointer">
                  <td className="px-8 py-5 text-sm font-bold text-indigo-600">{order.id}</td>
                  <td className="px-8 py-5">
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">{order.channel}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "px-3 py-1.5 text-[10px] font-bold rounded-full uppercase tracking-widest",
                      order.status === 'Completed' ? "bg-emerald-50 text-emerald-600 shadow-sm shadow-emerald-100/50" : 
                      order.status === 'Processing' ? "bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100/50" : "bg-slate-100 text-slate-500"
                    )}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm text-slate-400 font-medium">{order.date}</td>
                  <td className="px-8 py-5 text-right text-sm font-bold text-slate-900">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
