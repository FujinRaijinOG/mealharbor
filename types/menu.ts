// filepath: c:\Users\Lenovo\mealharbor\types\menu.ts
export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
