declare enum PurgeTarget {
    /** Purges all data that After Effects has cached to physical memory. */
    ALL_CACHES, 
    /** Purges all data saved in the undo cache. */
    UNDO_CACHES,
    /** Purges all data cached as composition/layer snapshots. */
    SNAPSHOT_CACHES,
    /** Purges all saved image data. */
    IMAGE_CACHES
}


declare enum FrameBlendingType {
    FRAME_MIX,
    NO_FRAME_BLEND,
    PIXEL_MOTION
}

declare enum BlendingMode {
    ADD,
    ALPHA_ADD,
    CLASSIC_COLOR_BURN,
    CLASSIC_COLOR_DODGE,
    CLASSIC_DIFFERENCE,
    COLOR,
    COLOR_BURN,
    COLOR_DODGE,
    DANCING_DISSOLVE,
    DARKEN,
    DARKER_COLOR,
    DIFFERENCE,
    DISSOLVE,
    EXCLUSION,
    HARD_LIGHT,
    HARD_MIX,
    HUE,
    LIGHTEN,
    LIGHTER_COLOR,
    LINEAR_BURN,
    LINEAR_DODGE,
    LINEAR_LIGHT,
    LUMINESCENT_PREMUL,
    LUMINOSITY,
    MULTIPLY,
    NORMAL,
    OVERLAY,
    PIN_LIGHT,
    SATURATION,
    SCREEN,
    SILHOUETE_ALPHA,
    SILHOUETTE_LUMA,
    SOFT_LIGHT,
    STENCIL_ALPHA,
    STENCIL_LUMA,
    VIVID_LIGHT
}

declare enum TrackMatteType {
    ALPHA,
    ALPHA_INVERTED,
    LUMA,
    LUMA_INVERTED,
    NO_TRACK_MATTE
}

declare enum LayerQuality {
    BEST,
    DRAFT,
    WIREFRAME
}

declare enum AutoOrientType {
    /** Layer faces in the direction of the motion path. */
    ALONG_PATH,
    /** Layer always faces the active camera or points at its point of interest. */
    CAMERA_OR_POINT_OF_INTEREST,
    /** Each character in a per-character 3D text layer automatically faces the active camera. */
    CHARACTERS_TOWARD_CAMERA,
    /** Layer rotates freely, independent of any motion path, point of interest, or other layers. */
    NO_AUTO_ORIENT
}

declare enum LayerSamplingQuality {
    BICUBIC,
    BILINEAR
}

declare enum AlphaMode {
    IGNORE,
    STRAIGHT,
    PREMULTIPLIED
}

declare enum FieldSeparationType {
    OFF,
    UPPER_FIELD_FIRST,
    LOWER_FIELD_FIRST
}

declare enum PulldownPhase {
    OFF,
    SSWWW,
    SWWWS,
    SWWWW_24P_ADVANCE,
    WSSWW,
    WSWWW_24P_ADVANCE,
    WWSSW,
    WWSWW_24P_ADVANCE,
    WWWSS,
    WWWSW_24P_ADVANCE,
    WWWWS_24P_ADVANCE
}

declare enum PulldownMethod {
    PULLDOWN_3_2,
    ADVANCE_24P
}

declare enum ImportAsType {
    COMP_CROPPED_LAYERS,
    FOOTAGE,
    COMP,
    PROJECT
}

declare enum LightType {
    PARALLEL,
    SPOT,
    POINT,
    AMBIENT
}

declare enum MaskMode {
    NONE,
    ADD,
    SUBTRACT,
    INTERSECT,
    LIGHTEN,
    DARKEN,
    DIFFERENCE
}

declare enum MaskMotionBlur {
    SAME_AS_LAYER,
    ON,
    OFF
}

declare enum MaskFeatherFalloff {
    FFO_LINEAR,
    FFO_SMOOTH  
}

declare enum PostRenderAction {
    NONE,
    IMPORT,
    IMPORT_AND_REPLACE_USAGE,
    SET_PROXY
}

declare enum GetSettingsFormat{
    STRING,
    STRING_SETTABLE,
    NUMBER,
    NUMBER_SETTABLE,
    SPEC
}

declare enum TimeDisplayType {
    FRAMES,
    TIMECODE
}

declare enum FootageTimecodeDisplayStartType {
    FTCS_START_0,
    FTCS_USE_SOURCE_MEDIA
}

declare enum FeetFramesFilmType {
    MM16,
    MM35
}

declare enum FramesCountType {
    FC_START_0,
    FC_START_1,
    FC_TIMECODE_CONVERSION
}

declare enum CloseOptions {
    /** Close without saving. */
    DO_NOT_SAVE_CHANGES,
    /** Prompt for whether to save changes before close. */
    PROMPT_TO_SAVE_CHANGES,
    /** Save automatically on close. */
    SAVE_CHANGES
}

declare enum PropertyValueType {
    NO_VALUE,
    ThreeD_SPATIAL,
    ThreeD,
    TwoD_SPATIAL,
    TwoD,
    OneD,
    COLOR,
    CUSTOM_VALUE,
    MARKER,
    LAYER_INDEX,
    MASK_INDEX,
    SHAPE,
    TEXT_DOCUMENT
}

declare enum KeyframeInterpolationType {
    LINEAR,
    BEZIER,
    HOLD
}

declare enum PropertyType {
    PROPERTY,
    INDEXED_GROUP,
    NAMED_GROUP
}

declare enum RQItemStatus {
    WILL_CONTINUE,
    NEEDS_OUTPUT,
    UNQUEUED,
    QUEUED,
    RENDERING,
    USER_STOPPED,
    ERR_STOPPED,
    DONE
}

declare enum LogType {
    ERRORS_ONLY,
    ERRORS_AND_SETTINGS,
    ERRORS_AND_PER_FRAME_INFO
}

declare enum PREFType {
    PREF_Type_MACHINE_SPECIFIC,
    PREF_Type_MACHINE_INDEPENDENT,
    PREF_Type_MACHINE_INDEPENDENT_RENDER,
    PREF_Type_MACHINE_INDEPENDENT_OUTPUT,
    PREF_Type_MACHINE_INDEPENDENT_COMPOSITION,
    PREF_Type_MACHINE_SPECIFIC_TEXT,
    PREF_Type_MACHINE_SPECIFIC_PAINT
}

declare enum ParagraphJustification {
    LEFT_JUSTIFY,
    CENTER_JUSTIFY,
    RIGHT_JUSTIFY,
    FULL_JUSTIFY_LASTLINE_LEFT,
    FULL_JUSTIFY_LASTLINE_RIGHT,
    FULL_JUSTIFY_LASTLINE_CENTER,
    FULL_JUSTIFY_LASTLINE_FULL,
    MULTIPLE_JUSTIFICATIONS
}

declare enum ViewerType {
    VIEWER_COMPOSITION,
    VIEWER_LAYER,
    VIEWER_FOOTAGE
}

declare enum FastPreviewType {
    FP_OFF,
    FP_ADAPTIVE_RESOLUTION,
    FP_DRAFT,
    FP_FAST_DRAFT,
    FP_WIREFRAME
}