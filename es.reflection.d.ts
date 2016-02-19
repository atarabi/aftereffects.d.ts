declare class Reflection {
  //Short text describing the reflected object, or undefined if no description is available.
  description: string;
  
  //Longer text describing the reflected object more completely, or undefined if no description is available.
  help: string;
  
  //An Array of ReflectionInfo objects containing all methods of the reflected object, defined in the class or in the specific instance.
  methods: ReflectionInfo[];
  
  //The class name of the reflected object.
  name: string;
  
  //An Array of ReflectionInfo objects containing all properties of the reflected object, defined in the class or in the specific instance.
  properties: ReflectionInfo[];
  
  //Use this method to get information about dynamic properties that have not yet been accessed, but that are known to exist.
  find(name: string): ReflectionInfo;
}

declare class ReflectionInfo {
  //For a reflected method, an array of ReflectionInfo objects describing each method argument.
  arguments: ReflectionInfo[];
  
  //The data type of the reflected element.
  dataType: string;
  
  //The default value for a reflected property or method argument, or undefined if there is no default value, if the property is undefined, or if the element is a method.
  defaultValue;
  
  //Short text describing the reflected object, or undefined if no description is available.
  description: string;
  
  //Longer text describing the reflected object more completely, or undefined if no description is available.
  help: string;
  
  //When true, the reflected property or method returns a collection; otherwise, false.
  isCollection: boolean;
  
  //The maximum numeric value for the reflected element, or undefined if there is no maximum or if the element is a method.
  max: number;
  
  //The minimum numeric value for the reflected element, or undefined if there is no minimum or if the element is a method.
  min: number;
  
  //The name of the reflected element. A string, or a number for an array index.
  name: string | number;
  
  //The type of the reflected element.
  type: string;
}