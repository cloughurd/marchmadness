var app = new Vue({
  el: '#app',
  data: {
    south: [],
    east: [],
    west: [],
    midwest: [],
    southVotes: 0,
    eastVotes: 0,
    westVotes: 0,
    midwestVotes: 0,
    showSouth: true,
    showEast: true,
    showWest: true,
    showMidwest: true,
  },
  // computed: {
  //   activeItems: function() {
  //     return this.items.filter(function(item) {
	// return !item.completed;
  //     });
  //   },
  //   filteredItems: function() {
  //     if (this.show === 'active')
	// return this.items.filter(function(item) {
	//   return !item.completed;
	// });
  //     if (this.show === 'completed')
	// return this.items.filter(function(item) {
	//   return item.completed;
	// });
  //     return this.items;
  //   },
  // },
  created: function(){
    this.getSouth();
    this.getEast();
    this.getWest();
    this.getMidwest();
  },
  methods: {
    getSouth: function() {
      axios.get("/api/south").then(response => {
        this.south = response.data.region;
        this.southVotes = response.data.voteCount;
        console.log(this.south);
        return true;
      }).catch(err => {
      });
    },
    getEast: function() {
      axios.get("/api/east").then(response => {
        this.east = response.data.region;
        this.eastVotes = response.data.voteCount;
        console.log(this.east);
        return true;
      }).catch(err => {
      });
    },
    getWest: function() {
      axios.get("/api/west").then(response => {
        this.west = response.data.region;
        this.westVotes = response.data.voteCount;
        console.log(this.west);
        return true;
      }).catch(err => {
      });
    },
    getMidwest: function() {
      axios.get("/api/midwest").then(response => {
        this.midwest = response.data.region;
        this.midwestVotes = response.data.voteCount;
        console.log(this.midwest);
        return true;
      }).catch(err => {
      });
    },
    voteForSouth: function(college) {
      axios.put("/api/south/" + college.school).then(response =>{
        this.getSouth();
        return true;
      }).catch(err => {

      });
    },
    voteForEast: function(college) {
      axios.put("/api/east/" + college.school).then(response =>{
        this.getEast();
        return true;
      }).catch(err => {

      });
    },
    voteForWest: function(college) {
      axios.put("/api/west/" + college.school).then(response =>{
        this.getWest();
        return true;
      }).catch(err => {

      });
    },
    voteForMidwest: function(college) {
      axios.put("/api/midwest/" + college.school).then(response =>{
        this.getMidwest();
        return true;
      }).catch(err => {

      });
    },
    formatPercentage: function(school, total) {
      if(total < 0){
        return "0";
      }else{
        let percent = (school / total * 100).toFixed(2);
        return percent;
      }
    }
  //   addItem: function() {
  //     this.items.push({text: this.text,completed:false});
  //     this.text = '';
  //   },
  //   completeItem: function(item) {
  //     item.completed = !item.completed;
  //   },
  //   deleteItem: function(item) {
  //     var index = this.items.indexOf(item);
  //     if (index > -1)
	// this.items.splice(index,1);
  //   },
  //   showAll: function() {
  //     this.show = 'all';
  //   },
  //   showActive: function() {
  //     this.show = 'active';
  //   },
  //   showCompleted: function() {
  //     this.show = 'completed';
  //   },
  //   deleteCompleted: function() {
  //     this.items = this.items.filter(function(item) {
	// return !item.completed;
  //     });
  //   },
  //   dragItem: function(item) {
  //     this.drag = item;
  //   },
  //   dropItem: function(item) {
  //     var indexItem = this.items.indexOf(this.drag);
  //     var indexTarget = this.items.indexOf(item);
  //     this.items.splice(indexItem,1);
  //     this.items.splice(indexTarget,0,this.drag);
  //   },
  }
});
