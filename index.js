const produceDrivingRange = function(blockRange) {
    return function(blockStart, blockEnd) {
        const requestedRange = blockEnd.slice(0,2) - blockStart.slice(0,2);
        if (requestedRange < blockRange) {
            return `within range by ${blockRange - requestedRange}`;
        }
        return `${requestedRange - blockRange} blocks out of range`;
    }
}

const produceTipCalculator = function(percent) {
    return function(tip) {
        return tip * percent;
    }
}

function createDriver(){
  let driverId = 0

  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }
   }
}
