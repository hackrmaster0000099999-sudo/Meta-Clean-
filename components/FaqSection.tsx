'use client';

import React, {useState} from 'react';
import {ChevronDown, HelpCircle} from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'Why does social media suppress AI content?',
      answer:
        'Major social networks (TikTok, Instagram, Facebook, and YouTube) have implemented automated ingestion filters based on C2PA (Coalition for Content Provenance and Authenticity) protocols. When their server pipeline detects an embedded synthetic generation signature, their algorithm deprioritizes the content from Discovery feeds, limits hashtags, or applies an intrusive "AI Info" disclaimer badge that lowers organic click-through rates.',
    },
    {
      id: 'faq-2',
      question: 'Will removing metadata reduce my image or video quality?',
      answer:
        'No. MetaClean performs container-level metadata scrubbing. It strips the binary header chunks (such as C2PA manifests, EXIF metadata, IPTC fields, and software generator tags) without re-encoding or compressing the underlying image pixel matrix or video bitstream. Your resolution, color depth, frame rate, and bitrate remain 100% untouched.',
    },
    {
      id: 'faq-3',
      question: 'Is MetaClean really free?',
      answer:
        'Yes, MetaClean is 100% free to download and use. There are no paywalls, hidden in-app purchases, or subscription tiers required to unlock video scrubbing or batch processing.',
    },
    {
      id: 'faq-4',
      question: 'Does MetaClean upload my media to any remote servers?',
      answer:
        'Never. MetaClean is strictly an on-device Android utility. It runs completely offline without network permissions, meaning your personal photos, videos, and private prompts never leave your phone’s sandboxed local storage.',
    },
    {
      id: 'faq-5',
      question: 'Which AI generators and formats are supported?',
      answer:
        'MetaClean strips metadata from all major diffusion and generative models, including Midjourney v5/v6, DALL-E 3, Stable Diffusion / SDXL, Flux.1, Leonardo AI, OpenAI Sora, Runway Gen-2/Gen-3, Pika Labs, and Luma Dream Machine. Supported file extensions include JPG, JPEG, PNG, WEBP, and MP4 videos.',
    },
    {
      id: 'faq-6',
      question: 'Is installing an APK safe on my Android device?',
      answer:
        'Yes. MetaClean is compiled with official Android SDK toolchains, digitally signed, and passes VirusTotal inspection with 0 detections across all 72 major security engines. When installing, Android simply prompts you to authorize installation from your browser because it was downloaded outside the Google Play Store.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Section 07 · Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Everything you need to know about AI metadata, C2PA digital signatures, and how
            MetaClean restores your organic social reach.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-200/90 overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50/80 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-indigo-50 text-indigo-600' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional support contact prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Have another question or need developer support?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Contact our mobile development engineering team directly.
            </p>
          </div>
          <a
            href="mailto:support@metaclean.app"
            className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-white text-indigo-700 border border-indigo-200 hover:bg-indigo-50 transition-colors shrink-0 shadow-xs"
          >
            support@metaclean.app
          </a>
        </div>
      </div>
    </section>
  );
}
