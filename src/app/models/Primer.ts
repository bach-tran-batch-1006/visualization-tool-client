import { Skill } from './Skill';


export interface Primer {
    primerId: number;
    primerName: string;
    skillList: Skill[];
    isActive: boolean;
}

export interface PrimerDTO {
    name: string;
    skillList: Skill[];
}