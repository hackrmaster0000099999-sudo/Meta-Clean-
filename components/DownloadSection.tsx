'use client';

import React, {useState} from 'react';
import {
  Download,
  ShieldCheck,
  CheckCircle,
  Copy,
  ExternalLink,
  Smartphone,
  Info,
  Check,
  FileCode2,
  HardDrive,
} from 'lucide-react';

interface DownloadSectionProps {
  onStartDownload: () => void;
}

export default function DownloadSection({onStartDownload}: DownloadSectionProps) {
  const [copiedHash, setCopiedHash] = useState(false);
  const [mirrorModal, setMirrorModal] = useState<string | null>(null);

  const sha256Checksum =
    'f3a9d28e71b29a004bca99281ef58d6268819d45e59bba6429394628f411ba10';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(sha256Checksum);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section id="download" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Section 06 · Official Distribution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Download MetaClean for Android
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Get the full version free with lifetime offline capabilities. No registration, no ads,
            and no account creation required.
          </p>
        </div>

        {/* Central Download Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-10 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/25">
                <Smartphone className="w-8 h-8" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                  MetaClean Android APK
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mt-1">
                  <span>Version 1.0.4</span>
                  <span>·</span>
                  <span>18.4 MB</span>
                  <span>·</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Clean
                  </span>
                </div>
              </div>
            </div>

            {/* Note badge */}
            <div className="text-xs text-slate-600 bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 sm:max-w-[210px]">
              <span className="font-semibold text-slate-800 block mb-0.5">System Requirement</span>
              Requires Android 8.0 (Oreo) and above. Safe &amp; Virus-Free.
            </div>
          </div>

          {/* Download Action Buttons */}
          <div className="py-8 space-y-4">
            {/* Primary Action Button */}
            <button
              onClick={onStartDownload}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-md shadow-indigo-600/30 hover:shadow-lg transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 group"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              <span>Direct APK Download (v1.0.4 — 18.4 MB)</span>
            </button>

            {/* Secondary Mirrors: Uptodown & APKPure placeholders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setMirrorModal('Uptodown')}
                className="flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
              >
                <span>Available on Uptodown</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => setMirrorModal('APKPure')}
                className="flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
              >
                <span>Available on APKPure</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Mirror Modal alert */}
          {mirrorModal && (
            <div className="mb-6 p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold">
                  {mirrorModal} Listing Mirror Notice:
                </p>
                <p className="mt-0.5 text-indigo-800">
                  Our official mirror on {mirrorModal} is currently synchronizing build 1.0.4.
                  Please use the <strong>Direct APK Download</strong> button above for immediate access to the signed APK.
                </p>
              </div>
              <button
                onClick={() => setMirrorModal(null)}
                className="text-indigo-600 hover:text-indigo-900 font-bold px-2 py-1"
              >
                ✕
              </button>
            </div>
          )}

          {/* Technical Specifications & Checksum */}
          <div className="pt-6 border-t border-slate-100 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Package Details &amp; Verification
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/70">
                <span className="text-slate-500 block">Package ID</span>
                <span className="font-mono font-semibold text-slate-800">
                  com.metaclean.bypass
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/70">
                <span className="text-slate-500 block">Target Architecture</span>
                <span className="font-mono font-semibold text-slate-800">
                  Universal (arm64-v8a / v7a / x86_64)
                </span>
              </div>
            </div>

            {/* SHA-256 Hash */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/70">
              <div className="flex items-center justify-between mb-1">
                <span className="text-slate-500 text-xs">SHA-256 Checksum</span>
                <button
                  onClick={handleCopyHash}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  {copiedHash ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Hash</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-[11px] text-slate-700 break-all select-all">
                {sha256Checksum}
              </div>
            </div>
          </div>

          {/* How to Install on Android in 3 Steps */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              How to Install APK on Android:
            </h4>
            <ol className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                  1
                </span>
                <span>
                  Tap <strong>Direct APK Download</strong> to download the file to your Android device.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                  2
                </span>
                <span>
                  Open your <strong>Downloads</strong> drawer and tap <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">MetaClean-v1.0.4.apk</code>. If prompted, select <strong>&quot;Allow from this source&quot;</strong> in your Android settings.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                  3
                </span>
                <span>
                  Tap <strong>Install</strong>, then tap <strong>Open</strong> to start stripping C2PA metadata from your AI media!
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
