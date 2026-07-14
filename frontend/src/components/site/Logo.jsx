import React from "react";

/**
 * Mindful Prints Logo — CMYK registration-mark concept.
 * 4 overlapping circles (C/M/Y/K) with mix-blend-mode multiply
 * form an abstract dot cluster that reads like a misregistered print mark.
 */
export function LogoMark({ size = 32, className = "" }) {
  return (
    <svg
      viewBox="0 0 60 60"
      width={size}
      height={size}
      className={`mp-logo-blend ${className}`}
      aria-hidden="true"
    >
      <g style={{ mixBlendMode: "multiply" }}>
        <circle cx="22" cy="22" r="16" fill="#00AEEF" />
        <circle cx="38" cy="22" r="16" fill="#EC008C" />
        <circle cx="30" cy="38" r="16" fill="#FFF200" />
      </g>
      <circle
        cx="30"
        cy="30"
        r="4.5"
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="1.4"
      />
      <line
        x1="30"
        y1="20"
        x2="30"
        y2="40"
        stroke="#0A0A0A"
        strokeWidth="1.4"
      />
      <line
        x1="20"
        y1="30"
        x2="40"
        y2="30"
        stroke="#0A0A0A"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function LogoLockup({ mono = false, className = "" }) {
  return (
    <div
      className={`flex items-center gap-2.5 ${className}`}
      data-testid="logo-lockup"
    >
      <LogoMark size={30} />
      <span
        className={`font-display font-bold text-[1.05rem] leading-none tracking-tight ${
          mono ? "text-[#F7F6F2]" : "text-[#0A0A0A]"
        }`}
      >
        Mindful<span className="opacity-40">/</span>Prints
      </span>
    </div>
  );
}

export default LogoLockup;
