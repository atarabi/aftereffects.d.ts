declare type Bounds = [number, number, number, number];

declare type Dimension = [number, number];

declare type Margins = [number, number, number, number];

declare type Point = [number, number];

declare module ScriptUI {
	export enum Alignment {
		TOP,
		BOTTOM,
		LEFT,
		RIGHT,
		FILL,
		CENTER
	}
	
	export enum FontStyle {
		REGULAR,
		BOLD,
		ITALIC,
		BOLDITALIC
	}
}

declare class ScriptUI {
	static compatibility: any;
	static coreVersion: string;
	static environment: {
		keyboardState: {
			keyName: string;
			shiftKey: boolean;
			ctrlKey: boolean;
			altKey: boolean;
			metaKey: boolean;
		}
	};
	static events: {
		createEvent(eventType: string): UIEvent
	};
	static frameworkName: string;
	static version: string;
	static getResourceText(text: string): string;
	static newFont(name: string, style: ScriptUI.FontStyle, size: number): ScriptUIFont;
	static newImage(normal: string, disabled: string, pressed: string, rollover: string): ScriptUIImage;
}

declare module ScriptUIGraphics {
	export enum BrushType {
		SOLID_COLOR,
		THEME_COLOR
	}
	
	export enum PenType {
		SOLID_COLOR,
		THEME_COLOR
	}
}

declare class ScriptUIGraphics {
	backgroundColor: ScriptUIBrush;
	currentPath: ScriptUIPath;
	currentPoint: Point;
	disabledBackgroundColor: ScriptUIBrush;
	disabledForegroundColor: ScriptUIPen;
	font: ScriptUIFont;
	foregroundColor: ScriptUIPen;
	
	closePath(): void;
	drawFocusRing(left: number, top: number, width?: number, height?: number): void;
	drawImage(image: ScriptUIImage, left: number, top: number, width?: number, height?: number): void;
	drawOSControl(): void;
	drawString(text: string, pen: ScriptUIPen, x: number, y: number, font: ScriptUIFont): void;
	ellipsePath(left: number, top: number, width?: number, height?: number): Point;
	fillPath(brush: ScriptUIBrush, path?: ScriptUIPath): void;
	lineto(x: number, y: number): Point;
	measureString(text: string, font: ScriptUIFont, boundingWidth?: number): Dimension;
	moveto(x: number, y: number): Point;
	newBrush(type: ScriptUIGraphics.BrushType, color: [number, number, number, number] | string): ScriptUIBrush;
	newPath(): ScriptUIPath;
	newPen(type: ScriptUIGraphics.PenType, color: [number, number, number, number] | string, lineWidth: number): ScriptUIPen;
	rectPath(left: number, top: number, width?: number, height?: number): Point;
	strokePath(pen: ScriptUIPen): void;
}

declare class ScriptUIBrush {
	color: [number, number, number, number];
	theme: string;
	type: ScriptUIGraphics.BrushType;
}

declare class ScriptUIFont {
	family: string;
	name: string;
	size: number;
	style: ScriptUI.FontStyle;
	substitute: string;
}

declare class ScriptUIImage {
	format: string;
	name: string;
	pathname: string;
	size: Dimension;
}

declare class ScriptUIPath {}

declare class ScriptUIPen {
	color: [number, number, number, number];
	lineWidth: number;
	theme: string;
	type: ScriptUIGraphics.PenType;
}

declare class DrawState {
	altKeyPressed: boolean;
	capsLockKeyPressed: boolean;
	cmdKeyPressed: boolean;
	ctrlKeyPressed: boolean;
	hasFocus: boolean;
	leftButtonPressed: boolean;
	middleButtonPressed: boolean;
	mouseOver: boolean;
	numLockKeyPressed: boolean;
	optKeyPressed: boolean;
	rightButtonPressed: boolean;
	shiftKeyPressed: boolean;
}

declare class UIEvent {
	bubbles: boolean;
	cancelable: boolean;
	currentTarget: any;
	eventPhase: number;
	target: any;
	timeStamp: Date;
	type: string;
	view: any;
	
	initUIEvent(eventName: string, bubble: boolean, isCancelable: boolean, view: any, detail: number): void;
	preventDefault(): void;
	stopPropagation(): void;
}

declare class KeyboardEvent extends UIEvent {
	altKey: boolean;
	ctrlKey: boolean;
	metaKey: boolean;
	shiftKey: boolean;
	keyIdentifier: string;
	keyLocation: number;
	keyName: string;
	type: string;
	
	getModifierState(keyIdentifier: string): boolean;
	initKeyboardEvent(eventName: string, bubble: boolean, isCancelable: boolean, view: any, keyID: string, keyLocation: number, modifiersList: string): void;
}

