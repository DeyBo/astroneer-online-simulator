import { ModuleName } from "../../models/module.model";
import { CompositeResourceName } from "../../models/resources/composite-resource.model";
import { NaturalResourceName } from "../../models/resources/natural-resource.model";
import { RefinedResource, RefinedResourceName } from "../../models/resources/refined-resource.mode";

export default class RefinedResourcesDatabase {

    private static instance: RefinedResourcesDatabase;

    private constructor() { }

    public static getInstance(): RefinedResourcesDatabase {
        if (!RefinedResourcesDatabase.instance) {
            RefinedResourcesDatabase.instance = new RefinedResourcesDatabase();
        }
        return RefinedResourcesDatabase.instance;
    }

    public getRefinedResources(): RefinedResource[] {
        return [
            {
                name: RefinedResourceName.ALUMINIUM,
                recipe: NaturalResourceName.LATERITE,
                uses: {
                    [CompositeResourceName.ALUMINIUM_ALLOY]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                    [ModuleName.SOIL_CENTRIFUGE]: { quantity: 1, at: ModuleName.MEDIUM_PRINTER },
                }
            },
            {
                name: RefinedResourceName.CARBON,
                recipe: NaturalResourceName.ORGANIC,
                uses: {
                    [CompositeResourceName.STEEL]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                    [CompositeResourceName.TUNGSTEN_CARBIDE]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                    [CompositeResourceName.EXPLOSIVE_POWDER]: { quantity: 2, at: ModuleName.CHEMISTRY_LAB }
                }
            },
            {
                name: RefinedResourceName.CERAMIC,
                recipe: NaturalResourceName.CLAY,
                uses: {
                    [ModuleName.CHEMISTRY_LAB]: { quantity: 1, at: ModuleName.MEDIUM_PRINTER },
                }
            },
            {
                name: RefinedResourceName.COPPER,
                recipe: NaturalResourceName.MALACHITE,
                uses: {
                    [CompositeResourceName.ALUMINIUM_ALLOY]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB }
                }
            },
            {
                name: RefinedResourceName.GLASS,
                recipe: NaturalResourceName.QUATRZ,
                uses: {
                    [ModuleName.ATMOSPHERIC_CONDENSER]: { quantity: 1, at: ModuleName.MEDIUM_PRINTER },
                    [ModuleName.CHEMISTRY_LAB]: { quantity: 1, at: ModuleName.MEDIUM_PRINTER },
                }
            },
            {
                name: RefinedResourceName.IRON,
                recipe: NaturalResourceName.HEMATITE,
                uses: {
                    [CompositeResourceName.STEEL]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                    [ModuleName.ATMOSPHERIC_CONDENSER]: { quantity: 1, at: ModuleName.MEDIUM_PRINTER },
                }
            },
            {
                name: RefinedResourceName.TITANIUM,
                recipe: NaturalResourceName.TITANITE,
                uses: {
                    [CompositeResourceName.TITANIUM_ALLOY]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB }
                }
            },
            {
                name: RefinedResourceName.TUNGSTEN,
                recipe: NaturalResourceName.WOLFRAMITE,
                uses: {
                    [CompositeResourceName.TUNGSTEN_CARBIDE]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                    [ModuleName.CHEMISTRY_LAB]: { quantity: 1, at: ModuleName.MEDIUM_PRINTER },
                }
            },
            {
                name: RefinedResourceName.ZINC,
                recipe: NaturalResourceName.SPHALERITE,
                uses: {}
            }
        ];
    }

    public getRefinedResourceByName(name: RefinedResourceName): RefinedResource | undefined {
        return this.getRefinedResources().find(resource => resource.name === name);
    }

}
