import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What are your delivery fees across Lebanon?',
      a: 'We operate on a simple, transparent flat-rate pricing structure: $3.00 flat if delivery is inside Beirut (Achrafieh, Hamra, Verdun, Badaro, Downtown, etc.), and $4.00 flat if delivery is outside Beirut anywhere across Lebanon (Mount Lebanon, Tripoli, Batroun, Saida, Tyre, Zahle, etc.). There are zero hidden fuel surcharges, zero distance taxes, and no arbitrary price inflation.',
    },
    {
      q: 'How does Cash on Delivery (COD) collection and payout work in Lebanon?',
      a: 'Our drivers collect cash at the customer doorstep in either fresh USD or Lebanese Pounds (LBP) according to the daily official market rate. The collected cash is deposited in tamper-evident secure safe bags at our Beirut Central Hub. Every Thursday (or within 48 hours for high-volume merchants), you receive your full payout via Cash pickup at our hub, Whish Money, OMT, or direct Lebanese bank transfer, accompanied by an itemized Excel and PDF remittance ledger.',
    },
    {
      q: 'What happens if a recipient does not answer their phone or rejects the package?',
      a: 'Unlike traditional couriers who immediately return failed deliveries, our dispatch team follows a 3-step verification protocol: our driver calls the customer, our central customer service reaches out via WhatsApp, and if still unreachable, we notify the merchant on the dashboard. We attempt up to 3 re-deliveries before marking an order for return, keeping your overall return rate below 4%.',
    },
    {
      q: 'How do warehouse inventory storage and fulfillment work?',
      a: 'You deliver or send your inventory to our Beirut Central Hub in Corniche El Nahr. Our team barcodes and catalogs every SKU onto your private merchant dashboard. When you receive orders from your Shopify store, Instagram DM, or website, we automatically pick the item, protect it in bubble wrap, place it in an RT flyer bag, apply the thermal waybill, and dispatch it with our outbound courier vans. You pay only for the shelf space and orders you actually dispatch.',
    },
    {
      q: 'Do you provide complimentary flyer packaging bags and waybill stickers?',
      a: 'Yes! Active RT Deliveries merchants receive complimentary high-density, tamper-evident poly flyer bags (Sizes S, M, L) and thermal A6 barcode shipping labels. When our couriers arrive for pickup, they also carry extra packaging supplies for urgent dispatches.',
    },
    {
      q: 'Can customers do doorstep size or model exchanges for clothing & shoes?',
      a: 'Yes, this is one of our most popular services for Lebanese fashion and footwear stores. When an exchange order is dispatched, our courier brings the new size to the customer, waits for them to hand over the original item, inspects the returned item to ensure tags are intact and unworn, and collects or refunds any price difference on the spot.',
    },
    {
      q: 'Can I integrate my Shopify, WooCommerce, or custom e-commerce store?',
      a: 'Yes! We support direct Shopify and WooCommerce integrations, allowing unfulfilled orders to import directly into your RT dashboard with a single click. For merchants selling on Instagram or WhatsApp, we offer a rapid 1-click Excel/CSV bulk order upload that generates 100+ thermal waybills in seconds.',
    },
    {
      q: 'What are your daily cut-off times for same-day and next-day dispatch?',
      a: 'For Greater Beirut same-day express runs, pickup requests must be logged before 1:00 PM. For nationwide next-day deliveries across all 8 Lebanese governorates, orders registered before 4:30 PM are collected the same evening, processed at the central sorting hub overnight, and delivered the following morning.',
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Everything you need to know about delivery in Lebanon
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Clear answers to common questions about COD payments, warehousing, exchanges, and coverage.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-orange-600 transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-orange-100 text-orange-600' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions WhatsApp block */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
          <h4 className="text-base font-bold text-slate-900">
            Have a custom question about your Lebanese e-commerce store?
          </h4>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Our Beirut merchant support team is available on WhatsApp Monday through Saturday from 8:30 AM to 7:00 PM.
          </p>
          <a
            href="https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20have%20a%20question%20about%20your%20services"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat Directly on WhatsApp (+961 71 892 411)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
