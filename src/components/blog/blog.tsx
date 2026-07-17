"use client";

import { Card, Col, Grid, Row } from "antd";
import { useRouter } from "next/navigation";

const { useBreakpoint } = Grid;

export default function Blog() {
  const router = useRouter();
  const screens = useBreakpoint();
  const isSmallScreen = screens.xs || (screens.sm && !screens.md);

  const blogImages = [
    "https://theme.hstatic.net/200000420363/1001333448/14/banner_home_1_master.jpg?v=6221",
    "https://theme.hstatic.net/200000420363/1001333448/14/banner_home_2_master.jpg?v=6221",
    "https://theme.hstatic.net/200000420363/1001333448/14/banner_home_3_master.jpg?v=6221",
    "https://theme.hstatic.net/200000420363/1001333448/14/banner_home_4_master.jpg?v=6221",
  ];

  return (
    <Col span={24}>
      <Row gutter={[16, 16]}>
        {blogImages.map((source, index) => (
          <Col span={isSmallScreen ? 12 : 6} key={index}>
            <button
              onClick={() => router.push(`/blogs?id=${index + 1}`)}
              style={{
                width: "100%",
                padding: 0,
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <Card
                styles={{ body: { padding: 0 } }}
                style={{ border: "none", overflow: "hidden" }}
                hoverable
              >
                <div>
                  <img
                    style={{
                      width: "100%",
                      display: "block",
                    }}
                    src={source}
                    alt={`Blog ${index + 1}`}
                  />
                </div>
              </Card>
            </button>
          </Col>
        ))}
      </Row>
    </Col>
  );
}
