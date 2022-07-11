import type { Logic } from 'kea';
export interface widgetLogicType extends Logic {
    actionCreators: {
        setName: (name: string) => ({
            type: "set name (worldId.widgetLogic)";
            payload: {
                name: string;
            };
        });
    };
    actionKeys: {
        "set name (worldId.widgetLogic)": "setName";
    };
    actionTypes: {
        setName: "set name (worldId.widgetLogic)";
    };
    actions: {
        setName: (name: string) => void;
    };
    defaults: {
        name: string;
    };
    events: {};
    key: undefined;
    listeners: {};
    path: [
        "worldId",
        "widgetLogic"
    ];
    pathString: "worldId.widgetLogic";
    props: Record<string, unknown>;
    reducer: (state: any, action: any, fullState: any) => {
        name: string;
    };
    reducers: {
        name: (state: string, action: any, fullState: any) => string;
    };
    selector: (state: any) => {
        name: string;
    };
    selectors: {
        name: (state: any, props?: any) => string;
    };
    sharedListeners: {};
    values: {
        name: string;
    };
    _isKea: true;
    _isKeaWithKey: false;
}
