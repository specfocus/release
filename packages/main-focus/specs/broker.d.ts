import { AlertAction, AsyncAction, PatchAction, QueryAction, QuickAction, ThrowAction } from './action';
import { Party } from './party';
export interface Broker {
    party: Party;
    /** log sink */
    alert(what: AlertAction): Promise<void>;
    /** spawn process, execute function/business rule */
    async(what: AsyncAction): AsyncIterable<AlertAction>;
    /** execute business rule, in the call */
    await(what: QuickAction): AsyncIterable<AlertAction>;
    query(what: QueryAction): AsyncIterable<PatchAction>;
    /** mutation */
    patch(what: PatchAction): AsyncIterable<AlertAction>;
    /** fatal error */
    throw(what: ThrowAction): Promise<AlertAction>;
}
