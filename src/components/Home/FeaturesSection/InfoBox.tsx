function InfoBox() {
  return (
    <div className="flex-1 bg-[#452a1b] flex flex-col items-start gap-5 md:gap-8 p-15 md:py-20 md:px-24">
      <span
        style={{
          fontFamily: "'Manrope Variable', sans-serif",
          fontWeight: 800,
          letterSpacing: '0.02em'
        }}
        className="text-[#fffaf0] text-4xl md:text-5xl leading-12 md:leading-16"
      >
        Pensato per i tuoi momenti
      </span>
      <span
        style={{
          fontFamily: "'Nunito Sans Variable', sans-serif",
          fontWeight: 300,
          letterSpacing: '0.02em',
        }}
        className="text-[#fffaf0] text-base md:text-xl"
      >
        Un luogo semplice, accogliente e perfetto per chi vuole una pausa piacevole in città.
      </span>
      <button className="bg-[#f6f0e7] text-[#452a1b] px-6 py-3 font-semibold rounded-lg hover:bg-[#d4c0a8] transition">
        Scopri di più
      </button>
    </div>
  )
}

export default InfoBox