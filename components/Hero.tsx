'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {
  Download,
  Play,
  ShieldCheck,
  Zap,
  Lock,
  CheckCircle,
  FileCheck2,
  Trash2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onOpenVideo: () => void;
  onOpenDownload: () => void;
}

export default function Hero({onOpenVideo, onOpenDownload}: HeroProps) {
  // Interactive mini-simulator in the hero card
  const [selectedPreset, setSelectedPreset] = useState<'midjourney' | 'sora' | 'dalle'>('midjourney');
  const [isCleaning, setIsCleaning] = useState(false);
  const [isCleaned, setIsCleaned] = useState(false);

  const presets = {
    midjourney: {
      name: 'Midjourney v6.1 Image',
      type: 'PNG · 1024×1024',
      c2pa: 'Adobe Content Credentials / C2PA v2.1 Manifest Found',
      software: 'Midjourney diffusion pipeline',
      promptTag: 'Hidden Prompt & Seed Hash Embedded',
      risk: 'Flagged by TikTok & Instagram AI detection algorithm',
    },
    sora: {
      name: 'OpenAI Sora Video Clip',
      type: 'MP4 · 1080p 60fps',
      c2pa: 'C2PA Digital Watermark & provenance metadata',
      software: 'OpenAI Video Synthesizer',
      promptTag: 'Synthetic media provenance ID #82941',
      risk: 'Suppressed from Explore page & algorithmic feeds',
    },
    dalle: {
      name: 'DALL-E 3 Graphic',
      type: 'WEBP · 1792×1024',
      c2pa: 'CR_CREDENTIALS chunk & EXIF MakerNote signature',
      software: 'DALL-E 3 neural engine',
      promptTag: 'OpenAI generation metadata attached',
      risk: 'Shadowbanned or tagged with "Made with AI" badge',
    },
  };

  const handleRunSimulatedClean = () => {
    setIsCleaning(true);
    setIsCleaned(false);
    setTimeout(() => {
      setIsCleaning(false);
      setIsCleaned(true);
    }, 900);
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Version & Notice Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 tracking-wide uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>MetaClean v1.0.4 for Android</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>Updated September 2026</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance">
              Bypass Social Media AI Detection &amp; Keep Your Organic Reach
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Remove hidden EXIF metadata, C2PA digital signatures, and AI fingerprints from
              Midjourney, DALL-E, Sora, and Runway images/videos in seconds.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenDownload}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-md shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Download className="w-5 h-5" />
                <span>Download APK (Free)</span>
              </button>

              <button
                onClick={onOpenVideo}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200/90 rounded-xl shadow-xs transition-all hover:border-slate-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Play className="w-4 h-4 fill-slate-700 text-slate-700" />
                <span>Watch Demo Video</span>
              </button>
            </div>

            {/* Trust Badges: Zero-pill discipline (unboxed text with clean typographic separators) */}
            <div className="pt-4 border-t border-slate-200/70">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-medium text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Offline &amp; Private</span>
                </div>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Fast On-Device Processing</span>
                </div>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No Quality Loss</span>
                </div>
              </div>
            </div>

            {/* Platform Compatibility indicator */}
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span className="font-semibold text-slate-700">Compatible with:</span>
              <span>Instagram</span>
              <span>·</span>
              <span>TikTok</span>
              <span>·</span>
              <span>YouTube Shorts</span>
              <span>·</span>
              <span>X (Twitter)</span>
              <span>·</span>
              <span>Facebook</span>
            </div>
          </div>

          {/* Right Column: Hero Visual & Interactive On-Device Cleaner Simulator */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              {/* Card Header with Real App Graphic Preview */}
              <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden">
                <Image
                  src="/images/hero_app_showcase_1790616048527.jpg"
                  alt="MetaClean Android App UI"
                  fill
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                      Live App Engine
                    </span>
                    <span className="text-sm font-bold text-white">
                      C2PA &amp; Deep EXIF Stripping Core
                    </span>
                  </div>
                  <span className="text-[11px] font-mono bg-white/10 backdrop-blur-md px-2 py-0.5 rounded border border-white/15">
                    ARM64 Native
                  </span>
                </div>
              </div>

              {/* Interactive In-Browser Media Cleaner Simulator */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Interactive Simulator
                  </span>
                  <span className="text-xs text-slate-500">Select Media Type:</span>
                </div>

                {/* Segmented Preset Switcher */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-lg text-xs font-medium">
                  {(['midjourney', 'sora', 'dalle'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedPreset(key);
                        setIsCleaned(false);
                      }}
                      className={`py-1.5 px-2 rounded-md transition-all capitalize truncate ${
                        selectedPreset === key
                          ? 'bg-white text-indigo-700 font-semibold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>

                {/* Selected File Details */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">
                      {presets[selectedPreset].name}
                    </span>
                    <span className="font-mono text-slate-500">
                      {presets[selectedPreset].type}
                    </span>
                  </div>

                  {!isCleaned ? (
                    <div className="space-y-1.5 pt-1 text-slate-600">
                      <div className="flex items-start gap-1.5 text-rose-600 font-medium">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{presets[selectedPreset].c2pa}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Trash2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>Generator: {presets[selectedPreset].software}</span>
                      </div>
                      <div className="text-[11px] text-amber-700 bg-amber-50 px-2 py-1 rounded border border-amber-200/60">
                        {presets[selectedPreset].risk}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>All C2PA &amp; EXIF Markers Purged (0 bytes residual)</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <FileCheck2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Pristine media exported to gallery. 100% Organic Reach Safe.</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Simulator Action Button */}
                <button
                  onClick={handleRunSimulatedClean}
                  disabled={isCleaning}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    isCleaned
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100'
                      : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
                  }`}
                >
                  {isCleaning ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Stripping C2PA Manifest &amp; Signatures...</span>
                    </>
                  ) : isCleaned ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Cleaned Successfully! Click to Test Again</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Clean Metadata Now (Simulate App Engine)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
