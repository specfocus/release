import { AlertAction, SomeAction } from './action';
export interface Party {
    input: AsyncIterable<SomeAction>;
    output: (message: SomeAction) => Promise<void | AlertAction>;
}
