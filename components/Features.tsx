'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldAlert,
  FileVideo,
  HardDriveDownload,
  Gauge,
  Check,
  Cpu,
  Layers,
  Fingerprint,
} from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50/75 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Why Creators Need MetaClean
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Engineered to defeat algorithmic shadowbans &amp; AI suppression tags.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Platforms like Instagram, TikTok, and YouTube automatically inspect media files for
            Coalition for Content Provenance and Authenticity (C2PA) manifests. MetaClean sanitizes
            the entire container structure without altering visual pixels.
          </p>
        </div>

        {/* Bento Grid: 4 Marquee Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: AI Fingerprint & C2PA Stripper (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all shadow-xs group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-400">01. Core Shield</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                AI Fingerprint &amp; C2PA Stripper
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Wipes out hidden digital certificates, Adobe Content Authenticity manifests, and AI
                generation markers that cause algorithms like TikTok, Meta, and X to suppress organic
                reach and slap automated &quot;AI info&quot; disclaimers on your posts.
              </p>

              {/* Technical inspect comparison */}
              <div className="bg-slate-900 text-slate-300 rounded-xl p-4 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-slate-400">
                  <span>BYTE INSPECTION</span>
                  <span className="text-emerald-400">STATUS: CLEANED</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div className="text-rose-400 line-through">
                    - C2PA Manifest (0x43325041)
                  </div>
                  <div className="text-emerald-400">
                    + Normalized Exif (0x45786966)
                  </div>
                  <div className="text-rose-400 line-through">
                    - Midjourney Seed Chunk (tEXt)
                  </div>
                  <div className="text-emerald-400">
                    + Zero Algorithmic Triggers
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Full compliance with native Android hardware encoders</span>
            </div>
          </div>

          {/* Card 2: 100% Offline Security (Span 5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all shadow-xs group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-400">02. Privacy First</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                100% Offline Security
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Zero server uploads. Your media files never leave your device storage. Works seamlessly
                in airplane mode with zero network permissions requested in the manifest.
              </p>

              {/* Media preview card */}
              <div className="relative h-28 rounded-xl overflow-hidden border border-slate-200">
                <Image
                  src="/images/security_shield_tech_1790616073185.jpg"
                  alt="On-Device Offline Shield"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="text-center text-white p-2">
                    <span className="text-xs font-bold block">Local Sandboxed Sandbox</span>
                    <span className="text-[11px] text-emerald-400 font-mono">
                      INTERNET_PERMISSION: NONE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>No telemetry · No cloud database · Zero data stored</span>
            </div>
          </div>

          {/* Card 3: Image & Video Support (Span 5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all shadow-xs group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 group-hover:scale-105 transition-transform">
                  <FileVideo className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-400">03. Broad Formats</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                Universal Image &amp; Video Support
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Full support for JPG, PNG, WEBP, and MP4 video formats. Cleans both still images from
                Midjourney/Flux and high-frame-rate videos from Runway Gen-3 and Sora.
              </p>

              {/* Supported Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="font-semibold text-slate-800 block">Images</span>
                  <span className="text-slate-500 text-[11px]">JPG · PNG · WEBP · HEIC</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="font-semibold text-slate-800 block">Video Clips</span>
                  <span className="text-slate-500 text-[11px]">MP4 · MOV (H.264 / HEVC)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Lossless container rewriting prevents recompression artifacts</span>
            </div>
          </div>

          {/* Card 4: Lightweight & Fast (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all shadow-xs group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                  <Gauge className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-400">04. Native Performance</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                Lightweight &amp; Sub-Second Fast
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Written with optimized native C++ bytecode binaries inside a lean 18.4 MB APK.
                Strips signatures in under 200 milliseconds per photo without draining battery or
                overheating your phone.
              </p>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono tabular-nums block">
                    &lt; 0.2s
                  </span>
                  <span className="text-xs text-slate-500">Photo Scrubbing</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono tabular-nums block">
                    18.4 MB
                  </span>
                  <span className="text-xs text-slate-500">Total APK Size</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <span className="text-xl sm:text-2xl font-extrabold text-indigo-600 font-mono tabular-nums block">
                    100%
                  </span>
                  <span className="text-xs text-slate-500">Quality Preserved</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Direct Android MediaStore integration with 1-tap gallery export</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
