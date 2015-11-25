declare class Socket {
  //When true, the connection is active. Read only.
  connected: boolean;
  
  //Sets or retrieves the name of the encoding used to transmit data. Typical values are “ASCII,” “BINARY,” or “UTF-8.”
  encoding: string;
  
  //When true, the receive buffer is empty. Read only.
  eof: boolean;
  
  //A message describing the most recent error. Setting this value clears any error message.
  error:string;
  
  //The name of the remote computer when a connection is established. If the connection is shut down or does not exist, the property contains the empty string. Read only.
  host: string; 
  
  //The timeout in seconds to be applied to read or write operations. Default is 10.
  timeout: number;
  
  //Terminates the open connection. Deleting the object also closes the connection, but not until JavaScript garbage-collects the object. The connection might stay open longer than you wish if you do not close it explicitly.
  close(): boolean;
  
  //Instructs the object to start listening for an incoming connection. The call to open() and the call to listen() are mutually exclusive. Call one function or the other, not both.
  listen(port: number, encoding?: string): boolean;
  
  //Opens the connection for subsequent read/write operations. The call to open() and the call to listen() are mutually exclusive. Call one function or the other, not both.
  open(host: string, encoding?: string): boolean;
  
  //Checks a listening object for a new incoming connection. If a connection request was detected, the method returns a new Socket object that wraps the new connection. Use this connection object to communicate with the remote computer. After use, close the connection and delete the JavaScript object. If no new connection request was detected, the method returns null.
  poll(): Socket;
  
  //Reads up to the specified number of characters from the connection, waiting if necessary. Ignores CR characters unless encoding is set to BINARY.
  read(count?: number): string;
  
  //Reads one line of text up to the next line feed. Line feeds are recognized as LF or CRLF pairs. CR characters are ignored.
  readln(): string;
  
  //Concatenates all arguments into a single string and writes that string to the connection. CRLF sequences are converted to LFs unless encoding is set to BINARY.
  write(text: string, ...texts: string[]): boolean;
  
  //Concatenates all arguments into a single string, appends a Line Feed character, and writes that string to the connection.
  writeln(text: string, ...texts: string[]): boolean;
}