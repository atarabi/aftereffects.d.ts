/** Clears text from the Info panel. */
declare var claerOutput: () => void;

/** Converts string time value to a numeric time value. */
declare var currentFormatToTime: (formattedTime: string, fps: number, isDuration?: boolean) => number;

/** Converts a numeric time value to a string time value. */
declare var timeToCurrentFormat: (time: number, fps: number, isDuration?: boolean) => string;

/** Writes text to the Info panel, with no line break added. */
declare var write: (text: string) => void;

/** Writes text to the Info panel, adding a line break at the end. */
declare var writeLn: (text: string) => void;

/** When true, the specified object exists. */
declare var isValid: (obj: Object) => boolean;

/** Provides access to objects and application settings within the After Effects application. The single global object is always available by its name, app. */
declare class Application {
	/** The current After Effects project. */
	project: Project;
	
	/** The locale (language and region) in which the application is running. */
	isoLanguage: string;
	
	/** The version number of the After Effects application. */
	version: string;
	
	/** The name of this build of the application. */
	buildName: string;
	
	/** The number of this build of the application. */
	buildNumber: number;
	
	/** When true, the local application is running in Watch Folder mode. */
	isWatchFolder: boolean;
	
	/** When true, the local After Effects application is running as a render engine. */
	isRenderEngine: boolean;
	
	/** Application settings that can be set via scripting. */
	settings: Settings;
	
	/** A callback function that is called when an error occurs in the application. */
	onError: string;
	
	/** A numeric status code used when executing a script
		externally (that is, from a command line or AppleScript).
		0 if no error occurred. A positive number indicates an
		error that occurred while running the script. */
	exitCode: number;
	
	/** When true, the application remains open after running a script from the command line on Windows. */
	exitAfterLaunchAndEval: boolean;
	
	/** When true, the project is saved if the application closes unexpectedly. */
	saveProjectOnCrash: boolean;
	
	/** Memory in use by this application. */
	memoryInUse: number;
	
	/** The effects available in the application. */
	effects: {displayName: string, matchName: string, version: string, category: string}[];
	
	/** The currently focused or last-focused viewer panel. */
	activeViewer: Viewer;
	
	/** Creates a new project in After Effects. */
	newProject(): Project;
	
	/** Opens a project or an Open Project dialog box. */
	open(file?: File): Project;
	
	/** Quits the application. */
	quit(): void;
	
	/** Starts Watch Folder mode; does not return until Watch Folder mode is turned off. */
	watchFolder(folder_object_to_watch: Folder): void;
	
	/** Pauses a current watch-folder process. */
	pauseWatchFolder(pause: boolean): void;
	
	/** Ends a current watch-folder process. */
	endWatchFolder(): void;
	
	/** Purges a targeted type of cached information(replicates Purge options in the Edit menu). */
	purge(target: PurgeTarget): void;
	
	/** Groups the actions that follow it into a single undoable step. */
	beginUndoGroup(undoString: string): void;
	
	/** Ends an undo group; needed only when a script contains more than one undo group. */
	endUndoGroup(): void;
	
	/** Begins suppression of dialogs in the user interface. */
	beginSuppressDialogs(): void;
	
	/** Ends suppression of dialogs in the user interface. */
	endSuppressDialogs(alert: boolean): void;
	
	/** Sets memory usage limits as in the Memory & Cache preferences area. */
	setMemoryUsageLimits(imageCachePercentage: number, maximumMemoryPercentage: number): void;
	
	/** Sets whether preferences are saved when the application is quit. */
	setSavePreferencesOnQuit(doSave: boolean): void;
	
	/** Brings the After Effects main window to the front of the screen. */
	activate(): void;
	
	/** Schedules a JavaScript script for delayed execution. */
	scheduleTask(stringToExecute: string, delay: number, repeat: boolean): void;
	
	/** Cancels a scheduled task. */
	cancelTask(taskID: number): void;
	
	/** Loads a color swatch from an Adobe Swatch Exchange (ASE) file. */
	parseSwatchFile(file: File): void;
	
	findMenuCommandId(str: string): number;
	
	executeCommand(id: number): void;
}

/** The AVItem object provides access to attributes and methods of audio/visual files imported into After Effects. */
declare class AVItem extends Item {
	/** The name of the object as shown in the Project panel. */
	name: string;
	
	/** The width of the item. */
	width: number;
	
	/** The height of the item. */
	height: number;
	
	/** The pixel aspect ratio of the item. */
	pixelAspect: number;
	
	/** The frame rate of the item. */
	frameRate: number;
	
	/** The frame duration for the item. */
	frameDuration: number;
	
	/** The total duration of the item. */
	duration: number;
	
	/** When true, a proxy source is used for this item. */
	useProxy: boolean;
	
	/** The FootageItem object used as proxy for the item. */
	proxySource: FootageSource;
	
	/** Current time of the item. */
	time: number;
	
	/** The CompItem objects that use this item. */
	usedIn: CompItem[];
	
	/** When true, the item has a video component. */
	hasVideo: boolean;
	
	/** When true, the item has an audio component. */
	hasAudio: boolean;
	
	/** When true, the item cannot be found or is a placeholder. */
	footageMissing: boolean;
	
	/** Sets a proxy for the item. */
	setProxy(file: File): void;
	
	/** Sets a sequence as a proxy for the item. */
	setProxyWithSequence(file: File, forceAlphabetical: boolean): void;
	
	/** Sets a solid as a proxy for the item. */
	setProxyWithSolid(color: [number, number, number], name: string, width: number, height: number, pixelAspect: number): void;
	
	/** Sets a placeholder as a proxy for the item. */
	setProxyWithPlaceholder(name: string, width: number, height: number, frameRate: number, duration: number): void;
	
	/** Removes the proxy for the item. */
	setProxyToNone(): void;
}

