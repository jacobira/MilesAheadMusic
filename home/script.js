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
    "id":"instructor5",
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
}
,
{
    "name":"Lauren Erickson",
    "basicDes":"Flute",
    "id":"instructor9",
    "photo":"../mediaStorage/generic.png"
}
];

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
displayPop();

window.onscroll = function(){
    growShrinkLogo();
    mobileScrollStackCheck();
}
window.onresize = function(){
    createPortfolioStack();
}

function displayForm(){
    document.getElementById("form").classList.remove("hidden");
}
function closeForm(){
    document.getElementById("form").classList.add("hidden");
}

function displayPop(){
    setTimeout(function(){
        document.getElementById('pop1').classList.remove('hidden');
    }, 4000);
}

function hidePop(){
    document.getElementById('pop1').classList.add('hidden');
}

function populateReviews(){
    for(let i=0; i<3; i++){
        $('.realReviews').append(`
            <div class="singleReview" id="review${i+1}">
                <div class="review">"${reviews[i].review}"</div>
                <div class="reviewerName">- ${reviews[i].reviewerName}</div>
                <div class="relationship">${reviews[i].relationship}</div>
            </div>
        `)
    }
}

function createPortfolioStack(){

    $('#stackBox').empty();

    var cardHalfMark = 125;
    var indexCounter = portfolio.length;

    if(window.innerWidth >= 1300){
        for(let i=0; i<portfolio.length; i++){
            let projectId = portfolio[i].id;
            $('#stackBox').append(`
                <div class="item" id=${projectId} onmouseover="toTopOfStack('${projectId}')">
                    <div class="instructorPhoto" style="background-image: url(${portfolio[i].photo});">
                    
                    </div>
                    <div class="instructorName">
                        ${portfolio[i].name}
                    </div>
                    <div class="instructorDesc">
                        ${portfolio[i].basicDes}
                    </div>
                </div>
            `);
    
            //POSITIONING OF ITEMS ON PAGE::
    
            if(portfolio.length % 2 == 0){
                if(i < portfolio.length/2){
                    $('#' + portfolio[i].id + '').css('left', `calc(${cardHalfMark/2}px + (50% - ${cardHalfMark}px) - ${cardHalfMark * ((portfolio.length/2) - i)}px)`);
                }
                if(i >= portfolio.length/2){
                    $('#' + portfolio[i].id + '').css('left', `calc(${cardHalfMark/2}px + (50% - ${cardHalfMark}px) + ${cardHalfMark * (i - (portfolio.length/2))}px)`)
                }
            }
            if(portfolio.length % 2 !== 0){
                if(i < (portfolio.length - 1) / 2){
                    $('#' + portfolio[i].id + '').css('left', `calc(${cardHalfMark/2}px + (50% - ${cardHalfMark}px) - ${cardHalfMark * ((portfolio.length/2) - i)}px)`);
                }
                if(i > portfolio.length / 2){
                    $('#' + portfolio[i].id + '').css('left', `calc(${cardHalfMark/2}px + (50% - ${cardHalfMark}px) + ${cardHalfMark * (i - (portfolio.length/2))}px)`);
                }
                if(i == (portfolio.length - 1)/2) {
                    $('#' + portfolio[i].id + '').css('left', `calc(50% - ${cardHalfMark}px)`);
                }
            }

            $('.instructors').css('height', '600px');
            $('.stackBox').css('height', '400px');
            $('.stackBox').css('overflow', 'visible');
            
            // assigning of z-index values to each project:
            $('#' + portfolio[i].id + '').css('z-index', `${indexCounter}`);
            indexCounter--;
        }
        
        // adjusting z-index values to front-face current mouseover item
    }

    if(window.innerWidth < 1300){

        for(let i=0; i<portfolio.length; i++){
            let projectId = portfolio[i].id;
            $('#stackBox').append(`
                <div class="item" id=${projectId} onmouseover="toTopOfStack('${projectId}')">
                    <div class="instructorPhoto" style="background-image: url(${portfolio[i].photo});">
                    
                    </div>
                    <div class="instructorName">
                        ${portfolio[i].name}
                    </div>
                    <div class="instructorDesc">
                        ${portfolio[i].basicDes}
                    </div>
                </div>
            `);
    
            //POSITIONING OF ITEMS ON PAGE::
            $('.instructors').css('height', `${240 * portfolio.length}px`);
            $('.stackBox').css('height', `${220 * portfolio.length}px`);
            $('#' + portfolio[i].id + '').css({'height':'400px', 'width':'80%', 'right':'10%', 'top':`${200 * i}px`,
            'background-image':'linear-gradient(rgb(56, 53, 53), rgb(31, 29, 29))'});

            // assigning of z-index values to each project:
            $('#' + portfolio[i].id + '').css('z-index', `${indexCounter}`);
            indexCounter--;
        }
    }
}
function mobileScrollStackCheck(){
    for(let i=0; i<portfolio.length; i++){
        let instructorStartMark = 800;
        let cardHalfHeight = 200;
        let card = document.getElementById(portfolio[i].id);

        if(document.documentElement.scrollTop > (instructorStartMark + (cardHalfHeight * i)) && 
        document.documentElement.scrollTop < (instructorStartMark + (cardHalfHeight * (i + 1)))){
            card.style.transform = "scale(1.2)";
            toTopOfStack(portfolio[i].id);
        } else {
            card.style.transform = "scale(1.0)";
        }
    }
}
function toTopOfStack(boxId){
    for (let i = 0; i < portfolio.length; i++){
        if (portfolio[i].id === boxId){
            $('#' + portfolio[i].id + '').css('z-index', `${portfolio.length}`);
            let lowIndexCounter = 1;
            let highIndexCounter = portfolio.length - 1;
            for (let a = 0; a < portfolio.length; a++){
                if (a < i){
                    $('#' + portfolio[a].id + '').css('z-index', `${lowIndexCounter}`);
                    lowIndexCounter++;
                }
                if (a > i){
                    $('#' + portfolio[a].id + '').css('z-index', `${highIndexCounter}`);
                    highIndexCounter--;
                }
            }
        }
    }
}
function growShrinkLogo(){
    var logo = document.getElementById("logo");
    if (window.innerWidth < 500){
        if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75){
            logo.style.width = "70px";
            logo.style.height = "70px";
            logo.style.top = "0px";
        } else {
            logo.style.width = "90px";
            logo.style.height = "90px";
            logo.style.top = "0px";
        }
    }
    else {
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
}