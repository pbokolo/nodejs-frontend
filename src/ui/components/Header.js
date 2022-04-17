import React from "react";

import { AppBar, Toolbar, Typography, useScrollTrigger } from "@mui/material";

import { useTheme } from "@mui/material/styles";

// Ajuste l'elevation a 4 aussitot que l'utilisateur commence a scroller
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header() {
  const theme = useTheme();
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Typography variant="h3">VendreMesObjets</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div style={{ ...theme.mixins.toolbar }} />
    </>
  );
}
