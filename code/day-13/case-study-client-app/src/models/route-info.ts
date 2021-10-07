import { ComponentType } from "react";

export interface RouteInfo {
    routeId: number;
    routePath: string;
    component: ComponentType;
}