'use client';

import React from 'react';
import {X, Shield, FileText, CheckCircle2, Lock} from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'startio' | null;
  onClose: () => void;
}

export default function LegalModal({type, onClose}: LegalModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' && <Shield className="w-5 h-5 text-indigo-600" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-indigo-600" />}
            {type === 'startio' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
            <h3 className="text-base font-bold text-slate-900">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms of Service'}
              {type === 'startio' && 'Start.io App Ownership & Verification'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' && (
            <>
              <p className="font-semibold text-slate-800">
                Last Updated: September 28, 2026
              </p>
              <p>
                MetaClean (&quot;we&quot;, &quot;our&quot;, or &quot;the App&quot;, package id{' '}
                <code>com.metaclean.bypass</code>) is committed to protecting your privacy. This
                Privacy Policy explains how our software operates on your Android device.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">
                1. 100% On-Device Processing
              </h4>
              <p>
                MetaClean executes all metadata inspection, C2PA manifest stripping, and EXIF
                sanitization locally on your device hardware. Your images, videos, audio streams,
                and associated generation prompts are <strong>never</strong> transmitted to any
                remote server or third party.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">
                2. No Personal Data Collection
              </h4>
              <p>
                The App does not collect, log, store, or sell any Personally Identifiable Information
                (PII), including your name, email, device IMEI, IP address, or media content.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">
                3. Device Permissions
              </h4>
              <p>
                MetaClean only requests standard Android scoped storage permissions (READ_MEDIA_IMAGES,
                READ_MEDIA_VIDEO) strictly required to read media files you voluntarily pick and write
                the cleaned output to your local gallery.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">
                4. Advertising &amp; SDK Transparency
              </h4>
              <p>
                In compliance with Start.io and ad network guidelines, any non-identifying telemetry or
                ad impressions adhere strictly to Google Play Developer Program policies and do not
                access your user media files.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">
                5. Contact Us
              </h4>
              <p>
                For privacy inquiries or compliance questions, please contact our Data Protection
                Officer at <a href="mailto:privacy@metaclean.app" className="text-indigo-600 underline">privacy@metaclean.app</a>.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p className="font-semibold text-slate-800">
                Effective Date: September 2026
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">
                1. Acceptance of Terms
              </h4>
              <p>
                By downloading, installing, or using MetaClean (<code>com.metaclean.bypass</code>),
                you agree to be bound by these Terms of Service. If you do not agree, do not install
                or use the software.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">
                2. Intended Purpose &amp; Utility
              </h4>
              <p>
                MetaClean is provided as a consumer file privacy and metadata management utility.
                Users are solely responsible for ensuring that their use of cleaned media complies
                with applicable copyright laws and social platform terms of service.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">
                3. Disclaimer of Warranties
              </h4>
              <p>
                MetaClean is provided &quot;as is&quot; without warranties of any kind. While we strive for
                lossless operations, users are advised to maintain backup copies of critical media files.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">
                4. Governing Law
              </h4>
              <p>
                These terms are governed by the laws applicable to digital software utilities. For
                support, reach out to <a href="mailto:support@metaclean.app" className="text-indigo-600 underline">support@metaclean.app</a>.
              </p>
            </>
          )}

          {type === 'startio' && (
            <>
              <p className="font-semibold text-slate-800">
                Official Developer Verification Record
              </p>
              <p>
                This domain serves as the official public web URL for the MetaClean Android
                application, fulfilling verification requirements for Start.io, Google AdMob,
                and programmatic advertising networks.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs space-y-1.5 text-slate-800">
                <div><strong>Application Name:</strong> MetaClean (meta Clean App Download)</div>
                <div><strong>Android Package Name:</strong> com.metaclean.bypass</div>
                <div><strong>Current Version:</strong> 1.0.4 (Build 104)</div>
                <div><strong>Developer Entity:</strong> MetaClean Labs</div>
                <div><strong>Authorized app-ads.txt URL:</strong> /app-ads.txt</div>
                <div><strong>Verification ID:</strong> start-io-metaclean-bypass-2026</div>
                <div><strong>Support Contact:</strong> support@metaclean.app</div>
              </div>
              <p className="text-xs text-slate-500 pt-2">
                Ad network crawlers may query <code>/app-ads.txt</code> to confirm publisher authorized seller records.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
