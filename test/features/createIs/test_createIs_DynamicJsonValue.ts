import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createIs_DynamicJsonValue = _test_is(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createIs<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
