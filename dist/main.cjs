"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("js-sha3"),i=require("@ethersproject/bytes"),a=require("react/jsx-runtime"),t=require("react-dom"),r=require("react");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(e);function d(e){const a=[i.arrayify(e)],t=i.hexlify(i.concat(a));return"0x"+o.default.keccak_256(i.arrayify(t))}function s(e){const i=Buffer.isBuffer(e)?e:Buffer.from(e),a=BigInt(d(i))>>BigInt(8),t=a.toString(16);return{hash:a,digest:`0x${t.padStart(64,"0")}`}}const c=(e,i)=>Math.floor(Math.random()*(i-e+1)+e),l=e=>!!e.toString().match(/^0x[\dabcdef]+$/)&&e.length>=66;const u=()=>a.jsx("div",{children:"I am React Widget"}),h={buildVerificationRequest:e=>{if(!e.signal)throw new Error("Unexpectedly trying to build verification request without a `signal`.");const i={signal:e.advanced_use_raw_signal?e.signal:s(e.signal).digest,action_id:e.advanced_use_raw_action_id?e.action_id:s(e.action_id).digest};return e.app_name&&(i.app_name=e.app_name),e.signal_description&&(i.signal_description=e.signal_description),{id:c(1e5,9999999),jsonrpc:"2.0",method:"wld_worldIDVerification",params:[i]}},hashBytes:s,keccak256:d,randomNumber:c,validateABILikeEncoding:l,validateInputParams:e=>e.action_id?e.advanced_use_raw_action_id&&!l(e.action_id)?{valid:!1,error:"You enabled 'advanced_use_raw_action_id' which uses the action ID raw (without any additional hashing or encoding),\n        but the action ID you provided does not look to be validly hashed or encoded. Please check\n        https://id.worldcoin.org/docs/js/reference#parameters for details."}:e.advanced_use_raw_signal&&e.signal&&!l(e.signal)?{valid:!1,error:"You enabled 'advanced_use_raw_signal' which uses the signal raw (without any additional hashing or encoding),\n        but the signal you provided does not look to be validly hashed or encoded. Please check\n        https://id.worldcoin.org/docs/js/reference#parameters for details."}:{valid:!0}:{valid:!1,error:"The `action_id` parameter is always required."},verifyVerificationResponse:e=>{const i="merkle_root"in e?e.merkle_root:void 0,a="nullifier_hash"in e?e.nullifier_hash:void 0,t="proof"in e?e.proof:void 0;for(const e of[i,a,t])if(!e||!l(e))return!1;return!0}};var f={init:e=>{let i=null;"string"!=typeof e&&(i=e),"string"==typeof e&&(i=document.getElementById(e)),null!==i&&t.render(a.jsx(u,{}),i)}};exports.ReactWidget=u,exports.SayHello=function(e){const[i,t]=r.useState(e.name);return r.useEffect((()=>{t(e.name)}),[e]),a.jsxs("div",{children:["Hey ",i,", say hello to TypeScript."]})},exports.default=f,exports.utils=h;
//# sourceMappingURL=main.cjs.map
