import type { Logic } from 'kea';
export interface widgetLogicType extends Logic {
    actionCreators: {
        setModalVisibility: (visible: boolean) => ({
            type: "set modal visibility (worldId.widgetLogic)";
            payload: boolean;
        });
    };
    actionKeys: {
        "set modal visibility (worldId.widgetLogic)": "setModalVisibility";
    };
    actionTypes: {
        setModalVisibility: "set modal visibility (worldId.widgetLogic)";
    };
    actions: {
        setModalVisibility: (visible: boolean) => void;
    };
    defaults: {
        modalVisibility: boolean;
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
        modalVisibility: boolean;
    };
    reducers: {
        modalVisibility: (state: boolean, action: any, fullState: any) => boolean;
    };
    selector: (state: any) => {
        modalVisibility: boolean;
    };
    selectors: {
        modalVisibility: (state: any, props?: any) => boolean;
    };
    sharedListeners: {};
    values: {
        modalVisibility: boolean;
    };
    _isKea: true;
    _isKeaWithKey: false;
}
