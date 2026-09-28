'use client';

import React, {useState, useEffect} from 'react';
import {ShieldCheck, Download, Menu, X, CheckCircle2} from 'lucide-react';

interface NavbarProps {
  onOpenDownloadModal?: () => void;
}

export default function Navbar({onOpenDownloadModal}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {name: 'Features', href: '#features'},
    {name: 'How It Works', href: '#how-it-works'},
    {name: 'Demo Video', href: '#demo-video'},
    {name: 'Download APK', href: '#download'},
    {name: 'FAQ', href: '#faq'},
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-transparent border-b border-slate-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Brand Zone: Clean single-element wordmark lockup */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2.5 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm shadow-indigo-600/20 group-hover:bg-indigo-700 transition-colors">
                <ShieldCheck className="w-5 h-5" strokeWidth={2.4} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                  MetaClean
                </span>
                <span className="text-[11px] font-medium text-slate-500 tracking-normal mt-0.5">
                  v1.0 · AI Detection Bypass Utility
                </span>
              </div>
            </a>
          </div>

          {/* Navigation Links: Clean text with subtle hover states */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="hover:text-indigo-600 transition-colors py-1 relative hover:underline underline-offset-4 decoration-indigo-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Zone: Primary CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenDownloadModal) {
                  onOpenDownloadModal();
                } else {
                  const el = document.querySelector('#download');
                  el?.scrollIntoView({behavior: 'smooth'});
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-sm shadow-indigo-600/25 transition-all whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download APK</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenDownloadModal) {
                  onOpenDownloadModal();
                } else {
                  const el = document.querySelector('#download');
                  el?.scrollIntoView({behavior: 'smooth'});
                }
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download APK (Free · 18.4 MB)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
