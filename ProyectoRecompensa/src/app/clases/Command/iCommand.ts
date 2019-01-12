import { iBD } from "src/app/services/BD/iBD";

export interface iCommand
{
    execute(datos?: any, db?: iBD): any;
}