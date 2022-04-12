import { SimpleObject } from '../object';
import { Model } from '../model';
import { Form } from '../form';
export declare class Grid<T extends SimpleObject> {
    model: Model<T>;
    detail: Form<T>;
    private columns;
    constructor(model: Model<T>, detail: Form<T>);
}
