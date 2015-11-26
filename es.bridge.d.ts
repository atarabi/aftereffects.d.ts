declare class BridgeTalk {
  //The instance identifier of an application launched by the messaging framework, the instance portion of an application specifier.
  static appInstance: string;
  
  //The locale of this application, the locale portion of an application specifier.
  static appLocale: string;

  //The name of this application, the appname portion of an application specifier.
  static appName: string;
  
  //A lower-case string containing the complete specifier for this application.
  static appSpecifier: string;
  
  //The current processing status of this application.
  static appStatus: string;
  
  //The version number of this application, the version portion of an application specifier.
  static appVersion: string;
  
  //A callback function that this application applies to unsolicited incoming messages.
  static onReceive: Function;
  
  //Brings all windows of the specified application to the front of the screen.
  static bringToFront(app: string): void;
  
  //Retrieves the full path of the executable file for a specified application.
  static getAppPath(app: string): string;
  
  //Returns a localized display name for an application, or NULL if the application is not installed. For example.
  static getDisplayName(app: string): string;
  
  //Retrieves a complete application specifier.
  static getSpecifier(appName: string, version?: number, locale?: string): string;
  
  //Retrieves the processing status of an application.
  static getStatus(targetSpec?: string): string;
  
  //Retrieves a list of messaging-enabled applications installed on this computer.
  static getTargets(version?: number, locale?: string): string;
  
  //Returns true if the given application is running and active on the local computer.
  static isRunning(specifier: string): boolean;
  
  //Launches the given application on the local computer. It is not necessary to launch an application explicitly in order to send it a message; sending a message to an application that is not running automatically launches it.
  static launch(specifier: string, where?: string): boolean;
  
  //Loads the startup script for an application from the common StartupScripts folders. Use to implement late loading of startup scripts.
  static loadAppScript(specifier: string): boolean;
  
  //Sends a message to another application to determine whether it can be contacted. Returns a string whose meaning is defined by the ping-request key.
  static ping(specifier: string, pingRequest: string): string;
  
  //Checks all active messaging interfaces for outgoing and incoming messages, and processes them if there are any.
  static pump(): boolean;
  
  //The data payload of the message.
  body: string;
  
  //A JavaScript object containing script-defined headers.
  headers;
  
  //The application specifier for the sending application.
  sender: string;
  
  //The application specifier for the target, or receiving, application.
  target: string;
  
  //The number of seconds before the message times out.
  timeout: number;
  
  //The message type, which indicates what type of data the body contains.
  type: string;
  
  //A callback function that the target application invokes to return an error response to the sender. It can send JavaScript run-time errors or exceptions, or C++ exceptions.
  onError: Function;
  
  //A callback function that the target application invokes to confirm that the message was received.
  onReceived: Function;
  
  //A callback function that the target application invokes to return a response to the sender. This can be an intermediate response or the final result of processing the message.
  onResult: Function;
  
  //A callback function that the target application invokes with a time-out message if time-out occurred before the target finished processing another message previously sent by this application. To enable this callback, the message must specify a value for the timeout property.
  onTimeout: Function;
  
  //Sends this message to the target application.
  send(timeoutInSecs?: number, launchParameters?): boolean;
  
  //When processing an unsolicited message, the static BridgeTalk onReceive method can return an intermediate result to the sender by calling this method in the received message object. It invokes the onResult callback of the original message, passing a new message object containing the specified result value.
  sendResult(result): boolean;
}

