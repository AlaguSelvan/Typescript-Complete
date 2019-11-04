const profile = {
  name: 'selvan',
  age: 22,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age
  }
};


console.log(profile.setAge(1))
const { age, name }: { age: number; name: string } = profile
const { coords: {lat, lng} }: { coords: {lat: number; lng: number} } = profile
