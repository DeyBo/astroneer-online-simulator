import { AtmosphericResourceName } from "./atmospheric-resource.model";
import { CompositeResourceName } from "./composite-resource.model";
import { NaturalResourceName } from "./natural-resource.model";
import { RefinedResourceName } from "./refined-resource.mode";
import { Module, ModuleName } from "../module.model";

export type ResourceName = AtmosphericResourceName | CompositeResourceName | NaturalResourceName | RefinedResourceName;

export interface Resource {

    // resource name (unique)
    name: ResourceName;

    // resource uses to craft another resource or module (in quantity and in which module)
    uses: { [item in ResourceName | ModuleName]?: { quantity: number; at: ModuleName | 'backpack' } }; // TODO: search for a better way to handle backpack

}
