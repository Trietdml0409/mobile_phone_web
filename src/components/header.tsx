import { Grid } from "antd";
import SmallScreenHeader from "./header/smallScreenHeader";
import LargeScreenHeader from "./header/largeScreenHeader";

const { useBreakpoint } = Grid;

export default function Header() {
  const screens = useBreakpoint();

  const isSmallScreen = screens.xs || (screens.sm && !screens.md);
  if (isSmallScreen) {
    return (
      <>
        <SmallScreenHeader />
      </>
    );
  } else {
    return (
      <>
        <LargeScreenHeader />
      </>
    );
  }
}
