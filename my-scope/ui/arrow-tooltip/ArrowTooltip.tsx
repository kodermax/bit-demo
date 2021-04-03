import * as React from "react";
import Tooltip, { TooltipProps } from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles({
  tooltip: {
    background: "rgba(35, 37, 46, 0.94)",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "20px",
    padding: "8px 15px",
    position: "relative",
    "& a": {
      color: "#FEC762",
    },
  },
});

const CustomChild = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactElement }
>((props, ref) => {
  return <div {...props} ref={ref} />;
});

const ArrowTooltip = (props: TooltipProps) => {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <Tooltip
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      classes={classes}
      disableFocusListener
      arrow
      enterTouchDelay={100}
      {...other}
    >
      <CustomChild>{children}</CustomChild>
    </Tooltip>
  );
};

export default ArrowTooltip;
