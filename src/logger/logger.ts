/* eslint-disable no-console */
import { LogLevelEnum } from './log-level.enum'
import { BaseLogger } from './base-logger'

/**
 * Logger
 * Default log level is "warn".
 */
export class Logger extends BaseLogger {
  public constructor(logLevel: LogLevelEnum = LogLevelEnum.Warn) {
    super(logLevel)
  }

  /**
   * @example
   * logger.fatal("Some text") // text
   * logger.fatal("The value is %s", "GW/1234") // text with string placeholder
   * logger.fatal("The value is %o", { foo: 42 }) // text with object placeholder
   * logger.fatal("The value is %d", 42) // text with digit placeholder
   * logger.fatal("The value is %s %d %o", "GW/1234", 42, { foo: 42 }) // text with multiple placeholder
   * logger.fatal(new Error()) // object
   * logger.fatal(new Error(), "Details") // object with text
   */
  public fatal(message?: any, ...optionalParams: any[]): void {
    if (this.logLevel <= LogLevelEnum.Fatal) {
      console.error(message, ...optionalParams)
    }
  }

  /**
   * @example
   * logger.error("Some text") // text
   * logger.error("The value is %s", "GW/1234") // text with string placeholder
   * logger.error("The value is %o", { foo: 42 }) // text with object placeholder
   * logger.error("The value is %d", 42) // text with digit placeholder
   * logger.error("The value is %s %d %o", "GW/1234", 42, { foo: 42 }) // text with multiple placeholder
   * logger.error(new Error()) // object
   * logger.error(new Error(), "Details") // object with text
   */
  public error(message?: any, ...optionalParams: any[]): void {
    if (this.logLevel <= LogLevelEnum.Error) {
      console.error(message, ...optionalParams)
    }
  }

  /**
   * @example
   * logger.warn("Some text") // text
   * logger.warn("The value is %s", "GW/1234") // text with string placeholder
   * logger.warn("The value is %o", { foo: 42 }) // text with object placeholder
   * logger.warn("The value is %d", 42) // text with digit placeholder
   * logger.warn("The value is %s %d %o", "GW/1234", 42, { foo: 42 }) // text with multiple placeholder
   * logger.warn(new Error()) // object
   * logger.warn(new Error(), "Details") // object with text
   */
  public warn(message?: any, ...optionalParams: any[]): void {
    if (this.logLevel <= LogLevelEnum.Warn) {
      console.warn(message, ...optionalParams)
    }
  }

  /**
   * @example
   * logger.info("Some text") // text
   * logger.info("The value is %s", "GW/1234") // text with string placeholder
   * logger.info("The value is %o", { foo: 42 }) // text with object placeholder
   * logger.info("The value is %d", 42) // text with digit placeholder
   * logger.info("The value is %s %d %o", "GW/1234", 42, { foo: 42 }) // text with multiple placeholder
   * logger.info(new Error()) // object
   * logger.info(new Error(), "Details") // object with text
   */
  public info(message?: any, ...optionalParams: any[]): void {
    if (this.logLevel <= LogLevelEnum.Info) {
      console.info(message, ...optionalParams)
    }
  }

  /**
   * @example
   * logger.debug("Some text") // text
   * logger.debug("The value is %s", "GW/1234") // text with string placeholder
   * logger.debug("The value is %o", { foo: 42 }) // text with object placeholder
   * logger.debug("The value is %d", 42) // text with digit placeholder
   * logger.debug("The value is %s %d %o", "GW/1234", 42, { foo: 42 }) // text with multiple placeholder
   * logger.debug(new Error()) // object
   * logger.debug(new Error(), "Details") // object with text
   */
  public debug(message?: any, ...optionalParams: any[]): void {
    if (this.logLevel <= LogLevelEnum.Debug) {
      console.debug(message, ...optionalParams)
    }
  }

  /**
   * @example
   * logger.trace("Some text") // text
   * logger.trace("The value is %s", "GW/1234") // text with string placeholder
   * logger.trace("The value is %o", { foo: 42 }) // text with object placeholder
   * logger.trace("The value is %d", 42) // text with digit placeholder
   * logger.trace("The value is %s %d %o", "GW/1234", 42, { foo: 42 }) // text with multiple placeholder
   * logger.trace(new Error()) // object
   * logger.trace(new Error(), "Details") // object with text
   */
  public trace(message?: any, ...optionalParams: any[]): void {
    if (this.logLevel <= LogLevelEnum.Trace) {
      console.trace(message, ...optionalParams)
    }
  }
}
