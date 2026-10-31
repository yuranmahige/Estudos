# Versoes SSH

**SSH-1**: O original a 1 versao, antiga e insegura.
**SSH-2**: Mais usado e seguro, a versao 2.


# Tecnologias Relacionadas

O SSH é popular e conveniente, mas certamente não é a melhor solução de segurança para todas as redes. Autenticação, criptografia e segurança de rede originaram-se muito antes do SSH e foram incorporados em muitos outros sistemas. Vamos pesquisar alguns sistemas representativos.

## Suíte rsh (comandos r)

Os programas Unix `rsh`, `rlogin` e `rcp` — coletivamente conhecidos como **r-commands** — são os ancestrais diretos dos clientes SSH1 `ssh`, `slogin` e `scp`. As interfaces de usuário e a funcionalidade visível são praticamente idênticas às suas contrapartes SSH, exceto que os clientes SSH são **seguros**.

Os r-commands, em contraste, **não criptografam suas conexões** e possuem um modelo de autenticação fraco e facilmente subvertido. O servidor de um r-command depende de dois mecanismos de segurança:

1. Um **serviço de nomenclatura de rede** (ex.: DNS ou NIS)
2. A noção de **portas TCP privilegiadas** (portas < 1024, acessíveis apenas ao superusuário)

Ao receber uma conexão de uma porta privilegiada, o servidor confia que o host remoto é legítimo. Isso é facilmente burlado por um atacante com acesso a qualquer máquina na rede.

> Dado os recursos de segurança superiores do SSH e o fato de que `ssh` é compatível para trás com `rsh` (e `scp` com `rcp`), **não há motivo convincente para executar os r-commands** mais.

## Pretty Good Privacy (PGP) e GNU Privacy Guard (GnuPG)

PGP é um popular programa de criptografia disponível para muitas plataformas, criado por **Phil Zimmerman**. Ele pode autenticar usuários e criptografar arquivos de dados e mensagens de e-mail.

O SSH incorpora alguns dos **mesmos algoritmos de criptografia** do PGP, mas aplicados de forma diferente:

| Aspecto | PGP | SSH |
|---------|-----|-----|
| Modelo | Baseado em arquivos (batch) | Sessão contínua entre computadores |
| Uso típico | Criptografar um arquivo ou e-mail por vez | Criptografar uma sessão interativa em tempo real |
| Analogia | Tarefa em lote | Processo interativo |

> **Dica:** PGP e SSH estão relacionados de outra forma também: o SSH2 pode usar **chaves PGP opcionalmente** para autenticação.

## Kerberos

Kerberos é um sistema de autenticação segura para ambientes onde redes podem ser monitoradas e os computadores não estão sob controle central. Foi desenvolvido como parte do **Project Athena**, um amplo esforço de pesquisa e desenvolvimento no **MIT**.

Kerberos autentica usuários por meio de **tickets** — pequenas sequências de bytes com tempo de vida limitado — enquanto as senhas dos usuários permanecem seguras em uma máquina central.

**Diferenças entre SSH e Kerberos:**

| Aspecto | SSH | Kerberos |
|---------|-----|----------|
| Complexidade | Leve e fácil de implantar | Requer infraestrutura significativa (host central, sincronização de relógio, contas administrativas) |
| Senhas | Enviadas pela rede (em conexões criptografadas) em cada login | Permanecem no host central; viajam o mínimo possível |
| Integração com apps | Substitui `rsh` em programas existentes; port-forwarding para conexões diretas | Bibliotecas de programação que os desenvolvedores integram no código-fonte |
| Escopo | Acesso seguro máquina a máquina | Base de dados centralizada de contas, listas de controle de acesso, modelo hierárquico de confiança |

O MIT Kerberos vem com serviços "kerberizados", incluindo versões seguras de `telnet`, `ftp` e `rsh`.

## IPSEC e Redes Privadas Virtuais (VPN)

