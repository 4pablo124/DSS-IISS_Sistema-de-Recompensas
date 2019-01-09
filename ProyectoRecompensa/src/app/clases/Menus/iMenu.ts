export interface iMenu {
    getRoute() :string;
    getName() :string;
    getOptions(): iMenu[];
    action(): void;
}