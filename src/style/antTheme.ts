const colorPrimary = '#688ac5';
const colorOragen = '#E9CBA0';
const colorWhite = '#fff';

export const antTheme = {
  components: {
    Button: {
      colorPrimary: colorPrimary,
    },
    Carousel: {
      colorBgContainer: colorPrimary,
      dotHeight: 10,
      dotWidth: 10,
      dotActiveWidth: 10,
    },
    Collapse: {
      contentBg: colorOragen,
      headerBg: colorOragen,
      lineHeight: 1.3,
      headerPadding: '15px 10px 15px 0px',
    },
    Menu: {
      itemColor: colorPrimary,
      itemHoverColor: colorPrimary,
      itemSelectedColor: colorPrimary,
      itemSelectedBg: 'inherit',
      horizontalItemSelectedColor: colorPrimary,
      itemBg: 'inherit',
      darkItemBg: 'inherit',
      darkItemColor: colorWhite,
      darkItemSelectedColor: colorWhite,
      darkItemSelectedBg: 'inherit',
    },
    Drawer: {
      paddingLG: 0,
      padding: 0,
    },
  },
};
