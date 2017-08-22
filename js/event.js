new Vue({
  el: '#vue-app',
  data: {
    title: "Learning Vue Js Event",
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time) {
      return 'Welcome ' + time + this.name + ' Tutorial';
    },
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});
