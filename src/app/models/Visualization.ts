import { Curriculum } from "./Curriculum";

export interface Visualization {
    visualizationId: number;
    visualizationName: string;
    curriculumList: Curriculum[];
}