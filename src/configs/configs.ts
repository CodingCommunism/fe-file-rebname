export const TYPE = [
    {
        label: ''
    }
];

export const EXCLUDE_DIR_NAME:Array<string> = [
    'public',
    'dist',
    'node_modules',
    'docs',
    'test'
];

export const EXCLUDE_FILE_NAME:Array<string> = [
    'json',
    'yaml',
    'md',
    'npmrc',
    'lock',
    'log',
    'yarnrc',
    'local'
];

export const ITEM_ICON_MAP = new Map<string, string>([
    ['dir', 'dir.svg'],
    ['file', 'file.svg'],
    ['error', 'error.svg']
]);

export const SWITCH_TYPE:Array<any> = [
    {
        label: '小驼峰',
        key: 'LowerCamelCase'
    },
    {
        label: '大驼峰',
        key: 'UpperCamelCase'
    },
    {
        label: '连接线',
        key: 'ConnectingLine'
    },
    {
        label: '下划线',
        key: 'UnderLine'
    }
];

export const TYPE_MAP = new Map([
    ['LowerCamelCase','小驼峰'],
    ['UpperCamelCase','大驼峰'],
    ['ConnectingLine','连接线'],
    ['UnderLine','下划线'],
]);

export const DEFAULT_TYPES = ['ConnectingLine', 'ConnectingLine'];

export const TYPE_REGEXP_MAP = new Map<string, any>([
    ['LowerCamelCase', /^(_?)[a-z][A-Za-z0-9]*\1$/],
    ['UpperCamelCase', /^(_?)[A-Z][A-Za-z0-9]*\1$/],
    ['ConnectingLine', /^(_?)[a-z][a-z0-9-]*[a-z0-9]\1$/],
    ['UnderLine', /^(_?)[a-z][a-z0-9_]*[a-z0-9]\1$/],
]);