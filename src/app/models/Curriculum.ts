import { Skill } from "./Skill";

export interface Curriculum {
    curriculumId: number;
    curriculumName: string;
    skillList: Skill[];
}