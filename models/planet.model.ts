import { Resource } from "./resources/resource.model";

export interface Planet {

    // planet name (unique)
    name: PlanetName;

    // planet natural resources
    resources: Resource[];

}

export enum PlanetName {
    SYLVA = 'sylva',
    DESOLO = 'desolo',
    CALIDOR = 'calidor',
    VESANIA = 'vesania',
    NOVUS = 'novus',
    GLACIO = 'glacio',
    ATROX = 'atrox',
}
