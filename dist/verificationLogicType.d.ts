import type { Logic } from 'kea';
import type { EndUserErrorDisplay, ErrorCodes, VerificationResponse, VerificationState } from './types';
export interface verificationLogicType extends Logic {
    actionCreators: {
        initConnection: () => {
            type: 'init connection (worldId.verificationLogic)';
            payload: {
                value: true;
            };
        };
        handleConnectionEstablished: () => {
            type: 'handle connection established (worldId.verificationLogic)';
            payload: {
                value: true;
            };
        };
        tryAgain: () => {
            type: 'try again (worldId.verificationLogic)';
            payload: {
                value: true;
            };
        };
        reset: () => {
            type: 'reset (worldId.verificationLogic)';
            payload: {
                value: true;
            };
        };
        setVerificationState: (verificationState: VerificationState) => {
            type: 'set verification state (worldId.verificationLogic)';
            payload: {
                verificationState: VerificationState;
            };
        };
        setConnectorUri: (connectorUri: string | null) => {
            type: 'set connector uri (worldId.verificationLogic)';
            payload: {
                connectorUri: string | null;
            };
        };
        setErrored: (errorCode: ErrorCodes) => {
            type: 'set errored (worldId.verificationLogic)';
            payload: {
                errorCode: ErrorCodes;
            };
        };
        setSuccess: (result: VerificationResponse) => {
            type: 'set success (worldId.verificationLogic)';
            payload: {
                result: VerificationResponse;
            };
        };
        setConnectionStartTime: (startTime: null | number) => {
            type: 'set connection start time (worldId.verificationLogic)';
            payload: {
                startTime: number | null;
            };
        };
    };
    actionKeys: {
        'init connection (worldId.verificationLogic)': 'initConnection';
        'handle connection established (worldId.verificationLogic)': 'handleConnectionEstablished';
        'try again (worldId.verificationLogic)': 'tryAgain';
        'reset (worldId.verificationLogic)': 'reset';
        'set verification state (worldId.verificationLogic)': 'setVerificationState';
        'set connector uri (worldId.verificationLogic)': 'setConnectorUri';
        'set errored (worldId.verificationLogic)': 'setErrored';
        'set success (worldId.verificationLogic)': 'setSuccess';
        'set connection start time (worldId.verificationLogic)': 'setConnectionStartTime';
    };
    actionTypes: {
        initConnection: 'init connection (worldId.verificationLogic)';
        handleConnectionEstablished: 'handle connection established (worldId.verificationLogic)';
        tryAgain: 'try again (worldId.verificationLogic)';
        reset: 'reset (worldId.verificationLogic)';
        setVerificationState: 'set verification state (worldId.verificationLogic)';
        setConnectorUri: 'set connector uri (worldId.verificationLogic)';
        setErrored: 'set errored (worldId.verificationLogic)';
        setSuccess: 'set success (worldId.verificationLogic)';
        setConnectionStartTime: 'set connection start time (worldId.verificationLogic)';
    };
    actions: {
        initConnection: () => void;
        handleConnectionEstablished: () => void;
        tryAgain: () => void;
        reset: () => void;
        setVerificationState: (verificationState: VerificationState) => void;
        setConnectorUri: (connectorUri: string | null) => void;
        setErrored: (errorCode: ErrorCodes) => void;
        setSuccess: (result: VerificationResponse) => void;
        setConnectionStartTime: (startTime: null | number) => void;
    };
    defaults: {
        verificationState: VerificationState;
        connectorUri: string | null;
        errorResult: ErrorCodes | null;
        successResult: VerificationResponse | null;
        connectionStartTime: number | null;
    };
    events: {};
    key: undefined;
    listeners: {
        initConnection: ((action: {
            type: 'init connection (worldId.verificationLogic)';
            payload: {
                value: true;
            };
        }, previousState: any) => void | Promise<void>)[];
        handleConnectionEstablished: ((action: {
            type: 'handle connection established (worldId.verificationLogic)';
            payload: {
                value: true;
            };
        }, previousState: any) => void | Promise<void>)[];
        reset: ((action: {
            type: 'reset (worldId.verificationLogic)';
            payload: {
                value: true;
            };
        }, previousState: any) => void | Promise<void>)[];
        tryAgain: ((action: {
            type: 'try again (worldId.verificationLogic)';
            payload: {
                value: true;
            };
        }, previousState: any) => void | Promise<void>)[];
        setVerificationState: ((action: {
            type: 'set verification state (worldId.verificationLogic)';
            payload: {
                verificationState: VerificationState;
            };
        }, previousState: any) => void | Promise<void>)[];
        setSuccess: ((action: {
            type: 'set success (worldId.verificationLogic)';
            payload: {
                result: VerificationResponse;
            };
        }, previousState: any) => void | Promise<void>)[];
        setErrored: ((action: {
            type: 'set errored (worldId.verificationLogic)';
            payload: {
                errorCode: ErrorCodes;
            };
        }, previousState: any) => void | Promise<void>)[];
    };
    path: ['worldId', 'verificationLogic'];
    pathString: 'worldId.verificationLogic';
    props: Record<string, unknown>;
    reducer: (state: any, action: any, fullState: any) => {
        verificationState: VerificationState;
        connectorUri: string | null;
        errorResult: ErrorCodes | null;
        successResult: VerificationResponse | null;
        connectionStartTime: number | null;
    };
    reducers: {
        verificationState: (state: VerificationState, action: any, fullState: any) => VerificationState;
        connectorUri: (state: string | null, action: any, fullState: any) => string | null;
        errorResult: (state: ErrorCodes | null, action: any, fullState: any) => ErrorCodes | null;
        successResult: (state: VerificationResponse | null, action: any, fullState: any) => VerificationResponse | null;
        connectionStartTime: (state: number | null, action: any, fullState: any) => number | null;
    };
    selector: (state: any) => {
        verificationState: VerificationState;
        connectorUri: string | null;
        errorResult: ErrorCodes | null;
        successResult: VerificationResponse | null;
        connectionStartTime: number | null;
    };
    selectors: {
        verificationState: (state: any, props?: any) => VerificationState;
        connectorUri: (state: any, props?: any) => string | null;
        errorResult: (state: any, props?: any) => ErrorCodes | null;
        successResult: (state: any, props?: any) => VerificationResponse | null;
        connectionStartTime: (state: any, props?: any) => number | null;
        endUserError: (state: any, props?: any) => EndUserErrorDisplay | null;
        internalError: (state: any, props?: any) => string;
        qrCodeContent: (state: any, props?: any) => string | null;
    };
    sharedListeners: {};
    values: {
        verificationState: VerificationState;
        connectorUri: string | null;
        errorResult: ErrorCodes | null;
        successResult: VerificationResponse | null;
        connectionStartTime: number | null;
        endUserError: EndUserErrorDisplay | null;
        internalError: string;
        qrCodeContent: string | null;
    };
    _isKea: true;
    _isKeaWithKey: false;
    __keaTypeGenInternalSelectorTypes: {
        endUserError: (errorResult: ErrorCodes | null) => EndUserErrorDisplay | null;
        internalError: (errorResult: ErrorCodes | null) => string;
        qrCodeContent: (connectorUri: string | null) => string | null;
    };
}
