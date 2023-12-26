const resultado = document.querySelector('#resultado')
const classicacao = document.querySelector('#classicacao');
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const calcular = document.querySelector('.divCalc')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'Abaixo do peso'
    } else if (imc < 25) {
      classification = 'Peso ideal'
    } else if (imc < 30) {
      classification = 'Acima do peso'
    } else if (imc < 35) {
      classification = 'Obesidade Grau I'
    } else if (imc < 41) {
      classification = 'Obesidade Grau II'
    } else {
      classification = 'Obesidade Grau III'
    }
    
    resultado.innerHTML = `Seu IMC é ${imc} kg/m²`
    classicacao.innerHTML = `Sua classicação: ${classification}`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}


calcular.addEventListener('click', calcIMC);
