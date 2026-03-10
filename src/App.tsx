/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Calendar, Trophy, ArrowRight, CheckCircle2, Menu, X, Activity, Coffee, Car, Shield } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
            <Activity className="text-zinc-950 w-6 h-6" />
          </div>
          <div className="font-black text-2xl tracking-tighter text-white">
            ALTINO<span className="text-lime-400">SPORT</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
          <a href="#strutture" className="text-zinc-300 hover:text-lime-400 transition-colors">STRUTTURE</a>
          <a href="#servizi" className="text-zinc-300 hover:text-lime-400 transition-colors">SERVIZI</a>
          <a href="#contatti" className="text-zinc-300 hover:text-lime-400 transition-colors">CONTATTI</a>
          <button className="bg-lime-400 text-zinc-950 px-6 py-2.5 rounded-full font-bold hover:bg-lime-300 transition-colors">
            PRENOTA ORA
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#strutture" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-300">Strutture</a>
            <a href="#servizi" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-300">Servizi</a>
            <a href="#contatti" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-300">Contatti</a>
            <button className="bg-lime-400 text-zinc-950 px-6 py-3 rounded-full font-bold mt-4">
              PRENOTA ORA
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [bookingType, setBookingType] = useState<'padel' | 'calcio'>('padel');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isBooking, setIsBooking] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      alert(`Prenotazione confermata per ${bookingType === 'padel' ? 'Padel' : 'Calcio'} il ${date} alle ${time}!`);
      setDate('');
      setTime('');
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554068865-24cecd4e34d8?auto=format&fit=crop&q=80&w=2000"
          alt="Sports Facility"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-sm font-medium text-zinc-300 uppercase tracking-wider">Nuova Apertura</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-6">
            VIVI LO SPORT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
              AL MASSIMO.
            </span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
            Altino Sport Village è il tuo nuovo centro sportivo. 2 campi da Padel panoramici e 1 campo da Calcio di ultima generazione ti aspettano.
          </p>
          <div className="flex flex-wrap gap-4 hidden lg:flex">
            <a href="#strutture" className="bg-zinc-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-700 transition-colors flex items-center gap-2">
              Scopri le Strutture
            </a>
          </div>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-lime-400" />
            Prenota il tuo campo
          </h3>
          
          <form onSubmit={handleBooking} className="space-y-6">
            {/* Sport Selection */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setBookingType('padel')}
                className={`py-4 px-4 rounded-2xl border-2 font-bold transition-all ${
                  bookingType === 'padel' 
                    ? 'border-lime-400 bg-lime-400/10 text-lime-400' 
                    : 'border-zinc-800 bg-zinc-950/50 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                Padel
                <span className="block text-xs font-normal mt-1 opacity-80">2 Campi Disp.</span>
              </button>
              <button
                type="button"
                onClick={() => setBookingType('calcio')}
                className={`py-4 px-4 rounded-2xl border-2 font-bold transition-all ${
                  bookingType === 'calcio' 
                    ? 'border-lime-400 bg-lime-400/10 text-lime-400' 
                    : 'border-zinc-800 bg-zinc-950/50 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                Calcio a 5
                <span className="block text-xs font-normal mt-1 opacity-80">1 Campo Disp.</span>
              </button>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Data</label>
              <input 
                type="date" 
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all"
              />
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Orario</label>
              <select 
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all appearance-none"
              >
                <option value="" disabled>Seleziona orario</option>
                <option value="09:00">09:00 - 10:30</option>
                <option value="10:30">10:30 - 12:00</option>
                <option value="15:00">15:00 - 16:30</option>
                <option value="16:30">16:30 - 18:00</option>
                <option value="18:00">18:00 - 19:30</option>
                <option value="19:30">19:30 - 21:00</option>
                <option value="21:00">21:00 - 22:30</option>
              </select>
            </div>

            <button 
              type="submit"
              disabled={isBooking}
              className="w-full bg-lime-400 text-zinc-950 py-4 rounded-xl font-bold text-lg hover:bg-lime-300 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isBooking ? (
                <span className="animate-pulse">Verifica disponibilità...</span>
              ) : (
                <>Conferma Prenotazione <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Facilities = () => {
  return (
    <section id="strutture" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
              LE NOSTRE <span className="text-lime-400">STRUTTURE</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              Campi realizzati con i migliori materiali per garantirti un'esperienza di gioco sicura, performante e indimenticabile.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Padel Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1622227432807-91eb590c3736?auto=format&fit=crop&q=80&w=1000"
                alt="Campi da Padel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-lime-400 text-zinc-950 font-black px-4 py-1 rounded-full text-sm">
                2 CAMPI
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-3xl font-bold text-white mb-3">Padel Arena</h3>
              <p className="text-zinc-400 mb-6 flex-grow">
                Due campi panoramici di ultima generazione con erba sintetica testurizzata e vetri temperati ad alta visibilità. Illuminazione LED perfetta per le partite serali.
              </p>
              <ul className="space-y-3 mb-8">
                {['Erba sintetica premium', 'Vetri panoramici 12mm', 'Illuminazione LED 200W', 'Copertura invernale (in arrivo)'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl border border-zinc-700 text-white font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 mt-auto">
                Vedi Dettagli <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Calcio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1518605368461-1e1e108175f9?auto=format&fit=crop&q=80&w=1000"
                alt="Campo da Calcio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-lime-400 text-zinc-950 font-black px-4 py-1 rounded-full text-sm">
                1 CAMPO
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-3xl font-bold text-white mb-3">Football Pitch</h3>
              <p className="text-zinc-400 mb-6 flex-grow">
                Campo da calcio in erba sintetica di altissima qualità, ideale per partite 5vs5 o 7vs7. Sistema di drenaggio avanzato e illuminazione professionale.
              </p>
              <ul className="space-y-3 mb-8">
                {['Erba sintetica 50mm', 'Intaso prestazionale', 'Tabellone segnapunti', 'Palloni e casacche inclusi'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl border border-zinc-700 text-white font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 mt-auto">
                Vedi Dettagli <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Highlights = () => {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
            AZIONI IN <span className="text-lime-400">CAMPO</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Guarda i momenti salienti e l'energia che si respira nei nostri campi.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Video 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-zinc-800 aspect-video relative group bg-zinc-900 cursor-pointer"
            onClick={() => alert('Qui verrà riprodotto il video reale del cliente')}
          >
            <img 
              src="https://images.unsplash.com/photo-1622227432807-91eb590c3736?auto=format&fit=crop&q=80&w=1000" 
              alt="Padel Rally" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-lime-400/20">
                <svg className="w-8 h-8 text-zinc-950" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6">
              <div className="bg-zinc-950/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-zinc-800">
                <p className="text-white font-bold">Migliori Scambi 2023</p>
                <p className="text-lime-400 text-sm">Padel Arena</p>
              </div>
            </div>
          </motion.div>

          {/* Video 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden border border-zinc-800 aspect-video relative group bg-zinc-900 cursor-pointer"
            onClick={() => alert('Qui verrà riprodotto il video reale del cliente')}
          >
            <img 
              src="https://images.unsplash.com/photo-1554068865-24cecd4e34d8?auto=format&fit=crop&q=80&w=1000" 
              alt="Padel Match" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-lime-400/20">
                <svg className="w-8 h-8 text-zinc-950" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6">
              <div className="bg-zinc-950/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-zinc-800">
                <p className="text-white font-bold">Torneo Estivo Finale</p>
                <p className="text-lime-400 text-sm">Padel Arena</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: Shield, title: "Spogliatoi Moderni", desc: "Ampi, puliti e dotati di docce calde gratuite e armadietti di sicurezza." },
    { icon: Coffee, title: "Area Relax & Bar", desc: "Il posto perfetto per il terzo tempo. Snack, bevande energetiche e birra alla spina." },
    { icon: Car, title: "Ampio Parcheggio", desc: "Parcheggio gratuito riservato ai clienti direttamente all'ingresso della struttura." },
    { icon: Trophy, title: "Noleggio Attrezzatura", desc: "Racchette da padel top di gamma e palloni sempre a disposizione per il noleggio." }
  ];

  return (
    <section id="servizi" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
            OLTRE IL <span className="text-lime-400">CAMPO</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Abbiamo pensato a tutto per rendere la tua esperienza sportiva confortevole e senza pensieri.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-lime-400/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lime-400 transition-colors">
                <service.icon className="w-7 h-7 text-lime-400 group-hover:text-zinc-950 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-lime-400" />
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-950 mb-6">
        SCENDI IN CAMPO.
      </h2>
      <p className="text-xl text-zinc-800 mb-10 font-medium">
        Unisciti alla community di Altino Sport Village. Prenota ora il tuo campo e preparati alla sfida.
      </p>
      <button className="bg-zinc-950 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-zinc-800 transition-colors shadow-2xl shadow-zinc-950/20">
        PRENOTA SUBITO
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contatti" className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
              <Activity className="text-zinc-950 w-5 h-5" />
            </div>
            <div className="font-black text-xl tracking-tighter text-white">
              ALTINO<span className="text-lime-400">SPORT</span>
            </div>
          </div>
          <p className="text-zinc-400 mb-6 max-w-sm">
            Il centro sportivo di riferimento per il padel e il calcio ad Altino. Strutture all'avanguardia e servizi premium.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contatti</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-zinc-400">
              <MapPin className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <span>Via dello Sport, 1<br />66040 Altino (CH)</span>
            </li>
            <li className="flex items-center gap-3 text-zinc-400">
              <Phone className="w-5 h-5 text-lime-400 shrink-0" />
              <span>+39 0872 123456</span>
            </li>
            <li className="flex items-center gap-3 text-zinc-400">
              <Mail className="w-5 h-5 text-lime-400 shrink-0" />
              <span>info@altinosportvillage.it</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Orari di Apertura</h4>
          <ul className="space-y-4 text-zinc-400">
            <li className="flex justify-between">
              <span>Lunedì - Venerdì</span>
              <span className="text-white font-medium">09:00 - 23:30</span>
            </li>
            <li className="flex justify-between">
              <span>Sabato - Domenica</span>
              <span className="text-white font-medium">08:00 - 20:00</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-zinc-900 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} Altino Sport Village. Tutti i diritti riservati.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-lime-400 selection:text-zinc-950 font-sans">
      <Navbar />
      <Hero />
      <Facilities />
      <Highlights />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
