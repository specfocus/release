import { Model } from '../model';
import { SimpleObject } from '../object';
export declare class Form<T extends SimpleObject> {
    model: Model<T>;
    constructor(model: Model<T>);
}
