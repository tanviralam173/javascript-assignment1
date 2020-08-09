//Quations number 1- find feet to miles..>>>>>>
//Answer is below...>>>>>

function feettoMile(feet){
    var mile = feet/5280;
    return mile;
}
var resultofMile = feettoMile(52800);
console.log("Mile is ",resultofMile);


//Quations number 2, and slove is below.....>>>>


function woodCalculator(chair,table,bed){
    var totalchairWood = chair * 1;
    var totaltableWood = table * 3;
    var totalbedWood   = bed * 5;
    var allTotal = totalchairWood + totaltableWood + totalbedWood;

    return allTotal;

}
// for 1 chair, 1 table, and 1 bed
var resultofWood = woodCalculator(1,1,1);
console.log("So Total number of wood is ", resultofWood,"cubic feet, that we need");
//and suppose there is a 10 chair , 8 table, 12 bed
var resultofWood = woodCalculator(10,8,12);
console.log("So Total number of wood is ", resultofWood ,"cubic feet, that we need");



// Quations number 3 and answer is below.....>>>>>>>>>>>>>

 function brickCalculator(n){
    totalnumberofBrick=0;
    for(var i=1 ; i<=n; i++){
        if(i<=10){
            var totalnumberofBrick= totalnumberofBrick + 15*1000;
        }
        if(i>=11 && i<=20){
            var totalnumberofBrick= totalnumberofBrick + 12*1000;
        }
        if(i>20){
            var totalnumberofBrick= totalnumberofBrick + 10*1000;
        }
        
       
    }
    return totalnumberofBrick;

 }

 //this for 30 floor suppose
 var resultofBrick= brickCalculator(30);
 console.log("So according to n total number of brick is ",resultofBrick);
 //suppose 17 floor or anything u  give
 var resultofBrick= brickCalculator(17);
 console.log("So according to n total number of brick is ",resultofBrick);



//Quations no 4 and answer is blow.....>>>>>>>>>>

 function tinyFriend(array){
    var srt = array[0];
    for(var i=1; i<array.length; i++){
        var element = array[i];
        if(srt.length > element.length){
            srt = element;
        
        } 
    }
    return srt;
 }


 var names = ['tanvir', 'rhin', 'jhankkar','ssjsjsgsjj','mahmud'];
 var tiny = tinyFriend(names);
 console.log(tiny);