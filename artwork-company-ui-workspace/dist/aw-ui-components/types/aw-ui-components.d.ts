import * as i0 from '@angular/core';

declare class AwUiComponents {
    static ɵfac: i0.ɵɵFactoryDeclaration<AwUiComponents, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AwUiComponents, "aw-ui-components", never, {}, {}, never, never, true, never>;
}

declare class Button {
    variant: 'primary' | 'secondary';
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<Button, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Button, "aw-button", never, { "variant": { "alias": "variant"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class Table {
    columns: string[];
    data: any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<Table, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Table, "aw-table", never, { "columns": { "alias": "columns"; "required": false; }; "data": { "alias": "data"; "required": false; }; }, {}, never, never, true, never>;
}

declare class Card {
    title: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<Card, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Card, "aw-card", never, { "title": { "alias": "title"; "required": false; }; }, {}, never, ["*"], true, never>;
}

export { AwUiComponents, Button, Card, Table };
