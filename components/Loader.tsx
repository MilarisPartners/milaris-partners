"use client";
import { useEffect, useState } from "react";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(hide);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 bg-[#0001ff] ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      style={{ minHeight: '100vh', minWidth: '100vw' }}
    >
      <img
        src="/logo-white.png"
        alt="Milaris Partners Logo"
        className="object-contain w-40 h-40 sm:w-60 sm:h-60"
        draggable={false}
      />
    </div>
  );
};

export default Loader; 