'use client';
import { FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const email = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'chibukoakwuobu@gmail.com';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2348140212430';

export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fields = [
      `Name: ${data.get('name')}`, `Organisation: ${data.get('organisation') || 'Not provided'}`,
      `Email: ${data.get('email')}`, `Phone: ${data.get('phone') || 'Not provided'}`,
      `Country / delivery location: ${data.get('location')}`, `Equipment required: ${data.get('equipment')}`,
      `Quantity: ${data.get('quantity') || 'Not specified'}`, `Requirements: ${data.get('details') || 'Not provided'}`
    ];
    const body = encodeURIComponent(fields.join('\n'));
    const subject = encodeURIComponent(`Equipment quotation request — ${data.get('equipment')}`);
    const mailto = `mailto:${email}?subject=${subject}&body=${body}`;
    const waText = encodeURIComponent(`Hello Buko Made Global Concept, I would like to request a quotation.\n\n${fields.join('\n')}`);
    setSent(true);
    // This MVP uses the visitor's email/WhatsApp app, so no paid form provider is required.
    window.location.href = mailto;
    window.setTimeout(() => window.open(`https://wa.me/${whatsapp}?text=${waText}`, '_blank', 'noopener,noreferrer'), 500);
  }
  return <form className="quote-form" onSubmit={submit}>
    <div className="form-grid">
      <label>Full name *<input name="name" required placeholder="Your name" autoComplete="name" /></label>
      <label>Work email *<input name="email" type="email" required placeholder="you@organisation.com" autoComplete="email" /></label>
      <label>Organisation<input name="organisation" placeholder="Hospital, clinic, company…" autoComplete="organization" /></label>
      <label>Phone / WhatsApp<input name="phone" type="tel" placeholder="+234…" autoComplete="tel" /></label>
      <label>Country and delivery location *<input name="location" required placeholder="e.g. Lagos, Nigeria" /></label>
      <label>Equipment or category required *<input name="equipment" required placeholder="Product name or equipment list" /></label>
      <label>Estimated quantity<input name="quantity" placeholder="e.g. 5 units / bulk list" /></label>
      <label className="form-wide">Specifications or additional details<textarea name="details" rows={4} placeholder="Model, intended use, preferred delivery date, or paste a procurement list…" /></label>
    </div>
    <button className="button button-primary form-submit" type="submit">Prepare quotation request <ArrowUpRight size={18} /></button>
    <p className="form-note">Your email or WhatsApp app will open with your enquiry prepared. Review and send it to submit your request.</p>
    {sent && <p className="form-success"><CheckCircle2 size={16} /> Your request is prepared. Please send it from the app that opens.</p>}
  </form>;
}
