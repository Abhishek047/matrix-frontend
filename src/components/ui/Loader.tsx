import { Box, Spinner } from "@chakra-ui/react";
import { LARGEST_Z_INDEX } from "../../utils/constants";
import React from "react";

interface Props {
  loaderWidth?: string;
  loaderHeight?: string;
  width?: string;
  height?: string;
  fill: "full" | "fit";
  showBackdrop?: boolean;
  color?: string;
}

const fillStyles: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
};
const fitStyles: React.CSSProperties = {
  position: "relative",
  top: 0,
  left: 0,
};

const backdropStyles: React.CSSProperties = {
  position: "absolute",
  zIndex: -1,
  width: "100%",
  height: "100%",
  background: "rgba(10, 10, 10, 0.2)",
};

export const Loader = ({
  loaderHeight = "50px",
  loaderWidth = "50px",
  width,
  height,
  fill = "full",
  showBackdrop = true,
  color = "blue.500",
}: Props) => {
  const isFull = fill === "full";
  const componentWidth = isFull ? "100vw" : width || "100%";
  const componentHeight = isFull ? "100vh" : height || "100%";
  const componentStyles: React.CSSProperties = {
    ...(isFull ? fillStyles : fitStyles),
    width: componentWidth,
    height: componentHeight,
    pointerEvents: "none",
  };
  return (
    <Box zIndex={LARGEST_Z_INDEX} style={componentStyles}>
      <Box
        position="relative"
        display="grid"
        placeItems="center"
        width="100%"
        height="100%"
      >
        {showBackdrop && <Box sx={backdropStyles} />}
        <Spinner
          color={color}
          width={loaderWidth}
          height={loaderHeight}
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          size="xl"
        />
      </Box>
    </Box>
  );
};