/** The AVLayer object provides an interface to those layers that contain AVItem objects (composition layers, footage layers, solid layers, text layers, and sound layers). */
declare class AVLayer extends Layer {
	/** The source item for this layer. */
	source: AVItem;
	
	/** When true, the layer has no expressly set name, but contains a named source. */
	isNameFromSource: boolean;
	
	/**  The height of the layer.*/
	height: number;
	
	/** The width of the layer. */
	width: number;
	
	/** When true, the layer's audio is enabled. */
	audioEnabled: boolean;
	
	/** When true, the layer's motion blur is enabled. */
	motionBlur: boolean;
	
	/** When true, the layer's effects are active. */
	effectsActive: boolean;
	
	/** When true, this is an adjustment layer. */
	adjustmentLayer: boolean;
	
	/** When true, this is a guide layer. */
	guideLayer: boolean;
	
	/** When true, this is a 3D layer. */
	threeDLayer: boolean;
	
	/** When true, 3D is set on a per-character basis in this text layer. */
	threeDPerChar: boolean;
	
	/** When true, this is an environment layer. */
	environmentLayer: boolean;
	
	/** When true, it is legal to change the value of collapseTransformation. */
	canSetCollapseTransformation: boolean;
	
	/** When true, collapse transformation is on. */
	collapseTransformation: boolean;
	
	/** When true, frame blending is enabled. */
	frameBlending: boolean;
	
	/** The type of frame blending for the layer. */
	frameBlendingType: FrameBlendingType;
	
	/** When true, it is legal to change the value of timeRemapEnabled. */
	canSetTimeRemapEnabled: boolean;
	
	/** When true, time remapping is enabled on this layer. */
	timeRemapEnabled: boolean;
	
	/** When true, the layer contains an audio component. */
	hasAudio: boolean;
	
	/** When true, the layer's audio is active at the current time. */
	audioActive: boolean;
	
	/** The blending mode of the layer. */
	blendingMode: BlendingMode;
	
	/** When true, preserve transparency is enabled. */
	preserveTransparency: boolean;
	
	/** if layer has a track matte, specifies the way it is applied. */
	trackMatteType: TrackMatteType;
	
	/** When true, this layer is being used as a track matte for the layer below it. */
	isTrackMatte: boolean;
	
	/** When true, the layer above is being used as a track matte on this layer. */
	hasTrackMatte: boolean;
	
	/** The layer quality setting. */
	quality: LayerQuality;
	
	/** The type of automatic orientation for the layer. */
	autoOrient: AutoOrientType;
	
	/** The layer sampling quality setting. */
	samplingQuality: LayerSamplingQuality;
	
	/** Reports whether this layer's audio is active at a given time. */
	audioActiveAtTime(time: number): boolean;
	
	/** Calculates a transformation from a set of points in this layer. */
	calculateTransformFromPoints(pointTopLeft: [number, number, number], pointTopRight: typeof pointTopLeft, pointBottomRight: typeof pointTopLeft): Object;
	
	/** Changes the source item for this layer. */
	replaceSource(newSource: AVItem, fixExpressions: boolean): void;
	
	/** Retrieves the source rectangle of a layer. */
	sourceRectAtTime(timeT: number, extents: boolean): void;
	
	/** Opens the layer in a Layer panel. */
	openInViewer(): void;
}

/** The CameraLayer object represents a camera layer within a composition. Create it using the LayerCollection object’s addCamera method */
declare class CameraLayer extends Layer { }

/** Like an array, a collection associates a set of objects or values as a logical group and provides access to them by index. However, most collection objects are read-only. You do not assign objects to them yourself—their contents update automatically as objects are created or deleted. */
declare class Collection {
	/** The number of objects in the collection. */
	length: number;
}

/** The CompItem object represents a composition, and allows you to manipulate and get information about it. Access the objects by position index number in a project’s item collection. */
declare class CompItem extends AVItem {
	/** The duration of a single frame. */
	frameDuration: number;
	
	/** When true, indicates that the composition uses drop-frame timecode. */
	dropFrame: boolean;
	
	/** The work area start time. */
	workAreaStart: number;
	
	/** The work area duration. */
	workAreaDuration: number;
	
	/** The number of layers in the composition. */
	numLayers: number;
	
	/** When true, shy layers are visible in the Timeline panel. */
	hideShyLayers: boolean;
	
	/** When true, motion blur is enabled for this composition. */
	motionBlur: boolean;
	
	/** When true, Draft 3D mode is enabled for the Composition panel. */
	draft3d: boolean;
	
	/** When true, time filtering is enabled for this composition. */
	frameBlending: boolean;
	
	/** When true, the frame rate of nested compositions is preserved. */
	preserveNestedFrameRate: boolean;
	
	/** When true, the resolution of nested compositions is preserved. */
	preserveNestedResolution: boolean;
	
	/** The background color of the composition. */
	bgColor: [number, number, number];
	
	/** The current active camera layer. */
	activeCamera: CameraLayer;
	
	/** Changes the display of the start time in the Timeline panel. */
	displayStartTime: number;
	
	/** The factor by which the x and y resolution of the Composition panel is downsampled. */
	resolutionFactor: [number, number];
	
	/** The camera shutter angle. */
	shutterAngle: number;
	
	/** The camera shutter phase. */
	shutterPhase: number;
	
	/** The minimum number of motion blur samples per frame for Classic 3D layers, shape layers, and certain effects. */
	motionBlurSamplesPerFrame: number;
	
	/** The maximum number of motion blur samples of 2D layer motion. */
	motionBlurAdaptiveSampleLimit: number;
	
	/** The layers of the composition. */
	layers: LayerCollection;
	
	/** The selected layers of the composition. */
	selectedLayers: Layer[];
	
	/** The selected properties of the composition. */
	selectedProperties: PropertyBase[];
	
