var portfolio = [{
    "name":"Instructor 1",
    "basicDes":"Bacon ipsum hamhock",
    "id":"proj1",
    "photo":"../mediaStorage/generic.png"
},
{
    "name":"Instructor 2",
    "basicDes":"Bacon ipsum hamhock",
    "id":"proj2",
    "photo":"../mediaStorage/generic.png"
},
{
    "name":"Instructor 3",
    "basicDes":"Bacon ipsum hamhock",
    "id":"proj3",
    "photo":"../mediaStorage/generic.png"
},
{
    "name":"Instructor 4",
    "basicDes":"Bacon ipsum hamhock",
    "id":"proj4",
    "photo":"../mediaStorage/generic.png"
},
{
    "name":"Instructor 5",
    "basicDes":"Bacon ipsum hamhock",
    "id":"proj5",
    "photo":"../mediaStorage/generic.png"
},
{
    "name":"Instructor 6",
    "basicDes":"Bacon ipsum hamhock",
    "id":"proj6",
    "photo":"../mediaStorage/generic.png"
},
{
    "name":"Instructor 7",
    "basicDes":"Bacon ipsum hamhock",
    "id":"proj7",
    "photo":"../mediaStorage/generic.png"
}];

createPortfolioStack();

function createPortfolioStack(){
    let cardWidth = 200;
    for(let i=0; i<portfolio.length; i++){
        let projectId = portfolio[i].id;
        $('#stackBox').append(`
            <div class="item" id=${projectId} onmouseover="toTopOfStack('${projectId}')">
                ${portfolio[i].name}
                <div class="instructorPhoto" style="position: absolute; top: 20px; height: 70px; width: 70px;
                background-image: url(${portfolio[i].photo}); background-size: cover;"></div>
            </div>
        `);

        //POSITIONING OF ITEMS ON PAGE::

        //if even amt of projects:
        if(portfolio.length % 2 === 0){
            console.log('even amt');
            var halfNum = portfolio.length/2;
            if(i < halfNum){
                if(i == halfNum - 1){
                    var movement = (halfNum - i) * (cardWidth/4);
                }
                else {
                    var movement = ((halfNum - i) * (cardWidth/2)) - (cardWidth/4);
                }
                $('#' + portfolio[i].id + '').css('left', `${movement}px`);
            }
            if(i >= halfNum) {
                if(i == halfNum){
                    var movement = (i - (halfNum - 1)) * (cardWidth/4);
                }
                else {
                    var movement = ((i - (halfNum - 1)) * (cardWidth/2)) - (cardWidth/4);
                }
                $('#' + portfolio[i].id + '').css('right', `${movement}px`);
            }
        }
        //if odd amt of projects:
        if(portfolio.length % 2 === 1){
            console.log('odd amt');
            var halfNum = (portfolio.length - 1)/2;
            if(i < halfNum){
                let movement = (halfNum - i) * (cardWidth/2);
                $('#' + portfolio[i].id + '').css('left', `${movement}px`);
            }
            if(i > halfNum){
                let movement = (i - halfNum) * (cardWidth/2);
                $('#' + portfolio[i].id + '').css('right', `${movement}px`);
            }
        }
        // assigning of z-index values to each project:
        $('#' + portfolio[i].id + '').css('z-index', `${(portfolio.length) - i}`);
    }
    
    // adjusting z-index values to front-face current mouseover item
    }
    function toTopOfStack(boxId){
    for (let i = 0; i < portfolio.length; i++){
        if (portfolio[i].id === boxId){
            $('#' + portfolio[i].id + '').css('z-index', `${portfolio.length}px`);
            for (let a = i; a < portfolio.length; a++){
                $('#' + portfolio[a].id + '').css('z-index', `${portfolio.length - (a - i)}`);
            }
            for (let a = i; a >= 0; --a){
                $('#' + portfolio[a].id + '').css('z-index', `${portfolio.length - (i - a)}`);
            }
        }
    }
}