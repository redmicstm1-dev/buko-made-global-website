import Image from 'next/image';

/** Switch between /brand/concept-a.svg and /brand/concept-b.svg after reviewing both concepts. */
export default function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return <a className={`brand-lockup ${light ? 'brand-lockup-light' : ''} ${compact ? 'brand-lockup-compact' : ''}`} href="#home" aria-label="Buko Made Global Concept home">
    <Image src="/brand/concept-a.svg" alt="" width={52} height={52} priority />
    <span className="brand-wordmark"><strong>BUKO MADE</strong><strong>GLOBAL CONCEPT</strong><small>MEDICAL &amp; HOSPITAL EQUIPMENT</small></span>
  </a>;
}
