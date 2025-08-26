/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";

interface MagicScrollWrapperProps {
  window?: () => Window;
  children: React.ReactNode;
}

function HideOnScroll(props: {
  window?: () => Window;
  children: React.ReactElement<unknown, any>;
}) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const MagicScrollWrapper = (props: MagicScrollWrapperProps) => {
  const { children, window } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll window={window}>
        <Box sx={{ width: "100%", height: "100%", p: 0, m: 0, px: 0 }}>
          {children}
        </Box>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default MagicScrollWrapper;
export { HideOnScroll };
