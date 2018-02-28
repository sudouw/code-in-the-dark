

function createCardByRound(round) {
    for (var teamName in data[round]) {
        var team = data[round][teamName];
        var user1 = team['user1'];
        var user2 = team['user2'];
        $('#' + round).append(createCard(round, teamName, user1, user2));
    }
}

function createCard(round, team, user1, user2) {
    var card = $('<div></div>').addClass('col-lg-4 col-md-6 col-sm-12 d-flex');
    var innerDiv = $('<div></div>').addClass('ml-3 mx-auto');
    var span = $('<p></p>');

    var link = round + '/' + team + '/';
    var websiteImg = document.createElement("img");
    websiteImg.src = link + team + '.png';
    websiteImg.classList.add("websiteImg");

    websiteImg.addEventListener("click", function () {
        window.location.href = link;
    });
    var user1span = document.createElement('span');
    var user2span = document.createElement('span');

    var user1img = $('<img />').attr('src', getGravitar(user1.email));
    var user2img = $('<img />').attr('src', getGravitar(user2.email));
    
    span.append(user1img);
    user1span.append(user1.name);
    span.append(user1span);
    span.append(user2img);
    user2span.append(user2.name);
    span.append(user2span);
    innerDiv.append(websiteImg);
    innerDiv.append(span);
    card.append(innerDiv);
    return card;
}

function getGravitar(email) {
    var gravatarUrl = 'https://www.gravatar.com/avatar/';
    var md5Hash = md5(email);
    var size = 40;
    return gravatarUrl + md5Hash + '?d=retro';
}

createCardByRound('round1');
createCardByRound('round2');