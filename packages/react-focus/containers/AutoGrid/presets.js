"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSystemProps = exports.WIDTH = exports.HEIGHT = exports.WIDE = exports.TIGHT = exports.TALL = exports.SHORT = void 0;
exports.SHORT = 'short';
exports.TALL = 'tall';
exports.TIGHT = 'tight';
exports.WIDE = 'wide';
exports.HEIGHT = [0, 1, 2, 3];
exports.WIDTH = [0, 1, 2, 3];
const PRESETS = [
    [
        [3, [2, 3], [1, 1], [1, 1], [1, 1]],
        [
            [0, 0, 1],
            [0, 0, 2],
            [0, 0, 3]
        ]
    ],
    [
        [3, [2, 2], [1, 1], [1, 1]],
        [
            [0, 0, 1],
            [0, 0, 2]
        ]
    ],
    [
        [2, [1, 3], [1, 1], [1, 1], [1, 1]],
        [
            [0, 1],
            [0, 2],
            [0, 3],
        ]
    ],
    [
        [2, [1, 2], [1, 1], [1, 1]],
        [
            [0, 1],
            [0, 2]
        ]
    ],
    [
        [1, [1, 3], [1, 1], [1, 1], [1, 1]],
        [
            [0],
            [1],
            [2],
            [3]
        ]
    ],
    [
        [1, [1, 2], [1, 1], [1, 1]],
        [
            [0],
            [1],
            [2]
        ],
    ],
    [
        [3, [1, 1], [1, 1], [1, 1]],
        [
            [0, 1, 2]
        ]
    ],
    [
        [4, [1, 1], [1, 1], [1, 1]],
        [
            [0, 0, 1, 1],
            [3, 3, 2, 2]
        ]
    ],
    [
        [5, [2, 1], [2, 1], [1, 1]],
        [
            [0, 0, 1, 1, 2]
        ]
    ]
];
const AREA_PRESET_MAP = PRESETS.reduce((acc, [key, areas]) => Object.assign(acc, { [JSON.stringify(key)]: areas.map(row => row.map(cell => `{${cell}}`).join(' ')) }), {});
const MAX_BLOCK = 4;
const format = (s, start, prefix = 'a') => s.replace(/{(\d+)}/g, (match, index) => `${prefix}${start + Number(index)}`);
const generateSystemProps = ([width, ...sizes]) => {
    const rows = [];
    for (let start = 0; start < sizes.length;) {
        if (sizes[start][0] === 0) {
            start++;
            continue;
        }
        if (sizes[start][1] === 0) {
            rows.push(['auto', format(`{${start}} `.repeat(width).trimEnd(), 0)]);
            start++;
            continue;
        }
        for (let len = MAX_BLOCK;; len--) {
            if (len === 0) {
                throw new Error(`Could not find preset for ${JSON.stringify([width, sizes])}`);
            }
            const slice = sizes.slice(start, start + len);
            const presetKey = JSON.stringify([width, ...slice]);
            const preset = AREA_PRESET_MAP[presetKey];
            if (preset) {
                Array.prototype.push.apply(rows, preset.map((row, i) => [i === preset.length - 1 ? '1fr' : 'auto', format(row, start)]));
                start += len;
                break;
            }
        }
    }
    const gridTemplateAreas = rows.map(([h, t]) => `"${t}"`).join('\n');
    const gridTemplateRows = rows.map(([h, t]) => h).join(' ');
    const gridTemplateColumns = `repeat(${width}, minmax(0, 1fr))`;
    return ({
        display: 'grid',
        gridAutoFlow: 'row',
        gridTemplateAreas,
        gridTemplateColumns,
        gridTemplateRows,
    });
};
exports.generateSystemProps = generateSystemProps;