declare class MouseEvent extends UIEvent {
	altKey: boolean;
	button: number;
	clientX: number;
	clientY: number;
	ctrlKey: boolean;
	detail: number;
	metaKey: boolean;
	relatedTarget: any;
	screenX: number;
	screenY: number;
	shiftKey: boolean;
	type: string;
	
	getModifierState(keyIdentifier: string): boolean;
	initMouseEvent (eventName: string, bubble: boolean, isCancelable: boolean, view: any, detail: number, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, button: number, relatedTarget?: any): void;
}

declare class Window {
	static frameworkName: string;
	static version: string;
	
	static alert(message: string, title?: string, errorIcon?: boolean): void;
	static confirm(message: string, noAsDflt?: boolean, title?: string): boolean;
	static find(resourceName: string): Window;
	static find(type: string, title: string): Window;
	static prompt(message: string, preset: string, title?: string): string;

	constructor(type: string, title?: string, bounds?: Bounds, creation_properties?: {
		resizeable?: boolean,
		closeButton?: boolean,
		maximizeButton?: boolean,
		minimizeButton?: boolean,
		independent?: boolean,
		borderless?: boolean
	});

	active: boolean;
	alignChildren: string | [string, string];
	alignment: string | [string, string];
	bounds: Bounds;
	cancelElement: any;
	children: any[];
	defaultElement: any;
	enabled: boolean;
	frameBounds: Bounds;
	frameLocation: Point;
	frameSize: Dimension;
	graphics: ScriptUIGraphics;
	helpTip: string;
	layout: any;
	location: Point;
	margins: Margins;
	maximized: boolean;
	maximumSize: Dimension;
	minimized: boolean;
	minimumSize: Dimension;
	opacity: number;
	orientation: string;
	parent: any;
	preferredSize: Dimension;
	properties: any;
	resizeable: boolean;
	shortcutKey: string;
	size: Dimension;
	spacing: number;
	text: string;
	type: string;
	visible: boolean;
	window: Window;
	windowBounds: Bounds;

	add(type: string, ...others): any;
	addEventListener(eventName: string, handler: Function, capturePhase?: boolean): void;
	center(window?: Window): void;
	close(result?: number): void;
	dispatchEvent(eventObj: UIEvent): boolean;
	findElement(name: string): any;
	hide(): void;
	notify(event: string): void;
	remove(index: number): void;
	remove(text: string): void;
	remove(child: any): void;
	removeEventListener(eventName: string, handler: Function, capturePhase?: boolean): void;
	show(): any;
	update(): void;

	onActivate: Function | void;
	onClose: Function | void;
	onDeactivate: Function | void;
	onDraw: Function | void;
	onMove: Function | void;
	onMoving: Function | void;
	onResize: Function | void;
	onResizing: Function | void;
	onShortcutKey: Function | void;
	onShow: Function | void;
}

interface _TitleLayout {
	alignment: [string, string];
	characters: number;
	spacing: number;
	margins: Margins;
	justify: string;
	truncate: string;
}

declare class _Container {
	alignChildren: string | [string, string];
	alignment: string | [string, string];
	bounds: Bounds;
	characters: number;
	children: any[];
	enabled: boolean;
	graphics: ScriptUIGraphics;
	helpTip: string;
	layout: any;
	location: Point;
	margins: Margins;
	maximumSize: Dimension;
	minimumSize: Dimension;
	orientation: string;
	parent: any;
	preferredSize: Dimension;
	properties: any;
	size: Dimension;
	spacing: number;
	type: string;
	visible: boolean;
	window: Window;
	windowBounds: Bounds;
	
	add(type: string, ...others): any;
	addEventListener(eventName: string, handler: Function, capturePhase?: boolean): void;
	dispatchEvent(eventObj: UIEvent): boolean;
	findElement(name: string): any;
	hide(): void;
	notify(event: string): void;
	remove(index: number): void;
	remove(text: string): void;
	remove(child: any): void;
	removeEventListener(eventName: string, handler: Function, capturePhase?: boolean): void;
	show(): any;
	
	onDraw: Function | void;
}

declare class Panel extends _Container {
	text: string;
}

declare class TabbedPanel extends _Container {
	selection: Tab;
	text: string;
	title: string;
	titleLayout: _TitleLayout;
}

declare class Tab extends _Container {
	text: string;
}

declare class Group extends _Container {}

declare class __Control {
	addEventListener(eventName: string, handler: Function, capturePhase?: boolean): void;
	dispatchEvent(eventObj: UIEvent): boolean;
	hide(): void;
	notify(event: string): void;
	removeEventListener(eventName: string, handler: Function, capturePhase?: boolean): void;
	show(): any;
	
