import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar, TopBar } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { Reports } from './pages/Reports';
import { motion, AnimatePresence } from 'motion/react';

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <Router basename="/nexus_insight">
      <div className="flex min-h-screen bg-[#f8f9ff]">
        <Sidebar />

        <main className="flex-1 ml-64 flex flex-col">
          <TopBar />

          <div className="p-8 pb-16">
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  path="/"
                  element={
                    <PageTransition>
                      <Dashboard />
                    </PageTransition>
                  }
                />

                <Route
                  path="/reports"
                  element={
                    <PageTransition>
                      <Reports />
                    </PageTransition>
                  }
                />
              </Routes>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </Router>
  );
}
