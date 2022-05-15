// Global Varibles
var xTurn = true;
var gameOver = false;
var numMoves = 0;
var xColor = "#2980B9";
var oColor = "#DC7633";
var birdLocation = {
    "x": 0,
    "y": 5, 
}
var myInterval = setInterval(function() {
    let bird_x = birdLocation.x;
    let bird_y = birdLocation.y;
    let lowestCost = 2000;

    //Find lowest cost and lowest location
    //Get top square
    let aroundX = bird_x - 1;
    let aroundY = bird_y;
    if (aroundX > -1 && aroundX < 8 && aroundY > -1 && aroundY < 8) {
        if (arr[aroundX + "_" + aroundY] === undefined) {
            if (arr[aroundX + "_" + aroundY].cost == -1) {
                
            } else {
                if (arr[aroundX + "_" + aroundY].cost < lowestCost) {
                    newX = aroundX;
                    newY = aroundY;
                }
            }
        }
    }    


    //Get right square
    //If right square is blank write new cost and goto surrounding squares
    aroundX = bird_x;
    aroundY = bird_y + 1;
    if (aroundX > -1 && aroundX < 8 && aroundY > -1 && aroundY < 8) {
        if (arr[aroundX + "_" + aroundY] === undefined) {
            if (arr[aroundX + "_" + aroundY].cost == -1) {
                
            } else {
                if (arr[aroundX + "_" + aroundY].cost < lowestCost) {
                    newX = aroundX;
                    newY = aroundY;
                }
            }
        }
    }  
    //Get bottom square
    //If bottom square is blank write new cost and goto surrounding squares
    aroundX = bird_x + 1;
    aroundY = bird_y;
    if (aroundX > -1 && aroundX < 8 && aroundY > -1 && aroundY < 8) {
        if (arr[aroundX + "_" + aroundY] === undefined) {
            if (arr[aroundX + "_" + aroundY].cost == -1) {
                
            } else {
                if (arr[aroundX + "_" + aroundY].cost < lowestCost) {
                    newX = aroundX;
                    newY = aroundY;
                }
            }
        }
    }  
    //Get left square
    //If left square is blank write new cost and goto surrounding squares
    aroundX = bird_x;
    aroundY = bird_y - 1;
    if (aroundX > -1 && aroundX < 8 && aroundY > -1 && aroundY < 8) {
        if (arr[aroundX + "_" + aroundY] === undefined) {
            if (arr[aroundX + "_" + aroundY].cost == -1) {
                
            } else {
                if (arr[aroundX + "_" + aroundY].cost < lowestCost) {
                    newX = aroundX;
                    newY = aroundY;
                }
            }
        }
    }  



    //document.getElementById((bird_x)+"_"+bird_y).innerHTML ='';
    //document.getElementById(newX+"_"+newY).innerHTML ='<span class="fa-lg fa-stack"></i><i class="fa fa-twitter fa-stack-1x"></i></span>';
    birdLocation.x = newX;
    birdLocation.y = newY;
}, 1000); 
document.getElementById("0_5").innerHTML ='<span class="fa-lg fa-stack"></i><i class="fa fa-twitter fa-stack-1x"></i></span>';
var arr = {
    "0_5": {
        "cost":-1,
        "square":0
    },
    "1_1": {
        "cost":-1,
        "square":0
    },
    "1_2": {
        "cost":-1,
        "square":0
    },
    "1_3": {
        "cost":-1,
        "square":0
    },
    "1_4": {
        "cost":-1,
        "square":0
    },
    "1_5": {
        "cost":-1,
        "square":0
    },
    "1_6": {
        "cost":-1,
        "square":0
    },
    "2_1": {
        "cost":-1,
        "square":0
    },
    "2_6": {
        "cost":-1,
        "square":0
    },
    "3_1": {
        "cost":-1,
        "square":0
    },
    "3_3": {
        "cost":-1,
        "square":0
    },
    "3_5": {
        "cost":-1,
        "square":0
    },
    "3_6": {
        "cost":-1,
        "square":0
    },
    "4_1": {
        "cost":-1,
        "square":0
    },
    "4_3": {
        "cost":-1,
        "square":0
    },
    "4_6": {
        "cost":-1,
        "square":0
    },
    "5_1": {
        "cost":-1,
        "square":0
    },
    "5_3": {
        "cost":-1,
        "square":0
    },
    "5_5": {
        "cost":-1,
        "square":0
    },
    "5_6": {
        "cost":-1,
        "square":0
    },
    "6_1": {
        "cost":-1,
        "square":0
    },
    "6_2": {
        "cost":-1,
        "square":0
    },
    "6_3": {
        "cost":-1,
        "square":0
    },
    "6_4": {
        "cost":-1,
        "square":0
    },
    "6_5": {
        "cost":-1,
        "square":0
    },
    "6_6": {
        "cost":-1,
        "square":0
    },

}
// function clearTable3() {
//     for(var x = 0; x < 8; x++) {
//         for(var y = 0; y < 8; y++) {
//             let box = document.getElementById(x + '_' + y).innerHTML
//             if (box >=  '0') {
//                 document.getElementById(x + '_' + y).innerHTML= '&nbsp;';
//             } 
//         }
//     }
// }

