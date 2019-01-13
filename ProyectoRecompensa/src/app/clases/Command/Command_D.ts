import { iCommand } from './iCommand';
import { iBD } from 'src/app/services/BD/iBD';

export class Command_D implements iCommand
{
    execute(data: any, bd: iBD):void{
        bd.delete(data);
    }
}