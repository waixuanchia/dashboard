import { IMinistry } from "./iministry.Ministry";
import {Iuser} from './iuser.user';
export interface Ireport {
    id:string
    user:Iuser;
    ministry:IMinistry;
    image_url:string;
    description:string;
    status:{
        id:string;
        status:string;
    }

}
