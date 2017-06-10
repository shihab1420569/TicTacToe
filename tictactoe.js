//JS code goes here
var on_click = [0,0,0,0,0,0,0,0,0];
var player1 = 0;
var player2 = 0;
var turn;
var status_player = true;
var game_status = true;
function game_play(event)
{
  var player_check=event.target;

  if(on_click[player_check.id]==0 && game_status == true)
  {
    event.target.innerHTML = turn? "O":"X";
    if(status_player==true)
    {
      on_click[player_check.id]=1;
      status_player =false;

    }
    else if(status_player == false){
      on_click[player_check.id]=2;
      status_player =true;
    }
    turn = !turn;
  }

  else if(game_status == false)
  {
    alert("Game Finish | Reset to Start a New Game |");
  }
  else if(on_click[player_check]!==0) {
    alert("Wrong Move");
  }
  var win_check = game();
  if(win_check==1 && game_status ==true)
  {
    document.getElementById('game_status_html').innerHTML = "Player 1 Win";
    game_status = false;
    document.getElementById('player1_win').innerHTML = player1+1;
    player1+=1;
    document.getElementById('player_4_win').innerHTML = player1;
  }
  else if(win_check==2 && game_status ==true)
  {
    document.getElementById('game_status_html').innerHTML = "Player 2 Win";
    game_status = false;
    document.getElementById('player_3_win').innerHTML = player2+1;
    player2+=1;
    document.getElementById('player2_win').innerHTML = player2;
    turn = !turn;
  }
  else if(win_check==3 )
  {
    document.getElementById('game_status_html').innerHTML = "tie";
    game_status = false;
  }
}

function game()
{
  if((on_click[0]==1 && on_click[1]==1&&on_click[2]==1)||
   (on_click[3]==1&&on_click[4]==1&&on_click[5]==1)||
   (on_click[6]==1&&on_click[7]==1&&on_click[8]==1)||
   (on_click[2]==1&&on_click[4]==1&&on_click[6]==1)||
   (on_click[0]==1&&on_click[4]==1&&on_click[8]==1)||
   (on_click[0]==1&&on_click[3]==1&&on_click[6]==1)||
   (on_click[2]==1&&on_click[5]==1&&on_click[8]==1)||
   (on_click[1]==1&&on_click[4]==1&&on_click[7]==1))
     return 1;

  else if((on_click[0]==2 && on_click[1]==2&&on_click[2]==2)||
   (on_click[3]==2&&on_click[4]==2&&on_click[5]==2)||
   (on_click[6]==2&&on_click[7]==2&&on_click[8]==2)||
   (on_click[2]==2&&on_click[4]==2&&on_click[6]==2)||
   (on_click[0]==2&&on_click[4]==2&&on_click[8]==2)||
   (on_click[0]==2&&on_click[3]==2&&on_click[6]==2)||
   (on_click[2]==2&&on_click[5]==2&&on_click[8]==2)||
   (on_click[1]==2&&on_click[4]==2&&on_click[7]==2))
     return 2;

   else {
     var temp = 0;
     for(var j=0; j<on_click.length;j++)
     {
       if(on_click[j]!==0)
        temp++;
     }
     if(temp==9)
       return 3;
   }
}

function reset_button(event)
{
  for(var j=0; j<on_click.length; j++)
  {
    on_click[j] =0;
    document.getElementById(j).innerHTML = '';
  }
  game_status = true;
  status_player = true;
  if(turn==!turn)
    turn = turn;
  else if(turn==turn)
    turn = !turn;
}
