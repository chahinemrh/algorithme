const round = (x: number): number => {
  return Math.round(100 * x) / 100
}

class PlanetsSpaceAge {
  seconds: number

  constructor(seconds: number) {
    this.seconds = seconds
  }

  private secondsEarthUnrounded(): number {
    const secondsPerYear = 60 * 60 * 24 * 365.25
    return this.seconds / secondsPerYear
  }

  Earth = () => {
    return round(this.secondsEarthUnrounded())
  }

  Mercury = () => {
    return round(this.secondsEarthUnrounded() / 0.2408467)
  }
  Venus = () => {
    return round(this.secondsEarthUnrounded() / 0.61519726)
  }
  Mars = () => {
    return round(this.secondsEarthUnrounded() / 1.8808158)
  }
  Jupiter = () => {
    return round(this.secondsEarthUnrounded() / 11.862615)
  }
  Saturn = () => {
    return round(this.secondsEarthUnrounded() / 29.447498)
  }
  Uranus = () => {
    return round(this.secondsEarthUnrounded() / 84.016846)
  }
  Neptune = () => {
    return round(this.secondsEarthUnrounded() / 164.79132)
  }
}

export default function spaceAge(planet: string, seconds: number): number {
  const newSpaceAge: any = new PlanetsSpaceAge(seconds)
  return newSpaceAge[planet]()
}
