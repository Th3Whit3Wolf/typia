import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_createAssertPrune_ObjectGenericUnion = _test_assertPrune(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input: any): ObjectGenericUnion => {
        const assert = (input: any): ObjectGenericUnion => {
            const __is = (input: any): input is ObjectGenericUnion => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.writer &&
                    (null === input.answer ||
                        ("object" === typeof input.answer &&
                            null !== input.answer &&
                            $io1(input.answer))) &&
                    "string" === typeof input.id &&
                    "number" === typeof input.hit &&
                    Number.isFinite(input.hit) &&
                    Array.isArray(input.contents) &&
                    input.contents.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    "string" === typeof input.created_at;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "number" === typeof input.hit &&
                    Number.isFinite(input.hit) &&
                    Array.isArray(input.contents) &&
                    input.contents.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    "string" === typeof input.created_at;
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.created_at &&
                    "string" === typeof input.title &&
                    "string" === typeof input.body &&
                    Array.isArray(input.files) &&
                    input.files.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
                    );
                const $io3 = (input: any): boolean =>
                    (null === input.extension ||
                        "string" === typeof input.extension) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.url;
                const $io4 = (input: any): boolean =>
                    "string" === typeof input.writer &&
                    (null === input.answer ||
                        ("object" === typeof input.answer &&
                            null !== input.answer &&
                            $io1(input.answer))) &&
                    "string" === typeof input.id &&
                    "number" === typeof input.hit &&
                    Number.isFinite(input.hit) &&
                    Array.isArray(input.contents) &&
                    input.contents.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io5(elem),
                    ) &&
                    "string" === typeof input.created_at;
                const $io5 = (input: any): boolean =>
                    "number" === typeof input.score &&
                    Number.isFinite(input.score) &&
                    "string" === typeof input.id &&
                    "string" === typeof input.created_at &&
                    "string" === typeof input.title &&
                    "string" === typeof input.body &&
                    Array.isArray(input.files) &&
                    input.files.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
                    );
                const $iu0 = (input: any): any =>
                    (() => {
                        if ($io4(input)) return $io4(input);
                        if ($io0(input)) return $io0(input);
                        return false;
                    })();
                return (
                    "object" === typeof input && null !== input && $iu0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectGenericUnion => {
                    const $guard = (typia.createAssertPrune as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.writer ||
                            $guard(_exceptionable, {
                                path: _path + ".writer",
                                expected: "string",
                                value: input.writer,
                            })) &&
                        (null === input.answer ||
                            ((("object" === typeof input.answer &&
                                null !== input.answer) ||
                                $guard(_exceptionable, {
                                    path: _path + ".answer",
                                    expected:
                                        "(ObjectGenericUnion.ISaleAnswer | null)",
                                    value: input.answer,
                                })) &&
                                $ao1(
                                    input.answer,
                                    _path + ".answer",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".answer",
                                expected:
                                    "(ObjectGenericUnion.ISaleAnswer | null)",
                                value: input.answer,
                            })) &&
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        (("number" === typeof input.hit &&
                            Number.isFinite(input.hit)) ||
                            $guard(_exceptionable, {
                                path: _path + ".hit",
                                expected: "number",
                                value: input.hit,
                            })) &&
                        (((Array.isArray(input.contents) ||
                            $guard(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                                value: input.contents,
                            })) &&
                            input.contents.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".contents[" +
                                                _index1 +
                                                "]",
                                            expected:
                                                "ObjectGenericUnion.ISaleArticle.IContent",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                ".contents[" +
                                                _index1 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".contents[" +
                                            _index1 +
                                            "]",
                                        expected:
                                            "ObjectGenericUnion.ISaleArticle.IContent",
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                                value: input.contents,
                            })) &&
                        ("string" === typeof input.created_at ||
                            $guard(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
                            }));
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        (("number" === typeof input.hit &&
                            Number.isFinite(input.hit)) ||
                            $guard(_exceptionable, {
                                path: _path + ".hit",
                                expected: "number",
                                value: input.hit,
                            })) &&
                        (((Array.isArray(input.contents) ||
                            $guard(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                                value: input.contents,
                            })) &&
                            input.contents.every(
                                (elem: any, _index2: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".contents[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "ObjectGenericUnion.ISaleArticle.IContent",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                ".contents[" +
                                                _index2 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".contents[" +
                                            _index2 +
                                            "]",
                                        expected:
                                            "ObjectGenericUnion.ISaleArticle.IContent",
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                                value: input.contents,
                            })) &&
                        ("string" === typeof input.created_at ||
                            $guard(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
                            }));
                    const $ao2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.created_at ||
                            $guard(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
                            })) &&
                        ("string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "string",
                                value: input.title,
                            })) &&
                        ("string" === typeof input.body ||
                            $guard(_exceptionable, {
                                path: _path + ".body",
                                expected: "string",
                                value: input.body,
                            })) &&
                        (((Array.isArray(input.files) ||
                            $guard(_exceptionable, {
                                path: _path + ".files",
                                expected:
                                    'Array<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                                value: input.files,
                            })) &&
                            input.files.every(
                                (elem: any, _index3: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".files[" +
                                                _index3 +
                                                "]",
                                            expected:
                                                'Omit<ObjectGenericUnion.IAttachmentFile, "id">',
                                            value: elem,
                                        })) &&
                                        $ao3(
                                            elem,
                                            _path + ".files[" + _index3 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".files[" + _index3 + "]",
                                        expected:
                                            'Omit<ObjectGenericUnion.IAttachmentFile, "id">',
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".files",
                                expected:
                                    'Array<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                                value: input.files,
                            }));
                    const $ao3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (null === input.extension ||
                            "string" === typeof input.extension ||
                            $guard(_exceptionable, {
                                path: _path + ".extension",
                                expected: "(null | string)",
                                value: input.extension,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        ("string" === typeof input.url ||
                            $guard(_exceptionable, {
                                path: _path + ".url",
                                expected: "string",
                                value: input.url,
                            }));
                    const $ao4 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.writer ||
                            $guard(_exceptionable, {
                                path: _path + ".writer",
                                expected: "string",
                                value: input.writer,
                            })) &&
                        (null === input.answer ||
                            ((("object" === typeof input.answer &&
                                null !== input.answer) ||
                                $guard(_exceptionable, {
                                    path: _path + ".answer",
                                    expected:
                                        "(ObjectGenericUnion.ISaleAnswer | null)",
                                    value: input.answer,
                                })) &&
                                $ao1(
                                    input.answer,
                                    _path + ".answer",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".answer",
                                expected:
                                    "(ObjectGenericUnion.ISaleAnswer | null)",
                                value: input.answer,
                            })) &&
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        (("number" === typeof input.hit &&
                            Number.isFinite(input.hit)) ||
                            $guard(_exceptionable, {
                                path: _path + ".hit",
                                expected: "number",
                                value: input.hit,
                            })) &&
                        (((Array.isArray(input.contents) ||
                            $guard(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<ObjectGenericUnion.ISaleReview.IContent>",
                                value: input.contents,
                            })) &&
                            input.contents.every(
                                (elem: any, _index4: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".contents[" +
                                                _index4 +
                                                "]",
                                            expected:
                                                "ObjectGenericUnion.ISaleReview.IContent",
                                            value: elem,
                                        })) &&
                                        $ao5(
                                            elem,
                                            _path +
                                                ".contents[" +
                                                _index4 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".contents[" +
                                            _index4 +
                                            "]",
                                        expected:
                                            "ObjectGenericUnion.ISaleReview.IContent",
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<ObjectGenericUnion.ISaleReview.IContent>",
                                value: input.contents,
                            })) &&
                        ("string" === typeof input.created_at ||
                            $guard(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
                            }));
                    const $ao5 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.score &&
                            Number.isFinite(input.score)) ||
                            $guard(_exceptionable, {
                                path: _path + ".score",
                                expected: "number",
                                value: input.score,
                            })) &&
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.created_at ||
                            $guard(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
                            })) &&
                        ("string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "string",
                                value: input.title,
                            })) &&
                        ("string" === typeof input.body ||
                            $guard(_exceptionable, {
                                path: _path + ".body",
                                expected: "string",
                                value: input.body,
                            })) &&
                        (((Array.isArray(input.files) ||
                            $guard(_exceptionable, {
                                path: _path + ".files",
                                expected:
                                    'Array<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                                value: input.files,
                            })) &&
                            input.files.every(
                                (elem: any, _index5: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".files[" +
                                                _index5 +
                                                "]",
                                            expected:
                                                'Omit<ObjectGenericUnion.IAttachmentFile, "id">',
                                            value: elem,
                                        })) &&
                                        $ao3(
                                            elem,
                                            _path + ".files[" + _index5 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".files[" + _index5 + "]",
                                        expected:
                                            'Omit<ObjectGenericUnion.IAttachmentFile, "id">',
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".files",
                                expected:
                                    'Array<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                                value: input.files,
                            }));
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        $ao4(input, _path, false && _exceptionable) ||
                        $ao0(input, _path, false && _exceptionable) ||
                        $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectGenericUnion.ISaleReview | ObjectGenericUnion.ISaleQuestion)",
                            value: input,
                        });
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                                value: input,
                            })) &&
                            $au0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const prune = (input: ObjectGenericUnion): void => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.writer &&
                (null === input.answer ||
                    ("object" === typeof input.answer &&
                        null !== input.answer &&
                        $io1(input.answer))) &&
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io2 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $io3 = (input: any): boolean =>
                (null === input.extension ||
                    "string" === typeof input.extension) &&
                "string" === typeof input.name &&
                "string" === typeof input.url;
            const $io4 = (input: any): boolean =>
                "string" === typeof input.writer &&
                (null === input.answer ||
                    ("object" === typeof input.answer &&
                        null !== input.answer &&
                        $io1(input.answer))) &&
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io5(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io5 = (input: any): boolean =>
                "number" === typeof input.score &&
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $throws = (typia.createAssertPrune as any).throws;
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po2(elem);
                });
            const $pp1 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po3(elem);
                });
            const $pp2 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po5(elem);
                });
            const $po0 = (input: any): any => {
                if ("object" === typeof input.answer && null !== input.answer)
                    $po1(input.answer);
                if (Array.isArray(input.contents)) $pp0(input.contents);
                for (const key of Object.keys(input)) {
                    if (
                        "writer" === key ||
                        "answer" === key ||
                        "id" === key ||
                        "hit" === key ||
                        "contents" === key ||
                        "created_at" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                if (Array.isArray(input.contents)) $pp0(input.contents);
                for (const key of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "hit" === key ||
                        "contents" === key ||
                        "created_at" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po2 = (input: any): any => {
                if (Array.isArray(input.files)) $pp1(input.files);
                for (const key of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "created_at" === key ||
                        "title" === key ||
                        "body" === key ||
                        "files" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po3 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("extension" === key || "name" === key || "url" === key)
                        continue;
                    delete input[key];
                }
            };
            const $po4 = (input: any): any => {
                if ("object" === typeof input.answer && null !== input.answer)
                    $po1(input.answer);
                if (Array.isArray(input.contents)) $pp2(input.contents);
                for (const key of Object.keys(input)) {
                    if (
                        "writer" === key ||
                        "answer" === key ||
                        "id" === key ||
                        "hit" === key ||
                        "contents" === key ||
                        "created_at" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po5 = (input: any): any => {
                if (Array.isArray(input.files)) $pp1(input.files);
                for (const key of Object.keys(input)) {
                    if (
                        "score" === key ||
                        "id" === key ||
                        "created_at" === key ||
                        "title" === key ||
                        "body" === key ||
                        "files" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $pu0 = (input: any): any =>
                (() => {
                    if ($io4(input)) return $po4(input);
                    if ($io0(input)) return $po0(input);
                    $throws({
                        expected:
                            "(ObjectGenericUnion.ISaleReview | ObjectGenericUnion.ISaleQuestion)",
                        value: input,
                    });
                })();
            if ("object" === typeof input && null !== input) $pu0(input);
        };
        assert(input);
        prune(input);
        return input;
    },
    ObjectGenericUnion.SPOILERS,
);
