import { iMenu } from "./iMenu";
import { iCommand } from "../Command/iCommand";

export class MenuEspecifico implements iMenu{
    protected _options: iMenu[];

    constructor(
        protected _name: string,
        protected _route: string,
        protected _command: iCommand
    ){}
    
    get route(): string { return this._route; }
    get name(): string { return this._name; }
    get options(): iMenu[] { return this._options; }

    action(data?: any): any{ this._command.execute(data); }
}