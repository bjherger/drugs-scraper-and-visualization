console.log('begin javascript');

//Data
//***********************************************************************
d3.csv(filename, function( data){

// Normalize & parse data
    if (data["result"]){
       data = data["result"]; 
    }
    var dateFormat = d3.time.format("%Y-%m-%d %H:%M:%S");
    var formatDay = d3.time.format("%A");
    var formatHour = d3.time.format("%H");//d3.time.format("%I %p");
    
    //do something to each observarion (row)
    data.forEach(function(d) {
        // console.log(d)
        d.pastMonth = +d.pastMonth
    });

//Crossfilter setup
    // set crossfilter
    var ndx = crossfilter(data);


    // .domain([ "value1"]) //Allows for consistent mapping of key to color. 
                            //Otherwise keys are assigned color in the order they are encountered
  
    // .range( [ "#00B1DA"]) //Allows mapping of key to specific color. 
                             //Default colors are used in default order otherwise
  ;

// Charts
    var color = d3.scale.category20c()
        .domain("1", "2", "3", "the", "Yes", "No", "No Response"); 
        // .range("#HexColor1", "#HexColor2", "...more")

// Charts: Ring charts
//***********************************************************************




    
    ringChartKeywords = getRingLabels();//[ "CollabPlanned", "CollabIn"];
    ringCharts = {};
    genRingCharts()

function genRingCharts(){
    // Loop through all given charts
    for (var qInt in ringChartKeywords){
        // colors
        // var color = d3.scale.ordinal() //Sets colors to be used. 
            // .range( [ "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5", "#00B1DA", "#661C7A", "#D00790", "#EF5D2E", "#FFD02A", "#C0D545", "#A8A8A8", "#003F98", "#E3E4E5"])

        // set up 
        var localQ = ringChartKeywords[qInt]; //variable key to use
        var width =1 *  $("#chart-ring-" + localQ).parent().width();
        var whratio = 1 // height = whratio * width


        // filter
        var localDim = ndx.dimension( function(d)  { 
            console.log(localQ)
            console.log(d)
                if (d[localQ]  == undefined) {//if row is missing any data, whole row is removed

                    return "No Response";
                } else if (d[localQ]  == ""){
                    return "No Response";
                }
                else{
                    if (d[localQ].length > 10){
                        return d[localQ].substring(0,10);
                    } else{
                        return d[localQ];
                    }
                } 
            } 
        )
        ;


        //Remove rows with undefined element(s)
        // localFilter = localDim.filter("undefinedIndicatorVariable");
        var localFilter = localDim.group().reduceCount(); 
        // ndx.remove();


        //create 
        var localChart = dc.pieChart("#chart-ring-" + localQ) //create ring chart
            .width(width).height(width * whratio) //set size
            .dimension(localDim) //set dimension
            .group(localDim.group().reduceCount())  //set filter (counts)
            .innerRadius(width * .4)
            .renderLabel(false)
            .colors(color)
            .transitionDuration(1000) 
            ;

            ringCharts[localQ] = localChart;

        if (localDim.group().reduceCount().size() < 5){
            // add legend if there are less than 5 items (otherwise its too long)
            ringCharts[localQ].legend(dc.legend().x(width * .25).y(width * whratio * .25).itemHeight(width * .05).gap(width * .08));
        }

        // localDim.filterAll(); //remove all the filtering we've done.
    }

    // Charts: Ring
    // Override for specific charts


    // ringCharts["gallons"].renderLabel(true);
    if (ringCharts["day"]){
        ringCharts["day"].ordering(function(v){
            day = v.key;
            if (day == "Sunday"){return 0;}
            else if (day == "Monday"){return 1;}
            else if (day == "Tuesday"){return 2;}
            else if (day == "Wednesday"){return 3;}
            else if (day == "Thursday"){return 4;}
            else if (day == "Friday"){return 5;}
            else if (day == "Saturday"){return 6;}
            else {return 7;}
            return 1;
        });
        ringCharts["day"].renderLabel(false);
        ringCharts["day"].legend(dc.legend().x(width * .25).y(width * whratio * .25).itemHeight(width * .04).gap(width * .03))
    }
}
// Charts: Row charts
//***********************************************************************


genRowCharts()

function genRowCharts(){
    rowChartKeywords = getRowLabels();
    rowCharts = {}

    for (var qInt in rowChartKeywords){

        // set up 
        var localQ = rowChartKeywords[qInt]; //variable key to use
        var width =1 *  $("#chart-row-" + localQ).parent().width();
        var whratio = .5 // height = whratio * width

        // filter
        var localDim = ndx.dimension( function(d)  { 
                if (d[localQ]  == undefined) {//if row is missing any data, whole row is removed

                    return "No Response";
                }
                else{

                        return d[localQ]
                } 
            } 
        )
        ;

        //Remove rows with undefined element(s)
        // localFilter = localDim.filter("undefinedIndicatorVariable");
        var localFilter = localDim.group().reduceCount(); 
        // ndx.remove();

        //create 
        var localChart = dc.rowChart("#chart-row-" + localQ)
            .width(width).height(width * whratio)

            .dimension(localDim)
            .group(localFilter)
            .elasticX(true)

            // .renderLabel(false)
            // .legend(dc.legend().x(40).y(30).itemHeight(13).gap(5))
            .colors(color)
            .margins({top: 0, right: 0, bottom: -1, left: 0})

            ;

        localChart.xAxis().ticks(0);
        // localChart.xAxis().tickFormat(function(v) { return ""; })
        rowCharts[localQ] = localChart;

    }

    if (rowCharts["hour"]){
        setWHRatio(rowCharts["hour"], .75)
        rowCharts["hour"].ordering(function(v){
            day = v.key.split(" ");
            toReturn = +day[0]
            if (day[1] == "PM"){toReturn +=12}
            return toReturn;
        });
    }


    if (rowCharts["day"]){

        rowCharts["day"].ordering(function(v){
            day = v.key;
            if (day == "Sunday"){return 0;}
            else if (day == "Monday"){return 1;}
            else if (day == "Tuesday"){return 2;}
            else if (day == "Wednesday"){return 3;}
            else if (day == "Thursday"){return 4;}
            else if (day == "Friday"){return 5;}
            else if (day == "Saturday"){return 6;}
            else {return 7;}
            return 1;
        })
    };
}
// Charts: Bar charts
//***********************************************************************


     genBarCharts()

function genBarCharts(){
    barChartKeywords = getBarLabels();
    barCharts = {}

    for (var qInt in barChartKeywords){

        var values = []
        // set up 
        var localQ = barChartKeywords[qInt]; //variable key to use
        var width =1 *  $("#chart-bar-" + localQ).parent().width();
        var whratio =.75 // height = whratio * width
        // filter
        var localDim = ndx.dimension( function(d)  { 
                if (d[localQ]  == undefined) {//if row is missing any data, whole row is removed
                    console.log("caught");
                    return "No Response";
                }
                else{
                        values[values.length] = d[localQ]
                        return d[localQ]
                } 
            } 
        )
        ;

        //Remove rows with undefined element(s)
        // localFilter = localDim.filter("undefinedIndicatorVariable");
        var localFilter = localDim.group().reduceCount(); 
        var difference = localDim.top(1)[0][localQ] - localDim.bottom(1)[0][localQ] 
        console.log("dif" + difference)
        //create 
        var localChart = dc.barChart("#chart-bar-" + localQ)
            .width(width).height(width * whratio)
            .dimension(localDim)
            .group(localFilter)
            .x(d3.scale.linear().domain(
                [
                localDim.bottom(1)[0][localQ] - difference*.1,
                localDim.top(1)[0][localQ] + difference*.1
                ]
                ))
            // .xUnits(function(){
                // return 500
            // })
            .colors(color)
            

            .barPadding(0.1)
            .outerPadding(.15)
            .xAxisLabel(localQ)
            .yAxisLabel("Number of fill ups")
            .centerBar(true)
            ;

        // localChart.xAxis().ticks(4);
        localChart.yAxis().ticks(2);

        barCharts[localQ] = localChart;

            if (localDim.bottom(1)[0][localQ].__proto__ == "Invalid Date"){
                localChart.x(d3.time.scale().domain(
                    [
                        localDim.bottom(1)[0][localQ],
                        localDim.top(1)[0][localQ]
                    ]
                    ))
            } else if(typeof localDim.bottom(1)[0][localQ] == "string"){
                localChart
                    .xUnits(dc.units.ordinal)
                    .x(d3.scale.ordinal())
            } 

    };

    // if (barCharts["day"]){

    //     barCharts["day"].ordering(function(v){
    //         day = v.key;
    //         if (day == "Sunday"){return 0;}
    //         else if (day == "Monday"){return 1;}
    //         else if (day == "Tuesday"){return 2;}
    //         else if (day == "Wednesday"){return 3;}
    //         else if (day == "Thursday"){return 4;}
    //         else if (day == "Friday"){return 5;}
    //         else if (day == "Saturday"){return 6;}
    //         else {return 7;}
    //         return 1;
    // });
    // }


        // ringCharts["day"].renderLabel(false);
        // ringCharts["day"].legend(dc.legend().x(width * .25).y(width * whratio * .25).itemHeight(width * .05).gap(width * .08))
    // }

    if (barCharts["hour"]){
        setWHRatio(barCharts["hour"],.75)
    };

}



// Charts: Avg charts
//***********************************************************************

     
     genAvgCharts()

function genAvgCharts(){
        
        var average = function(d) {
            // return 5;
          return d.n ? d.tot / d.n : 0;
        };
        
        // set up 
        var avgQ = "pastMonth"; //variable key to use

        var width =1 *  $("#chart-avg-" + avgQ).parent().width();
        var whratio =.5 // height = whratio * width
        // filter
        var localDim = ndx.dimension( function(d)  { 
                if (d[avgQ]  == undefined) {//if row is missing any data, whole row is removed

                    return "No Response";
                }
                else{
                        return d[avgQ];
                } 
            } 
        )
        ;


        //Remove rows with undefined element(s)
        // localFilter = localDim.filter("undefinedIndicatorVariable");
        var localFilter = localDim.group().reduceCount(); 
        // ndx.remove();

        //create 



        reducers = {};

        reducers[avgQ] = new localDim.groupAll().reduce(
              function (p, v) {
                  ++p.n;

                  p.tot += v[avgQ];
                  return p;
              },
              function (p, v) {
                  --p.n;
                  p.tot -= v[avgQ];
                  return p;
              },
              function () { return {n:0,tot:0}; }
          );
        


        

        var localChart = dc.numberDisplay("#chart-avg-" + avgQ)
            .width(width).height(width *whratio)
            .formatNumber(d3.format(".3s"))
            .group(reducers[avgQ])
            .transitionDuration(700) 
            .valueAccessor(
                average
                )
            ;


}

//Special Charts
//***********************************************************************


genLineCharts()

function genLineCharts(){
    lineChartKeywords = getLineLabels();
    for (var qInt in lineChartKeywords){
        var lineX = lineChartKeywords[qInt][0]; //variable key to use
        var lineY = lineChartKeywords[qInt][1];

        var width =1 *  $("#chart-line-" + lineX + "-" + lineY).parent().width();
        var whratio =.5 // height = whratio * width
        // filter
        var localDim = ndx.dimension( function(d)  { 
                if (d[lineX]  == undefined) {//if row is missing any data, whole row is removed

                    return "No Response";
                }
                else{

                    return d[lineX]
                } 
            } 
        )
        ;

        //Remove rows with undefined element(s)
        // localFilter = localDim.filter("undefinedIndicatorVariable");
        // var localFilter = localDim.group().reduceCount(); 
        var localFilter = localDim.group().reduce(
                function (p, v) {
                    p.val = v[lineY];
                    return p;
                },
                function (p, v) {
                    return p;
                },
                function () {
                    return {val: 0};
                }
            );

        var localChart = dc.lineChart("#chart-line-" + lineX + "-" + lineY)
            .width(width).height(width * whratio)
            .renderArea(true)
            .dimension(localDim)
            .group(localFilter)
            // .dotRadius(30)
            .x(d3.scale.linear().domain(
                [
                    localDim.bottom(1)[0][lineX],
                    localDim.top(1)[0][lineX] 
                ]
                ))
            // .round(d3.time.month.round)
            // .xUnits(d3.time.months)
            .renderHorizontalGridLines(true)
            .valueAccessor(function (d) {
                return d.value.val;
            })
            .xAxisLabel([lineX])
            .yAxisLabel([lineY])
            .colors(color)
            ;

            if (lineX == "date"){
                localChart.x(d3.time.scale().domain(
                    [
                        localDim.bottom(1)[0][lineX],
                        localDim.top(1)[0][lineX]
                    ]
                    ))
            } else if(localDim.bottom(1)[0][lineX].__proto__ == 0){
                localChart.x(d3.scale.linear().domain(
                    [
                        localDim.bottom(1)[0][lineX],
                        localDim.top(1)[0][lineX]
                    ]
                    ))
            }
    }
}

//Special Charts
//***********************************************************************

geoChartKeywords = getGeoLabels();//[ "CollabPlanned", "CollabIn"];
geoCharts = {};
genGeoCharts()

console.log(geoChartKeywords)

function genGeoCharts(){
    for (var qInt in geoChartKeywords){
        d3.json("./geo/us-states.json", function (statesJson) {

            // set up 
            var localQ = geoChartKeywords[qInt]; //variable key to use
            var width =1 *  $("#chart-geo-" + localQ).parent().width();
            var whratio = .5 // height = whratio * width

            var localDim = ndx.dimension( function(d)  { 
                if (d["State"]  == undefined) {//if row is missing any data, whole row is removed

                    return "No Response";
                } else if (d["State"]  == ""){
                    return "No Response";
                }
                else{
                    if (d["State"].length > 10){
                        return d["State"].substring(0,10);
                    } else{
                        return d["State"];
                    }
                } 
            });

            var localFilter = localDim.group().reduce(reduceAdd, reduceRemove, reduceInitial);//localDim.group().reduceSum(function (d) {
                // return d[localQ];
            // });


            function reduceAdd(p, v) {
                ++p.count;
                p.total += v[localQ];
                return p;
            }

            function reduceRemove(p, v) {
                --p.count;
                p.total -= v[localQ];
                return p;
            }

            function reduceInitial() {
                return {count: 0, total: 0};
            }

            var gradient = ["#E6E6FF", "#D9D9F5", "#CDCDEC", "#C1C1E2", "#B5B5D9", "#A9A9CF", "#9D9DC6", "#9191BD", "#8585B3", "#7979AA", "#6C6CA0", "#606097", "#54548D", "#484884", "#3C3C7B", "#303071", "#242468", "#18185E", "#0C0C55", "#00004C"]
            var numberFormat = d3.format(".1f");

            var localChart = dc.geoChoroplethChart("#chart-geo-" + localQ)
                .width(width)
                .height(width * whratio)
                .dimension(localDim)
                .group(localFilter)
                .transitionDuration(400) 
                .colors(d3.scale.quantize().range(gradient))
                .colorDomain([5, 40 ])
                .projection(d3.geo.albersUsa()
                .scale((width ) / 1 )
                .translate([width / 2, width * whratio / 2])
                )
                .valueAccessor(function(p) {  return p.value.count > 0 ? p.value.total / p.value.count : 20; })

                .colorCalculator(function (d) { return d ? localChart.colors()(d) : '#ccc'; })
                .overlayGeoJson(statesJson.features, "state", function (d) {

                    return d.properties.name;
                })
                .title(function (d) {
                    return "State: " + d.key+ "\nAvg: " + numberFormat(d.value);
                });

            dc.renderAll();         
        });
    }
}



dc.renderAll();
}); // End dc.js data segment

