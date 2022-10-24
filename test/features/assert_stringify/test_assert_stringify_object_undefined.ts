import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_object_undefined = _test_assert_stringify(
    "undefined object",
    ObjectUndefied.generate,
    (input) => TSON.assertStringify(input),
    ObjectUndefied.SPOILERS,
);
