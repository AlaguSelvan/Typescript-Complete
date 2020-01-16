import 'reflect-metadata'

@controller
class Plane {
  color: string = 'red'

  @get('/login')
  fly(): void {
    console.log('vrrrrrr')
  }
}

function get(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key)
  }
}

function controller(target: typeof Plane) {
  for(let key in target.prototype) {
    Reflect.getMetadata('path', target.prototype, key)
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

console.log({secret})