window.onresize = function(event) {
    console.log("resize");
};

function getRingLabels(){
        var words = document.body.innerHTML;  
    // words = words.split(" ");
    words = words.match(/"chart-ring.*"/g)

    for (var wordIndex in words){
        word = words[wordIndex];
        word = word.replace("\"chart-ring-", "");
        word = word.replace("\"", "");
        words[wordIndex] = word;
    }
    return words
}

function getRowLabels(){
        var words = document.body.innerHTML;  
    // words = words.split(" ");
    words = words.match(/"chart-row.*"/g)

    for (var wordIndex in words){
        word = words[wordIndex];
        word = word.replace("\"chart-row-", "");
        word = word.replace("\"", "");
        words[wordIndex] = word;
    }
    return words
}

function getBarLabels(){
    var words = document.body.innerHTML;  
    // words = words.split(" ");
    words = words.match(/"chart-bar.*"/g)

    for (var wordIndex in words){
        word = words[wordIndex];
        word = word.replace("\"chart-bar-", "");
        word = word.replace("\"", "");
        words[wordIndex] = word;
    }
    return words
}

function getAvgLabels(){
    var words = document.body.innerHTML;  
    // words = words.split(" ");
    words = words.match(/"chart-avg.*"/g)

    for (var wordIndex in words){
        word = words[wordIndex];
        word = word.replace("\"chart-avg-", "");
        word = word.replace("\"", "");
        words[wordIndex] = word;
    }
    return words
}

