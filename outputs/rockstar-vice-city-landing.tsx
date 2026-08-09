"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight, CheckCircle2, ChevronDown, ChevronRight, Gamepad2,
  Menu, MessageCircle, Play, Radio, Shield, Sparkles, Video, X,
} from "lucide-react";
import { useEffect, useState } from "react";

const VIDEO_DRONE_HERO = "https://res.cloudinary.com/orsttfwg/video/upload/v1786238098/The_drone_is_not_supposed_to_s_jilrca.mp4";
const VIDEO_HIGHWAY_SHOWCASE = "https://res.cloudinary.com/orsttfwg/video/upload/v1786237967/Nighttime_Miami_highway_long_edaqsx.mp4";

type HeroVideoBackgroundProps = { src?: string; poster?: string; className?: string };

/** Media background layer. Pass any hosted MP4 URL through `src`. */
export function HeroVideoBackground({ src = VIDEO_DRONE_HERO, poster, className = "" }: HeroVideoBackgroundProps) {
  return <div className={`absolute inset-0 overflow-hidden bg-zinc-950 ${className}`}>
    <video autoPlay loop muted playsInline poster={poster} className="h-full w-full scale-105 object-cover brightness-90 contrast-125">
      <source src={src} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(11,4,20,.86),rgba(2,4,17,.22)_55%,rgba(236,36,155,.22))]" />
    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,1,13,.98),rgba(7,3,14,.1)_58%,rgba(5,5,24,.68))]" />
    <div className="scanlines absolute inset-0 opacity-20" />
  </div>;
}

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const nav = [["ACTUALITÉS", "#actu"], ["CARTE INTERACTIVE", "#map"], ["GUIDE MATÉRIEL", "#hardware"], ["PACK JOUR-1", "#pack"]] as const;

const launchDate = new Date("2026-11-19T00:00:00+01:00").getTime();

function Countdown() {
  const getRemaining = () => Math.max(0, launchDate - Date.now());
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const values = [
    ["JOURS", Math.floor(remaining / 86_400_000)],
    ["HEURES", Math.floor((remaining / 3_600_000) % 24)],
    ["MINUTES", Math.floor((remaining / 60_000) % 60)],
    ["SECONDES", Math.floor((remaining / 1000) % 60)],
  ];

  return <div aria-label="Compte à rebours jusqu'au lancement" className="mx-auto flex w-full max-w-xl justify-center gap-1.5 sm:gap-3">
    {values.map(([label, value], index) => <div className="flex items-center gap-1.5 sm:gap-3" key={label as string}>
      <div className="min-w-[58px] border border-[#55e5ff]/35 bg-[#070410]/65 px-2 py-2.5 shadow-[0_0_18px_rgba(85,229,255,.14)] backdrop-blur-sm sm:min-w-[82px] sm:px-3 sm:py-3"><strong className="block text-2xl font-black leading-none text-[#f6edff] sm:text-3xl">{String(value).padStart(2, "0")}</strong><span className="mt-1 block text-[7px] font-bold tracking-[.12em] text-[#55e5ff] sm:text-[8px]">{label}</span></div>
      {index < values.length - 1 && <span className="pb-3 text-lg font-black text-[#ff64b1] sm:text-2xl">:</span>}
    </div>)}
  </div>;
}

