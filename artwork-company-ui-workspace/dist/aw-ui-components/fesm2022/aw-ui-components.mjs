import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

class AwUiComponents {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: AwUiComponents, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.4", type: AwUiComponents, isStandalone: true, selector: "aw-ui-components", ngImport: i0, template: ` <p>aw-ui-components works!</p> `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: AwUiComponents, decorators: [{
            type: Component,
            args: [{ selector: 'aw-ui-components', imports: [], template: ` <p>aw-ui-components works!</p> ` }]
        }] });

class Button {
    variant = 'primary';
    disabled = false;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: Button, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.4", type: Button, isStandalone: true, selector: "aw-button", inputs: { variant: "variant", disabled: "disabled" }, ngImport: i0, template: "<button class=\"btn\" [ngClass]=\"variant\" [disabled]=\"disabled\">\n  <ng-content></ng-content>\n</button>\n", styles: [".btn{padding:8px 16px;border-radius:4px;border:none;cursor:pointer}.primary{background:#1976d2;color:#fff}.secondary{background:#eee;color:#000}.disabled{background:#ccc;color:#666;cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: Button, decorators: [{
            type: Component,
            args: [{ selector: 'aw-button', imports: [NgClass], template: "<button class=\"btn\" [ngClass]=\"variant\" [disabled]=\"disabled\">\n  <ng-content></ng-content>\n</button>\n", styles: [".btn{padding:8px 16px;border-radius:4px;border:none;cursor:pointer}.primary{background:#1976d2;color:#fff}.secondary{background:#eee;color:#000}.disabled{background:#ccc;color:#666;cursor:not-allowed}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class Table {
    columns = [];
    data = [];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: Table, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.4", type: Table, isStandalone: true, selector: "aw-table", inputs: { columns: "columns", data: "data" }, ngImport: i0, template: "<table class=\"company-table\">\n  <thead>\n    <tr>\n      @for (col of columns; track $index) {\n        <th>\n          <li>{{ col }}</li>\n        </th>\n      }\n    </tr>\n  </thead>\n\n  <tbody>\n    @for (row of data; track $index) {\n      <tr>\n        @for (col of columns; track $index) {\n          <td>{{ row[col] }}</td>\n        }\n      </tr>\n    }\n  </tbody>\n</table>\n", styles: [".company-table{width:100%;border-collapse:collapse}.company-table th,.company-table td{border:1px solid #ddd;padding:8px}.company-table th{background-color:#f2f2f2;text-align:left}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: Table, decorators: [{
            type: Component,
            args: [{ selector: 'aw-table', imports: [], template: "<table class=\"company-table\">\n  <thead>\n    <tr>\n      @for (col of columns; track $index) {\n        <th>\n          <li>{{ col }}</li>\n        </th>\n      }\n    </tr>\n  </thead>\n\n  <tbody>\n    @for (row of data; track $index) {\n      <tr>\n        @for (col of columns; track $index) {\n          <td>{{ row[col] }}</td>\n        }\n      </tr>\n    }\n  </tbody>\n</table>\n", styles: [".company-table{width:100%;border-collapse:collapse}.company-table th,.company-table td{border:1px solid #ddd;padding:8px}.company-table th{background-color:#f2f2f2;text-align:left}\n"] }]
        }], propDecorators: { columns: [{
                type: Input
            }], data: [{
                type: Input
            }] } });

class Card {
    title = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: Card, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.4", type: Card, isStandalone: true, selector: "aw-card", inputs: { title: "title" }, ngImport: i0, template: "<div class=\"card\">\n  <div class=\"card-header\">\n    {{ title }}\n  </div>\n\n  <div class=\"card-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: [".card{border:1px solid #ddd;border-radius:6px;padding:16px;background:#fff}.card-header{font-weight:700;margin-bottom:10px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: Card, decorators: [{
            type: Component,
            args: [{ selector: 'aw-card', imports: [], template: "<div class=\"card\">\n  <div class=\"card-header\">\n    {{ title }}\n  </div>\n\n  <div class=\"card-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: [".card{border:1px solid #ddd;border-radius:6px;padding:16px;background:#fff}.card-header{font-weight:700;margin-bottom:10px}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }] } });

/*
 * Public API Surface of aw-ui-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AwUiComponents, Button, Card, Table };
//# sourceMappingURL=aw-ui-components.mjs.map
