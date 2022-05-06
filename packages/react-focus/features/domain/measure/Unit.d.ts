import type { CountryCode } from '../locale/Country';
export interface BaseUnit<Type extends string = string, System extends string = string> {
    type: Type;
    system: System;
}
export interface Area extends BaseUnit<'area', 'imperial' | 'metric'> {
}
export interface Currency extends BaseUnit<'money', CountryCode> {
}
export interface Energy extends BaseUnit<'energy'> {
}
export interface Length extends BaseUnit<'area', 'imperial' | 'metric'> {
}
export interface Physical extends BaseUnit<'physical'> {
    constant: number;
    constantName: string;
    constantSymbol: string;
}
export interface Volume extends BaseUnit<'volume', 'imperial' | 'metric'> {
}
export declare type Unit = Area | Currency | Energy | Length | Physical | Volume;
