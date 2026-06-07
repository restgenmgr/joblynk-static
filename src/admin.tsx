import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Play, Pause, Database, Clock, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

interface AdminStatus {
  isAutoUpdateEnabled: boolean;
  lastScrapeTime: string | null;
  jobCount: number;
}

const Admin: React.FC = () => {
  const [status, setStatus] = useState<AdminStatus | null>(null);
  const [isScraping, setIsScraping] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchStatus = async () => {
    // Mock status for static hosting
    setStatus({
      isAutoUpdateEnabled: false,
      lastScrapeTime: new Date().toLocaleString(),
      jobCount: 6
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const handleManualScrape = async () => {
    alert("Manual scraping is disabled in the static GitHub Pages version.");
  };

  const toggleAutoUpdate = async () => {
    alert("Auto-update is disabled in the static GitHub Pages version.");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <RefreshCw className="w-8 h-8 animate-spin text-yellow-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">Admin Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage job scraping and system automation.</p>
          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-600 dark:text-blue-400 text-sm font-bold">
            <i className="fa-solid fa-info-circle mr-2"></i>
            Static Mode: This dashboard is currently in read-only mode for GitHub Pages hosting.
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Status Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Database Status</h3>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{status?.jobCount || 0} Jobs Indexed</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Last Scraped</span>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {status?.lastScrapeTime || 'Never'}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl">
                <div className="flex items-center gap-3">
                  {status?.isAutoUpdateEnabled ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                  )}
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Auto-Update</span>
                </div>
                <span className={`text-sm font-bold ${status?.isAutoUpdateEnabled ? 'text-green-500' : 'text-yellow-500'}`}>
                  {status?.isAutoUpdateEnabled ? 'Active' : 'Paused'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Controls Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Automation Controls</h3>
            
            <div className="grid gap-6">
              <div className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-slate-900 dark:text-white">Auto-Update System</span>
                  <span className="text-xs text-slate-500">Resume scraping every 5 mins</span>
                </div>
                <button 
                  onClick={toggleAutoUpdate}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${
                    status?.isAutoUpdateEnabled ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      status?.isAutoUpdateEnabled ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <button 
                onClick={handleManualScrape}
                disabled={isScraping}
                className="w-full flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-bold hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-50"
              >
                {isScraping ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <RefreshCw className="w-5 h-5" />
                )}
                Run Manual Scrape
              </button>
            </div>

            <div className="mt-8 p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl">
              <p className="text-xs text-yellow-600 dark:text-yellow-500 leading-relaxed font-medium">
                Auto-update runs every 5 minutes and fetches the latest hospitality roles from major Indian job portals including Indeed, Naukri, and LinkedIn.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Portals Section */}
        <section>
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Target Portals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['Indeed India', 'Naukri.com', 'LinkedIn'].map((portal) => (
              <div key={portal} className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white">{portal}</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