	/** The rendering plug-in module to be used to render this composition. */
	renderer: string;
	
	/** The set of available rendering plug-in modules. */
	renderers: string[];
	
	/** Creates and returns a duplicate of this composition. */
	duplicate(): CompItem;
	
	/** Gets a layer from this composition. */
	layer(index: number): Layer;
	layer(otherLayer: Layer, relIndex: number): Layer;
	layer(name: string): Layer;
	
	/** Opens the composition in a Composition panel. */
	openInViewer(): Viewer;
}

/** The FileSource object describes footage that comes from a file. */
declare class FileSource extends FootageSource {
	/** The file that defines this asset. */
	file: File;
	
	/** The file that contains footage missing from this asset. */
	missingFootagePath: string;	
	
	/** Reloads the asset from the file, if it is a mainSource of a FootageItem. */
	reload(): void;
}

/** The FolderItem object corresponds to a folder in your Project panel. It can contain various types of items (footage, compositions, solids) as well as other folders. */
declare class FolderItem extends Item {
	/** The contents of this folder. */
	items: ItemCollection;
	
	/** The number of items contained in the folder. */
	numItems: number;
	
	/** Gets an item from the folder. */
	item(index: number): Item;
}

/** The FootageItem object represents a footage item imported into a project, which appears in the Project panel. These are accessed by position index number in a project’s item collection. */
declare class FootageItem extends AVItem {
	/** The footage source file. */
	file: File;
	 
	/** All settings related to the footage item. */
	mainSource: FootageSource;
	 
	/** Replaces a footage file with another footage file. */
	replace(file: File): void;
	 
	/** Replaces a footage file with a placeholder object. */
	replaceWithPlaceholder(name: string, width: number, height: number, frameRate: number, duration: number): void;
	 
	/** Replaces a footage file with an image sequence. */
	replaceWithSequence(file: File, forceAlphabetical: boolean): void;
	 
	/** Replaces a footage file with a solid. */
	replaceWithSolid(color: [number, number, number], name: string, width: number, height: number, pixelAspect: number): void;
	 
	/** Opens the footage in a Footage panel. */
	openInViewer(): Viewer;
} 

declare class PlaceholderItem extends FootageItem {}
 
/** The FootageSource object holds information describing the source of some footage. It is used as the mainSource of a FootageItem, or the proxySource of a CompItem or FootageItem. */
declare class FootageSource {
	/** When true, a footage clip or proxy includes an alpha channel. */
	hasAlpha: boolean;
	 
	/** The mode of an alpha channel. */
	alphaMode: AlphaMode;
	 
	/** The color to be premultiplied. */
	premulColor: [number, number, number];
	 
	/** When true, an alpha channel in a footage clip or proxy should be inverted. */
	invertAlpha: boolean;
	 
	/** When true, footage is a still image. */
	isStill: boolean;
	 
	/** The field separation type. */
	fieldSeparationType: FieldSeparationType;
	 
	/** How the fields are to be separated in non-still footage. */
	highQualityFieldSeparation: boolean;
	 
	/** The pulldown type for the footage. */
	removePulldown: PulldownPhase;
	 
	/** How many times an image sequence is set to loop. */
	loop: number;
	 
	/** The native frame rate of the footage. */
	nativeFrameRate: number;
	 
	/** The effective frame rate as displayed and rendered in compositions by After Effects. */
	displayFrameRate: number;
	 
	/** The rate to which footage should conform. */
	conformFrameRate: number;
	 
	/** Estimates the alphaMode setting. */
	guessAlphaMode(): void;
	 
	/** Estimates the pulldownType setting. */
	guessPulldown(method: PulldownMethod): void;
}
 
/** The ImportOptions object encapsulates the options used to import a file with the Project.importFile methods. */
declare class ImportOptions {
	constructor(file?: File);
	 
	/** The type of file to be imported. */
	importAs: ImportAsType;
	 
	/** When true, import a sequence of files, rather than an individual file. */
	sequence: boolean;
	 
	/** When true, the “Force alphabetical order” option is set. */
	forceAlphabetical: boolean;
	 
	/** The file to import, or the first file of the sequence to import. */
	file: File;
	 
	/** Restricts input to a particular file type. */
	canImportAs(type: ImportAsType): boolean;
}
 
/** The Item object represents an item that can appear in the Project panel. */
declare class Item {
	/** The name of the object as shown in the Project panel. */
	name: string;
	 
	/** A descriptive string. */
	comment: string;
	 
	/** A unique identifier for this item. */
	id: number;
	 
	/** The parent folder of this item. */
	parentFolder: FolderItem;
	 
	/** When true, this item is currently selected. */
	selected: boolean;
	 
	/** The type of item. */
	typeName: string;
	 
	/** The label color for the item. */
	label: number;
	 
	/** Deletes the item from the project. */
	remove(): void;
}
 
/** The ItemCollection object represents a collection of items. The ItemCollection belonging to a Project object contains all the Item objects for items in the project. The ItemCollection belonging to a FolderItem object contains all the Item objects for items in that folder. */
declare class ItemCollection extends Collection {
	/** Creates a new CompItem object and adds it to the collection. */
	addComp(name: string, width: number, height: number, pixelAspect: number, duration: number, frameRate: number): CompItem;
	 
	/** Creates a new FolderItem object and adds it to the collection. */
	addFolder(name: string): FolderItem;
}
 
/** The KeyframeEase object encapsulates the keyframe ease settings of a layer’s AE property. Keyframe ease is determined by the speed and influence values that you set using the property’s setTemporalEaseAtKey method. */
declare class KeyframeEase {
	constructor(speed: number, influence: number);
	 
	/** The speed setting for a keyframe. */
	speed: number;
	 
	/** The influence setting for a keyframe. */
	influence: number;
}

