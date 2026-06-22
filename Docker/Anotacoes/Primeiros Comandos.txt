Comandos aprendidos no capitulo #1

Comando para nao usar Sudo em todos comandos 
	sudo usermod -aG docker $USER
	Newgrp docker

Criar container
	docker run -it ubuntu /bin/bash

Mostrar containers
	docker ps -a

Mostrar Id
	docker ps -qa

Mostrar dados de uso.
	Docker stats ID

Mostrar Images
	docker images
	
Apagar container
	docker rm ID

Apagar Imagens
	docker rmi ID

Commitar 
	docker commit ID


Manipular funcionalidades
 	docker stop ID > pausa
 	docker start ID > inicia 	
 	
Apagar todos

Para containers
	docker rm $(docker ps -qa)

Para images
	docker rmi $(docker images -q)
