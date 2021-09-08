import { Curriculum } from './Curriculum';
import { Primer } from './Primer';

export interface Visualization {
    visualizationId: number;
    visualizationName: string;
    curriculumList: Curriculum[];
    primerList: Primer[];
}

export interface VisualizationDTO {
    title: string;
    curricula: Curriculum[];
    primer: Primer[];
}
