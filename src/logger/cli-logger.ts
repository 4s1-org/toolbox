/* eslint-disable no-console */
import { LogLevelEnum } from './log-level.enum'
import { BaseLogger } from './base-logger'
import { ConsoleColor } from '../colors/console-color'
import { DefaultError } from '../default-error'

/**
 * Logger
 * Default log level is "warn".
 */
export class CliLogger extends BaseLogger {
  public constructor(logLevel: LogLevelEnum, public showTimestamp: boolean = true, public showLogLevel: boolean = true) {
    super(logLevel)
  }

  /**
   * @example
   * logger.fatal("Some text") // text
   * logger.fatal("The value is %s", "GW/1234") // text with string placeholder
   * logger.fatal("The value is %o", { foo: 42 }) // text with object placeholder
   * logger.fatal("The value is %d", 42) // text with digit placeholder
   * logger.fatal("The value is %s %d %o", "GW/1234", 42, { foo: 42 }) // text with multiple placeholder
   * logger.fatal("Lorem Ipsum", new Error()) // object
   * logger.fatal("Lorem Ipsum", new Error(), "Details") // object with text
   */
  public fatal(message: string, ...optionalParams: any[]): void {
    if (this.logLevel <= LogLevelEnum.Fatal) {
      console.log(this.formatMessage(message, LogLevelEnum.Fatal), ...optionalParams)
    }
  }

  /**
   * @example
   * logger.error("Some text") // text
   * logger.error("The value is %s", "GW/1234") // text with string placeholder
   * logger.error("The value is %o", { foo: 42 }) // text with object placeholder
   * logger.error("The value is %d", 42) // text with digit placeholder
   * logger.error("The value is %s %d %o", "GW/1234", 42, { foo: 42 }) // text with multiple placeholder
   * logger.error("Lorem Ipsum", new Error()) // object
   * logger.error("Lorem Ipsum", new Error(), "Details") // object with text
   */
  public error(message: string, ...optionalParams: any[]): void {
    if (this.logLevel <= LogLevelEnum.Error) {
      console.log(this.formatMessage(message, LogLevelEnum.Error), ...optionalParams)
    }
  }

  /**
   * @example
   * logger.warn("Some text") // text
   * logger.warn("The value is %s", "GW/1234") // text with string placeholder
   * logger.warn("The value is %o", { foo: 42 }) // text with object placeholder
   * logger.warn("The value is %d", 42) // text with digit placeholder
   * logger.warn("The value is %s %d %o", "GW/1234", 42, { foo: 42 }) // text with multiple placeholder
   * logger.warn("Lorem Ipsum", new Error()) // object
   * logger.warn("Lorem Ipsum", new Error(), "Details") // object with text
   */
  public warn(message: string, ...optionalParams: any[]): void {
    if (this.logLevel <= LogLevelEnum.Warn) {
      console.log(this.formatMessage(message, LogLevelEnum.Warn), ...optionalParams)
    }
  }

  /**
   * @example
   * logger.info("Some text") // text
   * logger.info("The value is %s", "GW/1234") // text with string placeholder
   * logger.info("The value is %o", { foo: 42 }) // text with object placeholder
   * logger.info("The value is %d", 42) // text with digit placeholder
   * logger.info("The value is %s %d %o", "GW/1234", 42, { foo: 42 }) // text with multiple placeholder
   * logger.info("Lorem Ipsum", new Error()) // object
   * logger.info("Lorem Ipsum", new Error(), "Details") // object with text
   */
  public info(message: string, ...optionalParams: any[]): void {
    if (this.logLevel <= LogLevelEnum.Info) {
      console.log(this.formatMessage(message, LogLevelEnum.Info), ...optionalParams)
    }
  }

  /**
   * @example
   * logger.debug("Some text") // text
   * logger.debug("The value is %s", "GW/1234") // text with string placeholder
   * logger.debug("The value is %o", { foo: 42 }) // text with object placeholder
   * logger.debug("The value is %d", 42) // text with digit placeholder
   * logger.debug("The value is %s %d %o", "GW/1234", 42, { foo: 42 }) // text with multiple placeholder
   * logger.debug("Lorem Ipsum", new Error()) // object
   * logger.debug("Lorem Ipsum", new Error(), "Details") // object with text
   */
  public debug(message: string, ...optionalParams: any[]): void {
    if (this.logLevel <= LogLevelEnum.Debug) {
      console.log(this.formatMessage(message, LogLevelEnum.Debug), ...optionalParams)
    }
  }

  /**
   * @example
   * logger.trace("Some text") // text
   * logger.trace("The value is %s", "GW/1234") // text with string placeholder
   * logger.trace("The value is %o", { foo: 42 }) // text with object placeholder
   * logger.trace("The value is %d", 42) // text with digit placeholder
   * logger.trace("The value is %s %d %o", "GW/1234", 42, { foo: 42 }) // text with multiple placeholder
   * logger.trace("Lorem Ipsum", new Error()) // object
   * logger.trace("Lorem Ipsum", new Error(), "Details") // object with text
   */
  public trace(message: string, ...optionalParams: any[]): void {
    if (this.logLevel <= LogLevelEnum.Trace) {
      console.log(this.formatMessage(message, LogLevelEnum.Trace), ...optionalParams)
    }
  }

  private formatMessage(message: string, logLevel: LogLevelEnum): string {
    if (this.showLogLevel) {
      const logLevelStr = (this.logLevelToString(logLevel) + '  ').substring(0, 5)
      message = `${this.getLogLevelColor(logLevel)}${logLevelStr}${ConsoleColor.Reset} ${message}`.trim()
    }

    if (this.showTimestamp) {
      message = `${ConsoleColor.FgCyan}${this.getTimestamp()}${ConsoleColor.Reset} ${message}`.trim()
    }

    return message
  }

  private getLogLevelColor(logLevel: LogLevelEnum): string {
    switch (logLevel) {
      case LogLevelEnum.Trace:
        return ConsoleColor.BgMagenta + ConsoleColor.FgWhite
      case LogLevelEnum.Debug:
        return ConsoleColor.FgMagenta
      case LogLevelEnum.Info:
        return ConsoleColor.FgGreen
      case LogLevelEnum.Warn:
        return ConsoleColor.FgYellow
      case LogLevelEnum.Error:
        return ConsoleColor.FgRed
      case LogLevelEnum.Fatal:
        return ConsoleColor.BgRed + ConsoleColor.FgWhite
      case LogLevelEnum.Silent:
        return ''
      default:
        throw new DefaultError(`Unknown log level "${logLevel}".`)
    }
  }
}
