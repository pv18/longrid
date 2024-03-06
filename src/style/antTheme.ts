const colorPrimary = '#688ac5';
const colorOragen = '#E9CBA0';
const colorWhite = '#fff';

export const antTheme = {
  components: {
    Button: {
      colorPrimary: colorPrimary,
      fontFamily: 'Montserrat',
    },
    Carousel: {
      colorBgContainer: colorPrimary,
      dotHeight: 10,
      dotWidth: 10,
      dotActiveWidth: 10,
      fontFamily: 'Montserrat',
    },
    Collapse: {
      contentBg: colorOragen,
      headerBg: colorOragen,
      lineHeight: 1.3,
      headerPadding: '15px 10px 15px 0px',
      fontFamily: 'Montserrat',
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
      fontFamily: 'Montserrat',
    },
    Drawer: {
      paddingLG: 0,
      padding: 0,
      fontFamily: 'Montserrat',
    },
    Modal: {
      paddingContentHorizontalLG: 0,
      fontFamily: 'Montserrat',
    },
  },
};
