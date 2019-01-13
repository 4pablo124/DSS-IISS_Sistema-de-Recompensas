import { iCommand } from './iCommand';
import { iBD } from 'src/app/services/BD/iBD';

export class Command_R implements iCommand
{
    execute(bd: iBD): any[]{
        return bd.findAll();
    }
}