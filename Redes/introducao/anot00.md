# Introducao

Como os dados, a informacao se comunicam?

Para entender isso precisamos conhecer os componentes de comunicacao de dados,
os tipos de dados e como criar um fluxo de dados.

> Quando nos comunicamos, estamos comportilhando informacoes. 
> A partilha pode ser **local** ou **remota**.

## Comunicacao de dados

Refere-se as trocas de dados entre dispositivos por intermedio de algum tipo de transmissao.

Para que a comunicacao aconteca e necessario que haja uma **combinacao entre o hardware e o sofware**.

Ela consiste em quatro caracteristas fundamentais: **Entrega, Precisao, Sincronizacao e Jitter**.

**Entrega**: Garantir que  a informacao chegue ao destino correcto.
*Exemplo: Clicar em qualquer botao do controlo remoto da TV*.
O comando/instrucao deve ser executado apenas na TV, nao no decoder ou no AC.

> Duvida1: Como isso e garantido?

**Precisao**:  Entregar os dados sem compromenter a informacao, ela deve chegar como saiu.
*Exemplo: Se eu der comando para aumentar o volume, a TV deve obdecer e aumentar volume, nao trocar o canal kkk*.

**Sincronizacao**: A execucao deve acontecer no momento exacto.
*Exemplo: Uma transmissao ao vivo "live"*.

**Jitter**: Refere-se a variacao no tempo de chegada dos pacotes.
O atraso desigual na entrega de pacotes de audio e video.

## Componentes

- **Mensagem**: Sao as informacoes a serem partilhados: textos, numeros, imagens, audios...
- **Emissor**: O dispositivo que envia a informacao.
- **Receptor**: O dispositivo que recebe a informacao.
- **Meio de transmissao**: O caminho fisico que a informacao viaga do emissor ao receptor.
- **Protocolo**: Conjunto de regras que controla a comunicacao de dados. Difine as regras de seguranca, autentificacao, validacao, etc..

## Tipos de dados

* **Texto**: Em comununicacao de dados, o **texto** e representado como um padrao bit *(0s, 1s)*.\
O sistema de codificacao predominante e o **UTF-8**, que e uma implementacao unicode que usa de 
1 a 4 bytes por continuar mantendo compatibilidade retroactiva com o ASCII, e sendo eficiente em
termos de seguranca.

O Unicode activa como um conjunto de caracteres universais para atribuir um ponto de codigo excluivo
a cada simbolo, substituido padroes antigos como ASCII e ISO-8859-1.

* **Numero**: Tambem sao representados por padroes bits.

* **Imagens**: Tambem sao representados por padroes bits, em sua forma mais simples uma imagem e composta
por uma matriz de pixels, em  que cada pixel e um pequeno ponto.

* **Audio**: Registro ou transmissao(difusao) de uma imagem ou filme.
O video pode ser produzido como uma entendade continua ou por uma continuacao de imagens.
