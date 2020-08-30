//----------------index.js for MachiMaths

    function keyDown(key){
        //console.log("Key Code: "+ key.keyCode);
        if(47 < key.keyCode && key.keyCode < 58){ //numbers
            buttonHandler(key.key);
        }else if(key.keyCode == 46 || key.keyCode == 8){ //delete
            buttonHandler('◁');
        }else if(key.keyCode == 13){
            buttonHandler('⏎');
        }

    }


    function buttonHandler(key) {
        console.log(key + " pressed");
        value = screen.innerHTML;
        
        if (key == '◁') {
            //screen.innerHTML = value.substr(0, value.length - 1);
            screen.innerHTML = "";
            value = screen.innerHTML;

        }else if(key == '⏎'){
            if(value == answer){
                console.log("Correct!");
                refresh();
            }else{
                console.log("Wrong! \nYour Input: " + value +"\nAnswer: " + answer);
            }

        }else{
            if(value.length < 8){
                screen.innerHTML += key;
                value = screen.innerHTML;
            }
        }

    }

    function popup() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    function selectionHandler(id,key) {  //  ➰ ➗ ➖ ➕ ✖️
        console.log(key + " pressed");
     
        value = screen.innerHTML;
        if(id == "rnds"){
            localStorage.setItem("rounds", key);
        }
        
        if(id == "op"){ //NO NEED FOR IF LOOP if not using EMOJI.
            if (key == '➕') {
                localStorage.setItem("modeSelection", '+');
            }else if(key == '➖' ){
                localStorage.setItem("modeSelection", '-');
            }else if(key == '✖️' ){
                localStorage.setItem("modeSelection", '*');
            }else if(key == '➗' ){
                localStorage.setItem("modeSelection", '/');
            }else{
                localStorage.setItem("modeSelection", 'M');
            }
        }else{
            var range = {}; //object is not needed, but more easily accessible if code is to be reused.
            if (key == '1') {
                range.min = 1;
                range.max = 9;
            }else if(key == '2'){
                range.min = 10;
                range.max = 99;
            }else if(key == '3'){
                range.min = 100;
                range.max = 999;
            }else if(key == '4'){
                range.min = 1000;
                range.max = 9999;
            }else{

                range.min = 10000;
                range.max = 99999;
            }

            if(id == "n1"){
                localStorage.setItem("min1", range.min);
                localStorage.setItem("max1", range.max);
            }else{
                localStorage.setItem("min2", range.min);
                localStorage.setItem("max2", range.max);
            }
        }
    }

    //=====================MachiMaths, Tabaru 06/2020===================================//
//=============================================================================================
/*
var range = {};
        range.min = 10000;
        range.max = 99999;
 localStorage.setItem("placeValue1", JSON.stringify(range));


  case 'n2': 
        console.log("n2");
        if(key == '❶') {
            localStorage.setItem("placeValue2", "10");
        }else if(key == '❷' ){
            localStorage.setItem("placeValue2", "100");
        }else if(key == '❸' ){
            localStorage.setItem("placeValue2", "1000");
        }else if(key == '❹' ){
            localStorage.setItem("placeValue2", "10000");
        }else{
            localStorage.setItem("placeValue2", "100000");
        }
        break;


*/



    
    
