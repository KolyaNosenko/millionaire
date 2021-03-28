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
}

export const defaultTheme: CustomTheme = {
  colors: {
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
  },
  fontFamilies: {
    primaryRegular: "Inter-Regular",
    primaryMedium: "Inter-Medium",
    primaryBold: "Inter-Bold",
    primarySemiBold: "Inter-SemiBold",
  },
};
