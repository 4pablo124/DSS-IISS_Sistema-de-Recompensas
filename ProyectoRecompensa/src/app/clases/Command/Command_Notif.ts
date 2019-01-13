import { iCommand } from './iCommand';
import { iBD } from 'src/app/services/BD/iBD';

export class Command_Notif implements iCommand{
    execute(datos: any, bd: iBD): any {
        bd.add(datos);
    }
}