export default function RockstarLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return <main className="min-h-screen overflow-x-hidden bg-[#08000f] font-sans text-white antialiased selection:bg-[#ff4ca3] selection:text-black">
    <style jsx global>{`
      .grain { background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E") }
      .scanlines { background:repeating-linear-gradient(0deg,transparent 0,transparent 3px,rgba(255,255,255,.11) 4px) }
      .neon-grid { background-image:linear-gradient(rgba(42,226,255,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(42,226,255,.14) 1px,transparent 1px); background-size:44px 44px; mask-image:linear-gradient(to bottom,transparent,black 18%,black); transform:perspective(380px) rotateX(58deg) scale(1.7); transform-origin:center bottom }
      .text-neon { text-shadow:0 0 18px rgba(255,66,165,.7),0 0 42px rgba(82,228,255,.28) }
      .glow-pink { box-shadow:0 0 0 1px rgba(255,65,165,.45),0 0 28px rgba(255,65,165,.18),inset 0 0 28px rgba(255,65,165,.05) }
    `}</style>
    <div className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.035]" />

    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#55e5ff]/20 bg-[#09000f]/65 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#top" aria-label="Leonida Intel" className="flex items-center gap-3"><img src="/vicecityhub-icon.png" alt="Vice City Hub" className="h-10 w-10 rounded-full border border-[#55e5ff] object-cover shadow-[0_0_16px_rgba(85,229,255,.65),0_0_24px_rgba(255,76,163,.4)]" /><span className="text-lg font-black italic tracking-wider">LEONIDA<span className="text-[#55e5ff]">INTEL</span></span></a>
        <nav className="hidden items-center gap-7 text-[11px] font-black tracking-[.12em] md:flex">{nav.map(([label, href]) => <a href={href} className="text-zinc-200 transition-colors hover:text-[#55e5ff]" key={label}>{label}</a>)}</nav>
        <a href="#pack" className="hidden items-center gap-2 bg-gradient-to-r from-[#ff4ca3] via-[#ef48be] to-[#b938ff] px-4 py-3 text-[10px] font-black tracking-widest text-white shadow-[0_0_24px_rgba(255,76,163,.35)] transition hover:brightness-125 md:inline-flex">RÉSERVER LE PACK <ArrowUpRight size={14} /></a>
        <button className="p-2 md:hidden" aria-label="Ouvrir le menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
      </div>
      {isMenuOpen && <nav className="border-t border-[#55e5ff]/20 bg-[#09000f] px-5 py-3 md:hidden">{nav.map(([label, href]) => <a href={href} onClick={closeMenu} className="block border-b border-white/10 py-4 text-xs font-black tracking-widest" key={label}>{label}</a>)}<a href="#pack" onClick={closeMenu} className="mt-3 block bg-[#ff4ca3] py-3 text-center text-xs font-black tracking-widest text-white">RÉSERVER LE PACK (9,99€)</a></nav>}
    </header>

    <section id="top" className="relative flex min-h-[700px] items-center justify-center overflow-hidden px-4 pt-20 text-center sm:px-6">
      <HeroVideoBackground />
      <div className="neon-grid pointer-events-none absolute inset-x-0 -bottom-20 h-64 opacity-70" />
      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }} className="relative z-10 mx-auto max-w-5xl space-y-6">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-[#ff4ca3]/70 bg-[#15051d]/75 px-4 py-2 text-[10px] font-bold tracking-[.13em] text-[#71edff] shadow-[0_0_24px_rgba(255,76,163,.22)] backdrop-blur-sm"><Sparkles size={14} /> HUB PRÉ-LANCEMENT GTA VI • 19 NOVEMBRE 2026</motion.div>
        <motion.h1 variants={fadeUp} className="text-5xl font-black italic leading-[.78] tracking-[-.07em] sm:text-7xl lg:text-8xl">PRÉPARE-TOI POUR<br /><span className="text-neon bg-gradient-to-r from-[#ff64b1] via-[#ffa3d1] to-[#56e9ff] bg-clip-text text-transparent">VICE CITY</span></motion.h1>
        <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-200 sm:text-lg">Optimisation matérielle, cartes interactives et checklists exclusives. Tout ce qu&apos;il te faut pour être prêt dès la première minute du lancement.</motion.p>
        <motion.div variants={fadeUp} className="space-y-2 pt-1"><p className="text-[9px] font-black tracking-[.22em] text-[#ff9dc9]">LANCEMENT DANS</p><Countdown /></motion.div>
        <motion.div variants={fadeUp} className="flex flex-col items-center justify-center gap-3 pt-3 sm:flex-row"><a href="#pack" className="flex w-full items-center justify-center gap-3 bg-gradient-to-r from-[#ff4ca3] to-[#b938ff] px-7 py-4 text-xs font-black tracking-widest text-white shadow-[0_0_30px_rgba(255,76,163,.48)] transition hover:scale-[1.03] hover:brightness-125 sm:w-auto">OBTENIR LE PACK JOUR-1 (9,99€)<ChevronRight size={18} /></a><a href="#map" className="w-full border border-[#55e5ff]/60 bg-[#04131c]/45 px-7 py-4 text-xs font-black tracking-widest text-[#c9f8ff] shadow-[0_0_20px_rgba(85,229,255,.14)] backdrop-blur-sm transition hover:bg-[#55e5ff] hover:text-[#04131c] sm:w-auto">EXPLORER LEONIDA</a></motion.div>
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-[#ff4ca3] via-50% to-[#55e5ff]" />
    </section>

    <section id="map" className="relative overflow-hidden border-y border-[#b938ff]/35 bg-[#0c0317] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <HeroVideoBackground src={VIDEO_HIGHWAY_SHOWCASE} className="opacity-80" />
      <motion.div viewport={{ once: true, amount: .2 }} initial="hidden" whileInView="visible" variants={fadeUp} transition={{ duration: .5 }} className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div><span className="text-xs font-black tracking-[.2em] text-[#55e5ff]">// CARTE & EXPLORATION</span><h2 className="mt-5 text-4xl font-black italic leading-[.9] tracking-tight sm:text-5xl">L&apos;ÉTAT DE LEONIDA<br /><span className="text-[#ff7abb]">N&apos;AURA PLUS DE SECRETS</span></h2><p className="mt-6 max-w-xl leading-relaxed text-zinc-200">Naviguez à travers l&apos;autoroute de Vice City et découvrez les routes d&apos;optimisation prioritaires. Notre tracker rassemble les emplacements et informations essentiels au même endroit.</p><ul className="mt-7 space-y-3 text-sm font-semibold text-zinc-100">{["Carte haute résolution annotée mise à jour en temps réel", "Itinéraire optimal pour débloquer les planques d'urgence", "Checklist interactive des 100% sans spoilers d'histoire"].map((item) => <li className="flex gap-3" key={item}><CheckCircle2 className="mt-0.5 shrink-0 text-[#55e5ff]" size={19} />{item}</li>)}</ul></div>
        <div className="glow-pink border border-[#ff4ca3]/55 bg-[#10081d]/80 p-5 backdrop-blur-md"><div className="flex justify-between border-b border-[#55e5ff]/20 pb-3 text-[10px] font-mono"><span className="text-[#aeefff]">STATUS: EN DIRECT</span><span className="text-[#ff75b9]">LEONIDA_MAP_V2.4.NET</span></div><div className="group relative mt-4 aspect-video cursor-pointer overflow-hidden border border-[#55e5ff]/40 bg-zinc-900"><video autoPlay loop muted playsInline className="h-full w-full object-cover transition duration-500 group-hover:scale-105"><source src={VIDEO_HIGHWAY_SHOWCASE} type="video/mp4" /></video><div className="absolute inset-0 flex items-center justify-center bg-[#08000f]/40 transition group-hover:bg-[#ff4ca3]/15"><span className="bg-[#55e5ff] p-3 text-[#12031d] shadow-[0_0_25px_rgba(85,229,255,.55)]"><Play size={24} fill="currentColor" /></span></div></div><p className="mt-4 text-center text-[10px] font-mono text-[#b088c6]">APERÇU DU TRACÉ RÉSEAU ET DES ZONES D&apos;OMBRE DE VICE CITY</p></div>
      </motion.div>
    </section>

    <section id="hardware" className="bg-[radial-gradient(ellipse_at_top,#250833_0%,#0a0312_55%,#030008_100%)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" variants={fadeUp} className="mx-auto max-w-7xl"><p className="text-xs font-black tracking-[.2em] text-[#ff75b9]">// GUIDE MATÉRIEL</p><div className="mt-5 grid border border-[#ff4ca3]/35 bg-[#0d0615]/70 md:grid-cols-3">{[["01", "CONSOLES", "Profils d'affichage et espace de stockage à vérifier."], ["02", "PC", "Réglages visuels et préparation de votre configuration."], ["03", "CHECKLIST", "Les actions à prévoir avant le jour du lancement."]].map(([number, title, description]) => <article className="group border-b border-[#55e5ff]/20 p-7 last:border-0 transition hover:bg-[#ff4ca3]/10 md:border-b-0 md:border-r md:last:border-r-0" key={title}><span className="font-mono text-xs font-black text-[#55e5ff]">{number}</span><h3 className="mt-14 text-2xl font-black italic group-hover:text-[#ff75b9]">{title}</h3><p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-300">{description}</p><a href="#pack" className="mt-7 inline-flex items-center gap-2 text-xs font-black tracking-wider text-[#ff75b9] transition hover:text-[#55e5ff]">VOIR LE GUIDE <ArrowUpRight size={14} /></a></article>)}</div></motion.div></section>

    <section id="pack" className="bg-[#08000f] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><motion.div viewport={{ once: true, amount: .15 }} initial="hidden" whileInView="visible" variants={fadeUp} className="mx-auto max-w-5xl"><div className="mb-12 text-center"><span className="text-xs font-black tracking-[.2em] text-[#55e5ff]">// OFFRE DE PRÉ-LANCEMENT</span><h2 className="mt-4 text-4xl font-black italic tracking-tight sm:text-6xl">LE PACK D&apos;OPTIMISATION<br /><span className="text-neon text-[#ff75b9]">JOUR-1</span></h2><p className="mx-auto mt-4 max-w-xl text-sm text-zinc-300">Reçois ton tableau de bord Notion/PDF prêt à l&apos;emploi et tes points de préparation essentiels.</p></div><div className="glow-pink relative overflow-hidden border-2 border-[#ff4ca3] bg-[linear-gradient(120deg,#17051f,#080611_65%,#071923)] p-7 shadow-[0_0_55px_rgba(255,76,163,.18)] sm:p-10"><div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#b938ff]/25 blur-3xl" /><span className="absolute right-0 top-0 bg-[#55e5ff] px-4 py-2 text-[10px] font-black tracking-wider text-[#090012]">OFFRE LIMITÉE • -60%</span><div className="relative grid items-center gap-8 md:grid-cols-3"><div className="md:col-span-2"><h3 className="text-2xl font-black italic">CE QUE TU REÇOIS IMMÉDIATEMENT :</h3><ul className="mt-7 space-y-5 text-sm text-zinc-100">{[[Gamepad2, "Preset Réglages Graphiques", "Paramètres exacts PS5 Pro / Series X / PC pour une expérience fluide."], [Shield, "Checklist Stockage & SSD", "Procédure de préparation disque avant la date de préchargement."], [Sparkles, "Accès VIP Discord", "Rejoins l'escouade pour organiser ton crew."]].map(([Icon, title, description]) => { const Component = Icon as typeof Gamepad2; return <li className="flex items-start gap-3" key={title as string}><Component className="mt-0.5 shrink-0 text-[#55e5ff]" size={20} /><span><strong className="text-[#ff9dc9]">{title as string} :</strong> {description as string}</span></li> })}</ul></div><aside className="flex h-full flex-col justify-between border border-[#55e5ff]/35 bg-[#06020b]/80 p-6 text-center"><div><span className="block text-[10px] font-mono text-[#ae83bb]">PRIX NORMAL : 24,99€</span><strong className="text-neon mt-1 block text-5xl font-black text-[#ff75b9]">9,99€</strong><span className="mt-1 block text-[10px] text-zinc-400">Paiement unique • Accès à vie</span></div><a href="#checkout" className="mt-7 bg-gradient-to-r from-[#ff4ca3] to-[#b938ff] px-3 py-4 text-xs font-black tracking-widest text-white shadow-[0_0_24px_rgba(255,76,163,.4)] transition hover:brightness-125">COMMANDER MAINTENANT</a><span className="mt-4 text-[9px] text-zinc-500">Garantie 100% Satisfait ou Remboursé sous 14 jours</span></aside></div></div></motion.div></section>

    <footer className="border-t border-[#55e5ff]/25 bg-[#05000a] px-4 py-10 text-xs text-zinc-500 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-col items-center justify-between gap-6 border-b border-[#ff4ca3]/20 pb-7 md:flex-row"><div className="text-center md:text-left"><div className="flex items-center justify-center gap-2 text-base font-black italic text-white md:justify-start"><span className="bg-[#ff4ca3] px-2 py-0.5 text-xs text-white">LI</span>LEONIDA <span className="text-[#55e5ff]">INTEL</span></div><p className="mt-3 max-w-xl text-[10px] leading-relaxed">Leonida Intel est un site d&apos;actualités et de guides indépendant. Grand Theft Auto, GTA VI, Vice City et Rockstar Games sont des marques déposées de leurs propriétaires respectifs.</p></div><div className="flex gap-5 text-[#55e5ff]"><Radio size={18} /><Video size={19} /><MessageCircle size={18} /></div></div><div className="flex flex-col justify-between gap-4 pt-6 text-[10px] font-bold tracking-wider sm:flex-row"><span>© 2026 LEONIDA INTEL • TOUS DROITS RÉSERVÉS</span><button className="flex items-center justify-center gap-2 text-white">FRANCE / FRANÇAIS <ChevronDown size={13} /></button></div></div></footer>
  </main>;
}