/** The Layer object provides access to layers within compositions. It can be accessed from an item’s layer collection either by index number or by a name string. */
declare class Layer {
	/** The index position of the layer. */
	index: number;
	
	/** The name of the layer. */
	name: string;
		
	/** The parent of this layer. */
	parent: Layer;
	
	/** The current time of the layer. */
	time: number;
	
	/** The start time of the layer. */
	startTime: number;
	
	/** The time stretch percentage of the layer. */
	stretch: number;
	
	/** The “in” point of the layer. */
	inPoint: number;
	
	/** The “out” point of the layer. */
	outPoint: number;
	
	/** When true, the layer is enabled. */
	enabled: boolean;
	
	/** When true, the layer is soloed. */
	solo: boolean;
	
	/** When true, the layer is shy. */
	shy: boolean;
	
	/** When true, the layer is locked. */
	locked: boolean;
	
	/** When true, the layer contains a video component. */
	hasVideo: boolean;
	
	/** When true, the layer is active at the current time. */
	active: boolean;
	
	/** When true, this is a null layer. */
	nullLayer: boolean;
	
	/** All selected AE properties in the layer. */
	selectedProperties: PropertyBase[];
	
	/** A descriptive comment for the layer. */
	comment: string;
	
	/** The composition that contains this layer. */
	containingComp: CompItem;
	
	/** When true, the layer’s name has been explicitly set. */
	isNameSet: boolean;
	
	/** Deletes the layer from the composition. */
	remove(): void;
	
	/** Moves the layer to the top of the composition (makes it the first layer). */
	moveToBeginning(): void;
	
	/** Moves the layer to the bottom of the composition (makes it the last layer). */
	moveToEnd(): void;
	
	/** Moves the layer below another layer. */
	moveAfter(layer: Layer): void;
	
	/** Moves the layer above another layer. */
	moveBefore(layer: Layer): void;
	
	/** Duplicates the layer. */
	duplicate(): Layer;
	
	/** Copies the layer to the top (beginning) of another composition. */
	copyToComp(intoComp: CompItem): void;
	
	/** Reports whether this layer will be active at a specified time. */
	activeAtTime(time: number): boolean;
	
	/** Sets a new parent for this layer. */
	setParentWithJump(newParent?: Layer): void;
	
	/** Applies a named collection of animation settings to the layer. */
	applyPreset(presetName: File): void;
	
	//From Property
	matchName: string;
	propertyDepth: number;
	propertyType: PropertyType;
	selected: boolean;
	numProperties: number;
	
	propertyGroup(countUp?: number): PropertyGroup;
	property(index: number): PropertyBase;
	property(name: string): PropertyBase;
}

/** The LayerCollection object represents a set of layers. The LayerCollection belonging to a CompItem object contains all the layer objects for layers in the composition. The methods of the collection object allow you to manipulate the layer list. */
declare class LayerCollection extends Collection {
	/** Creates a new AVLayer and adds it to this collection. */
	add(item: AVItem, duration?: number): AVLayer;
	
	/** Creates a new, null layer and adds it to this collection. */
	addNull(duration?: number): AVLayer;	
	
	/** Creates a new layer, a FootageItem with a SolidSource, and adds it to this collection. */
	addSolid(color: [number, number, number], name: string, width: number, height: number, pixelAspect: number, duration?: number): AVLayer;
	
	/** Creates a new point text layer and adds it to this collection. */
	addText(sourceText?: string | TextDocument): TextLayer;
	
	/** Creates a new paragraph (box) text layer and adds it to this collection. */
	addBoxText(size: [number, number], sourceText?: string | TextDocument): TextLayer;
	
	/** Creates a new camera layer and adds it to this collection. */
	addCamera(name: string, centerPoint: [number, number]): CameraLayer;
	
	/** Creates a new light layer and adds it to this collection. */
	addLight(name: string, centerPoint: [number, number]): LightLayer;
	
	/** Creates a new shape layer and adds it to this collection. */
	addShape(): ShapeLayer;
	
	/** Retrieves the layer object with a specified name. */
	byName(name: string): Layer;
	
	/** Collects specified layers into a new composition. */
	precompose(layerIndicies: number[], name: string, moveAllAttributes?: boolean): CompItem;
}

/** The LightLayer object represents a light layer within a composition. Create it using the LayerCollection object’s addLight method */
declare class LightLayer extends Layer {
	/** For light layers, the type of light. */
	lightType: LightType;
}

/** The MarkerValue object represents a layer marker, which associates a comment, and optionally a chapter reference point, Web-page link, or Flash Video cue point with a particular point in a layer. */
declare class MarkerValue {
	constructor(comment: string, chapter?: string, url?: string, frameTarget?: string, cuePointName?: string, params?: string);
	
	/** A comment on the associated layer. */
	comment: string;
	
	/** The amount of time represented by the marker. */
	duration: number;
	
	/** A chapter link reference point for the associated layer. */
	chapter: string;
	
	/** The Flash Video cue point name. */
	cuePointName: string;
	
	/** Whether the Flash Video cue point is for an event or navigation. */
	eventCuePoint: boolean;
	
	/** A URL for Web page to be associated with the layer. */
	url: string;
	
	/** A specific frame target within the Web page specified by url. */
	frameTarget: string;
	
	/** Retrieves the key-value pairs associated with the marker value. */
	getParameters(): Object;
	
	/** Sets the key-value pairs associated with the marker value. */
	setParameters(keyValuePairs: Object): void;
}

/** The MaskPropertyGroup object encapsulates mask attributes in a layer. */
declare class MaskPropertyGroup extends PropertyGroup {
	/** The mask mode. */
	maskMode: MaskMode;
	
	/** When true, the mask is inverted. */
	inverted: boolean;
	
	/** When true, the shape of the mask is RotoBezier. */
	rotoBezier: boolean;
	
