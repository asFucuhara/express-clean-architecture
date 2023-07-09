export interface Logger {
  log: (level: Logger.LOG_LEVEL, description: Logger.Description, context?: Logger.Context) => Promise<void>;
  info: (description: Logger.Description, context?: Logger.Context) => Promise<void>;
  debug: (description: Logger.Description, context?: Logger.Context) => Promise<void>;
}

export namespace Logger {
  export enum LOG_LEVEL {
    DEBUG = 0,
    ERROR = 1
  }
  export type Description = string
  export type Context = any
}
