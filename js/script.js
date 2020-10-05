$(document).ready(function(){//cette ligne de code permet d'attendre le chargement du DOM

    let userChoice;
    let computerChoice;
    let stone = $('img[alt="stone"]');
    let paper = $('img[alt="paper"]');
    let scissors = $('img[alt="scissors"]');
    let userGame = $('article:first');
    let computerGame = $('article:last');
    let result = $('aside');
    let btnPlayGame = $('a:eq(0)');
    let btnReplay = $('a:eq(1)');

    //---------------------------------------------

    function clickOnBtn( button, choice){
        button.click(function(){
            userChoice = choice;
            userGame.html('<img src="img/' + userChoice +'.svg" alt="'+ choice +'">')

            btnPlayGame.fadeIn();
            //fadeIn() : permet de rendre une element visible 
        });
    }
    
    clickOnBtn( stone, 'stone');
    clickOnBtn( paper, 'paper');
    clickOnBtn( scissors, 'scissors');

    
    // declaration de la fonction du choix de l ordinateur

    function computerBet(){
        //Declaration d un tableau avec 3 choice
        let computerMemory = ['stone', 'paper', 'scissors'];
        let max = computerMemory.length;
        computerChoice = computerMemory[Math.floor(Math.random() * max)];
        computerGame.html('<img src="img/' + computerChoice +'.svg" alt="'+ computerChoice +'">');
        
    }

    btnPlayGame.click(function(){
       computerBet();
    
    if( userChoice == 'stone' && computerChoice == 'scissors' ){
			
        result.html('<span class="youWin">WIN</span>');
        
    }
    else if( userChoice == 'paper' && computerChoice == 'stone' ){
        
        result.html('<span class="youWin">WIN</span>');
        
    }	
    else if( userChoice == 'scissors' && computerChoice == 'paper' ){
        
        result.html('<span class="youWin">WIN</span>');
        
    }

    else if( userChoice == computerChoice  ){
        
        result.html('<span class="tie">TIE</span>');
        
    }
    else{
        
        result.html('<span class="youLose">LOSE</span>');
        
    }
    });
    //Comparer le choix de l'utilisateur et de l'ordinateur :
	
	
    // recharger la page en cliquant sur le bouton rejouer

    btnReplay.click( function(){
        document.location.reload();
    });
    
    });