import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forestGreen text-softCream py-12">
      <div className="container mx-auto px-4 md:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image src="/logo_baksoTelkom_ft.webp" alt="Logo Bakso Telkom" width={120} height={57} className="w-[100px] h-auto md:w-[120px] object-contain" />
          <p className="text-softCream/70">Sajian Autentik, Cita Rasa Klasik</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="font-medium mb-2">Pemesanan & Kontak:</p>
          <a href="https://wa.me/6282137571407" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-warmOrange hover:bg-orange-500 text-white px-6 py-2 rounded-full transition-colors font-bold">
            WhatsApp (0821-3757-1407)
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-softCream/20 text-center text-sm text-softCream/50">
        <p>&copy; {currentYear} Bakso Telkom Klaten. Seluruh hak cipta dilindungi.</p>
      </div>
    </footer>
  );
}
