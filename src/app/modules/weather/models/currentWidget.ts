import { Current } from "./current";
import { Location } from "./locations";

export class CurrentWidget{
    constructor(public l:Location, public cv:Current){}
}