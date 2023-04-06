import { ModuleName } from "../../models/module.model";
import { PlanetName } from "../../models/planet.model";
import { AtmosphericResource, AtmosphericResourceName } from "../../models/resources/atmospheric-resource.model";
import { CompositeResourceName } from "../../models/resources/composite-resource.model";

export default class AthmosphericResourcesDatabase {

    private static instance: AthmosphericResourcesDatabase;

    private constructor() { }

    public static getInstance(): AthmosphericResourcesDatabase {
        if (!AthmosphericResourcesDatabase.instance) {
            AthmosphericResourcesDatabase.instance = new AthmosphericResourcesDatabase();
        }
        return AthmosphericResourcesDatabase.instance;
    }

    public getAthmosphericResources(): AtmosphericResource[] {
        return [
            {
                name: AtmosphericResourceName.ARGON,
                uses: {
                    [CompositeResourceName.STEEL]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                },
                presence: {
                    [PlanetName.SYLVA]: 0,
                    [PlanetName.DESOLO]: 0,
                    [PlanetName.CALIDOR]: 0,
                    [PlanetName.VESANIA]: 50,
                    [PlanetName.NOVUS]: 0,
                    [PlanetName.GLACIO]: 100,
                    [PlanetName.ATROX]: 0
                }
            },
            {
                name: AtmosphericResourceName.HELIUM,
                uses: {
                    [CompositeResourceName.NANOCARBON_ALLOY]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                },
                presence: {
                    [PlanetName.SYLVA]: 0,
                    [PlanetName.DESOLO]: 0,
                    [PlanetName.CALIDOR]: 0,
                    [PlanetName.VESANIA]: 0,
                    [PlanetName.NOVUS]: 0,
                    [PlanetName.GLACIO]: 0,
                    [PlanetName.ATROX]: 25
                }
            },
            {
                name: AtmosphericResourceName.HYDROGEN,
                uses: {
                    [CompositeResourceName.HYDRAZINE]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                },
                presence: {
                    [PlanetName.SYLVA]: 75,
                    [PlanetName.DESOLO]: 0,
                    [PlanetName.CALIDOR]: 50,
                    [PlanetName.VESANIA]: 100,
                    [PlanetName.NOVUS]: 25,
                    [PlanetName.GLACIO]: 0,
                    [PlanetName.ATROX]: 0
                }
            },
            {
                name: AtmosphericResourceName.METHANE,
                uses: {
                    [CompositeResourceName.SILICON]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                },
                presence: {
                    [PlanetName.SYLVA]: 0,
                    [PlanetName.DESOLO]: 0,
                    [PlanetName.CALIDOR]: 0,
                    [PlanetName.VESANIA]: 0,
                    [PlanetName.NOVUS]: 75,
                    [PlanetName.GLACIO]: 0,
                    [PlanetName.ATROX]: 100
                }
            },
            {
                name: AtmosphericResourceName.NITROGEN,
                uses: {
                    [CompositeResourceName.TITANIUM_ALLOY]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                },
                presence: {
                    [PlanetName.SYLVA]: 100,
                    [PlanetName.DESOLO]: 0,
                    [PlanetName.CALIDOR]: 0,
                    [PlanetName.VESANIA]: 75,
                    [PlanetName.NOVUS]: 0,
                    [PlanetName.GLACIO]: 0,
                    [PlanetName.ATROX]: 50
                }
            },
            {
                name: AtmosphericResourceName.SULFUR,
                uses: {
                    [CompositeResourceName.EXPLOSIVE_POWDER]: { quantity: 1, at: ModuleName.CHEMISTRY_LAB },
                },
                presence: {
                    [PlanetName.SYLVA]: 0,
                    [PlanetName.DESOLO]: 0,
                    [PlanetName.CALIDOR]: 100,
                    [PlanetName.VESANIA]: 0,
                    [PlanetName.NOVUS]: 0,
                    [PlanetName.GLACIO]: 0,
                    [PlanetName.ATROX]: 75
                }
            }
        ];
    }

    public getAthmosphericResourceByName(name: AtmosphericResourceName): AtmosphericResource | undefined {
        return this.getAthmosphericResources().find(resource => resource.name === name);
    }

}
