import { Flex } from "antd";

export default function ProductImage({ image }: { image: string }) {
  return (
    <Flex
      justify="start"
      align="center"
      vertical
      style={{ height:"100%",backgroundColor: "white", padding: "10px" }}
    >

      <div
        style={{
        width: "100%",        // size khung
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}>
        <img src={image}
            style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain"}}/>
      </div>
    </Flex>
  );
}
