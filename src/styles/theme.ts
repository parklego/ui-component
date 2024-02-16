type ThemeType = {
  dark: {
    backgroundColor: string;
    color: string;
  };
  light: {
    backgroundColor: string;
    color: string;
  };
  [key: string]: {
    backgroundColor: string;
    color: string;
  };
};

export const themeStyle: ThemeType = {
  dark: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  light: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
};
