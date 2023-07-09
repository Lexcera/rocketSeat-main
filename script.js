function toggleMode (){
    const html = document.documentElement
    html.classList.toggle('light')

    //peagr a tag img
    const img = document.querySelector('#profile img')

    //substituir a img

    if(html.classList.contains('light')){
        // se tiver light mode, adicionar a img light
        img.setAttribute('src', './avatar-light.png')
    }   else{
        //se river sem o light, manter a img normal
        img.setAttribute('src' , './avatar.png')
    }


}
