import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_createStringify_DynamicComposite = _test_stringify(
    "DynamicComposite",
    DynamicComposite.generate,
    (input: DynamicComposite): string => {
        const $string = (typia.createStringify as any).string;
        const $join = (typia.createStringify as any).join;
        const $number = (typia.createStringify as any).number;
        const $throws = (typia.createStringify as any).throws;
        const $tail = (typia.createStringify as any).tail;
        const $so0 = (input: any): any =>
            `{${$tail(
                `"id":${$string(input.id)},"name":${$string(
                    input.name,
                )},${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        if (
                            ["id", "name"].some(
                                (regular: any) => regular === key,
                            )
                        )
                            return "";
                        if (RegExp(/^-?\d+\.?\d*$/).test(key))
                            return `${JSON.stringify(key)}:${$number(value)}`;
                        if (RegExp(/^(prefix_(.*))/).test(key))
                            return `${JSON.stringify(key)}:${$string(value)}`;
                        if (RegExp(/((.*)_postfix)$/).test(key))
                            return `${JSON.stringify(key)}:${$string(value)}`;
                        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                            return `${JSON.stringify(key)}:${(() => {
                                if ("string" === typeof value)
                                    return $string(value);
                                if ("number" === typeof value)
                                    return $number(value);
                                if ("boolean" === typeof value) return value;
                                $throws({
                                    expected: "(boolean | number | string)",
                                    value: value,
                                });
                            })()}`;
                        if (
                            RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)
                        )
                            return `${JSON.stringify(key)}:${value}`;
                    })
                    .filter((str: any) => "" !== str)
                    .join(",")}`,
            )}}`;
        return $so0(input);
    },
);
