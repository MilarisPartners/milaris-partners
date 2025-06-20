"use client";

const Globe3D = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Globe énorme coupé à mi-hauteur */}
      <div className="absolute -bottom-1/2 w-[1400px] h-[1400px] left-1/2 transform -translate-x-1/2">
        {/* Cercle principal très subtil */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-50/[0.02] to-gray-100/[0.05] animate-spin-slow">
          {/* Grille sphérique minimaliste */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <defs>
              <mask id="sphereMask">
                <circle cx="200" cy="200" r="198" fill="white" />
              </mask>
              <linearGradient id="subtleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F3F4F6" stopOpacity="0.03"/>
                <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0.06"/>
              </linearGradient>
            </defs>
            
            {/* Base très légère */}
            <circle cx="200" cy="200" r="198" fill="url(#subtleGradient)" mask="url(#sphereMask)" />
            
            {/* Lignes de longitude très fines */}
            <g mask="url(#sphereMask)">
              {[...Array(8)].map((_, i) => (
                <ellipse
                  key={`meridian-${i}`}
                  cx="200"
                  cy="200"
                  rx={Math.abs(198 * Math.cos((i * Math.PI) / 8))}
                  ry="198"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="0.3"
                  opacity={0.15}
                  transform={`rotate(${i * 22.5} 200 200)`}
                />
              ))}
            </g>
            
            {/* Lignes de latitude sélectives */}
            <g mask="url(#sphereMask)">
              {[0, 3, 6, 9].map((i) => {
                const y = 50 + i * 33;
                const radius = Math.sqrt(Math.max(0, 198 * 198 - (y - 200) * (y - 200)));
                return (
                  <line
                    key={`parallel-${i}`}
                    x1={200 - radius}
                    y1={y}
                    x2={200 + radius}
                    y2={y}
                    stroke="#E5E7EB"
                    strokeWidth="0.3"
                    opacity={0.12}
                  />
                );
              })}
            </g>
            
            {/* Quelques points très discrets */}
            <g mask="url(#sphereMask)">
              <circle cx="200" cy="120" r="0.8" fill="#D1D5DB" opacity="0.3" />
              <circle cx="160" cy="180" r="0.6" fill="#D1D5DB" opacity="0.25" />
              <circle cx="240" cy="170" r="0.6" fill="#D1D5DB" opacity="0.25" />
            </g>
          </svg>
          
          {/* Reflet très léger */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.02] via-transparent to-transparent" />
        </div>
        
        {/* Une seule particule orbitale */}
        <div className="absolute inset-0 animate-spin-reverse-slow" style={{ animationDuration: '90s' }}>
          <div className="absolute top-[30%] left-[25%] w-0.5 h-0.5 bg-gray-300/20 rounded-full" />
        </div>
      </div>
      
      {/* Fondu doux vers le bas */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-offwhite to-transparent" />
    </div>
  );
};

export default Globe3D; 