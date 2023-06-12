import RandExp from "randexp";

const randomBytes = (byteLength: number): Uint8Array => {
    const hasGlobalBuffer = typeof Buffer === 'function' && Buffer.prototype?._isBuffer !== true;
    if (hasGlobalBuffer) {
        const crypto = require('crypto');
        return crypto.randomBytes(byteLength)
    } else {
        const { crypto } = globalThis as {
            crypto?: { getRandomValues?: (space: Uint8Array) => Uint8Array };
        };
            // @ts-expect-error: crypto.getRandomValues cannot actually be null here
            // You cannot separate getRandomValues from crypto (need to have this === crypto)
        return crypto.getRandomValues( new Uint8Array(byteLength));
    }
}

/**
 * @internal
 */
export namespace RandomGenerator {
    const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

    /* -----------------------------------------------------------
        REGULAR
    ----------------------------------------------------------- */
    export const boolean = () => Math.random() < 0.5;

    export const integer = (min?: number, max?: number) => {
        min ??= 0;
        max ??= 100;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    export const bigint = (min?: bigint, max?: bigint) => {
        min ??= BigInt(0);
        max ??= BigInt(100);
        return BigInt(integer(Number(min), Number(max)));
    };

    export const number = (min?: number, max?: number) => {
        min ??= 0;
        max ??= 100;
        return Math.random() * (max - min) + min;
    };

    export const string = (length?: number): string =>
        new Array(length ?? integer(5, 10))
            .fill(0)
            .map(() => ALPHABETS[integer(0, ALPHABETS.length - 1)])
            .join("");

    export const array = <T>(
        closure: (index: number) => T,
        count?: number,
    ): T[] =>
        new Array(count ?? length()).fill(0).map((_e, index) => closure(index));

    export const pick = <T>(array: T[]): T =>
        array[integer(0, array.length - 1)]!;

    export const length = () => integer(0, 3);

    /* -----------------------------------------------------------
        SECIAL FORMATS
    ----------------------------------------------------------- */
    export const uuid = () =>
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });

    export const email = () => `${string(10)}@${string(10)}.${string(3)}`;

    export const url = () => `https://${string(10)}.${string(3)}`;

    export const ipv4 = () => array(() => integer(0, 255), 4).join(".");

    export const ipv6 = (): string =>
        array(() => integer(0, 65535).toString(16), 8).join(":");

    export const objectid = (): string => {
        const index = Math.floor(Math.random() * 0xffffff);
        const time = Math.floor(Date.now() / 1000);
        const inc = (index+ 1) % 0xffffff;
        const buffer = new Uint8Array(12);
        
        // 4-byte timestamp
        new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength).setUint32(0, time, false);
    
        const PROCESS_UNIQUE =  randomBytes(5);
    
        // 5-byte process unique
        buffer[4] = PROCESS_UNIQUE[0] as number;
        buffer[5] = PROCESS_UNIQUE[1] as number;
        buffer[6] = PROCESS_UNIQUE[2]as number;
        buffer[7] = PROCESS_UNIQUE[3]as number;
        buffer[8] = PROCESS_UNIQUE[4]as number;
    
        // 3-byte counter
        buffer[11] = inc & 0xff;
        buffer[10] = (inc >> 8) & 0xff;
        buffer[9] = (inc >> 16) & 0xff;
    
        // convert to hex
        return Array.from(buffer, byte => byte.toString(16).padStart(2, '0')).join('');
    }

    export const pattern = (regex: RegExp): string => new RandExp(regex).gen();

    export const date = (min?: number, max?: number) => {
        min ??= 0;
        max ??= Date.now() * 2;
        return new Date(number(min, max)).toISOString().substring(0, 10);
    };

    export const datetime = (min?: number, max?: number) => {
        min ??= 0;
        max ??= Date.now() * 2;
        return new Date(number(min, max)).toISOString();
    };
}
