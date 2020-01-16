class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This Boat color is ${this.color}`
  }

  @testDecorator
  pilot(): void {
    throw new Error()
    console.log('swish')
  }

}

function testDecorator(target: any, key: string): void {
  console.log({target})
  console.log({key})
}