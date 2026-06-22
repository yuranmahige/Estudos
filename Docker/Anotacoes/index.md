
APRENDA DOCKER DO ZERO | TUTORIAL COMPLETO COM DEPLOY >>> Link do video: https://youtu.be/DdoncfOdru8?si=eDuNppPC2ByOzmMp

		
		
				O que e Docker?

Docker é uma plataforma que permite criar, testar e executar aplicações em containers, garantindo que funcionem de forma consistente em qualquer ambiente. Ele isola dependências e recursos do sistema, simplificando o desenvolvimento, a implantação e a escalabilidade de softwares, tornando processos mais rápidos e eficientes.

Diferente das máquinas virtuais tradicionais, o Docker não replica um sistema completo, ele compartilha o kernel do sistema operacional do host, tornando a execução mais leve e rápida.

site : https://king.host/blog/tecnologia/o-que-e-docker

Em resumo o docker e uma ferramenta que nos permite criar, testar e executar uma ou varias amplicacoes em silmutaneo e sem ter que configurar cada, sendo cada aplicacao independente, o docker usa o sistema operacional do hospedeiro.


	Porque usar o docker?
	
A pergunta deveria ser porque nao usar o docker? O docker virtualiza o ambiente e todas as configuracoes sao feitas dentro dele, garantindo que funcione do mesmo jeito em todas as maquinas/ambientes.


	Taxonomia do Docker
	
Dockerfile : é o arquivo que descreve as instruções necessárias para montar uma imagem. Ele define o sistema base, as bibliotecas, as variáveis e os comandos de inicialização, tudo de maneira padronizada. (ver mais: "dockerfile/Entendendo DockerFile/DockerFIle.md")

Containers : São instacias de uma imagem ( e onde ficam guardadas as nossas imagens)

Imagens: São modelos que contêm tudo o que a aplicação precisa para ser executada.


		Primeiros passos em docker

Para verificar containers em execusao usamos o comando:
	
	docker ps
	
se nao tivermos nenhum container vai mostrar apenas a tabela sem nenhum valor.

	Hello World

Como regra, sempre ao aprender a usar uma ferramenta em T.I, precisamos executar o ola, mundo!, no docker, usamos o comando

	docker run hello-world 
	
 o comando docker run, serve para criar containers, sempre que executarmos o comando, ele vai primeiro verificar no local e se nao achar ira procurar no docker hub para baixar e correr.
 
 
 Se um container nao estiver em execucao, o docker vai fechar automaticamente, por isso se rodarmos docker ps, apos usar o hello-word, mostra que nao ha nenhum container, isso porque a imagem so mostra a mensagem e termina, para ver containers ja executados, usamos o comando

	docker ps -a
	
"-a" de all, assim vai mostrar todos. 


Para ver mais comandos, abra o Arquivo Comandos.md 
