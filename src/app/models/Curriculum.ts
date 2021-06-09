import { Skill } from './Skill';

export interface Curriculum {
    curriculumId: number;
    curriculumName: string;
    skillList: Skill[];
    isActive: boolean;
}

export interface CurriculumDTO {
    name: string;
    skillList: Skill[];
}
