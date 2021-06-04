import { Category } from "./Category";

export interface Skill {
    skillId: number;
    skillName: string;
    category: Category;
    isActive: boolean;
    color: String;
}

export interface SkillDTO {
    name: string;
    category: Category;
}
