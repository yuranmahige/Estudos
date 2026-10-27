# Exercicio 02 

[From IBM](https://www.ibm.com/think/topics/linux)

## O que é Linux?

Linux é um sistema operacional (SO) de código aberto baseado em Unix. Ele roda em computadores, servidores, telefones celulares e uma ampla gama de outros dispositivos.

Desde sua invenção em 1991, ele se tornou um dos sistemas operacionais mais utilizados no mundo, fornecendo uma alternativa gratuita a outros sistemas operacionais proprietários, como Microsoft Windows e macOS.

O Linux foi desenvolvido por Linus Torvalds para ser uma alternativa ao Unix, um dos primeiros sistemas operacionais já construídos. Ele depende muito do kernel Linux para sua funcionalidade. Em um sistema operacional, o kernel é um programa de computador que permite aos usuários controlar o hardware e o software do sistema. Além do kernel, o sistema operacional Linux usa vários componentes, como bibliotecas de sistema e utilitários espaciais, mas todos eles dependem do kernel para se comunicar e receber comandos dos usuários.

ASS: Yuran

### Nota


Nao foi facil copiar e colar, quando abri o nano e observei as opcoes abaixo, vi que copiar e `M-6`, kkkk
tentei digitar na mao, e advinha so, estava escrevendo "M6", foi dai que percebi que uma coisa
se as opcoes com que uso, primeiro clico `CTRL` e depois a letra ex: `X`, comecam com `^`,
entao percebi que `CTRL` e expressando com `^`, entao `M`, pode ser uma das teclas.
Tentei *SHiFT* e *6*, e advinha o que saiu kkk `^`, kkkk. 

Continuei, e tentei `ALT` e `6`, nao mostrou nada, como e padrao quando tudo esta ok no terminal,
e tentei colar `CTRL, U`, e colou. *Primeiro selecionei um trecho do texto para teste*.

Fiquei feliz, fechei o arquivo de fonte, e fui ao que do destino, e tentei colar.
** [ Cutbuffer is empty ] **
Foi o erro que deu, entao percebi que foi possivel carregar a copia para fora do arquivo.
Entao, achei que o melhor seria *cortar*, kkkkkkk
Dito feito, advinha a mensagem que apareceu...

Foi dai que decidi pesquisar no brownser.
Vou deixar aqui o resultado que tive e que aprendi para copiar de arquivos diferentes.

## Como copiar um texto de arquivo para o outro?

Para copiar um texto de um arquivo para outro no nano, precisamos de:

1. Acessar o arquivo destino (onde pretendemos colar o conteudo), usando o paramentro `-F` do nano:
	`nano -F arquivo-destino.md
2. Tendo acessado o arquivo, clicar nas teclas `CTRL e R`, e inserir o enderenco do arquivo fonte(onde esta o conteudo) e depois `ENTER`.
3. No arquivo fonte, *selecionar e copiar* o texto desejado e sair.
4. Ao sair, voltaremos ao arquivo destino, entao colamos o conteudo e salva-mos.

`SHIFT e setas` -> Para selecionar;
`ALT e 6` -> Para copiar;
`CTRL e X` -> Para sair;
`CTRL e U` -> Para colar.
`CTRL e O`(letra) -> Para salvar.