function getLineLabels(){
    var words = document.body.innerHTML;  
    // words = words.split(" ");
    words = words.match(/"chart-line.*"/g)
    for (var wordIndex in words){
        word = words[wordIndex];
        word = word.replace("\"chart-line-", "");
        word = word.replace("\"", "");
        words[wordIndex] = word.split("-");

    }
    return words
}

function getGeoLabels(){
        var words = document.body.innerHTML;  
    // words = words.split(" ");
    words = words.match(/"chart-geo.*"/g)

    for (var wordIndex in words){
        word = words[wordIndex];
        word = word.replace("\"chart-geo-", "");
        word = word.replace("\"", "");
        words[wordIndex] = word;
    }
    return words
}


function print_filter(filter){
    var f=eval(filter);
    if (typeof(f.length) != "undefined") {}else{}
    if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
    if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
    console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
//end misc. functions
} 

function reduceAdd(p, v) {
    v = v["mpg"]
  ++p.count;
  p.total += v;
  return p;
}

function reduceRemove(p, v) {
  --p.count;
  p.total -= v.value;
  return p;
}

function reduceInitial() {
  return {count: 0, total: 0};
}

function setWHRatio(object, ratio) {
    width = object.width();
    height = ratio * width;
    object.width(width).height(height);
}

console.log('end javascript');