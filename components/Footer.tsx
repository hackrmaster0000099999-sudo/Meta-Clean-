'use client';

import React from 'react';
import {ShieldCheck, Mail, FileText, CheckCircle2, Shield} from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'startio') => void;
}

export default function Footer({onOpenLegal}: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Brand lockup */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-tight">
                MetaClean (meta Clean App Download)
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                AI Detection Bypass &amp; C2PA Digital Signature Removal Utility
              </p>
            </div>
          </div>

          {/* Legal and Support Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-700">
              ·
            </span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <span aria-hidden="true" className="text-slate-700">
              ·
            </span>
            <button
              onClick={() => onOpenLegal('startio')}
              className="hover:text-white transition-colors text-indigo-400"
            >
              Start.io Verification
            </button>
            <span aria-hidden="true" className="text-slate-700">
              ·
            </span>
            <a
              href="mailto:support@metaclean.app"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>support@metaclean.app</span>
            </a>
          </div>
        </div>

        {/* Bottom Details & Start.io App URL Compliance Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2026 MetaClean. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Package: com.metaclean.bypass</span>
            <span>·</span>
            <span>Valid App URL for Start.io Ad Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
