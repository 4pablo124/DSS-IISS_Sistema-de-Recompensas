import { iMenu } from "./iMenu";
import { iCommand } from "../Command/iCommand";

export class MenuEspecifico implements iMenu{
    protected options: iMenu[];

    constructor(
        protected name: string,
        protected route: string,
        protected command: iCommand
    ){}
    
    getRoute(): string {
        return this.route;
    }
    
    getName(): string {
    return this.name;
    }

    getOptions(): iMenu[] {
    return this.options;
    }

    action(){
        this.command.execute();
        console.log('holi sheet');
    }
}