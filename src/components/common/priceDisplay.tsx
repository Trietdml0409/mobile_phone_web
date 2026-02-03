import { Flex } from "antd";

export const PriceDisplay = ({
  price,
  fontSize = "14px",
}: {
  price: number;
  fontSize?: string;
}) => {
  const formattedPrice = price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <Flex>
      <div style={{ fontSize: fontSize, fontWeight: "bold", color: "brown" }}>
        {formattedPrice}
      </div>
    </Flex>
  );
};
