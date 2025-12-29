import React from "react";
import { Flex, Radio } from "antd";
import { Card } from "antd";

export default function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundColor: "blue",
        height: "400px",
        width: "100%",
      }}
    >
      <div
        className="picture"
        style={{
          backgroundColor: "pink",
          height: "75%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="https://techtoro.io/image/cache/catalog/Blogs/MacBookAir15-Review/MacBookAir15-1920x1080.jpg"
        />
      </div>
      <Flex
        justify="start"
        style={{
          backgroundColor: "red",
          height: "25%",
        }}
      >
        <Card
          style={{
            flex: 1,
            width: "auto",
            height: "auto",
            borderRadius: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          styles={{ header: { padding: 0 } }}
        >
          <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>
            RAM GIAM GAP BOI
          </h1>
          <p style={{ fontSize: "10px" }}>Giam den hon 80%</p>
        </Card>
        <Card
          style={{
            flex: 1,
            width: "auto",
            borderRadius: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>
            RAM GIAM GAP BOI
          </h1>
          <p style={{ fontSize: "10px" }}>Giam den hon 80%</p>
        </Card>
        <Card
          style={{
            flex: 1,
            width: "auto",
            borderRadius: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>
            RAM GIAM GAP BOI
          </h1>
          <p style={{ fontSize: "10px" }}>Giam den hon 80%</p>
        </Card>
        <Card
          style={{
            flex: 1,
            width: "auto",
            borderRadius: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>
            RAM GIAM GAP BOI
          </h1>
          <p style={{ fontSize: "10px" }}>Giam den hon 80%</p>
        </Card>
        <Card
          style={{
            flex: 1,
            width: "auto",
            borderRadius: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>
            RAM GIAM GAP BOI
          </h1>
          <p style={{ fontSize: "10px" }}>Giam den hon 80%</p>
        </Card>
      </Flex>
    </div>
  );
}
