const rawData = [{"id":"ChIJBUEZMJWAGGARFLVMi2Wfw-U","name":"Nishi-Funabashi","lat":35.7074693,"lng":139.9589668},{"id":"ChIJ2zZR7UfzGGARrusaSSAZYfI","name":"Yoyogi-Uehara","lat":35.668988,"lng":139.679857},{"id":"ChIJW9fE3UiLGGAR_HkDv9w9nvY","name":"Naka-Meguro","lat":35.6442877,"lng":139.6990956},{"id":"ChIJmQz-4OjrGGARuO-X2ESX_-o","name":"Wako-shi","lat":35.7812079,"lng":139.6057934},{"id":"ChIJo9BwwI_yGGARzEFspqeGj3Q","name":"Nakano","lat":35.7073985,"lng":139.6638354},{"id":"ChIJlZA3XjjtGGARSVo7QRde8FY","name":"Kotake-Mukaihara","lat":35.743341,"lng":139.679521},{"id":"ChIJaUNCPNaOGGARuV-q32bYbaE","name":"Oshiage","lat":35.710332,"lng":139.8132971},{"id":"ChIJ8TUonsz0GGARcxiwpBmNByg","name":"Meguro","lat":35.6414629,"lng":139.6981712},{"id":"ChIJO9uCrgSTGGAR_N0zUoOdbJI","name":"Akabane Iwabuchi","lat":35.783504,"lng":139.721821},{"id":"ChIJ0V77rqmLGGARVFqViwaI1Rc","name":"Shirokane-Takanawa","lat":35.642854,"lng":139.734076},{"id":"ChIJW9iFeASLGGARGExZt7v13xg","name":"Shirokanedai","lat":35.6384141,"lng":139.7242717},{"id":"ChIJ6fNOqQeMGGAR-oljwJpU0gw","name":"Otemachi","lat":35.6859152,"lng":139.7684278},{"id":"ChIJ0_id9g_V6YkRj2BGiraA23Q","name":"Ginza","lat":40.684258,"lng":-73.430284},{"id":"ChIJ0Qgx67KMGGARd2ZbObLZHPE","name":"Shibuya","lat":35.6617773,"lng":139.7040506},{"id":"ChIJ4RGu0emLGGARuUX8XtPxUVg","name":"Shimbashi","lat":35.6661933,"lng":139.7583319},{"id":"ChIJS_23WSCNGGAR0u8y4o_GYew","name":"Shinjuku","lat":35.6938401,"lng":139.7035494},{"id":"ChIJs-soi56OGGARvvSyPcqIups","name":"Ueno","lat":35.7089183,"lng":139.7742183},{"id":"ChIJkRf-6jmNGGAR1DA2OocB2h8","name":"Takadanobaba","lat":35.7131017,"lng":139.700335},{"id":"ChIJ8RBJZUGMGGARsu02tkMLGoQ","name":"Iidabashi","lat":35.699888,"lng":139.7479231},{"id":"ChIJU_JmlleJGGARa7vrQMGllR4","name":"Nihombashi","lat":35.680366,"lng":139.7716695},{"id":"ChIJ51cu8IcbXWARiRtXIothAS4","name":"Tokyo","lat":35.6894875,"lng":139.6917064},{"id":"ChIJkTzXVNeNGGAR4s9HUB4Qq6g","name":"Nishi-Nippori","lat":35.7324125,"lng":139.7677967},{"id":"ChIJSZl7FZmJGGARJj0lZmezEbs","name":"Toyosu","lat":35.6551192,"lng":139.7977625},{"id":"ChIJ-fIw6O-LGGARYd7WTcAcSHU","name":"Yurakucho","lat":35.6732638,"lng":139.7606676},{"id":"ChIJCx6jgqGMGGARpfB5UIap15k","name":"Omotesando","lat":35.6671757,"lng":139.7090417},{"id":"ChIJd3hxAWuMGGAR7mLxDsxP5v8","name":"Kudanshita","lat":35.6954816,"lng":139.7511544},{"id":"ChIJh5EcPJ2LGGAR_pwW6UjC-Ug","name":"Roppongi","lat":35.6641222,"lng":139.729426},{"id":"ChIJjSpsrluJGGARks3CsFssM3w","name":"Kayabacho","lat":35.679046,"lng":139.779626},{"id":"ChIJUxQ391WJGGARVzWp151Qioc","name":"Mitsukoshimae","lat":35.687156,"lng":139.773571},{"id":"ChIJLeWV9xKJGGAR8I5XCkUhauE","name":"Monzen-Nakacho","lat":35.671825,"lng":139.796069},{"id":"ChIJUbkHy16JGGARsq8UJKSOIfc","name":"Hatchobori","lat":35.6751195,"lng":139.7753361},{"id":"ChIJjxmFbZGLGGARFmdnFZzSchU","name":"Toranomon","lat":35.662109,"lng":139.7436665},{"id":"ChIJaR--Ro2MGGAR28YYmL4dKC0","name":"Yotsuya","lat":35.6902021,"lng":139.7164592},{"id":"ChIJ-ww7036MGGARHEnJyzC83MA","name":"Akasaka Mitsuke","lat":35.676795,"lng":139.737269},{"id":"ChIJr8WgcYOMGGARBpDdIdHjbog","name":"Aoyama-Itchome","lat":35.6728567,"lng":139.7238444},{"id":"ChIJI0ExXtuMGGARdqRRCha2xzo","name":"Shinjuku Sanchome","lat":35.6907982,"lng":139.7063538},{"id":"ChIJz11z5izMMIgRnV9QiwbyC5M","name":"Kasai","lat":41.05789,"lng":-81.7365236},{"id":"ChIJ93MU4FyHhYARNsN1cMElpgo","name":"Ebisu","lat":37.7644541,"lng":-122.4666407},{"id":"ChIJWxkgSeGHGGARb1FEK0KdMes","name":"Nishi-Kasai","lat":35.664577,"lng":139.859203},{"id":"ChIJvQMvLTuIGGARcSXJaJAY7rg","name":"Shin-Kiba","lat":35.6459022,"lng":139.8266952},{"id":"ChIJIRWssrPjFYgRndNbxmVZA5c","name":"Asakusa","lat":41.1361447,"lng":-85.16077779999999},{"id":"ChIJfTcpz_GLGGAR8LPOaS_kZNo","name":"Hibiya","lat":35.6744391,"lng":139.7600104},{"id":"ChIJhwt8jCQGVDURabQ6FPH0nXQ","name":"Korakuen","lat":34.6673339,"lng":133.93617},{"id":"ChIJrVoguxuMGGARo34wGbVuyx8","name":"Shin-Ochanomizu","lat":35.696932,"lng":139.765432},{"id":"ChIJwwXpBxSMGGARUdN86mbnCJ8","name":"Jimbocho","lat":35.6956944,"lng":139.7593864},{"id":"ChIJ_Vr9_NeIGGAReJVVOPGX3Js","name":"Kinshicho","lat":35.6971485,"lng":139.8137858},{"id":"ChIJlfFXH4GLGGARQUcHxUyjphE","name":"Akasaka","lat":35.6749184,"lng":139.736775},{"id":"ChIJO02rxVGJGGARGdyRszeoLc4","name":"Ningyocho","lat":35.686239,"lng":139.782348},{"id":"ChIJD8xU3JaLGGARiIXaACjIHoY","name":"Kamiyacho","lat":35.6628454,"lng":139.7452309},{"id":"ChIJe9PgEpyMGGARbT5Ej0VIUzI","name":"Gaienmae","lat":35.670399,"lng":139.7178259},{"id":"ChIJ1wEpTbt9GGAR091ls-NR7mM","name":"Urayasu","lat":35.653153,"lng":139.9019174},{"id":"ChIJU7xhjwaJGGARICssIETwlDk","name":"Kiba","lat":35.6693722,"lng":139.8071534},{"id":"ChIJK2bxJueLGGARwHHeH52hGiM","name":"Higashi-Ginza","lat":35.6697003,"lng":139.7671399},{"id":"ChIJT1PEYaSMGGARGYhbpC_vABg","name":"Meiji-Jingumae","lat":35.668468,"lng":139.7053877},{"id":"ChIJP86FX2WMGGAR0ikmK6KtXcw","name":"Hanzomon","lat":35.686759,"lng":139.7420212},{"id":"ChIJBbhpSBqNGGARqAgI3sUU4hE","name":"Waseda","lat":35.7087334,"lng":139.7196485},{"id":"ChIJhwH_KwnyGGARMIKcwdgwCkg","name":"Ogikubo","lat":35.7033681,"lng":139.6210114},{"id":"ChIJqdfYUESJGGARYVRLyTX58JI","name":"Suitengumae","lat":35.68299,"lng":139.785153},{"id":"ChIJdRSJLN-LGGARhbFoEyqUCgo","name":"Tsukiji","lat":35.6654594,"lng":139.7707838},{"id":"ChIJ_-YSLqmNGGARyVFu4_AytAI","name":"Myogadani","lat":35.7173731,"lng":139.7367799},{"id":"ChIJZxjhL9DyGGARgcapciFsY6Y","name":"Nakano Sakaue","lat":35.697069,"lng":139.682161},{"id":"ChIJu0OPaoiLGGAR_QFKLcwXEWE","name":"Nagatacho","lat":35.6768488,"lng":139.739919},{"id":"ChIJ1Vq-7XqJGGARTLuHDBUcn8M","name":"Tsukishima","lat":35.6626127,"lng":139.7804528},{"id":"ChIJv3I2Q1yIGGARJ2_5DokQTHc","name":"Minami-Sunamachi","lat":35.668381,"lng":139.831705},{"id":"ChIJLUx2AWyLGGARuiLt25EbBOM","name":"Hiroo","lat":35.65019590000001,"lng":139.7210272},{"id":"ChIJSY8eJV0vAWAR2roJi_lLfD4","name":"Oji","lat":34.5947249,"lng":135.7065514},{"id":"ChIJP_FRqRKOGGARK6Ebiulf2hs","name":"Machiya","lat":35.7495171,"lng":139.7788353},{"id":"ChIJ7xV6UGiHGGARR337HhDcnCo","name":"Gyotoku","lat":35.682604,"lng":139.914142},{"id":"ChIJw_lwqQSMGGAR9whHPHwXzMc","name":"Awajicho","lat":35.69496,"lng":139.76746},{"id":"ChIJebf-6hmMGGARH8tTXnEen_Y","name":"Ochanomizu","lat":35.7006119,"lng":139.7642037},{"id":"ChIJxZUSpmSMGGAR3bIJEXqRXgY","name":"Kojimachi","lat":35.6844396,"lng":139.7416241},{"id":"ChIJV_-6z9SMGGARPdOPQSpdOBI","name":"Nishi-Shinjuku","lat":35.6921398,"lng":139.6854735},{"id":"ChIJcduc-w2MGGARuKERhQePB3s","name":"Takebashi","lat":35.6905093,"lng":139.7565376},{"id":"ChIJnZw2yoSLGGARMErN6N_fAFg","name":"Roppongi-Itchome","lat":35.6659738,"lng":139.7385171},{"id":"ChIJ06yYZCZm4zoRNTzgoRg4GkE","name":"Kanda","lat":7.2905715,"lng":80.6337262},{"id":"ChIJG1RiNFWMGGARJmkbydGdgP8","name":"Edogawabashi","lat":35.709235,"lng":139.734101},{"id":"ChIJbbiJlXuHGGAR1VV60oeMgO4","name":"Minami-Gyotoku","lat":35.672716,"lng":139.902227},{"id":"ChIJL5AMgTuMGGARDK_ONbVvYt8","name":"Hongo-Sanchome","lat":35.706722,"lng":139.7598344},{"id":"ChIJ3ddbSEaHGGARr5PnfatGuww","name":"Myoden","lat":35.69102,"lng":139.924363},{"id":"ChIJjRZkSqzdAGARgfKzHdJqU_A","name":"Sumiyoshi","lat":34.6146664,"lng":135.4955985},{"id":"ChIJt7-gHnXsGGARuLHr3lV1fxk","name":"Chikatetsu Narimasu","lat":35.776697,"lng":139.63119},{"id":"ChIJ9YlJZMKMGGARObc_xcAKA9M","name":"Shinjuku-gyoemmae","lat":35.68857,"lng":139.710854},{"id":"ChIJKWsFyaGOGGARbptr5oxqL8g","name":"Naka-Okachimachi","lat":35.7066283,"lng":139.7762034},{"id":"ChIJQ8Nt8eKLGGARpPpy3u5Pw_M","name":"Kyobashi","lat":35.6762415,"lng":139.7706974},{"id":"ChIJaX6cwT2JGGARKz3KrG7DRWU","name":"Kiyosumi-Shirakawa","lat":35.6822525,"lng":139.7987778},{"id":"ChIJa83EfZ-LGGARHbrRcVb6_8s","name":"Azabu-Juban","lat":35.6545208,"lng":139.735323},{"id":"ChIJC01HCe2MGGARNufZpONHtzM","name":"Yotsuya-Sanchome","lat":35.687932,"lng":139.720631},{"id":"ChIJo5uKUePsGGARAGywg4jKofs","name":"Heiwadai","lat":35.7612317,"lng":139.6623254},{"id":"ChIJIaZLQ1qMGGARYTD1p6NjCuI","name":"Kagurazaka","lat":35.7019042,"lng":139.7404624},{"id":"ChIJdzWDgX6LGGAR_Fg_79e-e44","name":"Nogizaka","lat":35.66649,"lng":139.726242},{"id":"ChIJU0ZdCGCJGGARLgGA-6w0Qdg","name":"Shintomicho","lat":35.670519,"lng":139.773599},{"id":"ChIJqwqnRVOJGGARZukMSATDMOc","name":"Kodenmacho","lat":35.690405,"lng":139.778792},{"id":"ChIJcd_uaQyNGGAR3QXqOmlcmOM","name":"Gokokuji","lat":35.7216872,"lng":139.7256941},{"id":"ChIJX6FwATv6HGARKWSM3sVwUQg","name":"Minowa","lat":35.9151342,"lng":137.9819444},{"id":"ChIJm8TC5xvtGGARwmfFS9p_HWU","name":"Hikawadai","lat":35.749562,"lng":139.665466},{"id":"ChIJr6MB25CNGGAR66bCZDE2qmk","name":"Komagome","lat":35.7408083,"lng":139.7413805},{"id":"ChIJNckFiuOLGGARPhaqjOBF6AY","name":"Ginza-itchome","lat":35.6743941,"lng":139.7669788},{"id":"ChIJK2AZHa2SGGARfbukpIggKFU","name":"Kanamecho","lat":35.7362545,"lng":139.6968091},{"id":"ChIJkbfRtW2NGGARSgyVrvQYne0","name":"Higashi-Ikebukuro","lat":35.7259,"lng":139.718824},{"id":"ChIJJ0uP6rKSGGARZxm6rySE3R8","name":"Senkawa","lat":35.7425037,"lng":139.6932287},{"id":"ChIJS3foj2HyGGARzpkJwgdCV3U","name":"Shin-Koenji","lat":35.697845,"lng":139.64847},{"id":"ChIJcefJBCKMGGARl6sbhxC8rWY","name":"Yushima","lat":35.7083599,"lng":139.770988},{"id":"ChIJodnuomCSGGARncvT06nj9EA","name":"Oji-Kamiya","lat":35.765424,"lng":139.735626},{"id":"ChIJEzKTRveLGGAR3JwAGCgXTdQ","name":"Nijubashimae","lat":35.680628,"lng":139.76185},{"id":"ChIJ65lhJ-ryGGAR-aILJ5ikFd8","name":"Shin-Nakano","lat":35.6976549,"lng":139.6698209},{"id":"ChIJwR3tffzyGGARdQLxp018iZ0","name":"Honancho","lat":35.68348599999999,"lng":139.657914},{"id":"ChIJr2jeH2TsGGARK5JVeRJcpz4","name":"Chikatetsu Akatsuka","lat":35.769976,"lng":139.644023},{"id":"ChIJLS3M1YzyGGARjajeHAu8GS0","name":"Higashi-Koenji","lat":35.69792899999999,"lng":139.658274},{"id":"ChIJH8bIvpGOGGARbsQ_EEA4hhM","name":"Iriya","lat":35.7210426,"lng":139.7865085},{"id":"ChIJkUe-3yKNGGARaIlMWZpmiHg","name":"Nishi-Waseda","lat":35.7078154,"lng":139.7091474},{"id":"ChIJScLILb-OGGARaG4VCipgC8c","name":"Tawaramachi","lat":35.7098045,"lng":139.7907555},{"id":"ChIJv5f9ejOMGGARQ8SNRZCaUOc","name":"Todai-mae","lat":35.717818,"lng":139.758015},{"id":"ChIJZYDOLt2PGGAR1s4dVGAZPg4","name":"Kita-Ayase","lat":35.776869,"lng":139.832118},{"id":"ChIJYdtNvy2MGGAR_EHnmgMU0X8","name":"Nezu","lat":35.7194307,"lng":139.7641769},{"id":"ChIJtdg4j_aOGGAR-ZZnaku22kU","name":"Minami-Senju","lat":35.7333194,"lng":139.7990561},{"id":"ChIJ7VMs1MqJGGARqwyIqRtH1TE","name":"Tatsumi","lat":35.6436264,"lng":139.8194492},{"id":"ChIJU7L1V86NGGAR1_6tOPSjURg","name":"Sendagi","lat":35.7268018,"lng":139.7581383},{"id":"ChIJxXiWgMmAGGARYHq-JcmyyUw","name":"Baraki-Nakayama","lat":35.7031661,"lng":139.941603},{"id":"ChIJja5N4bX8GGARD9Kmr6bA6dg","name":"Ochiai","lat":35.6096013,"lng":139.4278927},{"id":"ChIJnTEx_Z-OGGARgdDuI__dhuI","name":"Ueno-Hirokoji","lat":35.7079034,"lng":139.7730918},{"id":"ChIJk_EHmnHyGGAR8Y5jvZPfCyw","name":"Minami-Asagaya","lat":35.69945510000001,"lng":139.635551},{"id":"ChIJNwWo2wqNGGARBaaNSWV-59M","name":"Shin-Otsuka","lat":35.7260747,"lng":139.72983},{"id":"ChIJMwpiebSMGGARPr_454zHvDQ","name":"Yoyogi-Koen","lat":35.671736,"lng":139.6949447},{"id":"ChIJBzXuFB6MGGARDe3XOw7enPQ","name":"Suehirocho","lat":35.702543,"lng":139.771709},{"id":"ChIJEw8CP9-MGGAR6CPmjo-Z_Pk","name":"Higashi-Shinjuku","lat":35.69793,"lng":139.707409},{"id":"ChIJp-KZt8mNGGARZ3K48LYeeIw","name":"Hon-Komagome","lat":35.72504,"lng":139.753654},{"id":"ChIJN-3sWtzyGGAR1GHoyay4Ras","name":"Nakano-Shimbashi","lat":35.6925005,"lng":139.6742859},{"id":"ChIJH_5vQubyGGARBIunuNpUdpI","name":"Nakano-Fujimicho","lat":35.690625,"lng":139.667024},{"id":"ChIJ9U0QBJiOGGARQ1qhN4Ocj6I","name":"Inaricho","lat":35.711375,"lng":139.782208},{"id":"ChIJhZw22riMGGARF95drS3lJ2A","name":"Kita-Sando","lat":35.678905,"lng":139.705105},{"id":"ChIJ8z-tOouLGGARAJ-DluA1t3k","name":"Sakuradamon","lat":35.67729500000001,"lng":139.751379},{"id":"ChIJ11UgDhONGGARWQ6YJVcg4-U","name":"Zoshigaya","lat":35.7188936,"lng":139.718555},{"id":"ChIJE5BUVVWSGGARWQ-JxZ_Zxjw","name":"Shimo","lat":35.7793757,"lng":139.7277106},{"id":"ChIJlcnDp4iNGGARiwvm31U7ZpQ","name":"Nishigahara","lat":35.745926,"lng":139.742238}]

