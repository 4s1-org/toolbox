import { LogLevelEnum } from './log-level.enum.js'
import { DefaultError } from '../default-error.js'

type LogLevelString = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'silent'

/**
 * Logger
 * Default log level is "warn".
 */
export abstract class BaseLogger {
  public constructor(protected logLevel: LogLevelEnum) {
    // nothing to do
  }

  public get level(): LogLevelString {
    return this.logLevelToString(this.logLevel)
  }

  public set level(logLevel: LogLevelString) {
    this.logLevel = this.logLevelToEnum(logLevel)
  }

  protected logLevelToString(logLevel: LogLevelEnum): LogLevelString {
    switch (logLevel) {
      case LogLevelEnum.Trace:
        return 'trace'
      case LogLevelEnum.Debug:
        return 'debug'
      case LogLevelEnum.Info:
        return 'info'
      case LogLevelEnum.Warn:
        return 'warn'
      case LogLevelEnum.Error:
        return 'error'
      case LogLevelEnum.Fatal:
        return 'fatal'
      case LogLevelEnum.Silent:
        return 'silent'
      default:
        throw new DefaultError(`Unknown log level "${logLevel}".`)
    }
  }

  private logLevelToEnum(logLevel: LogLevelString): LogLevelEnum {
    switch (logLevel.toLocaleLowerCase()) {
      case 'trace':
        return LogLevelEnum.Trace
      case 'debug':
        return LogLevelEnum.Debug
      case 'info':
        return LogLevelEnum.Info
      case 'warn':
        return LogLevelEnum.Warn
      case 'error':
        return LogLevelEnum.Error
      case 'fatal':
        return LogLevelEnum.Fatal
      case 'silent':
        return LogLevelEnum.Silent
      default:
        throw new DefaultError(`Unknown log level "${logLevel}".`)
    }
  }

  protected getTimestamp(): string {
    const dtNow = new Date()
    const h = ('0' + dtNow.getHours()).slice(-2)
    const m = ('0' + dtNow.getMinutes()).slice(-2)
    const s = ('0' + dtNow.getSeconds()).slice(-2)
    const ms = ('0' + dtNow.getMilliseconds()).slice(-3)
    return `${h}:${m}:${s}:${ms}`
  }
}
