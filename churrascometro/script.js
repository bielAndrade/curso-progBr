function churras(){

    let carne = document.getElementById('meat')
    let cerveja = document.getElementById('beer')
    let refri = document.getElementById('soda')

    carne.innerText = ''
    cerveja.innerText = ''
    refri.innerText = ''

    let adulto = document.getElementById('adults')
    let criança = document.getElementById('kids')
    let duração = document.getElementById('length')
    
    if(duração.value == 0 || duração.value == ''){
        window.alert('Insira um valor')
    }

    else{
        let aCarne = 0.3
        let cCarne = 0.1
        let consumoCarne = (adulto.value * aCarne) + (criança.value * cCarne)
        let kgCarne = consumoCarne.toFixed(2) * duração.value
        
        let aCerveja = 1
        let cCerveja = 0
        let consumoCerveja = (adulto.value * aCerveja) + (criança.value * cCerveja)
        let lCerveja = consumoCerveja.toFixed(2) * duração.value
    
        let aRefri = 0.2
        let cRefri = 0.7
        let consumoRefri = (adulto.value * aRefri) + (criança.value * cRefri)
        let lRefri = consumoRefri.toFixed(2) * duração.value
    
    
        carne.innerText += 'Serão consumidos ' + kgCarne + 'Kg de carne'
        cerveja.innerText += 'Serão consumidos ' + lCerveja + 'L de cerveja'
        refri.innerText += 'Serão consumidos ' + lRefri + 'L de refrigerante'
    }

}

function limpar(){
    let carne = document.getElementById('meat')
    let cerveja = document.getElementById('beer')
    let refri = document.getElementById('soda')

    let adulto = document.getElementById('adults')
    let criança = document.getElementById('kids')
    let duração = document.getElementById('length')

    adulto.value = ''
    criança.value = ''
    duração.value = ''

    carne.innerText = ''
    cerveja.innerText = ''
    refri.innerText = ''
}
