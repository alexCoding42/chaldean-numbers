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
  yellow: {
    light: '#f5f072',
    dark: '#fe9249',
    success: '#4BB543',
  },
  purple: {
    light: '#341848',
    dark: '#151146',
    tabIconUnselected: '#737373',
  },
  red: {
    default: '#d63031',
  },
};

export const Gradients = {
  purple: {
    default: [Colors.purple.dark, Colors.purple.light],
  },
  yellow: {
    default: [Colors.yellow.light, Colors.yellow.dark],
  },
};
