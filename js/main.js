document.querySelector('#random').addEventListener('click',randomNumber)

function randomNumber() {

    document.querySelector('#random2').style.display = 'none'

    let suits = ["spades","hearts","clubs","diamonds"]
    
    let suit = suits[Math.floor(Math.random() * suits.length)]

    let numbers = ["ace","2","3","4","5","5","6","7","8","9","10","jack","queen","king"]

    let number = numbers[Math.floor(Math.random() * numbers.length)]

    document.querySelector('#card').src=`https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/${suit}_${number}.png`
}

document.querySelector('#random2').addEventListener('click', randomNumber2);
  
const cards = ["spades_ace","spades_2","spades_3","spades_4","spades_5","spades_6","spades_7","spades_8","spades_9","spades_10","spades_jack","spades_queen","spades_king","hearts_ace","hearts_2","hearts_3","hearts_4","hearts_5","hearts_6","hearts_7","hearts_8","hearts_9","hearts_10","hearts_jack","hearts_queen","hearts_king","clubs_ace","clubs_2","clubs_3","clubs_4","clubs_5","clubs_6","clubs_7","clubs_8","clubs_9","clubs_10","clubs_jack","clubs_queen","clubs_king","diamonds_ace","diamonds_2","diamonds_3","diamonds_4","diamonds_5","diamonds_6","diamonds_7","diamonds_8","diamonds_9","diamonds_10","diamonds_jack","diamonds_queen","diamonds_king"]

function randomNumber2 () {

    document.querySelector('#random').style.display = 'none';

    document.getElementById('random2').innerHTML = "next card";

    let card = [Math.floor(Math.random() * cards.length)];
        
    document.querySelector('#card').src=`https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/${cards[card]}.png`;

    // console.log("removing " + cards[card]);

    // console.log(cards[card]);

    cards.splice(card,1);

        
    if(cards.length < 1)
        document.querySelector('#card').style.display = 'none'
    if(cards.length < 1)
        document.querySelector('#you').style.display = 'none'    
    if(cards.length < 1)
        document.querySelector('#end').style.display = 'block'
        
    // console.log(cards);
}