import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" }
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200/80 bg-white/70 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/75">
      <div className="container-base py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="display-font text-xl font-bold text-slate-900 dark:text-white">CodeWork Technologies</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Premium product engineering for ambitious teams building modern digital platforms.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">Navigation</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 transition hover:text-blue-700 dark:text-slate-300 dark:hover:text-sky-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>hello@codeworktech.com</li>
              <li>+91 8393042062</li>
              <li>MSK Institute, Station Road, Shikohabad, 203141, U.P</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/nKGDEkFrKystEwib9"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 transition hover:text-blue-800 dark:text-sky-300 dark:hover:text-sky-200"
                >
                  View Location
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/60">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Quick Help</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Need fast support? Reach out directly on WhatsApp or open our location.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://wa.me/918393042062"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-[#25D366] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#20bd5a]"
              >
                WhatsApp
              </a>
              <a
                href="https://maps.app.goo.gl/nKGDEkFrKystEwib9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Open Location
              </a>
            </div>
          </div>
          
        </div>

        <p className="mt-10 border-t border-slate-200/80 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
          © {new Date().getFullYear()} CodeWork Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
