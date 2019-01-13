export interface iMenu {
    route :string;
    name :string;
    options: iMenu[];
    action(data?: any, db?: any): any;
}