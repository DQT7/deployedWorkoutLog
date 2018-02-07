
$(function() {
	$.extend(WorkoutLog, {
		nutrition: {
			meal: [],

			
			

			setHistory: function() {
				var history = WorkoutLog.nutrition.workouts;
				var len = history.length;
				var lis = "";
					for (var i = 0; i < len; i++) {
					lis += "<li class='list-group-item'>" + 
					// history[i].id + " - " + 
					history[i].def + " - " + 
					history[i].result + " " +
					// pass the log.id into the button's id attribute // watch your quotes!
					"<div class='pull-right'>" +
						"<button id='" + history[i].id + "' class='update'><strong>U</strong></button>" +
						"<button id='" + history[i].id + "' class='remove'><strong>X</strong></button>" +
					"</div></li>";
				}
				$("#history-list").children().remove();
				$("#history-list").append(lis);
			},
			create: function() {
				var itsnutrition= { 
		        	desc: $("#nutrition-description").val(),
		         	result: $("#nutrition-result").val(),
		         	def: $("#nutrition-definition option:selected").text()
		      	};
		      	var postData = { log: itsnutrition};
		      	var logger = $.ajax({
		         	type: "POST",
		         	url: WorkoutLog.API_BASE + "nutrtion",
		         	data: JSON.stringify(postData),
		         	contentType: "application/json"
		      	});

		      	logger.done(function(data) {
	      			WorkoutLog.nutrition.workouts.push(data);
	      			$("#nutrtion-description").val("");
					$("#nutrtion-result").val("");
					$('a[href="#history"]').tab("show");
		      	});
			},

			delete: function(){
				var thisnutrition= {
					// "this" is the button on the li
			//.attr("id") targets the value of the id attribute of button
					id: $(this).attr("id")
				};
				var deleteData = { nutrition: thisnutrition};
				var deletenutrition= $.ajax({
					type: "DELETE",
					url: WorkoutLog.API_BASE + "nutrition",
					data: JSON.stringify(deleteData),
					contentType: "application/json"
				});

				// removes list item
				// references button then grabs closest li
				$(this).closest("li").remove();

				// deletes item out of workouts array
				for(var i = 0; i < WorkoutLog.log.workouts.length; i++){
					if(WorkoutLog.log.workouts[i].id == thisLog.id){
						WorkoutLog.log.workouts.splice(i, 1);
					}
				}
				deleteLog.fail(function(){
					console.log("nope. you didn't delete it.");
				});
			},

			// history
			fetchAll: function() {
				var fetchDefs = $.ajax({
			         type: "GET",
			         url: WorkoutLog.API_BASE + "nutrition",
			         headers: {
			         	"authorization": window.localStorage.getItem("sessionToken")
			         }
			      })
			      .done(function(data) {
			         WorkoutLog.nutrition.workouts = data;
			      })
			      .fail(function(err) {
			         console.log(err);
			      });
			}
		}
	});

	$("#nutrition-save").on("click", WorkoutLog.nutrition.create);
	$("#history-list").delegate('.remove', 'click', WorkoutLog.nutrition.delete);

	   // fetch history if we already are authenticated and refreshed
   if (window.localStorage.getItem("sessionToken")) {
      WorkoutLog.nutrition.fetchAll();
   }
});