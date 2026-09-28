import { ImageResponse } from "next/og";

export const alt = "Franze & Co. - Furniture Miami";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#fbf3e6", color: "#17231f", padding: "72px 80px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div style={{ width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #17231f", fontFamily: "serif", fontSize: 30 }}>F</div>
        <div style={{ display: "flex", fontSize: 23, letterSpacing: "6px" }}>FRANZE & CO.</div>
      </div>
      <div style={{ display: "flex", fontFamily: "serif", fontSize: 88, lineHeight: 0.92, maxWidth: 800 }}>Collected furniture for layered coastal living.</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18 }}><span>MIAMI, FLORIDA</span><span>INDOOR / OUTDOOR / DINING</span></div>
    </div>,
    size,
  );
}
