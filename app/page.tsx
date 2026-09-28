'use client';

import React, {useState} from 'react';
import {
  ShieldCheck,
  Download,
  Lock,
  Layers,
  Wand2,
  Check,
} from 'lucide-react';
import DownloadModal from '@/components/DownloadModal';
import FaqSection from '@/components/FaqSection';

const APK_DOWNLOAD_URL =
  'https://github.com/hackrmaster0000099999-sudo/Capcut-pro-Xyz/releases/download/Apps/MetaClean.8.apk';

export default function Home() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* 1. Header: Logo, App Name & Download CTA */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
          {/* Logo & App Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm shadow-indigo-600/30">
              <ShieldCheck className="w-6 h-6" strokeWidth={2.4} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                MetaClean
              </span>
              <span className="text-[11px] font-medium text-slate-500 mt-1">
                meta Clean App Download · v1.0.4 Android
              </span>
            </div>
          </div>

          {/* Quick Header CTA */}
          <a
            href={APK_DOWNLOAD_URL}
            download="MetaClean.8.apk"
            className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-sm transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download APK</span>
            <span className="sm:hidden">Download</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full space-y-14 sm:space-y-18">
        {/* 2. Hero: Big Centered Download Option */}
        <section className="text-center max-w-2xl mx-auto space-y-6 pt-2">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-indigo-50/80 border border-indigo-100 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI Detection &amp; C2PA Bypass Utility</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
            Bypass Social Media AI Detection &amp; Keep Your Organic Reach
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Remove hidden EXIF metadata, C2PA digital signatures, and AI fingerprints from
            Midjourney, DALL-E, Sora, and Runway images/videos in seconds.
          </p>

          {/* THE BIG CENTERED DOWNLOAD BUTTON */}
          <div className="pt-2 flex flex-col items-center justify-center space-y-3">
            <a
              href={APK_DOWNLOAD_URL}
              download="MetaClean.8.apk"
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] flex items-center justify-center gap-3 px-8 py-4 sm:py-5 text-base sm:text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-2xl shadow-xl shadow-indigo-600/30 hover:shadow-2xl hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-indigo-400 group cursor-pointer"
            >
              <Download className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
              <span>Download APK (Free · MetaClean.8.apk)</span>
            </a>

            {/* Specifications under button */}
            <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-3 text-xs text-slate-500 font-medium">
              <span>Size: 18.4 MB</span>
              <span aria-hidden="true">·</span>
              <span>Requires Android 8.0+</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% Safe &amp; Offline
              </span>
            </div>
          </div>
        </section>

        {/* 3. Card-based Details: How It Works & Supported Platforms */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              App Overview &amp; How It Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Sanitize your files in 3 simple steps and publish with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: How It Works */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                    <Wand2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    3-Step Process
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  How It Works
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Step 1 */}
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">
                        Select AI Photo or Video
                      </strong>
                      <span className="text-slate-600 leading-relaxed block mt-0.5">
                        Choose any image or video generated with Midjourney, DALL-E, Sora, Runway, or Flux directly from your device storage.
                      </span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">
                        Tap &quot;Clean Metadata&quot;
                      </strong>
                      <span className="text-slate-600 leading-relaxed block mt-0.5">
                        MetaClean immediately strips embedded C2PA digital certificates, EXIF tags, and AI provenance markers in milliseconds.
                      </span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">
                        Save to Gallery &amp; Post Freely
                      </strong>
                      <span className="text-slate-600 leading-relaxed block mt-0.5">
                        Save the cleaned file directly to your gallery. Upload to social media platforms without algorithmic reach suppression.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>100% lossless quality preserved with zero compression or blurring</span>
              </div>
            </div>

            {/* Card 2: Supported Platforms & Tools */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Compatibility
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Supported Platforms &amp; Formats
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Platforms */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                    <span className="font-semibold text-slate-900 block mb-1.5">
                      1. Social Media Platforms:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-700 font-medium">
                      <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">TikTok</span>
                      <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">Instagram Reels</span>
                      <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">YouTube Shorts</span>
                      <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">Facebook</span>
                      <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">X (Twitter)</span>
                    </div>
                  </div>

                  {/* AI Generators */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                    <span className="font-semibold text-slate-900 block mb-1.5">
                      2. Generative AI Tools:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-700 font-medium">
                      <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">Midjourney</span>
                      <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">DALL-E 3</span>
                      <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">OpenAI Sora</span>
                      <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">Runway Gen-3</span>
                      <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">Flux &amp; Leonardo</span>
                    </div>
                  </div>

                  {/* Formats */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                    <span className="font-semibold text-slate-900 block mb-1.5">
                      3. Supported File Formats:
                    </span>
                    <span className="text-slate-600 text-xs">
                      Images: <strong>JPG, PNG, WEBP</strong> · Videos: <strong>MP4, MOV (Full HD &amp; 4K)</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Algorithms can no longer flag your posts with &quot;Made with AI&quot; badges</span>
              </div>
            </div>

            {/* Card 3: 100% Offline & Private Processing - Full width card */}
            <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>100% Offline &amp; Private Processing</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Zero Server Uploads — Complete On-Device Privacy
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  MetaClean operates exclusively within your device hardware sandbox. No internet access or account login is ever needed. Your personal photos, videos, and private prompts never leave your phone.
                </p>
              </div>

              <a
                href={APK_DOWNLOAD_URL}
                download="MetaClean.8.apk"
                className="shrink-0 flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/80 rounded-xl transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download APK (18.4 MB)</span>
              </a>
            </div>
          </div>
        </section>

        {/* 4. FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer: App Logo & Name */}
      <footer className="bg-slate-900 py-6 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
              MetaClean · meta Clean App Download
            </span>
          </div>
        </div>
      </footer>

      {/* Interactive Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
