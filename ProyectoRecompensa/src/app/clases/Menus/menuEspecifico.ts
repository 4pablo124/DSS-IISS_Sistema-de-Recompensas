import { iMenu } from "./iMenu";
import { iCommand } from "../Command/iCommand";
import { iBD } from "src/app/services/BD/iBD";

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

    action(data?: any, db?: iBD): any{ 
        return this._command.execute(data, db); }
}