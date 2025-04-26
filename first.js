let turn = 'O';
const player1 = document.querySelector('#img1');
const player2 = document.querySelector('#img2');

//Initial declaration of size of player whose turn it is as per turn variable
if(turn == 'O'){
    player1.style.height = "500px"
    player1.style.width = "500px";
    player2.style.height = "400px";
    player2.style.width = "400px";
}
else if(turn == 'X'){
    player2.style.height = "500px"
    player2.style.width = "500px";
    player1.style.height = "400px";
    player1.style.width = "400px";
}

//CASES FOR WINNER
let winner = [
    [0,1,2], //1st row
    [3,4,5],
    [6,7,8],
    [0,3,6], //1st column
    [1,4,7],
    [2,5,8],
    [0,4,8], //Diagonal
    [2,4,6]
]
//we will match this with winner array to check if it satisfies any winning condition
let board_array = new Array(9).fill("E"); //size = 9, all elements = "E"

//function to check Winner
function checkWinner(){
    for (let [idx0, idx1, idx2] of winner){ //same as winner[row][idx0],winner[row][idx1],winner[row][idx2]
        if(board_array[idx0] === board_array[idx1] && board_array[idx1] === board_array[idx2])
            return board_array[idx0]; //winner
    }
    return "E"; // no winner
}

let total_turn = 0; //if equal to 9 means match is draw

//function for all the operations in tic tac toe
const tic_tac_toe =  (e)=>{
    const temp = document.getElementById('winner'); //printing the winner name
    
    const element = e.target;
    if(board_array[element.id] ==="E") total_turn++; //increase since we will fill this 
    if(total_turn == 9){
        temp.textContent = "Match is Draw";
        board.removeEventListener('click', tic_tac_toe) //when draw  then stop putting "O" and "X"

    }

    if(turn == 'O'){
        
        if(element.innerHTML == ""){
            element.innerHTML = "O";
            turn = "X";
            board_array[element.id] = "O"; //for checking winner

            let current_winner = checkWinner();
            if(current_winner!="E"){
                if(current_winner == "O") temp.textContent = `Player 1 is the Winner!`;
                board.removeEventListener('click', tic_tac_toe) //when winner found then stop putting "O" and "X"

            }

        player2.style.height = "500px"
        player2.style.width = "500px";
        player1.style.height = "400px";
        player1.style.width = "400px";
        }  
    }
        
    else if(turn == 'X'){
        

        if(element.innerHTML == ""){
            element.innerHTML = "X";
            turn = "O";
            board_array[element.id] = "X"; 

            let current_winner = checkWinner();
            if(current_winner!="E"){
                 temp.textContent = `Player 2 is the Winner!`;
                 board.removeEventListener('click', tic_tac_toe) //when winner found then stop putting "O" and "X"

            }

            player1.style.height = "500px"
            player1.style.width = "500px";
            player2.style.height = "400px";
            player2.style.width = "400px";
        } 
    }        
}


const board = document.querySelector('.board')
board.addEventListener('click',tic_tac_toe)


const button = document.getElementById('reset');
button.addEventListener('click', (e)=>{
    const cells = document.getElementsByClassName('cell'); //emptying all the cells
    for (let cell of cells) cell.innerHTML = ""; //loop since it will return a HTML collection 

    turn = "O"; //reinitialize temp to O
    total_turn = 0; //reinitialize total no of turns
    board_array = new Array(9).fill("E"); //reinitialize board array
    board.addEventListener('click',tic_tac_toe) // if winner/ draw then we reset, we will have to reinitialize add event listener since we did remove event listener

    const temp = document.getElementById('winner'); 
    temp.innerHTML = ""; 

    player1.style.height = "500px"
    player1.style.width = "500px";
    player2.style.height = "400px";
    player2.style.width = "400px";
})
