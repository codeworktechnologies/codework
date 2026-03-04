import Link from "next/link";

export default function StickyCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-light backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
        <div>
          <p className="text-xs font-semibold text-slate-900 dark:text-white">Launch Faster</p>
          <p className="text-xs text-slate-600 dark:text-slate-300">Talk to our product team</p>
        </div>
        <Link href="/contact" className="button-primary px-4 py-2 text-xs">
          Request Demo
        </Link>
      </div>
    </div>
  );
}
