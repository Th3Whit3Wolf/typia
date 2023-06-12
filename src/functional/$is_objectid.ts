export const $is_objectid = (str: string): boolean => REGEX.test(str);

const REGEX =
    /^[0-9a-fA-F]{24}$/;