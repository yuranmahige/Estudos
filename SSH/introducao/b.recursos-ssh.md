# Visão geral dos recursos do SSH

O que o SSH pode fazer? Vamos analisar alguns exemplos que demonstram as principais características do SSH, como logins remotos seguros, cópia segura de arquivos e invocação segura de comandos remotos.

## Logins remotos seguros

Programas como *telnet* permitem logar em um computador a partir de outro, mas transmitem **usuário e senha em texto plano** pela rede, onde um terceiro malicioso pode interceptá-los. Além disso, toda a sessão *telnet* é legível por um espião de rede.

O SSH resolve isso: ao usar o comando

```bash
$ ssh -l smith host.example.com
```

o cliente autentica você no servidor SSH do computador remoto por meio de uma **conexão criptografada**. Seu nome de usuário e senha são criptografados antes de saírem da máquina local, e **toda a sessão de login é criptografada** durante o trânsito entre cliente e servidor. Como a criptografia é transparente, você não percebe diferença em relação a um *telnet* comum.

## Transferência segura de arquivo

O comando `scp` (Secure Copy) transfere arquivos entre máquinas de forma criptografada. Por exemplo, para copiar um arquivo `meuarquivo` de `contaprincipal.com` para `contasecundaria.com`:

```bash
$ scp meuarquivo metoo@contasecundaria.com:
```

O arquivo é **automaticamente criptografado** ao sair de `contaprincipal.com` e **descriptografado** ao chegar em `contasecundaria.com`. O `scp` substitui o inseguro `rcp` (remote copy).

## Execução segura de comandos remotos

Como administrador de sistemas, você pode precisar executar o mesmo comando em muitos computadores. O SSH permite executar comandos remotos de forma segura, sem abrir uma sessão interativa:

```bash
$ ssh user@host 'comando_remoto'
```

O comando é executado no host remoto e a saída é retornada ao cliente local, tudo dentro do túnel criptografado.

## Chaves e Agentes

O SSH possui vários mecanismos de autenticação, sendo o mais seguro baseado em **chaves** em vez de senhas. Uma chave é um pequeno conjunto de bits que identifica unicamente um usuário SSH. Por segurança, a chave privada é mantida **criptografada** e só pode ser usada após digitar uma *passphrase* secreta.

O fluxo de trabalho com chaves e agentes:

1. **Gere o par de chaves** com `ssh-keygen` (cria uma chave privada local e uma chave pública).
2. **Copie a chave pública** para os seus accounts remotos (arquivo `~/.ssh/authorized_keys`).
3. **Inicie o `ssh-agent`** na máquina local — ele roda em segundo plano e guarda as chaves privadas em memória.
4. **Carregue as chaves** no agente com `ssh-add` (exige a *passphrase* de cada chave).

Resultado: acesso **sem senha** a todos os seus accounts remotos que contêm sua chave pública, sem precisar memorizar ou re digitar senhas repetidamente.

## Controle de acesso

O SSH permite controlar **quem pode acessar** o servidor e **o que pode fazer**. No arquivo de configuração do servidor (`/etc/ssh/sshd_config`), as diretivas principais são:

| Diretiva | Função |
|----------|--------|
| `AllowUsers` | Permite login apenas para os usuários listados (lista definitiva) |
| `DenyUsers` | Negar login para os usuários listados |
| `AllowGroups` | Permite login apenas para membros dos grupos listados |
| `DenyGroups` | Negar login para membros dos grupos listados |

A ordem de processamento é: `DenyUsers` → `AllowUsers` → `DenyGroups` → `AllowGroups`.

Exemplo: permitir conexões SSH apenas para os accounts `smith` e `jones`:

```
AllowUsers smith jones
```

Ou permitir o usuário `smith` **apenas** a partir do host `remote.example.com`:

```
AllowUsers smith@remote.example.com
```

O livro destaca um caso prático: você pode dar acesso à sua conta a alguém (ex.: sua secretária) **sem revelar sua senha**, restringindo-a a executar apenas um programa específico (ex.: o cliente de e-mail), sem privilégios de administrador.

## Encaminhamento de portas

O SSH pode aumentar a segurança de **outros aplicativos TCP/IP** (como *telnet*, *ftp* e o X Window System). A técnica chamada *port forwarding* ou *tunneling* redireciona uma conexão TCP/IP para passar **através de uma conexão SSH**, criptografando-a de ponta a ponta de forma transparente.

O SSH suporta três tipos de encaminhamento:

| Tipo | Opção | Descrição |
|------|-------|-----------|
| Local | `-L` | Encaminha uma porta local para um destino remoto (ex.: acessar um banco de dados interno do servidor) |
| Remoto | `-R` | Encaminha uma porta remota para um destino local (ex.: expor um serviço local ao servidor) |
| Dinâmico | `-D` | Cria um proxy SOCKS através do túnel SSH |

Exemplo de encaminhamento local — acessar um serviço na porta 80 do servidor remoto como se estivesse na porta 8080 local:

```bash
$ ssh -L 8080:localhost:80 user@host
```