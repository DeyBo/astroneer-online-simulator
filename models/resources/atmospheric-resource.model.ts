import { PlanetName } from "../planet.model";
import { CompositeResourceName } from "./composite-resource.model";
import { Resource } from "./resource.model";

export interface AtmosphericResource extends Resource {

    // resource name (unique)
    name: AtmosphericResourceName;

    // planet presence in PPU (parts per unit) by planet
    presence: { [planet in PlanetName]: number };

}

export enum AtmosphericResourceName {
    ARGON = 'argon',
    HELIUM = 'helium',
    HYDROGEN = 'hydrogen',
    METHANE = 'methane',
    NITROGEN = 'nitrogen',
    SULFUR = 'sulfur',
}
