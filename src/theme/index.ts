export interface CustomTheme {
  colors: {
    primaryDark: string;
    primary: string;
    primaryLight: string;
    primaryLight2: string;
    success: string;
    successLight2: string;
    error: string;
    errorLight2: string;
    secondary: string;
    secondaryDark: string;
    secondaryLight2: string;
    secondaryLight3: string;
  };
  fontFamilies: {
    primaryRegular: string;
    primaryMedium: string;
    primaryBold: string;
    primarySemiBold: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    laptop: string;
    desktop: string;
  };
}

const breakpointsSizes = {
  mobile: "767px",
  tablet: "991px",
  laptop: "1199px",
  desktop: "2559px",
};

export const breakpoints = {
  mobile: `(max-width: ${breakpointsSizes.mobile})`,
  tablet: `(max-width: ${breakpointsSizes.tablet})`,
  laptop: `(max-width: ${breakpointsSizes.laptop})`,
  desktop: `(max-width: ${breakpointsSizes.desktop})`,
};

const colors = {
  primaryDark: "#E87928",
  primary: "#FF8B37",
  primaryLight: "#FFAC70",
  primaryLight2: "#FFF3EB",
  success: "#47D867",
  successLight2: "#E6FAEA",
  error: "#EC6259",
  errorLight2: "#FDEEED",
  secondary: "#D0D0D8",
  secondaryDark: "#1C1C21",
  secondaryLight2: "#F5F5F7",
  secondaryLight3: "#FFFFFF",
};

const fontFamilies = {
  primaryRegular: "Inter-Regular",
  primaryMedium: "Inter-Medium",
  primaryBold: "Inter-Bold",
  primarySemiBold: "Inter-SemiBold",
};

export const defaultTheme: CustomTheme = {
  colors,
  fontFamilies,
  breakpoints,
};
