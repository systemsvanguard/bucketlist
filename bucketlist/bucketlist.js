// Bucket List
var app = angular.module("myApp", []);

app.filter("capitalize", function() {
	return function(input) {
		var str = input.charAt(0).toUpperCase();
		str += input.slice(1);
		return str;
	};
});

app.controller("mainController", [
	"$scope",
	function(self) {
		self.currentTask = { text: "", marked: false, color: "green" };

		self.Tasks = [
			{ text: "Go Bungee-Jumping", marked: false, color: "blue" },
			{ text: "Running with the bulls in Spain", marked: false, color: "blue" },
			{ text: "Run the Toronto Marathon", marked: false, color: "blue" },
			{ text: "Hang glide over Rio de Janeiro", marked: false, color: "red" },
			{ text: "Parachute from a Plane", marked: true, color: "gray" },
			{ text: "Go Para-sailing", marked: true, color: "gray" },
			{ text: "Raft through the Grand Canyon", marked: false, color: "red" },
			{ text: "Swim with dolphins in Jamaica", marked: false, color: "black" },
			{ text: "Swim with whale sharks in the Maldives", marked: false, color: "green" },
			{ text: "Party Carnival in Jamaica", marked: true, color: "gray" },
			{ text: "Treetop Trekking", marked: true, color: "gray" }
		];

		self.submitTask = function() {
			if (self.currentTask.text != "") {
				self.Tasks.push(self.currentTask);
				self.currentTask = { text: "", marked: false, color: "gray" };
			}
		};

		self.clearTasks = function() {
			self.Tasks = self.Tasks.filter(function(task) {
				return !task.marked;
			});
		};

		self.markTask = function(task) {
			task.marked = !task.marked;
		};
		self.color_id = 0;
		self.changeTaskColor = function(task) {
			// in priority order (reverse)
			// 1. black, 2. red,..., last: gray
			var colors = ["gray", "green", "blue", "red", "black"];
			if (!task.marked) {
				if (self.color_id < 4) {
					self.color_id += 1;
				} else {
					self.color_id = 0;
				}
				task.color = colors[self.color_id];
			}
		};
	}
]);

