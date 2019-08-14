var portfolio = [{
    "name":"Madison Moline",
    "basicDes":"Viola & Violin",
    "id":"instructor1",
    "photo":"../mediaStorage/madisonMoline.png"
},
{
    "name":"Jason Fullmer",
    "basicDes":"Guitar, Ukulele, Banjo & Mandolin",
    "id":"instructor2",
    "photo":"../mediaStorage/jasonFullmer.png"
},
{
    "name":"Austie Robinson",
    "basicDes":"Trumpet",
    "id":"instructor3",
    "photo":"../mediaStorage/austieRobinson.png"
},
{
    "name":"Nelsen Campbell",
    "basicDes":"Trombone",
    "id":"instructor4",
    "photo":"../mediaStorage/nelsenCampbell.png"
},
{
    "name":"Myles Lawrence",
    "basicDes":"Saxophone & Clarinet",
    "id":"proj5",
    "photo":"../mediaStorage/mylesLawrence.png"
},
{
    "name":"Megan Carson",
    "basicDes":"Voice",
    "id":"instructor6",
    "photo":"../mediaStorage/meganCarson.png"
},
{
    "name":"Jordan Turner",
    "basicDes":"Songwriting & Music Production",
    "id":"instructor7",
    "photo":"../mediaStorage/generic.png"
},
{
    "name":"Mitch Romney",
    "basicDes":"Drums",
    "id":"instructor8",
    "photo":"../mediaStorage/mitchRomney.png"
}];

var reviews = [{
    "reviewerName":"Amy Stoddard",
    "relationship":"Student Parent",
    "review":`We've been looking for a trombone teacher for my son for years. 
    We finally found one we love! My son had marching band pass offs on Friday, 
    but didn't get the music until Thursday afternoon. His teacher, in 30 
    minutes, got him to memorize the whole song and taught him valuable lessons 
    on memorization. I'm super impressed.`
},
{
    "reviewerName":"Hailey Allen",
    "relationship":"Student Parent",
    "review":`My daughter had learned so much taking piano lessons here! She's 
    now writting her own music now too! We love it.`
},
{
    "reviewerName":"Keanna Zarate",
    "relationship":"Student Parent",
    "review":`We have loved Miles Ahead Music! We were looking for a saxophone 
    instructor for our son and found Emily! We've been amazed at the progress 
    he's made. She's helped him add emotion and style to his playing, he enjoys 
    working with her and always comes home with great things to say!! Highly 
    recommended!`
}];

createPortfolioStack();
populateReviews();

window.onscroll = function(){
    growShrinkLogo();
}

function populateReviews(){
    for(let i=0; i<reviews.length; i++){
        $('.realReviews').append(`
            <div class="singleReview id="review${i+1}">
                <div class="reviewerName">${reviews[i].reviewerName}</div>
                <div class="relationship">${reviews[i].relationship}</div>
                <div class="review">"${reviews[i].review}"</div>
            </div>
        `)
    }
}

function createPortfolioStack(){
    let cardWidth = 300;
    for(let i=0; i<portfolio.length; i++){
        let projectId = portfolio[i].id;
        $('#stackBox').append(`
            <div class="item" id=${projectId} onmouseover="toTopOfStack('${projectId}')">
                <div class="instructorPhoto" style="position: absolute; top: 20px; height: 100px; width: 100px;
                background-image: url(${portfolio[i].photo}); background-size: cover;"></div>
                <div class="instructorName" style="position: absolute; top: 150px; font-size: 20px;">
                    ${portfolio[i].name}
                </div>
                <div class="instructorDesc" style="width: 130px; position: absolute; top: 180px; font-size: 12px;
                display: flex; flex-wrap: wrap; justify-content: center; text-align: center;">
                    ${portfolio[i].basicDes}
                </div>
            </div>
        `);

        //POSITIONING OF ITEMS ON PAGE::

        //if even amt of projects:
        if (portfolio.length % 2 === 0){
            console.log('even amt');
            var halfNum = portfolio.length/2;
            if (i < halfNum){
                if (i == halfNum - 1){
                    var movement = (halfNum - i) * (cardWidth/4);
                }
                else {
                    var movement = ((halfNum - i) * (cardWidth/2)) - (cardWidth/4);
                }
                $('#' + portfolio[i].id + '').css('left', `${movement}px`);
            }
            if (i >= halfNum) {
                if (i == halfNum){
                    var movement = (i - (halfNum - 1)) * (cardWidth/4);
                }
                else {
                    var movement = ((i - (halfNum - 1)) * (cardWidth/2)) - (cardWidth/4);
                }
                $('#' + portfolio[i].id + '').css('right', `${movement}px`);
            }
        }
        //if odd amt of projects:
        if (portfolio.length % 2 === 1){
            console.log('odd amt');
            var halfNum = (portfolio.length - 1)/2;
            if (i < halfNum){
                let movement = (halfNum - i) * (cardWidth/2);
                $('#' + portfolio[i].id + '').css('left', `${movement}px`);
            }
            if (i > halfNum){
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

function growShrinkLogo(){
    var logo = document.getElementById("logo");
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75){
        logo.style.width = "100px";
        logo.style.height = "100px";
        logo.style.top = "0px";
    } else {
        logo.style.width = "250px";
        logo.style.height = "250px";
        logo.style.top = "10px";
    }
}