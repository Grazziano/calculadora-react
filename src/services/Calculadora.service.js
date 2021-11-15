function CalculadoraService() {

  const SOMA = '+';
  const SUBTRACAO = '-';
  const MULTIPLICACAO = '*';
  const DIVISAO = '/';

  function calcular(numero1, numero2, operacao) {
    let resultado;

    switch (operacao) {
      case SOMA:
        resultado = numero1 + numero2;
        break;
      case SUBTRACAO:
        resultado = numero1 - numero2;
        break;
      case MULTIPLICACAO:
        resultado = numero1 * numero2;
        break;
      case DIVISAO:
        resultado = numero1 / numero2;
        break;
      default:
        resultado = 0;
        break;
    }

    return resultado;
  }

  function concatenarNumero(numeroAtual, numeroConcat) {
    // Caso contenha apenas '0' ou null, reinicia o valor
    if (numeroAtual === '0' || numeroAtual === null) {
      numeroAtual = '';
    }

    // Primeiro digito for '.' concatena '0' antes do ponto
    if (numeroConcat === '.' && numeroAtual === '0') {
      return '0.';
    }

    // Caso '.' digitado e ja contenha um ponto, apenas retornar
    if (numeroConcat === '.' && numeroAtual.indexOf('.') > -1) {
      return numeroAtual;
    }

    return numeroAtual + numeroConcat;
  }

  return [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO];
}

export default CalculadoraService;
