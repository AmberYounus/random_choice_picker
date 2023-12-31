const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
textarea.focus()

textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 1000);
        randomSelect();
    }
})

function createTags(input){
    const tags=input.split(',').filter(tag=>tag.trim()!== '').map(tag=>tag.trim())

 tagsEl.innerHTML =''
 tags.forEach(tag=>{
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
 })   
}
function randomSelect(){
    const times= 40;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        if(randomTag !== undefined){
            highlightTag(randomTag)
            setTimeout(() => {
             unHightlightTag(randomTag)   
            }, 1000);
        }
    }, 1000);


    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag();
        }, 1000);
        
    }, times * 1000);
}
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)]
}
function highlightTag(tag){
    tag.classList.add('highlight')
}
function unHightlightTag(tag){
    tag.classList.remove('highlight')
}