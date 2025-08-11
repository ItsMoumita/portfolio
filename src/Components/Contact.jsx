import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

export default function Contact() {
  // Replace with your actual info
  const EMAIL = 'you@example.com';
  const LINKEDIN = 'https://www.linkedin.com/in/your-profile';
  const GITHUB = 'https://github.com/your-username';
  const FACEBOOK = 'https://facebook.com/your-username';
  const WHATSAPP = 'https://wa.me/8801XXXXXXXXX'; // include country code
  const LOCATION = 'Your City, Country';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Portfolio Contact from ${name || 'Visitor'}`);
    const body = encodeURIComponent(`${message}\n\nReply to: ${email || EMAIL}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative bg-transparent text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: heading + lines + socials */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold italic">
              <span className="bg-white/90 bg-clip-text text-transparent">
                Contact Me
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-zinc-300 text-lg">
              Open to opportunities, collaborations, and making cool stuff!
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-zinc-200 hover:scale-110 transition-transform duration-200">
                <Mail size={22} className="text-white/90" />
                <a href={`mailto:${EMAIL}`} className="hover:underline">
                  {EMAIL}
                </a>
              </li>

              {/* LinkedIn instead of Instagram */}
              <li className="flex items-center gap-3 text-zinc-200 hover:scale-110 transition-transform duration-200">
                <FaLinkedin size={22} className="text-[#F5F5F5]" />
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </li>

              <li className="flex items-center gap-3 text-zinc-200 hover:scale-110 transition-transform duration-200">
                <MapPin size={22} className="text-white/90" />
                <span>{LOCATION}</span>
              </li>
            </ul>

            {/* Social icons: white first, brand color on hover */}
            <div className="mt-8 flex items-center gap-3">
              <SocialIcon href={GITHUB} label="GitHub" icon={FaGithub} color="#EA4335"  />
              <SocialIcon href={LINKEDIN} label="LinkedIn" icon={FaLinkedin} color="#0A66C2" />
              <SocialIcon href={FACEBOOK} label="Facebook" icon={FaFacebook} color="#1877F2" />
              <SocialIcon href={WHATSAPP} label="WhatsApp" icon={FaWhatsapp} color="#25D366" />
              <SocialIcon href={`mailto:${EMAIL}`} label="Mail" icon={Mail} color="#EA4335" />
            </div>
          </motion.div>

          {/* Right: form card (no shimmer) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur-md p-4 sm:p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Name" name="name" placeholder="Your name" />
              <Input label="Email" name="email" type="email" placeholder="you@example.com" />
              {/* No general queries dropdown */}
              <Textarea label="Message" name="message" placeholder="Write your message..." rows={6} />

              {/* White capsule button like navbar, no shimmer */}
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full
                           bg-white px-5 py-2.5 font-semibold text-black
                           border border-white/10 shadow-sm
                           hover:bg-white/90 focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Send size={18} />
                Send
              </button>
              
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Helpers */
function Input({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-zinc-300">{label}</span>
      <input
        {...props}
        className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white
                   placeholder-zinc-400 outline-none focus:border-indigo-400/60"
      />
    </label>
  );
}

function Textarea({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-zinc-300">{label}</span>
      <textarea
        {...props}
        className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white
                   placeholder-zinc-400 outline-none focus:border-indigo-400/60"
      />
    </label>
  );
}

function SocialIcon({ href, label, icon: Icon, color = '#fff' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group relative grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5"
    >
      {/* white default */}
      <Icon className="size-5 text-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
      {/* brand color on hover */}
      <Icon className="absolute size-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ color }} />
      {/* lift + slight scale for hover */}
      <span className="absolute inset-0 rounded-full transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110" aria-hidden />
    </a>
  );
}