import { PlanetName } from './../planet.model';
import { Resource } from './resource.model';

export interface NaturalResource extends Resource {

    // resource name (unique)
    name: NaturalResourceName;

    // planet where the resource is found
    from: PlanetName[];
    
}

export enum NaturalResourceName {
    AMMONIUM = 'ammonium',
    ASTRONIUM = 'astronium',
    CLAY = 'clay',
    COMPOUND = 'compound',
    GRAPHITE = 'graphite',
    HEMATITE = 'hematite',
    LATERITE = 'laterite',
    LITHIUM = 'lithium',
    MALACHITE = 'malachite',
    ORGANIC = 'organic',
    QUATRZ = 'quartz',
    RESIN = 'resin',
    SOIL = 'soil',
    SPHALERITE = 'sphalerite',
    TITANITE = 'titanite',
    WOLFRAMITE = 'wolframite',
}