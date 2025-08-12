import { Mail } from 'lucide-react';
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const socials = [
    { href: 'https://github.com/ItsMoumita', label: 'GitHub', icon: FaGithub, color: '#EA4335' },
    { href: 'https://www.linkedin.com/feed/', label: 'LinkedIn', icon: FaLinkedin, color: '#0A66C2' },
    { href: 'https://www.facebook.com/ahamed.moumita', label: 'Facebook', icon: FaFacebook, color: '#1877F2' },
    { href: 'mailto:moumitaaabd@gmail.com', label: 'Mail', icon: Mail, color: '#EA4335' },
    { href: 'https://wa.me/+8801630875115', label: 'WhatsApp', icon: FaWhatsapp, color: '#25D366' },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState({}, '', `/#${id}`);
    }
  };

  return (
    <footer className="relative z-10 bg-transparent text-white">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 bg-transparent">
        <div className="p-6 md:p-8 bg-transparent">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl md:text-4xl font-semibold italic">Moumita</div>
              <div className="mt-1 text-lg text-zinc-400">Building intuitive, modern web experiences.</div>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-4">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`/#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(l.id);
                  }}
                  className="rounded-full px-3 py-1.5 text-lg font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center justify-center gap-3">
              {socials.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
          </div>

          <div className="my-6 h-px w-full bg-gradient-to-r from-indigo-400/40 via-violet-400/40 to-fuchsia-400/40" />

          <div className="text-center text-sm text-zinc-400">
            © {year} Moumita. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, icon: Icon, color = '#fff' }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      title={label}
      className="group relative grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5"
    >
      <Icon className="size-5 text-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
      <Icon className="absolute size-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ color }} />
      <span className="absolute inset-0 rounded-full transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110" aria-hidden />
    </a>
  );
}