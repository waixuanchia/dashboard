export interface IMinistry {
    id:number;
    office:string;
    address:string;
    faks:string;
    emel:string;
    latitude:string;
    longitude:string;
    tels:string;
    region:{
        id:number;
        types:string;
    },
    region_type?:string;
}
