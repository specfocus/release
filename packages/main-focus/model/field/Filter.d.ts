import { SimpleObject } from '../../object';
import { Model } from '../model';
export declare class Filter<T extends SimpleObject> {
    model: Model<T>;
    constructor(model: Model<T>);
}
