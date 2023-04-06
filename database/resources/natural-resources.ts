import { ModuleName } from "../../models/module.model";
import { PlanetName } from "../../models/planet.model";
import { CompositeResourceName } from "../../models/resources/composite-resource.model";
import { NaturalResource, NaturalResourceName } from "../../models/resources/natural-resource.model";
import { RefinedResourceName } from "../../models/resources/refined-resource.mode";
import { Resource, ResourceName } from "../../models/resources/resource.model";

export default class NaturalResourcesDatabase {

    private static instance: NaturalResourcesDatabase;

    private constructor() { }

    public static getInstance(): NaturalResourcesDatabase {
        if (!NaturalResourcesDatabase.instance) {
            NaturalResourcesDatabase.instance = new NaturalResourcesDatabase();
        }
        return NaturalResourcesDatabase.instance;
    }

    public getNaturalResources(): NaturalResource[] {
        return [
            {
                name: NaturalResourceName.AMMONIUM,
                from: [PlanetName.SYLVA, PlanetName.DESOLO, PlanetName.CALIDOR, PlanetName.VESANIA, PlanetName.NOVUS, PlanetName.GLACIO, PlanetName.ATROX],
                uses: {
                    [CompositeResourceName.HYDRAZINE]: { quantity: 2, at: ModuleName.CHEMISTRY_LAB }
                }
            },
            {
                name: NaturalResourceName.ASTRONIUM,
                from: [PlanetName.SYLVA, PlanetName.DESOLO, PlanetName.CALIDOR, PlanetName.VESANIA, PlanetName.NOVUS, PlanetName.GLACIO, PlanetName.ATROX],
                uses: {}
            },
            {
                name: NaturalResourceName.CLAY,
                from: [PlanetName.SYLVA, PlanetName.DESOLO, PlanetName.CALIDOR, PlanetName.VESANIA, PlanetName.NOVUS, PlanetName.GLACIO, PlanetName.ATROX],
                uses: {
                    [RefinedResourceName.CERAMIC]: { quantity: 1, at: ModuleName.SMELTING_FURNACE }
                }
            },
            {
                name: NaturalResourceName.COMPOUND,
                from: [PlanetName.SYLVA, PlanetName.DESOLO, PlanetName.CALIDOR, PlanetName.VESANIA, PlanetName.NOVUS, PlanetName.GLACIO, PlanetName.ATROX],
                uses: {
                    [CompositeResourceName.PLASTIC]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                    [ModuleName.SMELTING_FURNACE]: { quantity: 1, at: ModuleName.MEDIUM_PRINTER },
                    [ModuleName.SMALL_PRINTER]: { quantity: 1, at: 'backpack' },
                    [ModuleName.MEDIUM_PRINTER]: { quantity: 2, at: ModuleName.SMALL_PRINTER },
                    [ModuleName.LARGE_PRINTER]: { quantity: 3, at: ModuleName.MEDIUM_PRINTER },
                    [ModuleName.SOIL_CENTRIFUGE]: { quantity: 2, at: ModuleName.MEDIUM_PRINTER }
                }
            },
            {
                name: NaturalResourceName.GRAPHITE,
                from: [PlanetName.SYLVA, PlanetName.DESOLO, PlanetName.CALIDOR, PlanetName.VESANIA, PlanetName.NOVUS, PlanetName.GLACIO, PlanetName.ATROX],
                uses: {
                    [CompositeResourceName.GRAPHENE]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB }
                }
            },
            {
                name: NaturalResourceName.HEMATITE,
                from: [PlanetName.NOVUS, PlanetName.GLACIO],
                uses: {
                    [RefinedResourceName.IRON]: { quantity: 1, at: ModuleName.SMELTING_FURNACE }
                }
            },
            {
                name: NaturalResourceName.LATERITE,
                from: [PlanetName.SYLVA, PlanetName.DESOLO, PlanetName.CALIDOR, PlanetName.VESANIA, PlanetName.NOVUS, PlanetName.GLACIO, PlanetName.ATROX],
                uses: {
                    [RefinedResourceName.ALUMINIUM]: { quantity: 1, at: ModuleName.SMELTING_FURNACE }
                }
            },
            {
                name: NaturalResourceName.LITHIUM,
                from: [PlanetName.VESANIA, PlanetName.NOVUS],
                uses: {}
            },
            {
                name: NaturalResourceName.MALACHITE,
                from: [PlanetName.SYLVA, PlanetName.CALIDOR],
                uses: {
                    [RefinedResourceName.COPPER]: { quantity: 1, at: ModuleName.SMELTING_FURNACE }
                }
            },
            {
                name: NaturalResourceName.ORGANIC,
                from: [PlanetName.SYLVA, PlanetName.DESOLO, PlanetName.CALIDOR, PlanetName.VESANIA, PlanetName.NOVUS, PlanetName.GLACIO, PlanetName.ATROX],
                uses: {
                    [RefinedResourceName.CARBON]: { quantity: 1, at: ModuleName.SMELTING_FURNACE },
                    [CompositeResourceName.RUBBER]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB }
                }
            },
            {
                name: NaturalResourceName.QUATRZ,
                from: [PlanetName.SYLVA, PlanetName.DESOLO, PlanetName.CALIDOR, PlanetName.VESANIA, PlanetName.NOVUS, PlanetName.GLACIO, PlanetName.ATROX],
                uses: {
                    [RefinedResourceName.GLASS]: { quantity: 1, at: ModuleName.SMELTING_FURNACE },
                    [CompositeResourceName.SILICON]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB }
                }
            },
            {
                name: NaturalResourceName.RESIN,
                from: [PlanetName.SYLVA, PlanetName.DESOLO, PlanetName.CALIDOR, PlanetName.VESANIA, PlanetName.NOVUS, PlanetName.GLACIO, PlanetName.ATROX],
                uses: {
                    [CompositeResourceName.RUBBER]: { quantity: 1, at: ModuleName.SMELTING_FURNACE },
                    [CompositeResourceName.SILICON]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                    [ModuleName.SMELTING_FURNACE]: { quantity: 2, at: ModuleName.MEDIUM_PRINTER }
                }
            },
            {
                name: NaturalResourceName.SOIL,
                from: [PlanetName.SYLVA, PlanetName.DESOLO, PlanetName.CALIDOR, PlanetName.VESANIA, PlanetName.NOVUS, PlanetName.GLACIO, PlanetName.ATROX],
                uses: {}
            },
            {
                name: NaturalResourceName.SPHALERITE,
                from: [PlanetName.SYLVA, PlanetName.DESOLO],
                uses: {
                    [RefinedResourceName.ZINC]: { quantity: 1, at: ModuleName.SMELTING_FURNACE }
                }
            },
            {
                name: NaturalResourceName.TITANITE,
                from: [PlanetName.VESANIA, PlanetName.GLACIO],
                uses: {
                    [RefinedResourceName.TITANIUM]: { quantity: 1, at: ModuleName.SMELTING_FURNACE }
                }
            },
            {
                name: NaturalResourceName.WOLFRAMITE,
                from: [PlanetName.DESOLO, PlanetName.CALIDOR],
                uses: {
                    [RefinedResourceName.TUNGSTEN]: { quantity: 1, at: ModuleName.SMELTING_FURNACE }
                }
            }
        ];
    }

    public getNaturalResource(name: ResourceName): Resource | undefined {
        return this.getNaturalResources().find(resource => resource.name === name);
    }

}
