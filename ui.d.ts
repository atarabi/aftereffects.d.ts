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

declare class ScriptUIGraphics {
	BrushType: {SOLID_COLOR: number; THEME_COLOR: number;};
	PenType: {SOLID_COLOR: number; THEME_COLOR: number;};
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
	newBrush(brushType: number, color: [number, number, number, number] | string): ScriptUIBrush;
	newPath(): ScriptUIPath;
	newPen(penType: number, color: [number, number, number, number] | string, lineWidth: number): ScriptUIPen;
	rectPath(left: number, top: number, width?: number, height?: number): Point;
	strokePath(pen: ScriptUIPen): void;
}

declare class ScriptUIBrush {
	color: [number, number, number, number];
	theme: string;
	type: number;
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
	type: number;
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

declare class AutoLayoutManager {
	layout(recalculate?: boolean): void;
	resize(): void;
}

interface _TitleLayout {
	alignment: [string, string];
	characters: number;
	spacing: number;
	margins: Margins;
	justify: string;
	truncate: string;
}

declare class _WindowOrContainer {
	alignChildren: string | [string, string];
	alignment: string | [string, string];
	bounds: Bounds;
	children: any[];
	enabled: boolean;
	graphics: ScriptUIGraphics;
	helpTip: string;
	layout: AutoLayoutManager;
	location: Point;
	margins: Margins|number;
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
	
	add(button: string, bounds?: Bounds, text?: string, creation_properties?: {name?: string;}): any;
	add(checkbox: string, bounds?: Bounds, text?: string, creation_properties?: {name?: string;}): any;
	add(dropdownlist: string, bounds: Bounds, items?: string[], creation_properties?: {name?: string; items?: string[];}): any;
	add(edittext: string, bounds?: Bounds, text?: string, creation_properties?: {name?: string; readonly?: boolean; noecho?: boolean; enterKeySignalsOnChange?: boolean; borderless?: boolean; multiline?: boolean; scrollable?: boolean;}): any;
	add(flashplayer: string, bounds?: Bounds, movieToLoad?: string | File, creation_properties?: {name?: string;}): any;
	add(group: string, bounds?: Bounds, creation_properties?: {name?: string;}): any;
	add(iconbutton: string, bounds?: Bounds, icon?: string | File, creation_properties?: {name?: string; style?: string; toggle?: boolean;}): any;
	add(image: string, bounds?: Bounds, icon?: string | File, creation_properties?: {name?: string;}): any;
	add(listbox: string, bounds: Bounds, items?: string[], creation_properties?: {name?: string; multiselect?: boolean; items?: string[]; numberOfColumns?: number; showHeaders?: boolean; columnWidths?: number[]; columnTitles?: string[];}): any;
	add(panel: string, bounds?: Bounds, text?: string, creation_properties?: {name?: string; borderStyle?: string; su1PanelCoordinates?: boolean;}): any;
	add(progressbar: string, bounds?: Bounds, value?: number, minvalue?: number, maxvalue?: number, creation_properties?: {name?: string;}): any;
	add(radiobutton: string, bounds?: Bounds, text?: string, creation_properties?: {name?: string;}): any;
	add(scrollbar: string, bounds?: Bounds, value?: number, minvalue?: number, maxvalue?: number, creation_properties?: {name?: string;}): any;
	add(slider: string, bounds?: Bounds, value?: number, minvalue?: number, maxvalue?: number, creation_properties?: {name?: string;}): any;
	add(statictext: string, bounds?: Bounds, text?: string, creation_properties?: {name?: string; multiline?: boolean; scrolling?: boolean; truncate?: string;}): any;
	add(tab: string, bounds?: Bounds, text?: string, creation_properties?: {name?: string;}): any;
	add(tabbedpanel: string, bounds?: Bounds, text?: string, creation_properties?: {name?: string;}): any;
	add(treeview: string, bounds?: Bounds, items?: string[], creation_properties?: {name?: string; itmes?: string[];}): any;
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
	
