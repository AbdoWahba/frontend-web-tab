/**
* DevExtreme (viz/polar_chart.d.ts)
* Version: 19.1.5
* Build date: Tue Jul 30 2019
*
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxPolarChart(): JQuery;
    dxPolarChart(options: "instance"): DevExpress.viz.dxPolarChart;
    dxPolarChart(options: string): any;
    dxPolarChart(options: string, ...params: any[]): any;
    dxPolarChart(options: DevExpress.viz.dxPolarChartOptions): JQuery;
}
}
export default DevExpress.viz.dxPolarChart;
export type Options = DevExpress.viz.dxPolarChartOptions;

/** @deprecated use Options instead */
export type IOptions = DevExpress.viz.dxPolarChartOptions;