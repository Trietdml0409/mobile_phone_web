import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Flex, Grid } from "antd";
import { useRouter } from "next/navigation";

const items = [
  {
    key: "0",
    label: "LDMT0406",
  },
  {
    key: "2",
    label: "Tim2225",
  },
  {
    key: "3",
    label: "Arg219",
  },
];

export default function Account() {
  const router = useRouter();
  const screens = Grid.useBreakpoint();
  const isSmallScreen = screens.xs || (screens.sm && !screens.md);
  return (
    <Flex
      justify={"center"}
      align="center"
      style={{ width: "100%", height: "100%" }}
    >
      <UserOutlined
        onClick={() => router.push("/auth")}
        style={{ fontSize: "40px", marginRight: "10px", color: "#151515", cursor: "pointer" }}
      />
      {!isSmallScreen && <div>
        <p
          className="cursor-pointer"
          style={{ color: "#707584", fontSize: "12px", margin: 0 }}
          onClick={() => router.push("/auth")}
        >
          Log In/Sign up
        </p>
        <Dropdown menu={{ items }}>
          <p className="cursor-pointer" style={{ fontSize: "14px", fontWeight: "bold", margin: "3px 0 0" }}>
            Account
          </p>
        </Dropdown>
      </div>}
    </Flex>
  );
}