	onDraw: Function;
	onActivate: Function;
	onClose: Function;
	onDeactivate: Function;
	onMove: Function;
	onMoving: Function;
	onResize: Function;
	onResizing: Function;
	onShortcutKey: Function;
	onShow: Function;
}

declare class Window extends _WindowOrContainer{
	static frameworkName: string;
	static version: string;
	
	static alert(message: string, title?: string, errorIcon?: boolean): void;
	static confirm(message: string, noAsDflt?: boolean, title?: string): boolean;
	static find(resourceName: string): Window;
	static find(type: string, title: string): Window;
	static prompt(message: string, preset: string, title?: string): string;

	constructor(type: string, title?: string, bounds?: Bounds, creation_properties?: {
		resizeable?: boolean;
		closeButton?: boolean;
		maximizeButton?: boolean;
		minimizeButton?: boolean;
		independent?: boolean;
		borderless?: boolean;
	});

	active: boolean;
	cancelElement: any;
	defaultElement: any;
	frameBounds: Bounds;
	frameLocation: Point;
	frameSize: Dimension;
	maximized: boolean;
	minimized: boolean;
	opacity: number;
	resizeable: boolean;
	shortcutKey: string;
	text: string;

	center(window?: Window): void;
	close(result?: number): void;
	update(): void;
}

declare class _Container extends _WindowOrContainer {
	characters: number;
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
	
	onDraw: Function;
	onEnterKey: Function;
	onActivate: Function;
	onDeactivate: Function;
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
	
	onChange: Function;
}

declare class Button extends _Control {
	active: boolean;
	justify: string;
	shortcutKey: string;
	text: string;
	
	onClick: Function;
	onShortcutKey: Function;
}

declare class Checkbox extends _Control {
	active: boolean;
	justify: string;
	shortcutKey: string;
	text: string;
	value: boolean;
	
	onClick: Function;
	onShortcutKey: Function;
}

declare class DropDownList extends _ListControl {
	active: boolean;
	selection: ListItem;
	shortcutKey: string;
	title: string;
	titleLayout: _TitleLayout;
	
	onShortcutKey: Function;
}

declare class EditText extends _Control {
	active: boolean;
	justify: string;
	shortcutKey: string;
	text: string;
	textselection: string;
	
	onChange: Function;
	onChanging: Function;
	onShortcutKey: Function;
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
	
	onShortcutKey: Function;
}

declare class IconButton extends _Control {
	active: boolean;
	icon: string | File;
	image: ScriptUI | string | File;
	shortcutKey: string;
	title: string;
	titleLayout: _TitleLayout;
	
	onClick: Function;
	onShortcutKey: Function;
}

declare class Image extends _Control {
	active: boolean;
	icon: string | File;
	image: ScriptUI | string | File;
	shortcutKey: string;
	title: string;
	titleLayout: _TitleLayout;
	
	onShortcutKey: Function;
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

	onDoubleClick: Function;
	onShortcutKey: Function;
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
	
	onClick: Function;
	onShortcutKey: Function;
}

declare class Scrollbar extends _Control {
	active: boolean;
	jumpdelta: number;
	maxvalue: number;
	minvalue: number;
	shortcutKey: string;
	stepdelta: number;
	value: number;
	
	onChange: Function;
	onChanging: Function;
	onShortcutKey: Function;
}

declare class Slider extends _Control {
	active: boolean;
	maxvalue: number;
	minvalue: number;
	shortcutKey: string;
	text: string;
	value: number;
	
	onChange: Function;
	onChanging: Function;
	onShortcutKey: Function;
}

declare class StaticText extends _Control {
	active: boolean;
	justify: string;
	shortcutKey: string;
	text: string;
	
	onShortcutKey: Function;
}

declare class TreeView extends _ListControl {
	active: boolean;
	selection: ListItem
	shortcutKey: string;
	
	onExpand: Function;
	onCollapse: Function;
	onShortcutKey: Function;
}