class DroneController {
  constructor (source, destination, options) {
    this.stations = {}
    for(let station of rawData){
      this.stations[station.name] = {}
      this.stations[station.name]["lat"] = station.lat
      this.stations[station.name]["lng"] = station.lng
    }
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
    let dLng = deg2rad(a.lng - b.lng)
    let A =  Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(a.lat)) * Math.cos(deg2rad(b.lat)) * Math.sin(dLng/2) * Math.sin(dLng/2) 
    let C = 2 * Math.atan2(Math.sqrt(A), Math.sqrt(1-A)) 
    let D = R * C                 // Distance in km
    return D
    
  }
  
  constructGraph () {
    this.graph = {}
    for (let point in this.stations) {
      for (let adj in this.stations) {
        if (point === adj) {
          continue
        }
        if (this.distance(this.stations[point], this.stations[adj]) <= this.options.MAX_DISTANCE ) {
          this.graph[point] = this.graph[point] || {}
          this.graph[point][adj] = this.distance(this.stations[point], this.stations[adj])
        }
      }
    }
  }
  
  calculatePath (parrents) {
    this.path = []
    this.stationsOnPath = []
    let current = 'destination'
    while (parrents[current] !== undefined) {
      this.path.push(this.stations[current])
      this.stationsOnPath.push(current)
      current = parrents[current]
    }
    return {
      path: this.path.reverse(),
      stationsOnPath: this.stationsOnPath.reverse()
    }
  }
  
  dijkstra () {
    let unvisited = Object.keys(this.graph)
    let dis = {}
    let current = 'source'
    let pathParrent = {}
    let maxStep = unvisited.length + 1;
    dis[current] = 0
    
    while (maxStep--) {
      for (let adj in this.graph[current]) {
        if (dis[adj] === undefined || dis[adj] > dis[current] + this.distance(this.stations[current], this.stations[adj])) {
          dis[adj] = dis[current] + this.distance(this.stations[current], this.stations[adj])
          pathParrent[adj] = current
        }
      }
      unvisited.splice(unvisited.indexOf(current), 1)
      if (current === 'destination') {
        console.log('reached destination')
        break
      }
      current = null
      for (let candidate of unvisited) {
        if (dis[candidate] !== undefined && (current === null || dis[current] > dis[candidate])) {
          current = candidate
        }
      }
    }
    
    this.calculatePath(pathParrent)
    this.minDistance = dis['destination']
    return this.minDistance
  }
  
  solve () {
    this.constructGraph()
    this.dijkstra()
    console.log('dijkstra ended')
    if(this.path !== []){
      this.path.unshift(this.source)
      this.stationsOnPath.unshift('start')
    }
    return {
      distance: this.minDistance,
      path: this.path, //array : locations of stations on path
      stationsOnPath: this.stationsOnPath //array : name of stations
    }
  }
}
