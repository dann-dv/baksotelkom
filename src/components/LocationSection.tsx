"use client";

import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

export default function LocationSection() {
  const schedule = [
    { day: "Senin", hours: "10.00 – 20.00 WIB" },
    { day: "Selasa", hours: "10.00 – 20.00 WIB" },
    { day: "Rabu", hours: "10.00 – 20.00 WIB" },
    { day: "Kamis", hours: "10.00 – 20.00 WIB" },
    { day: "Jumat", hours: "10.00 – 20.00 WIB" },
    { day: "Sabtu", hours: "10.00 – 20.00 WIB" },
    { day: "Minggu", hours: "TUTUP", isClosed: true },
  ];

  return (
    <section id="location" className="py-24 bg-softLightGreen/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info & Schedule */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-forestGreen mb-6">
                Info & <span className="text-warmOrange">Lokasi</span>
              </h2>
              <p className="text-lg text-forestGreen/80">Kunjungi warung kami dan nikmati sensasi makan bakso langsung dari mangkuk panasnya.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-softLightGreen/30 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-softLightGreen/20">
                <Clock size={150} />
              </div>

              <h3 className="text-2xl font-heading font-bold text-forestGreen mb-6 flex items-center relative z-10">
                <Clock className="mr-3 text-warmOrange" /> Jam Operasional
              </h3>

              <ul className="space-y-3 relative z-10">
                {schedule.map((item, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-softCream pb-2">
                    <span className={`font-medium ${item.isClosed ? "text-red-500" : "text-forestGreen"}`}>{item.day}</span>
                    <span className={`${item.isClosed ? "text-red-500 font-bold" : "text-forestGreen/80"}`}>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-softLightGreen/30 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-softLightGreen/20">
                <MapPin size={150} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-forestGreen mb-4 flex items-center relative z-10">
                <MapPin className="mr-3 text-warmOrange" /> Alamat Kami
              </h3>
              <p className="text-forestGreen/80 leading-relaxed relative z-10">
                Jl. Solo-Jogja No.KM. 9, Dusun 2, Tegalyoso, Kec. Klaten Sel., <br />
                Kabupaten Klaten, Jawa Tengah 57424.
              </p>
            </div>
          </motion.div>

          {/* Maps iframe */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full h-full min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3953.7044196652173!2d110.5893614!3d-7.7148307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a446dafc8a645%3A0x9c97e814fa924388!2sBakso%20Telkom!5e0!3m2!1sid!2sid!4v1791254809701!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Bakso Telkom"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
