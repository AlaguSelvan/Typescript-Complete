interface Reportable {
  summary(): string
};

const oldCivic = {
  name: 'civic',
  year: new Date,
  broken: true,
  summary() {
    return `Name: ${this.name}`
  }
};

const printSummary = (item: Reportable): void => {
  console.log(`summary: ${item.summary()}`);
};

printSummary(oldCivic);


const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
};

printSummary(drinks);