# Detecção e Correção de Erros

Em qualquer instante, os dados transmitidos de um no para o outro, podem ser corrompidos durante o processo.

## Tipos de erros

Toda vez que uma cadeia de bits flui de um ponto a outro de uma rede de computadores, eles estão sujeitos a alterações imprevisíveis por causa das **interferências**.

### Erros de bit

O termo ***erro de bit***, significa que **apenas 1 bit** de determinada unidade de dados **foi alterado** de 1 para 0 ou de 0 para 1.

**Exemplo**:
```text
Imagine que cada grupo de 8 bits seja um caractere ASCII.

O caractere 00000010 (ASCII STX) foi enviado, significando "início de texto (start of text)".

Mas, foi recebido 00001010 (ASCII LF), significando "avanço de linha (line feed)".
```
> Repare que houve alteracao no 4 caractere, contando da direita para esquerda. **0** para **1**.

### Erros de rajada

O termo ***erros de rajada***, significa que 2 ou mais bits na unidade de dados foram corrompidos.

**Exemplo**:
```text
Nesse caso,

foi enviado 0100010001000011,

mas o recebido foi, 0101110101100011.
```

> O numero de bits afectados depende da taxa de transmissao de dados e da duracao do ruido.

## Redundancia

Reduncia sao bits acrescentados pelo emissor que posteriormente serao retirados pelo recptor. Sua presença possibilita que o receptor detecte ou corrija bits corrompidos.

## Detecção versus Correção

Corrigir erros em uma transmissão de dados é muito mais difícil que a detecção.

- Na **Deteccao de erros**, estamos apenas verificando se ocorreu algum erro. A resposta é um simples sim ou não.

- Na **correcao de erros**, precisamos saber o número exato de bits que foram corrompidos e, mais importante, sua localização na mensagem. O número de erros e o tamanho da mensagem são fatores essenciais.

## Correção Antecipada de Erros versus Retransmissão

Existem dois métodos principais de correção de erros.

- Na **correcao antecipada de erros (Forward Error Correction)**, o receptor tenta adivinhar a mensagem pelo uso de bits redundantes.

- Na **correcao de erros por retransmissao**. o receptor detecta a ocorrência de um erro e solicita ao emissor para reenviar a mensagem.
O reenvio é repetido até a mensagem chegar no receptor livre de erros (normalmente, nem todos os erros podem ser detectados).