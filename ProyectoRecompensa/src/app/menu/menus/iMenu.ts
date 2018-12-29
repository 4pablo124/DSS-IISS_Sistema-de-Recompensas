
// Interfaz con la que trabaja el cliente (menu.component.html)
export interface iMenu {
    getRoute() :string;  // Especifico para angular
    setRoute(route: string): void;

    getName() :string;
    setName(name: string): void;

    getOptions(): iMenu[];
    setOptions(options: iMenu[]): void;

    action(): void;
}