	/** How motion blur is applied to this mask. */
	maskMotionBlur: MaskMotionBlur;
	
	/** When true, the mask is locked. */
	locked: boolean;
	
	/** The color used to draw the mask outline in the user interface. */
	color: [number, number, number];
	
	/** The feather falloff mode for the mask. */
	maskFeatherFalloff: MaskFeatherFalloff;
}

/** The OMCollection contains all of the output modules in a render queue. The collection provides access to the OutputModule objects, but does not provide any additional functionality. The first OutputModule object in the collection is at index position 1. */
declare class OMCollection extends Collection {}

/** An OutputModule object of a RenderQueueItem generates a single file or sequence via a render operation, and contains attributes and methods relating to the file to be rendered. */
declare class OutputModule {
	/** The path and name of the file to be rendered. */
	file: File;
	
	/** An action to be taken after rendering. */
	postRenderAction: PostRenderAction;
	
	/** The user-interface name of the output module. */
	name: string;
	
	/** All templates for the output module */
	templates: string[];
	
	/** When true, writes all source footage XMP metadata to the output file. */
	includeSourceXMP: boolean;
	
	/** Removes this output module from the render-queue item’s list. */
	remove(): void;
	
	/** Saves a new output-module template. */
	saveAsTemplate(name: string): void;
	
	/** Applies an output-module template. */
	applyTemplate(templateName: string): void;
	
	getSetting(key: string): string | number;
	
	getSettings(format?: GetSettingsFormat): {
    'Audio Bit Depth';
    'Audio Channels';
    'Audio Sample Rate';
    'Channels';
    'Color';
    'Crop';
    'Crop Bottom';
    'Crop Left';
    'Crop Right';
    'Crop Top';
    'Depth';
    'Format';
    'Include Project Link';
    'Include Source XMP Metadata';
    'Lock Aspect Ratio';
    'Output Audio';
    'Output File Info';
    'Post-Render Action';
    'Resize';
    'Resize Quality';
    'Resize to';
    'Starting #';
    'Use Comp Frame Number';
    'Use Region of Interest';
    'Video Output';
  };
	
	setSetting(key: string, value: string | number): void;
	
	setSettings(settings: Object): void;	
}

/** The PlaceholderSource object describes the footage source of a placeholder. */
declare class PlaceholderSource extends FootageSource {}

/** The project object represents an After Effects project. Attributes provide access to specific objects within the project, such as imported files or footage and compositions, and also to project settings such as the timecode base. Methods can import footage, create solids, compositions and folders, and save changes. */
declare class Project {
	/** The file for the currently open project. */
	file: File;
	
	/** The folder containing all the contents of the project; the equivalent of the Project panel */
	rootFolder: FolderItem;
	
	/** All items in the project. */
	items: ItemCollection;
	
	/** The currently active item. */
	activeItem: Item;
	
	/** The color depth of the current project. */
	bitsPerChannel: number;
	
	/** When true, thumbnail views use the transparency checkerboard pattern. */
	transparencyGridThumbnails: boolean;
	
	/** The total number of items contained in the project. */
	numItems: number;
	
	/** All items selected in the Project panel. */
	selection: Item[];
	
	/** The project’s render queue. */
	renderQueue: RenderQueue;
	
	/** The time display style, corresponding to the Time Display Style section in the Project Settings dialog box. */
	timeDisplayType: TimeDisplayType;
	
	/** The Footage Start Time setting in the Project Settings dialog box, which is enabled when Timecode is selected as the time display style. */
	footageTimecodeDisplayStartType: FootageTimecodeDisplayStartType;
	
	/** The Use Feet + Frames setting in the Project Settings dialog box. */
	framesUseFeetFrames: boolean;
	
	/** The Use Feet + Frames menu setting in the Project Settings dialog box. */
	feetFramesFilmType: FeetFramesFilmType;
	
	/** The Frame Count menu setting in the Project Settings dialog box. */
	framesCountType: FramesCountType;
	
	/** The frame at which to start numbering when displaying the project. */
	displayStartFrame: number;
	
	/** When true, linear blending is used for the project. */
	linearBlending: boolean;
	
	/** The project’s XMP metadata. */
	xmpPacket: string;
	
	/** Retrieves an item from the project. */
	item(index: number): Item;
	
	/** Consolidates all footage in the project. */
	consolidateFootage(): number;
	
	/** Removes unused footage from the project. */
	removeUnusedFootage(): number;
	
	/** Reduces the project to a specified set of items. */
	reduceProject(array_of_items: Item[]): number;
	
	/** Closes the project with normal save options. */
	close(closeOptions: CloseOptions): boolean;
	
	/** Saves the project. */
	save(file?: File): void;
	
	/** Displays a Save dialog box. */
	saveWithDialog(): boolean;
	
	/** Imports a placeholder into the project. */
	importPlaceholder(name: string, width: number, height: number, frameRate: number, duration: number): PlaceholderItem;
	
	/** Imports a file into the project. */
	importFile(importOptions: ImportOptions): FootageItem;
	
	/** Displays an Import File dialog box. */
	importFileWithDialog(): Item[];
	
	/** Shows or hides the Project panel. */
	showWindow(doShow: boolean): void;
	
	/** Automatically replaces text in all expressions. */
	autoFixExpressions(oldText: string, newText: string): void;
}

declare type PropertyValue = void | number | [number, number] | [number, number, number] | [number, number, number, number] | MarkerValue | Shape | TextDocument;

/** The Property object contains value, keyframe, and expression information about a particular AE property of a layer. */
declare class Property extends PropertyBase {
	/** Type of value stored in this property. */
	propertyValueType: PropertyValueType;
	
	/** Current value of the property. */
	value: PropertyValue;
	
	/** When true, there is a minimum permitted value. */
	hasMin: boolean;
	
