import { NaturalResourceName } from "./natural-resource.model";
import { Resource } from "./resource.model";

export interface RefinedResource extends Resource {

    // resource name (unique)
    name: RefinedResourceName;

    // natural resources needed to craft this resource (always in quantity 1 and in smelting furnace)
    recipe: NaturalResourceName;

}

export enum RefinedResourceName {
    ALUMINIUM = 'aluminium',
    CARBON = 'carbon',
    CERAMIC = 'ceramic',
    COPPER = 'copper',
    GLASS = 'glass',
    IRON = 'iron',
    TITANIUM = 'titanium',
    TUNGSTEN = 'tungsten',
    ZINC = 'zinc',
}
