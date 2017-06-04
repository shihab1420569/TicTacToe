var click_checker = [0,0,0,0,0,0,0,0,0];
var game_status = false;
var turn;

var palyer_status=true;

function game_play(event)
{
  var check_player=event.target;
  if(click_checker[check_player.id]==0)
  {


  event.target.innerHTML=turn?"0" :"x";
  if(player_status==true)
  {
    click_checker[check_player.id]=1;
    player_status=false;
  }
  else if(player_status == false){
    click_checker[check_player.id]=2;
    player_status= true;
  }
  turn=!turn;
  console.log(click_checker);
}
else if(click_checker[check_player]!==0){
  aler("this is wrong");
}
}
