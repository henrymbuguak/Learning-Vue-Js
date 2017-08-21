new Vue({
  el: '#vue-app',
  data: {
    title: "Learning Vue Js",
    name: "Henry",
    job: "Software Developer",
  },
  methods: {
    greet: function(time) {
      return 'Welcome ' + time + this.name;
    }
  }
});
