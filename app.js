$(function(){

  var WorkoutLog = (function($, undefined) {
        var API_BASE =  "https://strongkick.herokuapp.com/api";
        var userDefinitions = [];
  
        var setAuthHeader = function(sessionToken) {
           window.localStorage.setItem("sessionToken", sessionToken);
           // Set the authorization header
           // This can be done on individual calls
           // here we showcase ajaxSetup as a global tool
           $.ajaxSetup({
              "headers": {
                 "Authorization": sessionToken
              }
           });
        };
  
        // public
        return {
           API_BASE: API_BASE,
           setAuthHeader: setAuthHeader
        };
     })(jQuery);
  
     // Ensure .disabled aren't clickable
     $(".nav-tabs a[data-toggle=tab]").on("submit", function(e) {
        var token = window.localStorage.getItem("sessionToken");
        if ($(this).hasClass("disabled") && !token) {
           e.preventDefault();
           return false;
        }
     });
  
     //bind tab change events
     $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href"); // activated tab
        if (target === "#log") {
           WorkoutLog.log.setDefinitions();
        }
  
        if (target === "#update-log") {
          WorkoutLog.log.setDefinitions();
        }
  
        if (target === "#history") {
           WorkoutLog.log.setHistory();
        }
     });
  
     // bind enter key
     $(document).on("keypress", function(e) {
        if (e.which === 13) { // enter key
           if ($("#signup-modal").is(":visible")) {
              $("#signup").trigger("click");
           }
           if ($("#login-modal").is(":visible")) {
              $("#login").trigger("click");
           }
        }
     });
  
    //  bind tab change events
    // bootstrap tab --> binding to a bootstrap event
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
       var target = $(e.target).attr("href"); // activated tab
       if (target === "#log") {
          WorkoutLog.log.setDefinitions();
       }
  
       if (target === "#history") {
          WorkoutLog.log.setHistory();
       }
    });
  
    // bind enter key
     $(document).on("keypress", function(e) {
        if (e.which === 13) { // enter key
           if ($("#signup-modal").is(":visible")) {
              $("#signup").trigger("submit");
           }
           if ($("#login-modal").is(":visible")) {
              $("#login").trigger("submit");
           }
        }
     });
  
     // setHeader if we
     var token = window.localStorage.getItem("sessionToken");
     if (token) {
        WorkoutLog.setAuthHeader(token); 
     }
  
     // expose this to the other workoutlog modules
     window.WorkoutLog = WorkoutLog;
  });
  
  
  
  
  // $(function(){
  
  
  
  // });
  
  //step 3
  // $(function(){
  
  // var WorkoutLog = (function($, undefined) {
     
  //    })(jQuery);
  
  
  // });
  
  
  
  //Step 4
  // $(function(){
  
  // var WorkoutLog = (function($, undefined) {
  //       var API_BASE =  "http://localhost:3000/api/";
  //       var userDefinitions = [];
  
  
  //     })(jQuery);
  
   
  // });
  
  //Step 5
  
  // $(function(){
  
  // var WorkoutLog = (function($, undefined) {
  //       var API_BASE =  "http://localhost:3000/api/";
  //       var userDefinitions = [];
  
  //       var setAuthHeader = function(sessionToken) {
  //          window.localStorage.setItem("sessionToken", sessionToken);
  //          // Set the authorization header
  //          // This can be done on individual calls
  //          // here we showcase ajaxSetup as a global tool
  //          $.ajaxSetup({
  //             "headers": {
  //                "Authorization": sessionToken
  //             }
  //          });
  //       };
  
  //    })(jQuery);
  
     
  
  // });
  
  //STep 6
  // $(function(){
  
  // var WorkoutLog = (function($, undefined) {
  //       var API_BASE =  "http://localhost:3000/api/";
  //       var userDefinitions = [];
  
  //       var setAuthHeader = function(sessionToken) {
  //          window.localStorage.setItem("sessionToken", sessionToken);
  //          // Set the authorization header
  //          // This can be done on individual calls
  //          // here we showcase ajaxSetup as a global tool
  //          $.ajaxSetup({
  //             "headers": {
  //                "Authorization": sessionToken
  //             }
  //          });
  //       };
  
  //       // public
  //       return {
  //          API_BASE: API_BASE,
  //          setAuthHeader: setAuthHeader
  //       };
  //    })(jQuery);
  
     
  
  // });
  
  
  //Step 7 is code up until now.
  
  //step 8
    // })(jQuery);
  
    //  // Ensure .disabled aren't clickable
    //  $(".nav-tabs a[data-toggle=tab]").on("click", function(e) {
    //     var token = window.localStorage.getItem("sessionToken");
    //     if ($(this).hasClass("disabled") && !token) {
    //        e.preventDefault();
    //        return false;
    //     }
    //  });
  
  
  //step 9
     // bind tab change events
     // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
     //    var target = $(e.target).attr("href"); // activated tab
     //    if (target === "#log") {
     //       WorkoutLog.log.setDefinitions();
     //    }
  
     //    if (target === "#history") {
     //       WorkoutLog.log.setHistory();
     //    }
     // });
  
  //step 10
     // bind enter key
     // $(document).on("keypress", function(e) {
     //    if (e.which === 13) { // enter key
     //       if ($("#signup-modal").is(":visible")) {
     //          $("#signup").trigger("click");
     //       }
     //       if ($("#login-modal").is(":visible")) {
     //          $("#login").trigger("click");
     //       }
     //    }
     // });
  
  //step 11
     // setHeader if we
     // var token = window.localStorage.getItem("sessionToken");
     // if (token) {
     //    WorkoutLog.setAuthHeader(token); 
     // }
  
     // // expose this to the other workoutlog modules
     // window.WorkoutLog = WorkoutLog;
  
  