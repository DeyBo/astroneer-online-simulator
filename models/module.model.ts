import { ResourceName } from "./resources/resource.model";

export interface Module {

    // module name (unique)
    name: ModuleName;

    // module recipe (resources needed to craft this module and with which module)
    recipe: { resources: { [resource in ResourceName]?: number }, module: ModuleName };

    // module tier
    tier: Tier;

    // uses to craft another module
    uses: { [module in ModuleName]?: number };

}

export enum ModuleName {
    SMALL_PRINTER = 'small printer',
    MEDIUM_PRINTER = 'medium printer',
    LARGE_PRINTER = 'large printer',
    SMELTING_FURNACE = 'smelting furnace',
    SOIL_CENTRIFUGE = 'soil centrifuge',
    CHEMISTRY_LAB = 'chemistry lab',
    ATMOSPHERIC_CONDENSER = 'atmospheric condenser',
}

export enum Tier { // TODO: see to move this enum in a more generic file
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}