	/** When true, there is a maximum permitted value. */
	hasMax: boolean;
	
	/** The minimum permitted value. */
	minValue: number;
	
	/** The maximum permitted value. */
	maxValue: number;
	
	/** When true, the property defines a spatial value. */
	isSpatial: boolean;
	
	/** When true, the property can be keyframed. */
	canVaryOverTime: boolean;
	
	/** When true, the property has keyframes or an expression enabled that can vary its values. */
	isTimeVarying: boolean;
	
	/** The number of keyframes on this property. */
	numKeys: number;
	
	/** A text description of the units in which the value is expressed. */
	unitsText: string;
	
	/** The expression string for this property. */
	expression: string;
	
	/** When true, the expression can be set by a script. */
	canSetExpression: boolean;
	
	/** When true, the expression is used to generate values for the property. */
	expressionEnabled: boolean;
	
	/** The error, if any, that occurred when the last expression was evaluated. */
	expressionError: string;
	
	/** All selected keyframes of the property. */
	selectedKeys: number[];
	
	/** The position index of this property. */
	propertyIndex: number;
	
	/** When true, the property’s dimensions are represented as separate properties. */
	dimensionsSeparated: boolean;
	
	/** When true, the property represents one of the separated dimensions for a multidimensional property. */
	isSeparationFollower: boolean;
	
	/** When true, the property is multidimensional and can be separated. */
	isSeparationLeader: boolean;
	
	/** For a separated follower, the dimension it represents in the multidimensional leader. */
	separationDimension: number;
	
	/** The original multidimensional property for this separated follower. */
	separationLeader: Property;
	
	/** Gets the value of the property evaluated at given time. */
	valueAtTime(time: number, preExpression: boolean): PropertyValue;
	
	/** Sets the static value of the property. */
	setValue(newValue: PropertyValue): void;
	
	/** Creates a keyframe for the property. */
	setValueAtTime(time: number, newValue: PropertyValue): void;
	
	/** Creates a set of keyframes for the property. */
	setValuesAtTimes(times: number[], newValues: PropertyValue[]): void;
	
	/** Finds a keyframe and sets the value of the property at that keyframe. */
	setValueAtKey(keyIndex: number, newValue: PropertyValue): void;
	
	/** Gets the keyframe nearest to a specified time. */
	nearestKeyIndex(time: number): number;
	
	/** Gets the time at which a condition occurs. */
	keyTime(keyIndex: number): number;
	keyTime(markerComment: string): number;
	
	/** Gets the value of a keyframe at the time at which a condition occurs. */
	keyValue(keyIndex: number): PropertyValue;
	keyValue(markerComment: string): MarkerValue;
	
	/** Adds a new keyframe to the property at a given time. */
	addKey(time: number): number;
	
	/** Removes a keyframe from the property. */
	removeKey(keyIndex: number): void;
	
	/** When true, this property can be interpolated. */
	isInterpolationTypeValid(type: KeyframeInterpolationType): boolean;
	
	/** Sets the interpolation type for a key. */
	setInterpolationTypeAtKey(keyIndex: number, inType: KeyframeInterpolationType, outType: KeyframeInterpolationType): void;
	
	/** Gets the 'in' interpolation type for a key. */
	keyInInterpolationType(keyIndex: number): KeyframeInterpolationType;
	
	/** Gets the 'out' interpolation type for a key. */
	keyOutInterpolationType(keyIndex: number): KeyframeInterpolationType;
	
	/** Sets the “in” and “out” tangent vectors for a key. */
	setSpatialTangentsAtKey(keyIndex: number, inTangent: [number, number], outTangent: typeof inTangent): void;
	setSpatialTangentsAtKey(keyIndex: number, inTangent: [number, number, number], outTangent: typeof inTangent): void;
	
	/** Gets the “in” spatial tangent for a key. */
	keyInSpatialTangent(keyIndex: number): [number, number] | [number, number, number];
	
	/** Gets the “out” spatial tangent for a key. */
	keyOutSpatialTangent(keyIndex: number): [number, number] | [number, number, number];
	
	/** Sets the “in” and “out” temporal ease for a key. */
	setTemporalEaseAtKey(keyIndex: number, inTemporalEase: [KeyframeEase], outTemporalEase: typeof inTemporalEase): void;
	setTemporalEaseAtKey(keyIndex: number, inTemporalEase: [KeyframeEase, KeyframeEase], outTemporalEase: typeof inTemporalEase): void;
	setTemporalEaseAtKey(keyIndex: number, inTemporalEase: [KeyframeEase, KeyframeEase, KeyframeEase], outTemporalEase: typeof inTemporalEase): void;
	
	/** Gets the “in” temporal ease for a key. */
	keyInTemporalEase(keyIndex: number): [KeyframeEase] | [KeyframeEase, KeyframeEase] | [KeyframeEase, KeyframeEase, KeyframeEase];
	
	/** Gets the “out” temporal ease for a key. */
	keyOutTemporalEase(keyIndex: number): [KeyframeEase] | [KeyframeEase, KeyframeEase] | [KeyframeEase, KeyframeEase, KeyframeEase];
	
	/** Sets whether a keyframe has temporal continuity. */
	setTemporalContinuousAtKey(keyIndex: number, newVal: boolean): void;
	
	/** Reports whether a keyframe has temporal continuity. */
	keyTemporalContinuous(keyIndex: number): boolean;
	
	/** Sets whether a keyframe has temporal auto-Bezier. */
	setTemporalAutoBezierAtKey(keyIndex: number, newVal: boolean): void;
	
	/** Reports whether a keyframe has temporal auto-Bezier. */
	keyTemporalAutoBezier(keyIndex: number): boolean;
	
	/** Sets whether a keyframe has spatial continuity. */
	setSpatialContinuousAtKey(keyIndex: number, newVal: boolean): void;
	
