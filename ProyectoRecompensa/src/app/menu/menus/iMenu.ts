// Interfaz con la que trabaja el cliente (menu.component.html)
export interface iMenu {
    getName() :string;
    getOptions(): iMenu[];
    action(): void;
}