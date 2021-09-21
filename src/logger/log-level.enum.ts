/**
 * Log level enums
 * Every level includes the subsequent level from left to right:
 * trace < debug < info < warn < error < fatal < silent
 */
export enum LogLevelEnum {
  /** trace */
  Trace = 10,
  /** debug */
  Debug = 20,
  /** info */
  Info = 30,
  /** warn */
  Warn = 40,
  /** error */
  Error = 50,
  /** fatal */
  Fatal = 60,
  /** silent */
  Silent = 999,
}