	/** Reports whether a keyframe has spatial continuity. */
	keySpatialContinuous(keyIndex: number): boolean;
	
	/** Sets whether a keyframe has spatial auto-Bezier. */
	setSpatialAutoBezierAtKey(keyIndex: number, newVal: boolean): void;
	
	/** Reports whether a keyframe has spatial auto-Bezier. */
	keySpatialAutoBezier(keyIndex: number): boolean;
	
	/** Sets whether a keyframe is roving. */
	setRovingAtKey(keyIndex: number, newVal: boolean): void;
	
	/** Reports whether a keyframe is roving. */
	keyRoving(keyIndex: number): boolean;
	
	/** Sets whether a keyframe is selected. */
	setSelectedAtKey(keyIndex: number, onOff: boolean): void;
	
	/** Reports whether a keyframe is selected. */
	keySelected(keyIndex: number): boolean;
	
	/** For a separated, multidimensional property, retrieves a specific follower property. */
	getSeparationFollower(dim: number): Property;
}

/** Properties are accessed by name through layers, using various kinds of expression syntax, as controlled by application preferences. */
declare class PropertyBase {
	/** Name of the property. */
	name: string;
	
	/** A special name for the property used to build unique naming paths. */
	matchName: string;
	
	/** Index of this property within its parent group. */
	propertyIndex: number;
	
	/** The number of levels of parent groups between this property and the containing layer. */
	propertyDepth: number;
	
	/** The property type. */
	propertyType: PropertyType;
	
	/** The immediate parent group of this property. */
	parentProperty: PropertyGroup;
	
	/** When true, the property has been changed since its creation. */
	isModified: boolean;
	
	/** When true, the user interface displays an eyeball icon for this property. */
	canSetEnabled: boolean;
	
	/** When true, this property is enabled. */
	enabled: boolean;
	
	/** When true, this property is active. */
	active: boolean;
	
	/** When true, this property is not displayed in the user interface. */
	elided: boolean;
	
	/** When true, this property is an effect. */
	isEffect: boolean;
	
	/** When true, this property is a mask. */
	isMask: boolean;
	
	/** When true, this property is selected. */
	selected: boolean;
	
	/** Gets the parent group for this property. */
	propertyGroup(countUp?: number): PropertyGroup;
	
	/** Removes this from the project. */
	remove(): void;
	
	/** Moves this property to a new position in its parent group. */
	moveTo(newIndex: number): void;
	
	/** Duplicates this property object. */
	duplicate(): PropertyBase;
}

/** The PropertyGroup object represents a group of properties. It can contain Property objects and other PropertyGroup objects. Property groups can be nested to provide a parent-child hierarchy, with a Layer object at the top (root) down to a single Property object, such as the mask feather of the third mask. To traverse the group hierarchy, use PropertyBase methods and attributes. */
declare class PropertyGroup  extends PropertyBase {
	/** The number of indexed properties in the group. */
	numProperties: number;
	
	/** Gets a member property or group. */
	property(index: number): PropertyBase;
	property(name: string): PropertyBase;
	
	/** Reports whether a property can be added to the group. */
	canAddProperty(name: string): boolean;
	
	/** Adds a property to the group. */
	addProperty(name: string): PropertyBase;
}

/** The RenderQueue object represents the render automation process, the data and functionality that is available through the Render Queue panel of a particular After Effects project. Attributes provide access to items in the render queue and their render status. Methods can start, pause, and stop the rendering process. */
declare class RenderQueue {
	/** When true, a render is in progress. */
	rendering: boolean;
	
	/** The total number of items in the render queue. */
	numItems: number;
	
	/** The collection of items in the render queue. */
	items: RQItemCollection;
	
	/** Show or hides the Render Queue panel. */
	showWindow(doShow: boolean): void;
	
	/** Starts the rendering process; does not return until render is complete. */
	render(): void;
	
	/** Pauses or restarts the rendering process. */
	pauseRendering(pause: boolean): void;
	
	/** Stops the rendering process. */
	stopRendering(): void;
	
	/** Gets a render-queue item from the collection. */
	item(index: RenderQueueItem): Item;
}

/** The RenderQueueItem object represents an individual item in the render queue. It provides access to the specific settings for an item to be rendered. Create the object by adding a composition to the Render Queue with the RQItemCollection object; */
declare class RenderQueueItem {
	/** The total number of Output Modules assigned to the item. */
	numOutputModules: number;
	
	/** When true, this item is rendered when the queue is started. */
	render: boolean;
	
	/** The time when rendering began for the item. */
	startTime: Date;
	
	/** The time elapsed in the current rendering of this item. */
	elapsedSeconds: number;
	
	/** The start time in the composition to be rendered. */
	timeSpanStart: number;
	
	/** The duration of the composition to be rendered. */
	timeSpanDuration: number;
	
	/** The number of frames to skip when rendering this item. */
	skipFrames: number;
	
	/** The composition to be rendered by this item. */
	comp: CompItem;
	
	/** The collection of Output Modules for this item. */
	outputModules: OMCollection;
	
	/** A set of Render Settings templates. */
	templates: string[];
	
	/** The current rendering status of the item. */
	status: RQItemStatus;
	
	/** A callback function that is called during the rendering process when the status of the item changes. */
	onStatusChanged: string;
	
	/** A log type for this item. */
	logType: LogType;
	
	/** Gets an Output Module for the item. */
	outputModule(index: number): OutputModule;
	
	/** Removes the item from the render queue. */
	remove(): void;
	
	/** Saves a new Render Settings template. */
	saveAsTemplate(name: string): void;
	
	/** Applies a Render Settings template. */
	applyTemplate(templateName: string): void;
	
	/** Duplicates this item. */
	duplicate(): RenderQueueItem;
	
	getSetting(key: string): string | number;
	
	getSettings(format: GetSettingsFormat): Object;
	
