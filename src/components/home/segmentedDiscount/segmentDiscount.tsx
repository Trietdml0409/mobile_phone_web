"use client";

import { Col, Row, Segmented } from "antd";
import Buy1Get1 from "./buy1Get1";
import Decrease25Percent from "./decreased25Percent";
import Decrease51Percent from "./decreased51Percent";
import Decrease500k from "./decreased500k";
import { useState } from "react";

type DiscountsType = {
  id: number;
  name: string;
  component: React.ReactNode;
};

const discountTypes: DiscountsType[] = [
  {
    id: 1,
    name: "51% OFF",
    component: <Decrease51Percent />,
  },
  {
    id: 2,
    name: "BUY 1 GET 1",
    component: <Buy1Get1 />,
  },
  {
    id: 3,
    name: "25% OFF",
    component: <Decrease25Percent />,
  },
  {
    id: 4,
    name: "SAVE 500K+",
    component: <Decrease500k />,
  },
];

export default function SegmentDiscount() {
  const [value, setValue] = useState<number>(discountTypes[0].id);
  const selectedDiscount = discountTypes.find(
    (discount) => discount.id === value,
  );

  return (
    <Row gutter={[16, 20]}>
      <Col span={24}>
        <div style={{ width: "100%", overflowX: "auto" }}>
          <Segmented<number>
            value={value}
            onChange={setValue}
            options={discountTypes.map((discount) => ({
              value: discount.id,
              label: (
                <div
                  style={{
                    padding: "8px 16px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}
                >
                  {discount.name}
                </div>
              ),
            }))}
          />
        </div>
      </Col>

      <Col span={24}>{selectedDiscount?.component}</Col>
    </Row>
  );
}
