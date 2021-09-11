export interface ColorPair {
  bright: string
  dark: string
}

export abstract class Color {
  public get turquoise(): string {
    return '#1ABC9C'
  }

  public get greenSea(): string {
    return '#16A085'
  }

  public get emerald(): string {
    return '#2ECC71'
  }

  public get nephritis(): string {
    return '#27AE60'
  }

  public get greenTones(): ColorPair {
    return {
      bright: this.emerald,
      dark: this.nephritis,
    }
  }

  public get peterRiver(): string {
    return '#3498DB'
  }

  public get belizeHole(): string {
    return '#2980B9'
  }

  public get amethyst(): string {
    return '#9B59B6'
  }

  public get wisteria(): string {
    return '#8E44AD'
  }

  public get wetAsphalt(): string {
    return '#34495E'
  }

  public get midnightBlue(): string {
    return '#2C3E50'
  }

  public get sunFlower(): string {
    return '#F1C40F'
  }

  public get orange(): string {
    return '#F39C12'
  }

  public get carrot(): string {
    return '#E67E22'
  }

  public get pumpkin(): string {
    return '#D35400'
  }

  public get alizarin(): string {
    return '#E74C3C'
  }

  public get pomegranate(): string {
    return '#C0392B'
  }

  public get clouds(): string {
    return '#ECF0F1'
  }

  public get silver(): string {
    return '#ECF0F1'
  }

  public get concrete(): string {
    return '#95A5A6'
  }

  public get asbestos(): string {
    return '#7F8C8D'
  }
}
