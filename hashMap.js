class HashMap {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }

  remove(key) {
    if (this.map.hasOwnProperty(key)) {
      delete this.map[key];
    }
  }
}

let map = new HashMap();

map.put("first", 1);
map.put("second", 2);
map.put("third", 3);

console.log(map.get("first")); 
console.log(map.get("second")); 

map.remove("second");
console.log(map.get("second")); 
