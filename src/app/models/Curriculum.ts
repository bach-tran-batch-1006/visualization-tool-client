import { Skill } from "./Skill";

export interface Curriculum {
    curriculumId: number;
    curriculumName: string;
    skillList: Skill[];
}

export interface CurriculumDTO {
    name: string;
    skillList: Skill[];
}