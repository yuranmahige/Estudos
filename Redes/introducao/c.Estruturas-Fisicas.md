# Estruturas Fisicas

## Tipo de conexacao

**Rede** são dois ou mais dispositivos conectados através de **links**.\
Um link é um caminho de comunicação que transfere dados de um dispositivo a outro.\
Há dois tipos possíveis de conexões: **ponto a ponto e multiponto**.

**Ponto a Ponto**: Fornece um link dedicado entre dois dispositivos.\ 
Uma unica linha de um dispositivo para outro.

* > Responde a Duvida1, do controlo remote com a TV, se comunicam atraves de um link ponto a ponto.

**Multiponto ou (multidrop)**: Uma conexão multiponto (também chamada multidrop) é uma conexão na qual mais de dois dispositivos compartilham um único link.

---

## Topologia Fisica

O termo **topologia física** se refere à maneira pela qual uma rede é organizada fisicamente.\ 
Existem quatro topologias basicas possiveis: **Malha, Estrela, Barramento e Anel**.

### Topologia Malha
Cada dispositivo possui um link **ponto a ponto** dedicado com cada um dos demais dispositivos.\ 

> O termo dedicado significa que o link transporta tráfego apenas entre os dois dispositivos que ele conecta.

**Vantagens**: 
- Ele oferece varias varias vantagens em relacao às demais topologias de rede;
- O uso de links dedicados que cada conexao seja capaz de transportar seu proprio volume de dados, eliminando, portanto, os problemas de trafego que possam ocorrer quando os links tiverem de ser compartilhados por varios dispositivos;
- Se um link se tornar inutilizável, ele não afeta o sistema como
um todo.
- Oferece maior privacidade e segurança.

**Desvantagens**: 
- Alto custo;
- A instalação e a reconstrução são trabalhosas.

### Topologia Estrela
Cada dispositivo tem um link **ponto a ponto** dedicado ligado apenas com o controlador central, em geral denominado **hub**, eles nao sao ligados directamente entre si.

**Vantanges**:
- Uma topologia estrela é mais barata que uma topologia de malha.
- Facil instalação e a reconfiguração, porque cada dispositivo, precisa de apenas um link e e uma porta I/O para conectar-se a um número qualquer de outros dispositivos.

**Desvantagens**: 
- Todos os dispositivos dependem de um unico ponto. Se o hub cair todo sistema para.

### Topologia de Barramento
Uma topologia de barramento é **multiponto**.\
Um longo cabo atua como um **backbone** que interliga todos os dispositivos da rede.\
Os nós são conectados ao barramento por meio de cabos transceptores e transceptores-vampiros.

```
Um cabo transceptor é uma conexão que vai de um dispositivo ao cabo principal (barramento).
Um transceptor-vampiro é um conector que se une ao cabo principal
```

**Vantagens**: 
- Facilidade de instalacao, apenas o *backbone* é estendido
ao longo de toda a instalação, os tranceptores se conectam a ele e aos nos.

**Desvantagens**:
- Dificuldade de reconfiguração e o isolamento de falhas, uma falha no *backbone* interrope toda transmissao.

### Topologia de Anel
Cada dispositivo possui uma configuracan **ponto a ponto** *dedicada* com outros dois dispositivos conectados de cada lado.\

Um sinal percorre todo o anel em um sentido, de dispositivo para dispositivo, até atingir seu destino. Cada dispositivo no anel possui um repetidor. Quando um dispositivo recebe um sinal destinado a outro dispositivo, seu repetidor regenera os bits e os passa adiante.

**Vantagens**:
- Facil de ser instalado e reconfigurando. Cada dispositivo é ligado
apenas aos seus vizinhos imediatos (tanto em termos físicos como lógicos).
- O isolamento de falhas é simplificado. Se um dispositivo não receber um sinal
dentro de um período especificado, ele pode emitir um alarme. Esse alarme alerta o operador da rede sobre o problema e sua localização.

**Desvantagens**: 
- O tráfego é unidirecional. Em um anel simples, uma
interrupção no anel (por exemplo, uma estação inoperante) pode derrubar toda a rede. 

Essa fragilidade pode ser resolvida com o emprego de um anel duplo ou de um comutador central capaz de fechar o trecho interrompido no anel.

### Topologia hibrida

Uma uniao das topologias, cada serve para resolver um problema em especifico em conjunto.

## Modelos de redes

### Categorias de Redes

Hoje em dia, quando falamos de redes, geralmente estamos nos referindo a duas categorias principais: redes locais (LANs) e redes de ampla abrangência, geograficamente distribuídas(WANs).

#### Redes Locais (LAN)
 
Uma rede local (LANs) é privada e interliga varios dispositivos.\
Atualmente, o tamanho de uma LAN é limitado a alguns quilômetros.
Em geral, uma LAN usará somente um tipo de meio de transmissão.
 
> As topologias de LANs mais comuns são: **barramento, anel e estrela**.

#### Redes de Ampla Abrangência (WAN)

Uma rede WAN possibilita a transmissao de dados por longas distancias, que podem compreender um país, um continente ou até mesmo o mundo todo.
Uma WAN pode ser tão complexa como os backbones que interligam a **I**nternet ou tão simples como uma linha discada que conecta um computador doméstico à Internet. Normalmente, denominamos a primeira **WAN comutada** e a segunda, **WAN ponto a ponto**. 

* A WAN comutada conecta os sistemas finais e, geralmente, é formada por um roteador (um dispositivo de conexão entre redes) que se conecta a outra LAN ou WAN. 

* Uma WAN ponto a ponto é constituída por uma linha alugada de uma companhia telefônica ou de uma operadora de TV a cabo que conecta o computador de casa ou uma pequena LAN a um provedor de serviços de Internet (ISP). Esse tipo de WAN é
normalmente utilizado para fornecer acesso à Internet.

#### Redes de Abrangência Metropolitana (MAN)

Uma rede de abrangência metropolitana (MAN) é uma rede com tamanho intermediário entre
uma LAN e uma WAN.


#### Interconexão de Redes: Internetwork

Quando duas ou mais redes estiverem conectadas entre si, teremos uma internetwork ou **i**nternet. Uniao de LAN, MAN, WAN.