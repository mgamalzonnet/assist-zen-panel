/* Simple SVG QR placeholder */
const QrPlaceholder = () => (
  <div className="w-40 h-40 border-2 border-border rounded-xl flex items-center justify-center bg-card mx-auto">
    <svg viewBox="0 0 100 100" width="130" height="130" xmlns="http://www.w3.org/2000/svg">
      {/* Top-left finder */}
      <rect x="5"  y="5"  width="30" height="30" rx="3" fill="none" stroke="#111" strokeWidth="4"/>
      <rect x="13" y="13" width="14" height="14" rx="1" fill="#111"/>
      {/* Top-right finder */}
      <rect x="65" y="5"  width="30" height="30" rx="3" fill="none" stroke="#111" strokeWidth="4"/>
      <rect x="73" y="13" width="14" height="14" rx="1" fill="#111"/>
      {/* Bottom-left finder */}
      <rect x="5"  y="65" width="30" height="30" rx="3" fill="none" stroke="#111" strokeWidth="4"/>
      <rect x="13" y="73" width="14" height="14" rx="1" fill="#111"/>
      {/* Data dots */}
      {[45, 52, 59, 66, 73, 80].map((x) =>
        [45, 52, 59, 66, 73, 80].map((y) =>
          (x + y) % 7 > 3 ? <rect key={`${x}-${y}`} x={x} y={y} width="5" height="5" fill="#111" /> : null
        )
      )}
      {[45, 52, 59].map((x) =>
        [5, 12, 19, 26].map((y) =>
          (x + y) % 5 > 2 ? <rect key={`d-${x}-${y}`} x={x} y={y} width="5" height="5" fill="#111" /> : null
        )
      )}
    </svg>
  </div>
);

export default QrPlaceholder;
