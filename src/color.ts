export interface ColorPair {
  bright: string
  dark: string
}

/**
 * 4s1 Colors
 *
 * Based on https://flatui.com/flat-ui-color-palette/
 */
export abstract class Color {
  /**
   * Turquoise
   */
  public static get lightTurquoise(): string {
    return '#1ABC9C'
  }

  /**
   * Green Sea
   */
  public static get darkTurquoise(): string {
    return '#16A085'
  }

  /**
   * Emerald
   */
  public static get lightGreen(): string {
    return '#2ECC71'
  }

  /**
   * Nephritis
   */
  public static get dargGreen(): string {
    return '#27AE60'
  }

  /**
   * Peter River
   */
  public static get lightBlue(): string {
    return '#3498DB'
  }

  /**
   * Belize Hole
   */
  public static get darkBlue(): string {
    return '#2980B9'
  }

  /**
   * Amethyst
   */
  public static get lightPurple(): string {
    return '#9B59B6'
  }

  /**
   * Wisteria
   */
  public static get darkPurple(): string {
    return '#8E44AD'
  }

  /**
   * Wet Asphalt
   */
  public static get lightBlack(): string {
    return '#34495E'
  }

  /**
   * Midnight Blue
   */
  public static get darkBlack(): string {
    return '#2C3E50'
  }

  /**
   * Sun Flower
   */
  public static get lightYellow(): string {
    return '#F1C40F'
  }

  /**
   * Orange
   */
  public static get darkYellow(): string {
    return '#F39C12'
  }

  /**
   * Carrot
   */
  public static get lightOrange(): string {
    return '#E67E22'
  }

  /**
   * Pumpkin
   */
  public static get darkOrange(): string {
    return '#D35400'
  }

  /**
   * Alizarin
   */
  public static get lightRed(): string {
    return '#E74C3C'
  }

  /**
   * Pomegranate
   */
  public static get darkRed(): string {
    return '#C0392B'
  }

  /**
   * Clouds
   */
  public static get lightWhite(): string {
    return '#ECF0F1'
  }

  /**
   * Silver
   */
  public static get darkWhite(): string {
    return '#BDC3C7'
  }

  /**
   * Concrete
   */
  public static get lightGray(): string {
    return '#95A5A6'
  }

  /**
   * Asbestos
   */
  public static get darkGray(): string {
    return '#7F8C8D'
  }
}