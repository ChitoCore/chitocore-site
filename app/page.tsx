"use client";

import { ArrowRight, Factory, FlaskConical, Leaf, Recycle, ShieldCheck, Tractor, Wine, Waves } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Circular feedstock model",
    text: "ChitoCore is building a circular biomaterials platform that converts mushroom industry by-products into high-value fungal chitosan and related materials.",
    icon: Recycle,
  },
  {
    title: "Australian supply chain",
    text: "A locally anchored manufacturing model designed to reduce reliance on imported chitosan and strengthen sovereign capability in advanced biomaterials.",
    icon: Factory,
  },
  {
    title: "Platform chemistry",
    text: "Fungal-derived chitosan can serve multiple industries, creating a versatile commercial pathway rather than dependence on a single end market.",
    icon: FlaskConical,
  },
];

const useCases = [
  {
    title: "Wine & Beverage",
    text: "Clarification, microbial control, process performance, and premium production support.",
    icon: Wine,
  },
  {
    title: "Agriculture",
    text: "Biostimulants, crop-input systems, seed and foliar applications, and circular farm inputs.",
    icon: Tractor,
  },
  {
    title: "Water Treatment",
    text: "Flocculation, contaminant capture, and more sustainable treatment chemistry.",
    icon: Waves,
  },
  {
    title: "Advanced Materials",
    text: "Films, composites, specialty formulations, and future biomaterials development.",
    icon: Leaf,
  },
];

const milestones = [
  "Partnership pathway with Marland Mushrooms for mushroom-processing side streams",
  "Waste valorisation model built around underutilised organic by-products",
  "Scalable fungal chitosan manufacturing platform with multi-industry applications",
  "Commercial positioning around premium Australian-made circular biomaterials",
];

const pillars = [
  {
    number: "01",
    title: "Waste to value",
    text: "ChitoCore is designed to turn mushroom industry waste streams into commercially useful outputs, converting disposal cost and inefficiency into material value.",
  },
  {
    number: "02",
    title: "Partnership-led supply",
    text: "The model is built around feedstock partnerships, including engagement with Marland Mushrooms, to secure reliable input streams for scale-up and pilot deployment.",
  },
  {
    number: "03",
    title: "Manufacturing platform",
    text: "Rather than a single-product story, ChitoCore is developing a broader fungal biomaterials platform centred on chitosan and adjacent high-value derivatives.",
  },
  {
    number: "04",
    title: "Cross-industry demand",
    text: "Chitosan has relevance across wine, agriculture, water treatment, and advanced materials, supporting diversified market entry and long-term optionality.",
  },
];

export default function ChitoCoreInvestorLandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f3ee] text-stone-900">
      <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-[#f5f3ee]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-semibold tracking-tight">ChitoCore</div>
            <div className="text-xs uppercase tracking-[0.22em] text-stone-500">
              Circular Biomaterials Platform
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
            <a href="#thesis" className="transition hover:text-stone-900">Investment thesis</a>
            <a href="#platform" className="transition hover:text-stone-900">Platform</a>
            <a href="#applications" className="transition hover:text-stone-900">Applications</a>
            <a href="#contact" className="transition hover:text-stone-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-emerald-800">
              Australian-made fungal chitosan
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
              Building a circular biomaterials platform from mushroom waste.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              ChitoCore is developing an Australian fungal chitosan manufacturing platform designed to valorise mushroom industry by-products, reduce dependence on imported materials, and supply high-value biomaterials to multiple industrial sectors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Investor & partner enquiries <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#platform"
                className="rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-900 shadow-sm transition hover:-translate-y-0.5"
              >
                Explore the platform
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4"
          >
            <div className="rounded-[28px] border border-stone-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Core proposition</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight">Waste valorisation into industrial biomaterials</div>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                A feedstock-to-material platform converting mushroom processing side streams into fungal-derived chitosan and related products with broad application potential.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">Supply anchor</div>
                <div className="mt-2 text-xl font-semibold">Marland Mushrooms</div>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  Partnership-led feedstock model centred on mushroom by-product recovery and local industrial integration.
                </p>
              </div>
              <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">Market logic</div>
                <div className="mt-2 text-xl font-semibold">Multi-sector demand</div>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  Chitosan is useful across wine, agriculture, water treatment, and sustainable materials.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="thesis" className="border-y border-stone-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">Investment thesis</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                ChitoCore sits at the intersection of circular economy, advanced manufacturing, and industrial biomaterials.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 * index }}
                    className="rounded-[28px] border border-stone-200 p-7 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="platform" className="bg-[#f5f3ee]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">Platform overview</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                  From mushroom waste stream to premium fungal chitosan platform.
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
                  ChitoCore is designed around a simple commercial idea: recover value from mushroom-processing by-products and turn that feedstock into a versatile class of industrial biomaterials. The initial product focus is fungal-derived chitosan, with the broader platform designed to support derivatives and future material extensions over time.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  {pillars.map((pillar) => (
                    <div key={pillar.number} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
                      <div className="text-sm font-semibold text-emerald-700">{pillar.number}</div>
                      <h3 className="mt-2 text-xl font-semibold">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-stone-600">{pillar.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-stone-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium uppercase tracking-[0.16em] text-stone-500">Why now</div>
                    <div className="text-xl font-semibold">Strategic momentum</div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {milestones.map((item) => (
                    <div key={item} className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="applications" className="border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">Applications</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                A material platform with multiple commercial pathways.
              </h2>
              <p className="mt-6 text-base leading-8 text-stone-600 md:text-lg">
                Chitosan is commercially attractive because it can serve more than one industry. ChitoCore’s investor story is not limited to a single niche: it is a manufacturing platform with multiple routes to market.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {useCases.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.06 * index }}
                    className="rounded-[28px] border border-stone-200 p-7 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-stone-200 bg-[#163128] text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-emerald-200">Feedstock</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight">Mushroom industry side streams</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-emerald-200">Output</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight">Fungal chitosan and related biomaterials</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-emerald-200">Outcome</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight">Circular Australian manufacturing with cross-sector relevance</div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-stone-200 bg-stone-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-400">Contact</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                For investors, strategic partners, and pilot collaborators.
              </h2>
              <p className="mt-6 text-base leading-8 text-stone-300 md:text-lg">
                ChitoCore is building a premium circular biomaterials platform around fungal-derived chitosan. For investment discussions, feedstock partnerships, commercial trials, or industrial collaboration, get in touch.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:hello@chitocore.com" className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-stone-950">
                  hello@chitocore.com
                </a>
                <a href="#" className="rounded-2xl border border-stone-700 px-5 py-3 text-sm font-medium text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
