import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#151515",
        color: "white",
        borderTop: "5px solid #e21d2b",
        padding: "52px 20px 24px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="footer-grid">
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: 900, margin: "0 0 14px" }}>
              TECH<span style={{ color: "#e21d2b" }}>GEAR</span>
            </h3>
            <p style={{ color: "#c8c8c8", lineHeight: 1.7, maxWidth: "280px" }}>
              Reliable computers, accessories and straightforward support for
              work, study and gaming.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "16px", margin: "0 0 16px" }}>
              INTRODUCTION
            </h4>
            <div className="footer-links">
              <Link href="/blogs?id=10">About us</Link>
              <a
                href="https://www.topcv.vn/cong-ty/chi-nhanh-cong-ty-tnhh-tin-hoc-ngoi-sao-lon/245774.html"
                target="_blank"
                rel="noreferrer"
              >
                Career
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "16px", margin: "0 0 16px" }}>POLICY</h4>
            <div className="footer-links">
              <Link href="/blogs?id=1">One-hour warranty policy</Link>
              <Link href="/blogs?id=2">PC warranty policy</Link>
              <Link href="/blogs?id=3">Free installation policy</Link>
              <Link href="/blogs?id=4">Free shipping policy</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "16px", margin: "0 0 16px" }}>CONTACT</h4>
            <div style={{ color: "#c8c8c8", lineHeight: 1.9 }}>
              <p style={{ margin: 0 }}>support@techgearpro.com</p>
              <p style={{ margin: 0 }}>1-800-TECHGEAR</p>
              <p style={{ margin: 0 }}>Monday–Saturday, 9:00–18:00</p>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #3b3b3b",
            marginTop: "36px",
            paddingTop: "22px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            color: "#9f9f9f",
            fontSize: "13px",
          }}
        >
          <span>© 2026 TechGear Pro. All rights reserved.</span>
          <span>Privacy · Terms · Support</span>
        </div>
      </div>
    </footer>
  );
}
