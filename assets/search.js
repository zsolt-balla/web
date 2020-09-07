const cards = document.getElementsByClassName('card');

console.log(cards);

const searchBar = document.getElementById('search');

console.log(searchBar);

searchBar.addEventListener('keyup', function(e){
    
    const term = e.target.value.toLowerCase();
    Array.from(cards).forEach(function(card){

        console.log('Search term: ', term)

        console.log(card);

        const desc = card.getElementsByClassName('desc')[0];
        
        console.log(desc);

        var text = desc.innerText;

        console.log(text);

        if(text.toLowerCase().indexOf(term) != -1){
            //show
            card.style.display = 'block';
        }
        else{
            //hide
            card.style.display = 'none';
        }
    })
})