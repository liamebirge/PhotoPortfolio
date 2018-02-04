function gotoSame(url){
  var win = window.open(url, '_self');
  win.focus();
}

function gotoNew(url){
  var win = window.open(url, '_blank');
  win.focus();
}

function chooseImg(){
	var randNum = Math.floor((Math.random() * 106) + 1);
	document.getElementById("indexPortfolioImage").src = "Data/Photos/img (" + randNum + ").JPG";
}