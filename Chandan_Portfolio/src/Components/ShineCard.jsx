const ShineCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl cursor-pointer bg-black/45 backdrop-blur-xl border border-white/8 hover:border-white/25 hover:-translate-y-1 hover:shadow-2xl transition-all duration-400 group">
      
      {/* Shine sweep effect */}
      <div className="absolute top-0 -left-full w-[60%] h-full bg-linear-to-r from-transparent via-white/8 to-transparent skew-x-[-20deg] group-hover:left-[150%] transition-all duration-600 z-10" />

      {/* Card content */}
      <div className="p-5 relative z-20">
        <div className="text-4xl mb-3"></div>
        <div className="text-white font-bold text-lg mb-1"></div>
        <div className="text-white/50 text-sm"></div>
      </div>

    </div>
  )
}


export default ShineCard