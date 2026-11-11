import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  ArrowUp,
  Copy,
  Check,
  Send,
  BookOpen,
} from 'lucide-react';
import {
  CONTACT_CONTENT,
  PERSONAL_INFO,
  BOOK_CHAPTERS,
  PortfolioPageId,
} from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

interface ContactSectionProps {
  onNavigatePage?: (pageId: PortfolioPageId) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onNavigatePage,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formFeedback, setFormFeedback] = useState<{
    type: 'ready' | 'copied' | null;
    mailtoUrl?: string;
  }>({ type: null });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildFormattedBody = () => {
    return `Hello Prudvish,\n\n${formData.message.trim()}\n\n---\nFrom: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const bodyEncoded = encodeURIComponent(buildFormattedBody());
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setFormFeedback({ type: 'ready', mailtoUrl });
    window.location.href = mailtoUrl;
  };

  const handleCopyMessage = async () => {
    const textToCopy = `To: ${PERSONAL_INFO.email}\nSubject: ${
      formData.subject.trim() || 'Portfolio Inquiry'
    }\n\n${buildFormattedBody()}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setFormFeedback((prev) => ({ ...prev, type: 'copied' }));
    } catch {
      setFormFeedback((prev) => ({ ...prev, type: 'ready' }));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="bg-[#174B38] text-[#F8F5ED] pt-20 sm:pt-28 lg:pt-32 pb-12"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#E9DCC3]/15"
        >
          {/* Left Column: Direct Contact Details & Social Profiles */}
          <motion.div variants={fadeInUp} className="lg:col-span-6 space-y-8">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#E9DCC3]/80 mb-3">
                07 · Get In Touch
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F5ED] leading-[1.08] text-balance mb-4">
                {CONTACT_CONTENT.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#E9DCC3]/85 leading-relaxed max-w-xl">
                {CONTACT_CONTENT.subheadline}
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4 pt-2">
              <a
                href={PERSONAL_INFO.emailHref}
                className="group flex items-center justify-between p-4 rounded-xl bg-[#263B31]/80 hover:bg-[#263B31] border border-[#E9DCC3]/15 hover:border-[#80649B] transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#174B38] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#E9DCC3]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#E9DCC3]/70">
                      Email Address
                    </span>
                    <span className="block text-sm sm:text-base font-semibold text-[#FFFFFF] truncate">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#E9DCC3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              <a
                href={PERSONAL_INFO.phoneHref}
                className="group flex items-center justify-between p-4 rounded-xl bg-[#263B31]/80 hover:bg-[#263B31] border border-[#E9DCC3]/15 hover:border-[#80649B] transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#174B38] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#E9DCC3]" />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#E9DCC3]/70">
                      Phone
                    </span>
                    <span className="block text-sm sm:text-base font-semibold text-[#FFFFFF] tabular-nums">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#E9DCC3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#263B31]/50 border border-[#E9DCC3]/12">
                <div className="w-10 h-10 rounded-lg bg-[#174B38] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#E9DCC3]" />
                </div>
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-[#E9DCC3]/70">
                    Location
                  </span>
                  <span className="block text-sm sm:text-base font-medium text-[#F8F5ED]">
                    {PERSONAL_INFO.locationShort}
                  </span>
                </div>
              </div>
            </div>

            {/* External Social Profiles */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-md bg-[#E9DCC3] text-[#174B38] hover:bg-[#FFFFFF] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-md bg-[#263B31] text-[#F8F5ED] hover:bg-[#263B31]/80 border border-[#E9DCC3]/25 hover:border-[#80649B] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <Github className="w-4 h-4 text-[#E9DCC3]" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4 text-[#E9DCC3]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div variants={fadeInUp} className="lg:col-span-6">
            <div className="bg-[#263B31] border border-[#E9DCC3]/15 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F5ED] mb-2">
                Prepare a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#E9DCC3]/80 mb-6 leading-relaxed">
                Complete the fields below to open a pre-addressed email draft in your default mail client or copy the formatted message directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs uppercase tracking-wider text-[#E9DCC3]/85 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg bg-[#174B38] border border-[#E9DCC3]/20 text-sm text-[#F8F5ED] placeholder-[#E9DCC3]/40 focus:outline-none focus:border-[#80649B]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs uppercase tracking-wider text-[#E9DCC3]/85 mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#174B38] border border-[#E9DCC3]/20 text-sm text-[#F8F5ED] placeholder-[#E9DCC3]/40 focus:outline-none focus:border-[#80649B]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs uppercase tracking-wider text-[#E9DCC3]/85 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration, internship, or inquiry"
                    className="w-full px-4 py-3 rounded-lg bg-[#174B38] border border-[#E9DCC3]/20 text-sm text-[#F8F5ED] placeholder-[#E9DCC3]/40 focus:outline-none focus:border-[#80649B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-[#E9DCC3]/85 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share details about your idea or inquiry..."
                    className="w-full px-4 py-3 rounded-lg bg-[#174B38] border border-[#E9DCC3]/20 text-sm text-[#F8F5ED] placeholder-[#E9DCC3]/40 focus:outline-none focus:border-[#80649B] resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#80649B] hover:bg-[#80649B]/90 text-[#FFFFFF] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    disabled={!formData.name || !formData.message}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-md bg-[#174B38] hover:bg-[#174B38]/80 disabled:opacity-45 text-[#E9DCC3] border border-[#E9DCC3]/20 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {formFeedback.type === 'copied' ? (
                      <>
                        <Check className="w-4 h-4 text-[#A6B7A0]" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Formatted Message</span>
                      </>
                    )}
                  </button>
                </div>

                {formFeedback.type && (
                  <div
                    role="status"
                    className="mt-4 p-3.5 rounded-lg bg-[#174B38] border border-[#E9DCC3]/25 text-xs text-[#E9DCC3] leading-relaxed"
                  >
                    {formFeedback.type === 'copied' ? (
                      <p>
                        Your formatted message and recipient address (
                        <strong className="text-[#FFFFFF]">
                          {PERSONAL_INFO.email}
                        </strong>
                        ) have been copied to your clipboard.
                      </p>
                    ) : (
                      <p>
                        Your email client has been prompted with a draft addressed to{' '}
                        <strong className="text-[#FFFFFF]">
                          {PERSONAL_INFO.email}
                        </strong>
                        . (No background server stores or transmits this form automatically.)
                      </p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer Credits & Page Navigation */}
        <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-[#E9DCC3]/75">
          <div className="space-y-1">
            <p className="font-display text-lg font-bold text-[#F8F5ED]">
              {PERSONAL_INFO.fullName}
            </p>
            <p>
              {PERSONAL_INFO.degree} · {PERSONAL_INFO.university}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {onNavigatePage && (
              <nav aria-label="Footer Chapter Links" className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigatePage('home')}
                  className="inline-flex items-center gap-1.5 text-[#E9DCC3] hover:text-[#FFFFFF] font-semibold transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>The Book (Home)</span>
                </button>
                {BOOK_CHAPTERS.map((chap) => (
                  <button
                    key={chap.id}
                    type="button"
                    onClick={() => onNavigatePage(chap.id)}
                    className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                  >
                    {chap.shortTitle}
                  </button>
                ))}
              </nav>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#263B31] hover:bg-[#80649B] text-[#F8F5ED] border border-[#E9DCC3]/20 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
