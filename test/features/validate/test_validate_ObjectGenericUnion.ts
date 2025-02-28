import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_validate_ObjectGenericUnion = _test_validate(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.validate(input),
    ObjectGenericUnion.SPOILERS,
);
