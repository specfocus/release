declare namespace _default {
    namespace ra {
        export namespace action {
            export const add_filter: string;
            export const add: string;
            export const back: string;
            export const bulk_actions: string;
            export const cancel: string;
            export const clear_input_value: string;
            export const clone: string;
            export const confirm: string;
            export const create: string;
            export const create_item: string;
            const _delete: string;
            export { _delete as delete };
            export const edit: string;
            const _export: string;
            export { _export as export };
            export const list: string;
            export const refresh: string;
            export const remove_filter: string;
            export const remove: string;
            export const save: string;
            export const search: string;
            export const show: string;
            export const sort: string;
            export const undo: string;
            export const unselect: string;
            export const expand: string;
            export const close: string;
            export const open_menu: string;
            export const close_menu: string;
            export const update: string;
            export const move_up: string;
            export const move_down: string;
        }
        export namespace boolean {
            const _true: string;
            export { _true as true };
            const _false: string;
            export { _false as false };
            const _null: string;
            export { _null as null };
        }
        export namespace page {
            const create_1: string;
            export { create_1 as create };
            export const dashboard: string;
            const edit_1: string;
            export { edit_1 as edit };
            export const error: string;
            const list_1: string;
            export { list_1 as list };
            export const loading: string;
            export const not_found: string;
            const show_1: string;
            export { show_1 as show };
            export const empty: string;
            export const invite: string;
        }
        export namespace input {
            namespace file {
                const upload_several: string;
                const upload_single: string;
            }
            namespace image {
                const upload_several_1: string;
                export { upload_several_1 as upload_several };
                const upload_single_1: string;
                export { upload_single_1 as upload_single };
            }
            namespace references {
                const all_missing: string;
                const many_missing: string;
                const single_missing: string;
            }
            namespace password {
                const toggle_visible: string;
                const toggle_hidden: string;
            }
        }
        export namespace message {
            export const about: string;
            export const are_you_sure: string;
            export const bulk_delete_content: string;
            export const bulk_delete_title: string;
            export const bulk_update_content: string;
            export const bulk_update_title: string;
            export const delete_content: string;
            export const delete_title: string;
            export const details: string;
            const error_1: string;
            export { error_1 as error };
            export const invalid_form: string;
            const loading_1: string;
            export { loading_1 as loading };
            export const no: string;
            const not_found_1: string;
            export { not_found_1 as not_found };
            export const yes: string;
            export const unsaved_changes: string;
        }
        export namespace navigation {
            const no_results: string;
            const no_more_results: string;
            const page_out_of_boundaries: string;
            const page_out_from_end: string;
            const page_out_from_begin: string;
            const page_range_info: string;
            const page_rows_per_page: string;
            const next: string;
            const prev: string;
            const skip_nav: string;
        }
        export namespace sort_1 {
            const sort_by: string;
            const ASC: string;
            const DESC: string;
        }
        export { sort_1 as sort };
        export namespace auth {
            export const auth_check_error: string;
            export const user_menu: string;
            export const username: string;
            const password_1: string;
            export { password_1 as password };
            export const sign_in: string;
            export const sign_in_error: string;
            export const logout: string;
        }
        export namespace notification {
            const updated: string;
            const created: string;
            const deleted: string;
            const bad_item: string;
            const item_doesnt_exist: string;
            const http_error: string;
            const data_provider_error: string;
            const i18n_error: string;
            const canceled: string;
            const logged_out: string;
            const not_authorized: string;
        }
        export namespace validation {
            const required: string;
            const minLength: string;
            const maxLength: string;
            const minValue: string;
            const maxValue: string;
            const number: string;
            const email: string;
            const oneOf: string;
            const regex: string;
        }
    }
    namespace pos {
        const search_1: string;
        export { search_1 as search };
        export const configuration: string;
        export const language: string;
        export namespace theme {
            const name: string;
            const light: string;
            const dark: string;
        }
        export namespace dashboard_1 {
            const monthly_revenue: string;
            const month_history: string;
            const new_orders: string;
            const pending_reviews: string;
            const all_reviews: string;
            const new_customers: string;
            const all_customers: string;
            const pending_orders: string;
            namespace order {
                const items: string;
            }
            namespace welcome {
                const title: string;
                const subtitle: string;
                const ra_button: string;
                const demo_button: string;
            }
        }
        export { dashboard_1 as dashboard };
        export namespace menu {
            const sales: string;
            const catalog: string;
            const customers: string;
        }
    }
    namespace resources {
        export namespace customers_1 {
            const name_1: string;
            export { name_1 as name };
            export namespace fields {
                export const commands: string;
                export const first_seen: string;
                export const groups: string;
                export const last_seen: string;
                export const last_seen_gte: string;
                const name_2: string;
                export { name_2 as name };
                export const total_spent: string;
                const password_2: string;
                export { password_2 as password };
                export const confirm_password: string;
                export const stateAbbr: string;
            }
            export namespace filters {
                const last_visited: string;
                const today: string;
                const this_week: string;
                const last_week: string;
                const this_month: string;
                const last_month: string;
                const earlier: string;
                const has_ordered: string;
                const has_newsletter: string;
                const group: string;
            }
            export namespace fieldGroups {
                export const identity: string;
                export const address: string;
                export const stats: string;
                export const history: string;
                const password_3: string;
                export { password_3 as password };
                export const change_password: string;
            }
            export namespace page_1 {
                const _delete_1: string;
                export { _delete_1 as delete };
            }
            export { page_1 as page };
            export namespace errors {
                const password_mismatch: string;
            }
        }
        export { customers_1 as customers };
        export namespace commands_1 {
            const name_3: string;
            export { name_3 as name };
            export const amount: string;
            const title_1: string;
            export { title_1 as title };
            export namespace fields_1 {
                export namespace basket {
                    const delivery: string;
                    const reference: string;
                    const quantity: string;
                    const sum: string;
                    const tax_rate: string;
                    const taxes: string;
                    const total: string;
                    const unit_price: string;
                }
                const address_1: string;
                export { address_1 as address };
                export const customer_id: string;
                export const date_gte: string;
                export const date_lte: string;
                export const nb_items: string;
                export const total_gte: string;
                export const status: string;
                export const returned: string;
            }
            export { fields_1 as fields };
            export namespace section {
                const order_1: string;
                export { order_1 as order };
                export const customer: string;
                export const shipping_address: string;
                const items_1: string;
                export { items_1 as items };
                const total_1: string;
                export { total_1 as total };
            }
        }
        export { commands_1 as commands };
        export namespace invoices {
            const name_4: string;
            export { name_4 as name };
            export namespace fields_2 {
                export const date: string;
                const customer_id_1: string;
                export { customer_id_1 as customer_id };
                export const command_id: string;
                const date_gte_1: string;
                export { date_gte_1 as date_gte };
                const date_lte_1: string;
                export { date_lte_1 as date_lte };
                const total_gte_1: string;
                export { total_gte_1 as total_gte };
                const address_2: string;
                export { address_2 as address };
            }
            export { fields_2 as fields };
        }
        export namespace products {
            const name_5: string;
            export { name_5 as name };
            export namespace fields_3 {
                export const category_id: string;
                export const height_gte: string;
                export const height_lte: string;
                export const height: string;
                const image_1: string;
                export { image_1 as image };
                export const price: string;
                const reference_1: string;
                export { reference_1 as reference };
                const sales_1: string;
                export { sales_1 as sales };
                export const stock_lte: string;
                export const stock: string;
                export const thumbnail: string;
                export const width_gte: string;
                export const width_lte: string;
                export const width: string;
            }
            export { fields_3 as fields };
            export namespace tabs {
                const image_2: string;
                export { image_2 as image };
                const details_1: string;
                export { details_1 as details };
                export const description: string;
                export const reviews: string;
            }
            export namespace filters_1 {
                export const categories: string;
                const stock_1: string;
                export { stock_1 as stock };
                export const no_stock: string;
                export const low_stock: string;
                export const average_stock: string;
                export const enough_stock: string;
                const sales_2: string;
                export { sales_2 as sales };
                export const best_sellers: string;
                export const average_sellers: string;
                export const low_sellers: string;
                export const never_sold: string;
            }
            export { filters_1 as filters };
        }
        export namespace categories_1 {
            const name_6: string;
            export { name_6 as name };
            export namespace fields_4 {
                const products_1: string;
                export { products_1 as products };
            }
            export { fields_4 as fields };
        }
        export { categories_1 as categories };
        export namespace reviews_1 {
            const name_7: string;
            export { name_7 as name };
            const amount_1: string;
            export { amount_1 as amount };
            export const relative_to_poster: string;
            export const detail: string;
            export namespace fields_5 {
                const customer_id_2: string;
                export { customer_id_2 as customer_id };
                const command_id_1: string;
                export { command_id_1 as command_id };
                export const product_id: string;
                const date_gte_2: string;
                export { date_gte_2 as date_gte };
                const date_lte_2: string;
                export { date_lte_2 as date_lte };
                const date_1: string;
                export { date_1 as date };
                export const comment: string;
                export const rating: string;
            }
            export { fields_5 as fields };
            export namespace action_1 {
                const accept: string;
                const reject: string;
            }
            export { action_1 as action };
            export namespace notification_1 {
                const approved_success: string;
                const approved_error: string;
                const rejected_success: string;
                const rejected_error: string;
            }
            export { notification_1 as notification };
        }
        export { reviews_1 as reviews };
        export namespace segments {
            const name_8: string;
            export { name_8 as name };
            export namespace fields_6 {
                const customers_2: string;
                export { customers_2 as customers };
                const name_9: string;
                export { name_9 as name };
            }
            export { fields_6 as fields };
            export namespace data {
                const compulsive: string;
                const collector: string;
                const ordered_once: string;
                const regular: string;
                const returns: string;
                const reviewer: string;
            }
        }
    }
}
export default _default;
