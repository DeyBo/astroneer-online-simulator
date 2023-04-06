import { AtmosphericResourceName } from "./atmospheric-resource.model";
import { NaturalResourceName } from "./natural-resource.model";
import { Resource } from "./resource.model";

export interface CompositeResource extends Resource {

    // resource name (unique)
    name: CompositeResourceName;

    // composite, amospheric or natural resources needed to craft this resource
    recipe: { [resource in CompositeResourceName | AtmosphericResourceName | NaturalResourceName]?: number };

}

export enum CompositeResourceName {
    ALUMINIUM_ALLOY = 'aluminium alloy',
    DIAMOND = 'diamond',
    EXPLOSIVE_POWDER = 'explosive power',
    GRAPHENE = 'graphene',
    HYDRAZINE = 'hydrazine',
    NANOCARBON_ALLOY = 'nanocarbon alloy',
    PLASTIC = 'plastic',
    RUBBER = 'rubber',
    SILICON = 'silicon',
    STEEL = 'steel',
    TITANIUM_ALLOY = 'titanium alloy',
    TUNGSTEN_CARBIDE = 'tungsten carbide',
}
