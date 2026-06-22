Para instalar o Docker Engine no Ubuntu através do repositório oficial (método mais recomendado e atualizado), abra o seu terminal e siga o passo a passo abaixo. [1] 
## 1. Atualizar o sistema e instalar dependências [2] 
Prepare o sistema garantindo que os pacotes necessários para download seguro via HTTPS estejam presentes: [1, 3] 

sudo apt update
sudo apt install ca-certificates curl gnupg

## 2. Adicionar a chave GPG oficial do Docker [4] 
Crie o diretório de chaves e adicione a assinatura digital oficial do Docker para garantir a segurança dos downloads: [1, 2, 5] 

sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

## 3. Configurar o repositório estável
Adicione a fonte de pacotes correta com base na versão do seu sistema Ubuntu: [1, 6] 

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

## 4. Instalar o Docker Engine e utilitários
Atualize novamente o índice do apt (agora incluindo o repositório do Docker) e instale o pacote principal junto com o Docker Compose: [1, 7, 8, 9] 

sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

## 5. Verificar a instalação

Execute o contêiner de testes padrão para confirmar que o serviço está rodando corretamente: [8, 10] 

sudo docker run hello-world

Se a instalação funcionar, o terminal exibirá a mensagem "Hello from Docker!". [11] 
------------------------------
## Configuração Opcional: Rodar o Docker sem sudo [12] 
Por padrão, os comandos do Docker exigem privilégios de administrador (sudo). Para rodar os comandos diretamente com o seu usuário atual, execute: [6, 11, 13] 

sudo usermod -aG docker $USER

Nota: Para aplicar essa alteração, feche o terminal e faça login novamente no sistema (ou reinicie a sessão). [7, 14] 
