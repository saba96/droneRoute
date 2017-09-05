// Example Input:
// startingPoint => { lat, lng }
// destPoint => { lat, lng }
// stations => { id: {lat, lng }, ...}
//

class DroneController {
  constructor (stations, source, destination, options) {
    this.stations = stations
    this.source = source
    this.destination = destination
    this.options = options
    
    // Add Source and Destination Points to the List of Stations
    this.stations.source = this.source
    this.stations.destination = this.destination
  }
  
  distance (a, b) {
    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }
    const R = 6371                // Radius of the earth in km
    
    let dLat = deg2rad(a.lat - b.lat)
    let dLon = deg2rad(a.lng - b.lng)
    let A =  Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(a.lat)) * Math.cos(deg2rad(b.lat)) * Math.sin(dLon/2) * Math.sin(dLon/2) 
    let C = 2 * Math.atan2(Math.sqrt(A), Math.sqrt(1-A)) 
    let D = R * C                 // Distance in km
    return D
    
  }
  
  constructGraph () {
    this.graph = {}
    for (let point in stations) {
      for (let adj in stations) {
        if (point === adj) {
          continue
        }
        if (distance(point, adj) <= this.options.MAX_DISTANCE ) {
          graph[point] = graph[point] || {}
          graph[point][adj] = distance(point, adj)
        }
      }
    }
  }
  
  calculatepath (parrents) {
    this.path = []
    let current = 'destination'
    while (parrents[current] !== undefined) {
      this.path.push(current)
      current = parrents[current]
    }
    return this.path.reverse()
  }
  
  dijkstra () {
    let unvisited = Object.keys(this.graph)
    let dis = {}
    let current = 'source'
    let pathParrent = {}
    
    dis[current] = 0
    
    while (true) {
      for (let adj in this.graph[current]) {
        if (dis[adj] === undefined || dis[adj] > dis[current] + distance(current, adj)) {
          dis[adj] = dis[current] + distance(current, adj)
          pathParrent[adj] = current
        }
      }
      unvisited.splice(unvisited.indexOf(current), 1)
      if (current === 'destination') {
        break
      }
      current = null
      for (let candidate of unvisited) {
        if (dis[candidate] !== undefined && (current === null || dis[current] > dis[candidate])) {
          current = candidate
        }
      }
    }
    
    calculatePath(pathParrent)
    this.minDistance = dis['destination']
    return this.minDistance
  }
  
  solve () {
    this.cunstructGraph()
    this.dijkstra()
    return {
      distance: this.minDistance,
      path: this.path
    }
  }
}

let stations = {}
let source = {}
let destination = {}
let options = {
  MAX_DISTANCE: 1000
}

let instance = new DroneController(stations, source, destination, options)
let answer = instance.solve()
console.log(answer)