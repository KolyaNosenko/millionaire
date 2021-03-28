export interface CustomTheme {
  colors: {
    primary: string;
  };
  fontFamilies: {
    primaryRegular: string;
    primaryMedium: string;
    primaryBold: string;
  };
}

export const defaultTheme: CustomTheme = {
  colors: {
    primary: "#222",
  },
  fontFamilies: {
    primaryRegular: "Inter-Regular",
    primaryMedium: "Inter-Medium",
    primaryBold: "Inter-Bold",
  },
};
