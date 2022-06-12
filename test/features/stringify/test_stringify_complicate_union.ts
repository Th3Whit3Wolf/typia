import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";

export function test_stringify_complicate(): void {
    // PREPARE FUNCTIONS
    const test = (input: IDepartment | IBuilding) => {
        const json: string = TSON.stringify(input);
        const expected: string = JSON.stringify(input);

        if (json !== expected)
            throw new Error(
                `Bug on TSON.stringify(): failed to understand the complicate union type.`,
            );
    };

    // CONSTRUCT BUILDINGS
    const buildings: IBuilding[] = [
        prepare_building(RandomGenerator.integer()),
        prepare_building(RandomGenerator.array(RandomGenerator.integer)),
        prepare_building(RandomGenerator.string()),
        prepare_building(RandomGenerator.array(RandomGenerator.string)),
        prepare_building(prepare_address()),
        prepare_building(RandomGenerator.array(prepare_address)),
        prepare_building(null),
    ];

    // DO TEST
    test({
        type: "department",
        name: RandomGenerator.string(),
        buildings,
    });
    for (const b of buildings) test(b);
}

function prepare_building(address: IBuilding["address"]): IBuilding {
    return {
        type: "building",
        name: RandomGenerator.string(),
        address,
        possessions: RandomGenerator.integer(1, 1000),
    };
}
function prepare_address(): IAddress {
    return {
        code: RandomGenerator.string(),
        name: RandomGenerator.string(),
    };
}

interface IDepartment {
    type: "department";
    name: string;
    buildings: IBuilding[];
}
interface IBuilding {
    type: "building";
    name: string;
    address:
        | number
        | number[]
        | Array<number | string | null>
        | string
        | string[]
        | IAddress
        | IAddress[]
        | null;
    possessions: number;
}
interface IAddress {
    code: string;
    name: string;
}
