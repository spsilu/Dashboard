import React, { useState } from 'react';
import { TrendingUp, ShoppingBag, Wallet, CreditCard, ChevronUp, MapPin, MoreHorizontal, ExternalLink, Plus, Minus, Locate } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ComposedChart
} from 'recharts';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const monthlyGrowthData = [
  { name: '2023-Oct', gmv: 4000, orders: 2400 },
  { name: '2023-Nov', gmv: 3000, orders: 1398 },
  { name: '2023-Dec', gmv: 5000, orders: 3800 },
  { name: '2024-Jan', gmv: 2780, orders: 2908 },
  { name: '2024-Feb', gmv: 3890, orders: 4800 },
  { name: '2024-Mar', gmv: 4390, orders: 3800 },
  { name: '2024-Apr', gmv: 5490, orders: 4300 },
];

const quarterlyGrowthData = [
  { name: '2023-Q3', gmv: 12400, orders: 8400 },
  { name: '2023-Q4', gmv: 15000, orders: 9800 },
  { name: '2024-Q1', gmv: 18780, orders: 11908 },
  { name: '2024-Q2', gmv: 22000, orders: 14000 },
];

const yearlyGrowthData = [
  { name: '2021', gmv: 42000, orders: 28000 },
  { name: '2022', gmv: 58000, orders: 42000 },
  { name: '2023', gmv: 75000, orders: 54000 },
  { name: '2024', gmv: 82000, orders: 62000 },
];

const MetricCard = ({ icon: Icon, label, value, trend, color = "indigo", gradient = false }: any) => {
  const colors = {
    indigo: "bg-indigo-50 text-indigo-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
  };

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
        <div className={cn("p-2 rounded-xl", gradient ? "bg-white/20 text-white" : colors[color as keyof typeof colors])}>
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
      <div className="space-y-1">
        <p className={cn("text-[11px] font-bold uppercase tracking-widest", gradient ? "text-white/80" : "text-slate-500")}>
          {label}
        </p>
        <h3 className="text-3xl font-bold">{value}</h3>
      </div>
    </motion.div>
  );
};