	setSetting(key: string, value: string | number): void;
	
	setSettings(settings: Object): void;	
}

/** The RQItemCollection contains all of the render-queue items in a project, as shown in the Render Queue panel of the project. The collection provides access to the RenderQueueItem objects, and allows you to create them from compositions. The first RenderQueueItem object in the collection is at index position 1. */
declare class RQItemCollection extends Collection {
	/** Adds a composition to the Render Queue. */
	add(comp: CompItem): RenderQueueItem;
}

/** The Settings object provides an easy way to manage settings for scripts. The settings are saved in the After Effects preferences file and are persistent between application sessions. Settings are identified by section and key within the file, and each key name is associated with a value. In the preferences file, section names are enclosed in brackets and quotation marks, and key names are listing in quotation marks below the section name. All values are strings. */
declare class Settings {
	/** Saves a default value for a setting. */
	saveSetting(sectionName: string, keyName: string, value: string, type?: PREFType): void;
	
	/** Retrieves a setting value. */
	getSetting(sectionName: string, keyName: string, type?: PREFType): string;
	
	/** Reports whether a specified setting is assigned. */
	haveSetting(sectionName: string, keyName: string, type?: PREFType): boolean;
}

/** The Shape object encapsulates information describing a shape in a shape layer, or the outline shape of a Mask. */
declare class Shape {
	/** When true, the shape is a closed curve. */
	closed: boolean;
	
	/** The anchor points of the shape. */
	vertices: [number, number][];
	
	/** The tangent vectors coming into the shape vertices. */
	inTangents: [number, number][];
	
	/** The tangent vectors coming out of the shape vertices. */
	outTangents: [number, number][];
	
	/** The mask path segment (sections of a mask path between vertices) containing each feather point. */
	featherSegLocs: number[];
	
	/** The relative position of each feather point on its mask path segment. */
	featherRelSegLocs: number[];
	
	/** The feather amount (radius) for each feather point. */
	featherRadii: number[];
	
	/** The feather radius interpolation type for each feather point. */
	featherInterps: number[];
	
	/** The feather tension at each feather point. */
	featherTensions: number[];
	
	/** The direction (inner or outer) of each feather point. */
	featherTypes: number[];
	
	/** The relative angle between the two normals on either side of a curved outer feather boundary at a corner on a mask path. */
	featherRelCornerAngles: number[];
}

/** The ShapeLayer object represents a shape layer within a composition. Create it using the LayerCollection object’s addShape() method. */
declare class ShapeLayer extends AVLayer {}

/** The SolidSource object represents a solid-color footage source. */
declare class SolidSource extends FootageSource {
	/** The color of the solid. */
	color: [number, number, number];
}

/** The System object provides access to attributes found on the user’s system, such as the user name and the name and version of the operating system. It is available through the system global variable. */
declare class System {
	/** The current user name. */
	userName: string;
	
	/** The name of the host computer. */
	machineName: string;
	
	/** The name of the operating system. */
	osName: string;
	
	/** The version of the operating system. */
	osVersion: string;
	
	/** Execute’s a command on the system’s command line. */
	callSystem(cmdLineToExecute: string): string;
}

/** The TextDocument object stores a value for a TextLayer's Source Text property. Create it with the constructor, passing the string to be encapsulated. */
declare class TextDocument {
	constructor(docText: string);
	
	/** The text layer’s Source Text value. */
	text: string;
	
	/** The text layer’s font specified by its PostScript name. */
	font: string;
	
	/** string with path of font file, providing its location on disk (not guaranteed to be returned for all font types; return value may be empty string for some kinds of fonts) */
	fontLocation: string;
	
	/** string with style information — e.g., “bold”, “italic” */
	fontStyle: string;
	
	/** a string with the name of the font family */
	fontFamily: string;
	
	/** The text layer’s font size in pixels. */
	fontSize: number;
	
	/** When true, the text layer shows a fill. */
	applyFill: boolean;
	
	/** When true, the text layer shows a stroke. */
	applyStroke: boolean;
	
	/** The text layer’s fill color. */
	fillColor: [number, number, number];
	
	/** The text layer’s stroke color. */
	strokeColor: [number, number, number];
	
	/** Indicates the rendering order for the fill and stroke of a text layer. */
	strokeOverFill: boolean;
	
	/** The text layer’s stroke thickness. */
	strokeWidth: number;
	
	/** The paragraph justification for the text layer. */
	justification: ParagraphJustification;
	
	/** The text layer’s spacing between characters. */
	tracking: number;
	
	/** When true, the text layer is point (unbounded) text. */
	pointText: boolean;
	
	/** When true, the text layer is paragraph (bounded) text. */
	boxText: boolean;
	
	/** For box text, the pixel dimensions for the text bounds. */
	boxTextSize: [number, number];
  
	/** CC 2025(13.6)- */
	baselineLocs: number[];

	/** Restores the default character settings in the Character panel. */
	resetCharStyle(): void;
	
	/** Restores the default paragraph settings in the Paragraph panel. */
	resetParagraphStyle(): void;
}

/** The TextLayer object represents a text layer within a composition. Create it using the LayerCollection object’s addText method. */
declare class TextLayer extends AVLayer {}

/** The Viewer object represents a Composition, Layer, or Footage panel. */
declare class Viewer {
	/** The type of content in the viewer. */
	type: ViewerType;
	
	/** When true, the viewer is focused. */
	active: boolean;
	
	activeViewIndex: number;
	
	views: View[];
	
	/** When true, the viewer is at its maximized size. */
	maximized: boolean;
	
	/** Moves the viewer to front and places focus on it. */
	setActive(): boolean;
}

declare class View {
	active: boolean;
	
	options: ViewOptions;
	
	setActive(): void;
}

declare class ViewOptions {
	fastPreview: FastPreviewType;
}