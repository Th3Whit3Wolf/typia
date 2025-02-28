import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagLength } from "../../../structures/TagLength";

export const test_createClone_TagLength = _test_clone(
    "TagLength",
    TagLength.generate,
    (input: TagLength): typia.Primitive<TagLength> => {
        const $cp0 = (input: any) =>
            input.map((elem: any) =>
                "object" === typeof elem && null !== elem
                    ? $co0(elem)
                    : (elem as any),
            );
        const $co0 = (input: any): any => ({
            fixed: input.fixed as any,
            minimum: input.minimum as any,
            maximum: input.maximum as any,
            minimum_and_maximum: input.minimum_and_maximum as any,
        });
        return Array.isArray(input) ? $cp0(input) : (input as any);
    },
);
