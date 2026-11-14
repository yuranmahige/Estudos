# Modelos de Redes

Rede é uma combinação de hardware e software que envia dados de uma localidade a outra.

O hardware consiste no equipamento físico que transporta sinais de um ponto a outro da rede. O software consiste em conjuntos de instruções que tornam possível os serviços que esperamos de uma rede.

# O MODELO OSI

O modelo **OSI (Open Systems Interconnection)**, é um padrão ISO que cobre todos os aspectos das comunicações de dados em redes.
Ele foi introduzido inicialmente no final da década de 1970. Um sistema aberto é um conjunto de protocolos que permite que dois sistemas diferentes se comuniquem independentemente de suas arquiteturas subjacentes.


O modelo OSI não é um protocolo; trata-se de um modelo para compreender e projetar uma arquitetura de redes flexível, robusta e interoperável.

## Arquitetura em Camadas

O modelo OSI é composto por sete camadas ordenadas: física (camada 1), enlace (camada 2), rede (camada 3), transporte (camada 4), sessão (camada 5), apresentação (camada 6) e aplicação (camada 7).

Dentro de uma máquina individual, cada camada requisita os serviços da camada imediatamente inferior a ela. Entre máquinas, a camada x em uma máquina se comunica com a camada x da outra máquina. Essa comunicação é orientada por uma série de regras e convenções estabelecidas, chamadas protocolos. 

Os processos em cada máquina que se comunicam em uma determinada camada são
denominados processos peer-to-peer. A comunicação entre máquinas é, portanto, um ***processo peer-to-peer*** usando os protocolos apropriados de uma determinada camada.

## Organização das Camadas

As sete camadas podem ser imaginadas como pertencentes a três subgrupos

- As camadas 1, 2 e 3 — física, enlace e rede — são as camadas de suporte à rede;

    > Elas lidam com os aspectos físicos da movimentação de dados de um dispositivo para outro (como as especificações elétricas, conexões físicas, endereçamento físico, temporização e a confiabilidade do transporte).

- As camadas 5, 6 e 7 — sessão, apresentação e aplicação — podem ser imaginadas como as camadas de suporte ao usuário;

    > Elas possibilitam a interoperabilidade entre sistemas de software não relacionados.

- A camada 4, camada de transporte;
    
    > Conecta os dois subgrupos e garante que o que as camadas inferiores transmitiram se encontra em uma forma que as camadas superiores consigam utilizar.

As camadas OSI superiores são quase sempre implementadas via software;\
As camadas inferiores são uma combinação de hardware e software, exceto pela camada física que é praticamente de hardware.

## O processo

Quando a unidade de dados formatada passa pela camada física (camada 1), ela é transformada em um sinal eletromagnético e transportada ao longo de um link físico.
Após atingir seu destino, o sinal passa pela camada 1 e é convertido de volta para a forma digital. As unidades de dados se deslocam no caminho inverso através das camadas OSI. À medida que cada bloco de dados atinge a camada superior seguinte, os cabeçalhos e trailers que foram anteriormente anexados na camada emissora correspondente são eliminados e ações apropriadas àquela camada são realizadas. Ao atingir a camada 7, a mensagem se encontra novamente na forma apropriada à aplicação e se torna disponível ao receptor.

> Resumo: Ela pega a informacao que enviamos, empacota, e envia a destinatario, chega no destinatario, desembrula e entrega ao receptor. 


## CAMADAS DO MODELO OSI Resumo Basico

1. **Camada Física**: A camada física é responsável pela movimentação de bits individuais de um hop para o seguinte.
2. **Camada de Enlace de Dados**: A camada de enlace é responsável pela transferência de frames de um hop para o seguinte.
3. **Camada de Rede**: A camada de rede é responsável pela entrega de pacotes individuais desde o host de origem até o host de destino.
4. **Camada de Transporte**: A camada de transporte é responsável pela entrega de uma mensagem, de um processo a outro.
5. **Camada de Sessão**: A camada de sessão é responsável pelo controle de diálogo e sincronização.
6. **Camada de Apresentação**: A camada de apresentação é responsável pela tradução, compressão e criptografia.
7. **Camada de Aplicação**: A camada de aplicação é responsável por prover serviços ao usuário.