	onDraw: Function | void;
}

declare class _Control extends __Control {
	alignment: string | [string, string];
	bounds: Bounds;
	children: any[];
	enabled: boolean;
	graphics: ScriptUIGraphics;
	helpTip: string;
	indent: number;
	location: Point;
	maximumSize: Dimension;
	minimumSize: Dimension;
	parent: any;
	preferredSize: Dimension;
	properties: any;
	size: Dimension;
	type: string;
	visible: boolean;
	window: Window;
	windowBounds: Bounds;
}

declare class _ListControl extends _Control {
	items: ListItem[];
	itemSize: Dimension;
	
	add(type: string, text: string, index?: number): ListItem | void;
	find(text: string): ListItem | void;
	remove(index: number): void;
	remove(text: string): void;
	remove(child: ListItem): void;
	removeAll(): void;
	
	onChange: Function | void;
}

declare class Button extends _Control {
	active: boolean;
	justify: string;
	shortcutKey: string;
	text: string;
	
	onClick: Function | void;
	onShortcutKey: Function | void;
}

declare class Checkbox extends _Control {
	active: boolean;
	justify: string;
	shortcutKey: string;
	text: string;
	value: boolean;
	
	onClick: Function | void;
	onShortcutKey: Function | void;
}

declare class DropDownList extends _ListControl {
	active: boolean;
	selection: ListItem;
	shortcutKey: string;
	title: string;
	titleLayout: _TitleLayout;
	
	onShortcutKey: Function | void;
}

declare class EditText extends _Control {
	active: boolean;
	justify: string;
	shortcutKey: string;
	text: string;
	textselection: string;
	
	onChange: Function | void;
	onChanging: Function | void;
	onShortcutKey: Function | void;
}

declare class FlashPlayer extends _Control {
	active: boolean;
	shortcutKey: string;
	title: string;
	titleLayout: _TitleLayout;
	
	invokePlayerFunction(fnName: string, ...args): any;
	loadMovie(file: File): void;
	playMovie(rewind: boolean): void;
	stopMovie(): void;
	
	onShortcutKey: Function | void;
}

declare class IconButton extends _Control {
	active: boolean;
	icon: string | File;
	image: ScriptUI | string | File;
	shortcutKey: string;
	title: string;
	titleLayout: _TitleLayout;
	
	onClick: Function | void;
	onShortcutKey: Function | void;
}

declare class Image extends _Control {
	active: boolean;
	icon: string | File;
	image: ScriptUI | string | File;
	shortcutKey: string;
	title: string;
	titleLayout: _TitleLayout;
	
	onShortcutKey: Function | void;
}

declare class ListBox extends _ListControl {
	active: boolean;
	columns: {
		titles: string[],
		preferredWidths: number[]
	};
	selection: ListItem[];
	shortcutKey: string;
	
	revealItem(item: ListItem): void;

	onDoubleClick: Function | void;
	onShortcutKey: Function | void;
}

declare class ListItem extends __Control{
	checked: boolean;
	enabled: boolean;
	expanded: boolean;
	icon: string | File;
	image: ScriptUI | string | File;
	index: number;
	parent: any;
	properties: any;
	selected: boolean;
	subitems: {
		text: string;
		image: Image;
	}[];
	text: string;
	type: string;
	
	toString(): string;
	valueOf(): number;
}

declare class ProgressBar extends _Control {
	maxvalue: number;
	minvalue: number;
	text: string;
	value: number;
}

declare class RadioButton extends _Control {
	active: boolean;
	justify: string;
	shortcutKey: string;
	text: string;
	value: boolean;
	
	onClick: Function | void;
	onShortcutKey: Function | void;
}

declare class Scrollbar extends _Control {
	active: boolean;
	jumpdelta: number;
	maxvalue: number;
	minvalue: number;
	shortcutKey: string;
	stepdelta: number;
	value: number;
	
	onChange: Function | void;
	onChanging: Function | void;
	onShortcutKey: Function | void;
}

declare class Slider extends _Control {
	active: boolean;
	maxvalue: number;
	minvalue: number;
	shortcutKey: string;
	text: string;
	value: number;
	
	onChange: Function | void;
	onChanging: Function | void;
	onShortcutKey: Function | void;
}

declare class StaticText extends _Control {
	active: boolean;
	justify: string;
	shortcutKey: string;
	text: string;
	
	onShortcutKey: Function | void;
}

declare class TreeView extends _ListControl {
	active: boolean;
	selection: ListItem
	shortcutKey: string;
	
	onExpand: Function | void;
	onCollapse: Function | void;
	onShortcutKey: Function | void;
}