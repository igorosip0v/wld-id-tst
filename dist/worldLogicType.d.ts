import type { Logic } from 'kea';
import type { AppProps, CTAShownState, CallbackInterface, ModalView, VerificationState } from './types';
export interface worldLogicType extends Logic {
    actionCreators: {
        activate: () => {
            type: 'activate (worldId.worldLogic)';
            payload: {
                value: true;
            };
        };
        terminate: () => {
            type: 'terminate (worldId.worldLogic)';
            payload: {
                value: true;
            };
        };
        enable: (payload: CallbackInterface) => {
            type: 'enable (worldId.worldLogic)';
            payload: {
                payload: CallbackInterface;
            };
        };
        showLearnMore: () => {
            type: 'show learn more (worldId.worldLogic)';
            payload: {
                value: true;
            };
        };
        toggleCTAShown: () => {
            type: 'toggle c t a shown (worldId.worldLogic)';
            payload: {
                value: true;
            };
        };
        setModalView: (modalView: ModalView) => {
            type: 'set modal view (worldId.worldLogic)';
            payload: {
                modalView: ModalView;
            };
        };
        setAppEnabled: (enabled: boolean) => {
            type: 'set app enabled (worldId.worldLogic)';
            payload: {
                enabled: boolean;
            };
        };
        initTelemetry: () => {
            type: 'init telemetry (worldId.worldLogic)';
            payload: {
                value: true;
            };
        };
        reset: () => {
            type: 'reset (worldId.worldLogic)';
            payload: {
                value: true;
            };
        };
    };
    actionKeys: {
        'activate (worldId.worldLogic)': 'activate';
        'terminate (worldId.worldLogic)': 'terminate';
        'enable (worldId.worldLogic)': 'enable';
        'show learn more (worldId.worldLogic)': 'showLearnMore';
        'toggle c t a shown (worldId.worldLogic)': 'toggleCTAShown';
        'set modal view (worldId.worldLogic)': 'setModalView';
        'set app enabled (worldId.worldLogic)': 'setAppEnabled';
        'init telemetry (worldId.worldLogic)': 'initTelemetry';
        'reset (worldId.worldLogic)': 'reset';
    };
    actionTypes: {
        activate: 'activate (worldId.worldLogic)';
        terminate: 'terminate (worldId.worldLogic)';
        enable: 'enable (worldId.worldLogic)';
        showLearnMore: 'show learn more (worldId.worldLogic)';
        toggleCTAShown: 'toggle c t a shown (worldId.worldLogic)';
        setModalView: 'set modal view (worldId.worldLogic)';
        setAppEnabled: 'set app enabled (worldId.worldLogic)';
        initTelemetry: 'init telemetry (worldId.worldLogic)';
        reset: 'reset (worldId.worldLogic)';
    };
    actions: {
        activate: () => void;
        terminate: () => void;
        enable: (payload: CallbackInterface) => void;
        showLearnMore: () => void;
        toggleCTAShown: () => void;
        setModalView: (modalView: ModalView) => void;
        setAppEnabled: (enabled: boolean) => void;
        initTelemetry: () => void;
        reset: () => void;
    };
    defaults: {
        modalView: ModalView;
        isAppActive: boolean;
        ctaShownState: CTAShownState;
        isAppEnabled: boolean;
        callbacks: CallbackInterface;
    };
    events: {
        afterMount: () => void;
    };
    key: undefined;
    listeners: {
        terminate: ((action: {
            type: 'terminate (worldId.worldLogic)';
            payload: {
                value: true;
            };
        }, previousState: any) => void | Promise<void>)[];
        activate: ((action: {
            type: 'activate (worldId.worldLogic)';
            payload: {
                value: true;
            };
        }, previousState: any) => void | Promise<void>)[];
        showLearnMore: ((action: {
            type: 'show learn more (worldId.worldLogic)';
            payload: {
                value: true;
            };
        }, previousState: any) => void | Promise<void>)[];
        toggleCTAShown: ((action: {
            type: 'toggle c t a shown (worldId.worldLogic)';
            payload: {
                value: true;
            };
        }, previousState: any) => void | Promise<void>)[];
        initTelemetry: ((action: {
            type: 'init telemetry (worldId.worldLogic)';
            payload: {
                value: true;
            };
        }, previousState: any) => void | Promise<void>)[];
        setModalView: ((action: {
            type: 'set modal view (worldId.worldLogic)';
            payload: {
                modalView: ModalView;
            };
        }, previousState: any) => void | Promise<void>)[];
    };
    path: ['worldId', 'worldLogic'];
    pathString: 'worldId.worldLogic';
    props: AppProps;
    reducer: (state: any, action: any, fullState: any) => {
        modalView: ModalView;
        isAppActive: boolean;
        ctaShownState: CTAShownState;
        isAppEnabled: boolean;
        callbacks: CallbackInterface;
    };
    reducers: {
        modalView: (state: ModalView, action: any, fullState: any) => ModalView;
        isAppActive: (state: boolean, action: any, fullState: any) => boolean;
        ctaShownState: (state: CTAShownState, action: any, fullState: any) => CTAShownState;
        isAppEnabled: (state: boolean, action: any, fullState: any) => boolean;
        callbacks: (state: CallbackInterface, action: any, fullState: any) => CallbackInterface;
    };
    selector: (state: any) => {
        modalView: ModalView;
        isAppActive: boolean;
        ctaShownState: CTAShownState;
        isAppEnabled: boolean;
        callbacks: CallbackInterface;
    };
    selectors: {
        modalView: (state: any, props?: any) => ModalView;
        isAppActive: (state: any, props?: any) => boolean;
        ctaShownState: (state: any, props?: any) => CTAShownState;
        isAppEnabled: (state: any, props?: any) => boolean;
        callbacks: (state: any, props?: any) => CallbackInterface;
        hideModalCloseButton: (state: any, props?: any) => boolean;
        modalGoBack: (state: any, props?: any) => (() => void) | undefined;
        isAppTerminated: (state: any, props?: any) => boolean;
        theme: (state: any, props?: any) => 'light' | 'dark' | undefined;
        isDevMode: (state: any, props?: any) => boolean;
    };
    sharedListeners: {};
    values: {
        modalView: ModalView;
        isAppActive: boolean;
        ctaShownState: CTAShownState;
        isAppEnabled: boolean;
        callbacks: CallbackInterface;
        hideModalCloseButton: boolean;
        modalGoBack: (() => void) | undefined;
        isAppTerminated: boolean;
        theme: 'light' | 'dark' | undefined;
        isDevMode: boolean;
    };
    _isKea: true;
    _isKeaWithKey: false;
    __keaTypeGenInternalSelectorTypes: {
        hideModalCloseButton: (verificationState: VerificationState) => boolean;
        modalGoBack: (modalView: ModalView) => (() => void) | undefined;
        isAppTerminated: (verificationState: VerificationState) => boolean;
    };
}
