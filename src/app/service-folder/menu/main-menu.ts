export interface MainMenu {
  action: string;
  class: string;
  hint: string;
  imageUrl: string;
  isEnabled: boolean;
  items: Array<MainMenu>;
  securityId: any;
  text: string;
}