IPSEC (Internet Protocol Security) é um padrão em evolução da Internet para segurança de rede, desenvolvido por um grupo de trabalho do **IETF**. Compreende autenticação e criptografia implementadas **no nível IP** — um nível mais baixo da pilha de rede do que o SSH.

Características principais:

- **Totalmente transparente** para os usuários finais — não precisam usar um programa específico como o SSH; o tráfego de rede inseguro existente é protegido automaticamente pelo sistema subjacente.
- Pode conectar uma única máquina a uma rede remota através de redes intermediárias não confiáveis.
- Usa um protocolo chamado **Encapsulated Security Payload (ESP)** para autenticação, criptografia, ou ambos.

## Senha Remota Segura (SRP)

O protocolo Secure Remote Password (SRP), criado na **Universidade de Stanford**, é um protocolo de segurança muito diferente em escopo do SSH. É especificamente um **protocolo de autenticação**, enquanto o SSH compreende autenticação, criptografia, integridade, gerenciamento de sessão, etc., como um todo integrado.

**Objetivo de projeto:** melhorar as propriedades de segurança da autenticação por senha, mantendo suas vantagens práticas.

**Problema que resolve:** Autenticação por chave pública SSH é difícil quando se está viajando (precisa carregar a chave privada em um disquete). Com senhas tradicionais, o servidor mantém um banco de dados sensível (ex.: `/etc/passwd`, `/etc/shadow`). O SRP fornece **forte autenticação mútua de duas partes**, com o cliente precisando lembrar apenas uma senha curta que não precisa ser fortemente aleatória.

**Vantagem adicional:** O SRP é intencionalmente projetado para **evitar algoritmos de criptografia** em sua operação, assim evitando violar leis de exportação de criptografia.

> O SRP é um excelente candidato para um método de autenticação adicional no SSH.

## Protocolo de Camada de Soquete Segura (SSL)

O protocolo Secure Socket Layer (SSL) é uma técnica de autenticação e criptografia que fornece serviços de segurança a clientes TCP por meio de uma API estilo **Berkeley sockets**. Foi inicialmente desenvolvido pela **Netscape**.

O SSL opera em um nível diferente do SSH: ele fornece segurança a **aplicações TCP individuais** através de uma API, enquanto o SSH é um protocolo de aplicação completo.

## Telnet e FTP aprimorados por SSL

Alguns programas populares têm a opção de executar protocolos cliente/servidor **sobre SSL**. Por exemplo, tanto o Netscape Communicator quanto o Microsoft Internet Explorer permitem conectar a servidores **POP**, **IMAP** e **SMTP** usando SSL. Isso adiciona uma camada de criptografia a protocolos que originalmente transmitiam dados em texto plano.

## Stunnel

stunnel é uma ferramenta SSL criada por **Micha Trojnara** (Polônia). Adiciona proteção SSL a serviços TCP existentes em ambiente Unix, como servidores POP ou IMAP, **sem exigir alterações no código-fonte** do servidor.

- Pode ser invocado a partir do `inetd` como um **wrapper** para qualquer número de daemons de serviço, ou executado de forma independente, aceitando conexões de rede para um serviço particular.
- Realiza **autenticação e autorização** de conexões entrantes via SSL; se a conexão for permitida, executa o servidor e implementa uma sessão protegida por SSL entre os programas cliente e servidor.

## Firewalls

Um *firewall* é um dispositivo de hardware ou programa de software que **impede certos dados de entrar ou sair de uma rede**. Exemplos:

- Um firewall entre um site web e a Internet pode permitir apenas tráfego **HTTP e HTTPS** até o site.
- Um firewall pode rejeitar todos os pacotes TCP/IP a menos que originem de um conjunto designado de endereços de rede.

> Firewalls **não são um substituto** para o SSH ou outras abordagens de autenticação e criptografia, mas abordam problemas semelhantes. As técnicas podem ser **usadas juntas**. 