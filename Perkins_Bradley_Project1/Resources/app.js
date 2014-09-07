
Ti.UI.setBackgroundColor("white");

var comics = ["Amazing Spider-Man", "Batman", "Batman and Robin", "Redhood and the Outlaws", "The Walking Dead"];

var mainWin = Ti.UI.createWindow({
	title: "My Top 5 Favorite Comic",
	backgroundColor: "#6897bb",
});

var view1 = Ti.UI.createView({
	backgroundColor: "white",
	borderRadius: 2,
	borderWidth: 1,
	top: 20,
	left: 20,
	right: 20,
	bottom: 100
});

var title = Ti.UI.createLabel({
	text: " My Top 5 Favorite Comics ",
	color: "black",
	font: {fontSize: 20},
	backgroundColor: "white",
	borderColor: "black",
	borderRadius: 2,
	borderWidth: 1
});

var prevButton = Ti.UI.createView({
	backgroundColor: "white",
	borderRadius: 3,
	borderColor: "black",
	borderWidth: 1,
	top:480,
	left: 20,
	right: 165,
	bottom: 20
});

var prevText = Ti.UI.createLabel({
	color: "black",
	font: {fontSize: 20},
	textAlign: "center",
	text: "Previous"
});

var nextButton = Ti.UI.createView({
	backgroundColor: "white",
	borderRadius: 3,
	borderColor: "black",
	borderWidth: 1,
	top:480,
	left: 165,
	right: 20,
	bottom: 20
});

var nextText = Ti.UI.createLabel({
	color: "black",
	font: {fontSize: 20},
	textAlign: "center",
	text: "Next"
});

var i = -1;

var nextComics = function(){	
	if(i ===comics.length -1){
		i = -1;
	};
	i++;
	
		var comicList = Ti.UI.createLabel({
		text: comics[i],
		textAlign: "center",
		backgroundColor: "white",
		borderRadius: 2,
		borderWidth: 1,
		top: 20,
		left: 20,
		right: 20,
		bottom: 100
	});

	
	mainWin.add(comicList);
		
	};

var prevComics = function(){
	//view1.hide();	
	if(i ===0){
		i = comics.length;
	};
	i--;
	
		var comicList = Ti.UI.createLabel({
		text: comics[i],
		textAlign: "center",
		backgroundColor: "white",
		borderRadius: 2,
		borderWidth: 1,
		top: 20,
		left: 20,
		right: 20,
		bottom: 100
	});
	
	mainWin.add(comicList);
		
};

nextButton.addEventListener("click", nextComics);
prevButton.addEventListener("click", prevComics);

mainWin.add(view1, prevButton, nextButton);
view1.add(title);
prevButton.add(prevText);
nextButton.add(nextText);
mainWin.open();


