export const Reports = () => {
  const [activeTab, setActiveTab] = useState('Monthly');

  const getMetrics = () => {
    switch (activeTab) {
      case 'Quarterly':
        return {
          orders: '128,482',
          gmv: '$6,481,200',
          revenue: '$8,120,500'
        };
      case 'Yearly':
        return {
          orders: '512,892',
          gmv: '$24,481,200',
          revenue: '$32,120,500'
        };
      case 'Monthly':
      default:
        return {
          orders: '42,892',
          gmv: '$2,481,200',
          revenue: '$3,120,500'
        };
    }
  };

  const getChartData = () => {
    switch (activeTab) {
      case 'Quarterly': return quarterlyGrowthData;
      case 'Yearly': return yearlyGrowthData;
      case 'Monthly':
      default: return monthlyGrowthData;
    }
  };

  const metrics = getMetrics();
  const chartData = getChartData();

  const getBestSellers = () => {
    switch (activeTab) {
      case 'Quarterly':
        return [
          { name: 'Premium Wireless Headphones', category: 'Electronics', sales: '8,520 units', revenue: '$2,547,480', trend: '+15.4%', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop', color: 'bg-indigo-50' },
          { name: 'Minimalist Smart Watch', category: 'Electronics', sales: '5,766 units', revenue: '$1,441,500', trend: '+10.2%', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop', color: 'bg-emerald-50' },
          { name: 'Organic Cotton Tote Bag', category: 'Apparel', sales: '15,300 units', revenue: '$382,500', trend: '+1.8%', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=100&h=100&fit=crop', color: 'bg-amber-50' },
        ];
      case 'Yearly':
        return [
          { name: 'Premium Wireless Headphones', category: 'Electronics', sales: '34,080 units', revenue: '$10,189,920', trend: '+22.1%', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop', color: 'bg-indigo-50' },
          { name: 'Minimalist Smart Watch', category: 'Electronics', sales: '23,064 units', revenue: '$5,766,000', trend: '+14.5%', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop', color: 'bg-emerald-50' },
          { name: 'Organic Cotton Tote Bag', category: 'Apparel', sales: '61,200 units', revenue: '$1,530,000', trend: '+4.2%', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=100&h=100&fit=crop', color: 'bg-amber-50' },
        ];
      default:
        return [
          { name: 'Premium Wireless Headphones', category: 'Electronics', sales: '2,840 units', revenue: '$849,160', trend: '+18.2%', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop', color: 'bg-indigo-50' },
          { name: 'Minimalist Smart Watch', category: 'Electronics', sales: '1,922 units', revenue: '$480,500', trend: '+12.5%', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop', color: 'bg-emerald-50' },
          { name: 'Organic Cotton Tote Bag', category: 'Apparel', sales: '5,100 units', revenue: '$127,500', trend: '-2.4%', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=100&h=100&fit=crop', color: 'bg-amber-50' },
        ];
    }
  };

  const getCategories = () => {
    switch (activeTab) {
      case 'Quarterly':
        return [
          { label: 'Electronics', share: '40%', color: 'bg-indigo-600' },
          { label: 'Apparel & Fashion', share: '30%', color: 'bg-emerald-500' },
          { label: 'Home & Decor', share: '20%', color: 'bg-slate-800' },
          { label: 'Food & Beverage', share: '10%', color: 'bg-amber-500' },
        ];
      case 'Yearly':
        return [
          { label: 'Electronics', share: '38%', color: 'bg-indigo-600' },
          { label: 'Apparel & Fashion', share: '32%', color: 'bg-emerald-500' },
          { label: 'Home & Decor', share: '22%', color: 'bg-slate-800' },
          { label: 'Food & Beverage', share: '8%', color: 'bg-amber-500' },
        ];
      default:
        return [
          { label: 'Electronics', share: '42%', color: 'bg-indigo-600' },
          { label: 'Apparel & Fashion', share: '28%', color: 'bg-emerald-500' },
          { label: 'Home & Decor', share: '18%', color: 'bg-slate-800' },
          { label: 'Food & Beverage', share: '12%', color: 'bg-amber-500' },
        ];
    }
  };

  const getStoreRankings = () => {
    const scale = activeTab === 'Quarterly' ? 3.2 : (activeTab === 'Yearly' ? 12.8 : 1);
    const stores = [
      { name: 'Shanghai Central Mall', base: 12482 },
      { name: 'Beijing East Plaza', base: 10120 },
      { name: 'Shenzhen Tech Park', base: 9845 },
      { name: 'Guangzhou Hub', base: 8321 },
      { name: 'Chengdu Square', base: 7540 },
      { name: 'Hangzhou Digital City', base: 6920 },
    ];
    return stores.map(s => ({
      name: s.name,
      orders: Math.round(s.base * scale).toLocaleString()
    }));
  };

  const bestSellers = getBestSellers();
  const categories = getCategories();
  const storeRankings = getStoreRankings();

  return (
    <div className="space-y-8 mt-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Data Reports</h2>
          <p className="text-sm text-slate-500 font-medium tracking-tight mt-1">Operational performance analysis</p>
        </div>
        
        <div className="inline-flex p-1.5 bg-slate-200/50 rounded-2xl border border-slate-200">
          {['Monthly', 'Quarterly', 'Yearly'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-8 py-2.5 text-xs font-bold rounded-xl transition-all tracking-[0.1em] uppercase",
                activeTab === tab ? "bg-white text-indigo-600 shadow-xl shadow-indigo-100/30" : "text-slate-400 hover:text-slate-600"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard icon={ShoppingBag} label="Total Orders" value={metrics.orders} trend="+12.5%" gradient />
        <MetricCard icon={Wallet} label="Total GMV" value={metrics.gmv} trend="+8.2%" color="emerald" />
        <MetricCard icon={CreditCard} label="Total Revenue" value={metrics.revenue} trend="+15.4%" color="amber" />
      </div>

      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xl font-bold text-slate-900">Order & GMV Growth</h4>
            <p className="text-sm text-slate-500 font-medium">{activeTab} performance analytics</p>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-600" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">GMV</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-indigo-300 bg-white" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Orders</span>
            </div>
          </div>
        </div>
        
        <div className="h-[380px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 700 }} 
                dy={20}
              />
              <YAxis hide />
              <Tooltip 
                 contentStyle={{ 
                  borderRadius: '20px', 
                  border: 'none', 
                  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  padding: '16px'
                }} 
              />
              <Bar dataKey="gmv" fill="#6366f1" radius={[8, 8, 0, 0]} barSize={45} />
              <Line type="monotone" dataKey="orders" stroke="#c7d2fe" strokeWidth={4} dot={{ fill: 'white', stroke: '#c7d2fe', strokeWidth: 3, r: 5 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-[2rem] border border-slate-100 shadow-sm flex flex-col overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/20">
            <div>
              <h4 className="text-xl font-bold text-slate-900">Best Seller Products</h4>
              <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-widest">Revenue leaderboard</p>
            </div>
            <button className="p-3 hover:bg-white rounded-2xl text-slate-400 border border-transparent hover:border-slate-100 shadow-sm transition-all">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                <tr>
                  <th className="px-8 py-5 text-left">Product</th>
                  <th className="px-8 py-5 text-center">Volume</th>
                  <th className="px-8 py-5 text-right">Revenue</th>
                  <th className="px-8 py-5 text-right">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {bestSellers.map((product) => (
                  <tr key={product.name} className="hover:bg-slate-50/80 transition-all cursor-pointer group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center p-0.5", product.color)}>
                           <img src={product.img} alt={product.name} className="w-full h-full rounded-[0.8rem] object-cover ring-2 ring-white shadow-sm" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">{product.name}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1.5">{product.category}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-center font-bold text-slate-600">{product.sales}</td>
                    <td className="px-8 py-5 text-right font-black text-slate-900 leading-none">{product.revenue}</td>
                    <td className="px-8 py-5 text-right">
                       <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold tracking-widest font-display", 
                        product.trend.startsWith('+') ? "bg-emerald-100/50 text-emerald-600" : "bg-red-100/50 text-red-500"
                      )}>
                        {product.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 border-t border-slate-100 text-center bg-slate-50/10">
            <button className="text-[10px] font-black text-indigo-600 hover:text-indigo-700 uppercase tracking-[0.2em] transition-all">Expand Overview</button>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-100 p-8 flex flex-col space-y-10 shadow-sm overflow-hidden">
          <div>
            <h4 className="text-xl font-bold text-slate-900 tracking-tight">Top Categories</h4>
            <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-[0.15em]">Market performance</p>
          </div>
          <div className="space-y-10 flex-1">
            {categories.map((cat) => (
              <div key={cat.label} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold text-slate-800 tracking-tight">{cat.label}</span>
                  <span className="text-xs font-black text-slate-400">{cat.share}</span>
                </div>
                <div className="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: cat.share }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className={cn("h-full rounded-full transition-all duration-1000 shadow-inner", cat.color)} 
                  />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black text-slate-500 hover:bg-slate-100 transition-all uppercase tracking-[0.2em]">Detailed Analytics</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-[2rem] flex flex-col shadow-sm">
          <div className="p-8 border-b border-slate-50 bg-slate-50/30">
            <h4 className="text-base font-black text-slate-900 uppercase tracking-[0.2em]">Store Ranking</h4>
          </div>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                <tr>
                  <th className="px-8 py-4 text-left">Store Name</th>
                  <th className="px-8 py-4 text-right">Orders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {storeRankings.map((store) => (
                  <tr key={store.name} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-4 font-bold text-slate-700 tracking-tight">{store.name}</td>
                    <td className="px-8 py-4 text-right font-black text-slate-900">{store.orders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-100 text-center">
            <button className="text-[10px] font-bold text-indigo-600 hover:text-indigo-700 uppercase tracking-[0.2em]">View All 24 Stores</button>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[2rem] overflow-hidden flex flex-col shadow-sm relative group">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-white z-10 relative">
            <div>
              <h4 className="text-2xl font-bold text-slate-900 tracking-tight">Store Distribution</h4>
              <p className="text-sm text-slate-500 font-medium">Geographic reach of physical outlets with density heatmap.</p>
            </div>
            <button className="text-indigo-600 font-bold text-sm flex items-center gap-2 hover:underline transition-all">
              View Full Map
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1 min-h-[480px] bg-slate-100 relative overflow-hidden">
             {/* Heatmap effect */}
            <div className="absolute inset-0 opacity-40 heatmap-gradient mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-20" />
            
            {/* Store markers */}
            {[
              { top: '40%', left: '30%', size: 'md' },
              { top: '35%', left: '35%', size: 'sm' },
              { top: '60%', left: '70%', size: 'md' },
              { top: '30%', left: '50%', size: 'sm' },
              { top: '70%', left: '20%', size: 'md' },
              { top: '55%', left: '65%', size: 'sm' },
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                style={{ top: p.top, left: p.left }}
                className={cn(
                  "absolute bg-indigo-600 rounded-full border-2 border-white shadow-xl z-10",
                  p.size === 'md' ? 'w-5 h-5' : 'w-4 h-4'
                )}
              >
                <div className="absolute inset-0 animate-ping bg-indigo-400 rounded-full opacity-50" />
              </motion.div>
            ))}

            <div className="absolute bottom-8 right-8 flex flex-col gap-4 z-20">
              <div className="bg-white p-1 rounded-2xl shadow-2xl border border-slate-100 flex flex-col items-center">
                <button className="p-3 hover:bg-slate-50 rounded-xl transition-colors text-slate-600"><Plus className="w-5 h-5" /></button>
                <div className="w-10 h-[1px] bg-slate-100 my-1" />
                <button className="p-3 hover:bg-slate-50 rounded-xl transition-colors text-slate-600"><Minus className="w-5 h-5" /></button>
              </div>
              <button className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 text-slate-600 hover:text-indigo-600 transition-colors">
                <Locate className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .heatmap-gradient {
          background: radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.4) 0%, transparent 40%),
                      radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.3) 0%, transparent 35%),
                      radial-gradient(circle at 50% 30%, rgba(245, 158, 11, 0.2) 0%, transparent 30%),
                      radial-gradient(circle at 20% 70%, rgba(239, 68, 68, 0.2) 0%, transparent 45%);
        }
      `}</style>
    </div>
  );
};
