import { Category } from "./Category";

export interface Skill {
    skillId: number;
    skillName: string;
    category: Category;
    isActive: boolean;
}