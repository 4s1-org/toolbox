/**
 * Bootstrap3 colors
 *
 * Based on https://getbootstrap.com/docs/3.4/customize/#colors
 */
export abstract class Bootstrap3Color {
  /**
   * called "Primary"
   */
  public static get blue(): string {
    return '#337ab7'
  }

  /**
   * called "Success"
   */
  public static get green(): string {
    return '#5cb85c'
  }

  /**
   * called "Info"
   */
  public static get cyan(): string {
    return '#5bc0de'
  }

  /**
   * called "Warning"
   */
  public static get yellow(): string {
    return '#f0ad4e'
  }

  /**
   * called "Danger"
   */
  public static get red(): string {
    return '#d9534f'
  }
}