// function clearTable2() {
//     const ids = ["0_5", "1_1", "1_2"];
//     document.getElementById(ids).innerHTML= '&nbsp;';
 
// }
function clearTable() {
    arr = {
        "0_5": {
            "cost":-1,
            "square":0,
            "bird":1
        },
        "1_1": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "1_2": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "1_3": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "1_4": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "1_5": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "1_6": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "2_1": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "2_6": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "3_1": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "3_3": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "3_5": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "3_6": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "4_1": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "4_3": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "4_6": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "5_1": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "5_3": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "5_5": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "5_6": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "6_1": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "6_2": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "6_3": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "6_4": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "6_5": {
            "cost":-1,
            "square":0,
            "bird":0
        },
        "6_6": {
            "cost":-1,
            "square":0,
            "bird":0
        },
    
    }
    const index= Object.keys(arr);
    console.log(index)
    index.forEach((n) => {document.getElementById(n).innerHTML= '&nbsp;'});
    document.getElementById(birdLocation.x + "_" + birdLocation.y).innerHTML= ''
    // n is require, n is value of current element, i and the array(index) is optional, i is index, 3 option, 
    //index.forEach((n, i) => {document.getElementById(n).innerHTML= '&nbsp;'});
    //index.forEach((n, i, index) => {document.getElementById(n).innerHTML= '&nbsp;'});
}

function onMouseClicked(x,y) // square is a button object
// squareclicked is a function that is called whenever a button is clicked.
{
    

   
    // // check if the current square does not
                                     // have 'X' or 'O'
    
       
    //clearTable();
    arr[x + "_" + y].cost = 0
    goToFourSurroundingSquareAndWriteNewCost(0, x, y);
    console.log(arr["1_1"]);
    flyBird(x, y);





    //goToFourSurroundingSquareAndWriteNewCost(0, x, y);
        


}

function flyBird(x, y) {
    let bird_x = birdLocation.x;
    let bird_y = birdLocation.y;
    if (x == bird_x  &&  y == bird_y) {
        document.getElementById(x+"_"+y).innerHTML ='<span class="fa-lg fa-stack"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x"></i></span>';
    }
    else {
        document.getElementById(bird_x+"_"+bird_y).innerHTML ='<span class="fa-lg fa-stack"></i><i class="fa fa-twitter fa-stack-1x"></i></span>';
        document.getElementById(x+"_"+y).innerHTML ='<span class="fa-lg fa-stack"><i class="fa fa-square-o fa-stack-2x"></i></i></span>';
    }
}


function goToFourSurroundingSquareAndWriteNewCost(cost, x, y) {
    //Get top square 
    //If top square is blank write new cost and goto surrounding squares
    let newCost = cost + 1;
    let newX = x - 1;
    let newY = y;
    writeNewCost(newX, newY, newCost);
    //Get right square
    //If right square is blank write new cost and goto surrounding squares
    newX = x;
    newY = y + 1;
    writeNewCost(newX, newY, newCost);

    //Get bottom square
    //If bottom square is blank write new cost and goto surrounding squares
    newX = x + 1;
    newY = y;
    writeNewCost(newX, newY, newCost);

    //Get left square
    //If left square is blank write new cost and goto surrounding squares
    newX = x;
    newY = y - 1;
    writeNewCost(newX, newY, newCost);
}

function writeNewCost(newX, newY, newCost) {
    //console.log(newX + "_" + newY);
    if (arr[newX + "_" + newY] != null) {
        //console.log(arr[newX + "_" + newY].cost);
        if (arr[newX + "_" + newY].cost == 0) {
            arr[newX + "_" + newY].cost = newCost;
            goToFourSurroundingSquareAndWriteNewCost(newCost, newX, newY);
        }
        else {
            if (arr[newX + "_" + newY].cost > newCost) {
                arr[newX + "_" + newY].cost = newCost;
                //console.log(newX + "_" + newY);
                goToFourSurroundingSquareAndWriteNewCost(newCost, newX, newY);
            }
        }
    }
}
