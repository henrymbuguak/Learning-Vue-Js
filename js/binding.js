new Vue({
  el: '#vue-app',
  data: {
    title: "Learning Vue Js Data Binding",
    name: "Henry",
    job: "Software Developer",
    website: "https://vuejs.org/",
    websiteTag: '<a href="https://vuejs.org/">Vue js</a>'
  },
  methods: {
    greet: function(time) {
      return 'Welcome ' + time + this.name;
    }
  }
});
