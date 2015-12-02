$(document).one('pageinit', function(){
    //Display Runs
    showRuns();
    
    //Add handler
    $('#submitAdd').on('tap', addRun);
    
    //Edit handler
    $('#submitEdit').on('tap', editRun);
    
    //Delete handler
    $('#stats').on('tap','#deleteLink', deleteRun);
    
    //Set current handler
    $('#stats').on('tap','#editLink', setCurrent);
    
    //Clear handler
    $('#clearRuns').on('tap', clearRuns);
    
    
    
    /*
     *Show stats on homepage
     */
    function showRuns(){
        
        //get runs object
        var runs = getRunsObject();
        
        //check if empty
        if(runs != '' && runs !=null){
            for(var i = 0;i < runs.length;i++){
                $('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>Date: </strong>'+runs[i]["date"]+
                '<br><strong>Distance: </strong>'+runs[i]["miles"]+' miles<div class="controls">'+
                '<a href="#edit" id="editLink" data-miles="'+runs[i]["miles"]+'" data-date="'+runs[i]["date"]+'">Edit</a> | <a href="#" id="deleteLink" data-miles="'+runs[i]["miles"]+'" data-date="'+runs[i]["date"]+'" onclick="return confirm(\'Are You Sure?\')">Delete</a></li>');
            }
            $('#home').bind('pageinit', function(){
                $('#stats').listview('refresh');
            });
        } else {
            $('#stats').html('<p>You have no logged runs!</p>');
        }
    }
    
    /*
     *Add a run
     */
    function addRun(){
        //Get form value
        var miles   = $('#addMiles').val();
        var date    = $('#addDate').val();
        
        //Create object
        var run     = {
            date: date,
            miles: parseFloat(miles)
        };
        
        var runs    = getRunsObject();
    
        //add run to runs array
        runs.push(run);
        
        alert('Run Added');
        
        //Set strigify object to localStorage
        localStorage.setItem('runs', JSON.stringify(runs));
        
        //Redirect to Index
        window.location.href="index.html";
        
        return false;
    
    }
    
    /*
     *Edit a run
     */
    function editRun(){
        //Get current data
        currentMiles = localStorage.getItem('currentMiles');
        currentDate = localStorage.getItem('currentDate');
        
        var runs    = getRunsObject();
        
        //loop through runs
        for(var i = 0;i < runs.length;i++){
            if(runs[i].miles == currentMiles && runs[i].date == currentDate){
                runs.splice(i,1);
            }
            
            localStorage.setItem('runs', JSON.stringify(runs));
        }
        
        //Get form value
        var miles   = $('#editMiles').val();
        var date    = $('#editDate').val();
        
        //Create object
        var update_run = {
            date: date,
            miles: parseFloat(miles)
        };
        
        
        //add run to runs array
        runs.push(update_run);
        
        alert('Run Updated');
        
        //Set strigify object to localStorage
        localStorage.setItem('runs', JSON.stringify(runs));
        
        //Redirect to Index
        window.location.href="index.html";
        
        return false;
    }
    
    function clearRuns(){
        localStorage.removeItem('runs');
        $('#stats').html('<p>You have no logged runs!</p>');
    }
    
    /*
     *Delete a run
     */
    function deleteRun(){
        //Set localstorage items
        localStorage.setItem('currentMiles', $(this).data('miles'));
        localStorage.setItem('currentDate', $(this).data('date'));
        
        //Get current data
        currentMiles = localStorage.getItem('currentMiles');
        currentDate = localStorage.getItem('currentDate');
        
        var runs    = getRunsObject();
        
        //loop through runs
        for(var i = 0;i < runs.length;i++){
            if(runs[i].miles == currentMiles && runs[i].date == currentDate){
                runs.splice(i,1);
            }
            
            localStorage.setItem('runs', JSON.stringify(runs));
        }
        
        alert('Run Deleted');
        
        //Redirect to Index
        window.location.href="index.html";
        
        return false;
    }
    
    
    /*
     *Get the Object
     */
    function getRunsObject(){
        //Set runs array
        var runs        = new Array();
        //Get current runs from localStorage
        var currentRuns = localStorage.getItem('runs');
        
        
        //Check local storage
        if(currentRuns !=null){
            //set to runs
            var runs = JSON.parse(currentRuns);
        }
        
        //Return Object
        return runs.sort(function(a, b){return new Date(b.date) - new Date(a.date)});
    }
    
    /*
     *Set the current clicked miles and date
     */
    function setCurrent(){
        //Set localstorage items
        localStorage.setItem('currentMiles', $(this).data('miles'));
        localStorage.setItem('currentDate', $(this).data('date'));
    
        //insert form fields
        $('#editMiles').val(localStorage.getItem('currentMiles'));
        $('#editDate').val(localStorage.getItem('currentDate'));
    }
    
});