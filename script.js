const avanca = document. querySelectorAll('.btnproximo');

avanca. forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo')

        atual.Classlist.remove('ativo')
       document.getElementById('proximoPasso').classList.add('ativo')


    })
})