export const Colors = {
  white: {
    default: '#F7F7F7',
    absolute: '#FFFFFF',
    tabIconSelected: '#fafaf9',
  },
  black: {
    default: '#000000',
    withOpacity: 'rgba(0, 0, 0, 0.4)',
  },
  green: {
    light: '#27869a',
    dark: '#1b6270',
    success: '#4BB543',
  },
  grey: {
    light: '#4A556D',
    dark: '#272C42',
    tabIconUnselected: '#737373',
  },
  yellow: {
    default: '#FFFDDE',
  },
  red: {
    default: '#d63031',
  },
};

export const Gradients = {
  grey: {
    default: [Colors.grey.light, Colors.grey.dark],
  },
  green: {
    default: [Colors.green.light, Colors.green.dark],
  },
};
