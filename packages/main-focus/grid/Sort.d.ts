import { SimpleObject } from '../object';
import { Grid } from './Grid';
export declare class Sort<T extends SimpleObject> {
    grid: Grid<T>;
    constructor(grid: Grid<T>);
}
