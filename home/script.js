var portfolio = [{
    "name":"Madison Moline",
    "basicDes":"Viola & Violin",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor1",
    "photo":"../mediaStorage/madisonMoline.png"
},
{
    "name":"Jason Fullmer",
    "basicDes":"Guitar, Ukulele, Banjo & Mandolin",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor2",
    "photo":"../mediaStorage/jasonFullmer.png"
},
{
    "name":"Austie Robinson",
    "basicDes":"Trumpet",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor3",
    "photo":"../mediaStorage/austieRobinson.png"
},
{
    "name":"Nelsen Campbell",
    "basicDes":"Trombone",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor4",
    "photo":"../mediaStorage/nelsenCampbell.png"
},
{
    "name":"Myles Lawrence",
    "basicDes":"Saxophone & Clarinet",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor5",
    "photo":"../mediaStorage/mylesLawrence.png"
},
{
    "name":"Megan Carson",
    "basicDes":"Voice",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor6",
    "photo":"../mediaStorage/meganCarson.png"
},
{
    "name":"Jordan Turner",
    "basicDes":"Songwriting & Music Production",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor7",
    "photo":"../mediaStorage/generic.png"
},
{
    "name":"Mitch Romney",
    "basicDes":"Drums",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor8",
    "photo":"../mediaStorage/mitchRomney.png"
}
,
{
    "name":"Lauren Erickson",
    "basicDes":"Flute",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
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

const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

window.onscroll = function(){
    growShrinkLogo();
    if(window.innerWidth < 500){
        mobileScrollStackCheck();
    }
}
window.onresize = function(){
    createPortfolioStack();
}
function displayBio(id){
    document.getElementById("form").innerHTML = "";
    document.getElementById("form").classList.remove("hidden");
}

function displayForm(){
    document.getElementById("modalContent").innerHTML = "";
    document.getElementById("form").classList.remove("hidden");
    // ....
}
function closeForm(){
    document.getElementById("form").classList.add("hidden");
}

function displayPop(){
    setTimeout(function(){
        document.getElementById('pop1').classList.remove('hidden');
    }, 4000);
}

function displayBio(givenId){
    document.getElementById("modalContent").innerHTML = "";
    document.getElementById('form').classList.remove('hidden');
    console.log(givenId);
    for(let i=0; i<portfolio.length; i++){
        if(portfolio[i].id == givenId){
            document.getElementById("modalContent").innerHTML = portfolio[i].bio;
            console.log(portfolio[i].bio);
        }
    }
}

function exitModal(){
    document.getElementById("form").classList.add('hidden');
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

    if(window.innerWidth >= 900){
        for(let i=0; i<portfolio.length; i++){
            let projectId = portfolio[i].id;
            $('#stackBox').append(`
                <div class="item" id=${projectId} onmouseover="toTopOfStack('${projectId}')">
                    <div>
                        <div class="instructorPhoto" style="background-image: url(${portfolio[i].photo});">
                        
                        </div>
                        <div class="instructorName">
                            ${portfolio[i].name}
                        </div>
                        <div class="instructorDesc">
                            ${portfolio[i].basicDes}
                        </div>
                        <div class="seeBioBtn" onclick="displayBio(${projectId})">
                        
                        </div>
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

    if(window.innerWidth < 900){

        for(let i=0; i<portfolio.length; i++){
            let projectId = portfolio[i].id;
            $('#stackBox').append(`
                <div class="item" id=${projectId} onmouseover="toTopOfStack('${projectId}')">
                    <div>
                        <div class="instructorPhoto" style="background-image: url(${portfolio[i].photo});">
                        
                        </div>
                        <div class="instructorName">
                            ${portfolio[i].name}
                        </div>
                        <div class="instructorDesc">
                            ${portfolio[i].basicDes}
                        </div>
                        <div class="seeBioBtn" onclick="displayBio('${projectId}')">
                            
                        </div>
                    </div>
                </div>
            `);
    
            //POSITIONING OF ITEMS ON PAGE::
            $('.instructors').css('height', `${portfolio.length * 50}vh`);
            $('.stackBox').css('height', `${portfolio.length * 45}vh`);
            $('#' + portfolio[i].id + '').css({'height':'80vh', 'width':'80%', 'right':'10%', 'top':`${40 * i}vh`,
            'background-image':'linear-gradient(rgb(56, 53, 53), rgb(31, 29, 29))'});

            // assigning of z-index values to each project:
            $('#' + portfolio[i].id + '').css('z-index', `${indexCounter}`);
            indexCounter--;
        }
    }
}
function mobileScrollStackCheck(){
    for(let i=0; i<portfolio.length; i++){

        let instructorStartMark = 730;
        let cardHalfHeight = 200;
        let card = document.getElementById(portfolio[i].id);

        let rect = card.getBoundingClientRect();
        if(rect.top >= 0 && rect.left >= 0 && rect.bottom <=(window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)){
            toTopOfStack(portfolio[i].id);
            card.classList.add("scaled");
            for(let a=0; a<portfolio.length; a++){
                if(a !== i){
                    document.getElementById(portfolio[a].id).classList.remove("scaled");
                }
            }
        } 
    }
}
function toTopOfStack(boxId){
    $('#' + boxId + '').css('z-index', `${portfolio.length}`);
    for (let i = 0; i < portfolio.length; i++){
        if (portfolio[i].id === boxId){
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
            break;
        }
    }
}
function growShrinkLogo(){
    var logo = document.getElementById("logo");
    if (window.innerWidth < 700){
        if (document.documentElement.scrollTop || document.body.scrollTop > 75){
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
        if (document.documentElement.scrollTop || document.body.scrollTop > 75){
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