'use client';

import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface VideoDemoProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export default function VideoDemo({isOpenModal, onCloseModal}: VideoDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const totalDuration = 12; // 12 seconds simulated walkthrough
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Demo step stages based on playback time
  const getDemoStage = () => {
    if (currentTime < 3) return {title: 'Selecting AI Media File', sub: 'Importing Midjourney & Sora MP4 file with C2PA manifest...'};
    if (currentTime < 7) return {title: 'Scrubbing C2PA & Provenance Signatures', sub: 'Offline byte stream re-writing without re-encoding video frames...'};
    if (currentTime < 10) return {title: 'Sanitizing Audio & Metadata Tags', sub: 'Zeroing IPTC, GPS, and diffusion model prompt logs...'};
    return {title: 'Clean File Saved to Gallery', sub: 'Ready to post on TikTok, Instagram, and YouTube with full organic reach.'};
  };

  const stage = getDemoStage();

  return (
    <section id="demo-video" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-2">
            Section 05 · Product Demonstration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Watch MetaClean in Action
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            See how MetaClean strips Adobe C2PA digital signatures, Midjourney fingerprints, and
            EXIF metadata in less than three seconds.
          </p>
        </div>

        {/* Video Container Card - Sleek, rounded container card modular for iframe / video tag */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
            {/* Aspect Ratio 16:9 box */}
            <div className="relative aspect-video w-full overflow-hidden">
              {/* Poster Image */}
              <Image
                src="/images/video_demo_poster_1790616062022.jpg"
                alt="Watch MetaClean in Action Demo Preview"
                fill
                className={`object-cover transition-transform duration-700 ${
                  isPlaying ? 'scale-105 opacity-40' : 'group-hover:scale-102 opacity-85'
                }`}
                referrerPolicy="no-referrer"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Developer note for future video embed */}
              {/* NOTE FOR DEVELOPER:
                  Replace this interactive container anytime with:
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" allowFullScreen></iframe>
                  or an HTML5 <video controls src="/path-to-video.mp4"></video>
              */}

              {/* When NOT playing, show Play affordance */}
              {!isPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <button
                    onClick={() => {
                      setIsPlaying(true);
                      if (currentTime >= totalDuration) setCurrentTime(0);
                    }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-indigo-600/90 hover:bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/50 hover:scale-110 active:scale-95 transition-all focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-indigo-400 group/btn"
                    aria-label="Play MetaClean Demo Video"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
                  </button>
                  <p className="mt-4 text-sm font-semibold text-white tracking-wide">
                    Click to Play Interactive Walkthrough
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Duration: 0:12 · 1080p 60fps Native Demo
                  </p>
                </div>
              )}

              {/* When Playing: Simulated Interactive Video Experience */}
              {isPlaying && (
                <div className="absolute inset-0 flex flex-col justify-between p-6 bg-slate-950/70 backdrop-blur-xs">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      <span>LIVE PROCESSOR SIMULATION</span>
                    </div>
                    <span className="text-indigo-400">
                      0:0{currentTime} / 0:{totalDuration}
                    </span>
                  </div>

                  {/* Center Action Overlay */}
                  <div className="text-center max-w-md mx-auto bg-slate-900/90 border border-slate-800 p-5 rounded-xl shadow-xl space-y-2">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{stage.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {stage.sub}
                    </p>
                    {/* Simulated byte ticker */}
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                      <div
                        className="bg-indigo-500 h-full transition-all duration-300"
                        style={{width: `${(currentTime / totalDuration) * 100}%`}}
                      />
                    </div>
                  </div>

                  {/* Bottom Controls Bar */}
                  <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-1.5 text-white hover:text-indigo-400 transition-colors"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => setCurrentTime(0)}
                        className="p-1.5 text-slate-400 hover:text-white transition-colors"
                        aria-label="Restart"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-1.5 text-slate-400 hover:text-white transition-colors"
                        aria-label="Toggle Sound"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="text-xs font-mono text-slate-400">
                      MetaClean Core v1.0.4
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Badges below Video */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Instant preview without cloud rendering delay</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verifiable EXIF hash purge confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
