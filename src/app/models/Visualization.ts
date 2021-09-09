import { Curriculum } from './Curriculum';
import { Primer } from './Primer';
import { Skill } from './Skill';

export interface Visualization {
    visualizationId: number;
    visualizationName: string;
    curriculumList: Curriculum[];
    skillList: Skill[];
    primerList: Primer[];
}

export interface VisualizationDTO {
    title: string;
    curricula: Curriculum[];
    skill: Skill[];
    primer: Primer[];
}
