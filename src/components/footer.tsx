import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "lightblue",
        paddingTop: 48,
        paddingBottom: 48,
        marginTop: 64,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
            marginBottom: 32,
          }}
        >
          {/* Company Info */}
          <div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 16,
                color: "#fff",
              }}
            >
              TechGear Pro
            </h3>
            <p style={{ color: "#fff", fontSize: 14 }}>
              Your trusted destination for premium mobile phones and
              accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 16,
                color: "#fff",
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                color: "#fff",
                fontSize: 14,
                listStyleType: "none",
                padding: 0,
                margin: 0,
                rowGap: 8,
              }}
            >
              <li style={{ marginBottom: 8 }}>
                <Link
                  href="/about-us"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: 8 }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Contact
                </a>
              </li>
              <li style={{ marginBottom: 8 }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Blog
                </a>
              </li>
              <li style={{ marginBottom: 8 }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 16,
                color: "#fff",
              }}
            >
              Support
            </h4>
            <ul
              style={{
                color: "#fff",
                fontSize: 14,
                listStyleType: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <li style={{ marginBottom: 8 }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  FAQs
                </a>
              </li>
              <li style={{ marginBottom: 8 }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Returns
                </a>
              </li>
              <li style={{ marginBottom: 8 }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Shipping Info
                </a>
              </li>
              <li style={{ marginBottom: 8 }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 16,
                color: "#fff",
              }}
            >
              Contact Us
            </h4>
            <div style={{ color: "#fff", fontSize: 14, lineHeight: 1.6 }}>
              <p>📧 support@techgearpro.com</p>
              <p>📞 1-800-TECHGEAR</p>
              <p>📍 123 Tech Street, Silicon Valley, CA 94025</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{ borderTop: "1px solid rgba(0, 0, 0, 0.2)", paddingTop: 32 }}
        >
          {/* Bottom Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#fff", fontSize: 14, margin: 0 }}>
              © 2026 TechGear Pro. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 24, marginTop: 16 }}>
              <a
                href="#"
                style={{ color: "#fff", textDecoration: "none", fontSize: 14 }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{ color: "#fff", textDecoration: "none", fontSize: 14 }}
              >
                Terms of Service
              </a>
              <a
                href="#"
                style={{ color: "#fff", textDecoration: "none", fontSize: 14 }}
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
