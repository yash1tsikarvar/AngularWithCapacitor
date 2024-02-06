interface ThemeVariableValue {
  themeVar: string;
  defaultValue: string;
}

interface ThemeVariables {
  SMALL_LOGO: ThemeVariableValue;
  BIG_LOGO: ThemeVariableValue;
  FOOTER: ThemeVariableValue;
}

export const THEME_VARIABLES: ThemeVariables = {
  SMALL_LOGO: {
    themeVar: 'small_logo',
    defaultValue: '/assets/icon-te.svg',
  },
  BIG_LOGO: {
    themeVar: 'big_logo',
    defaultValue: '/assets/logo-lets-begin.svg',
  },
  FOOTER: {
    themeVar: 'footer',
    defaultValue: '/assets/tenant-ev-footer.jpg',
  }
};
