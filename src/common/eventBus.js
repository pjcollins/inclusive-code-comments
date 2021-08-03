/*! (C) Copyright 2020 LanguageTooler GmbH. All rights reserved. */
class EventBus{constructor(){this._eventHandlers=new Map}subscribe(e,s){this._eventHandlers.has(e)||this._eventHandlers.set(e,[]),this._eventHandlers.get(e).push(s)}fire(e,s){const t=this._eventHandlers.get(e);t&&t.forEach(e=>{try{e(s)}catch(e){console.error(e)}})}destroy(){this._eventHandlers=new Map}}
export { EventBus }