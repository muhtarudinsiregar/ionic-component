export class MenuConstant {
  public static getMenus() {
    const menus = [
      {
        id: 0,
        title: "Menu Square",
        icon: "home",
        component: "menu-square",
        color: "primary"
      },
      {
        id: 1,
        title: "Menu Rectangular",
        icon: "home",
        component: "home-rectangular",
        color: "danger"
      },
      {
        id: 2,
        title: "Menu Rectangular",
        icon: "home",
        component: "home-rectangular",
        color: "secondary"
      }
    ];

    return menus;
  }

  public static getMenuHome() {
    const menu = [
      {
        id: 0,
        title: "Menu Square",
        icon: "home"
      },
      { id: 1, title: "Menu Rectangular", icon: "home" }
    ];
    return menu;
  }
}
