import type {Component} from "vue";

export interface MiddlewareType {
    auth: Boolean
}

export interface MetaType {
    title?: string | number,
    guard?: Boolean,
    middleware?: MiddlewareType
}

export interface RouteType {
    name: string,
    path: string,
    component?: Function | Component,
    components?: any,
    meta?: MetaType,
    children?: RouteType
}