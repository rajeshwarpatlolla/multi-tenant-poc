  // window.k = console.log.bind(console)
  // window.kw = console.warn.bind(console)
  // window.ki = console.info.bind(console)
  // window.kd = console.debug.bind(console)
  // window.ke = console.error.bind(console)

import moment from 'moment'

export default {
    
    p: function(str) { this.printIt(str, 'color: #8a2be2;') },
    b: function(str) { this.printIt(str, 'color: blue;') },
    c: function(str) { this.printIt(str, 'color: #00bbcc;') },
    g: function(str) { this.printIt(str, 'color: green;') },
    y: function(str) { this.printIt(str, 'color: #ffcc00;') },
    o: function(str) { this.printIt(str, 'color: #ffa500;') },
    r: function(str) { this.printIt(str, 'color: red;') },
    
    ph: function(str) { this.p(this.makeHeader(str)); },
    bh: function(str) { this.b(this.makeHeader(str)); },
    ch: function(str) { this.c(this.makeHeader(str)); },
    gh: function(str) { this.g(this.makeHeader(str)); },
    yh: function(str) { this.y(this.makeHeader(str)); },
    oh: function(str) { this.o(this.makeHeader(str)); },
    rh: function(str) { this.r(this.makeHeader(str)); },
    
    pb: function(str) { this.printIt(str, 'background: #8a2be2; color: white; padding: 3px;') },
    bb: function(str) { this.printIt(str, 'background: blue; color: white; padding: 3px;') },
    cb: function(str) { this.printIt(str, 'background: #00bbcc; color: white; padding: 3px;') },
    gb: function(str) { this.printIt(str, 'background: green; color: white; padding: 3px;') },
    yb: function(str) { this.printIt(str, 'background: #ffcc00; color: black; padding: 3px;') },
    ob: function(str) { this.printIt(str, 'background: #ffa500; color: white; padding: 3px;') },
    rb: function(str) { this.printIt(str, 'background: red; color: white; padding: 3px;') },
    
    pbh: function(str) { this.pb(this.makeHeader(str)); },
    bbh: function(str) { this.bb(this.makeHeader(str)); },
    cbh: function(str) { this.cb(this.makeHeader(str)); },
    gbh: function(str) { this.gb(this.makeHeader(str)); },
    ybh: function(str) { this.yb(this.makeHeader(str)); },
    obh: function(str) { this.ob(this.makeHeader(str)); },
    rbh: function(str) { this.rb(this.makeHeader(str)); },
    
    makeHeader(str) { return moment().format('hh:mm:ss a') + ': ======== ' + str + ' ========' },
    
    printIt(str, css) {
        if (typeof str === 'object') str = JSON.stringify(str, null, 2)
        console.log('%c ' + str + ' ', css)
    }
}