/// <reference path="./lib.d.ts" />
/// <reference path="./es.d.ts" />
/// <reference path="./aftereffects.constants.d.ts" />
/// <reference path="./aftereffects.types.d.ts" />

declare var alert: (object: any) => void;
declare var confirm: (message: string) => boolean;
declare var prompt: (text: string, value: string) => string;
declare var app: Application;
declare var system: System;