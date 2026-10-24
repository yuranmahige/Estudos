## Roadmap Backend — Completo

### Fase 1 — Fundamentos 

| O quê | Marco |
|---|---|---|
 Linux: terminal, permissões, processos, `grep`/`sed`/`awk` | Diagnosticar um serviço sem GUI |
 SSH: chaves, `scp`, port forwarding, rede básica (TCP/IP, DNS, portas) | Deploy manual num VPS |
 Git: branches, rebase, GitHub/GitLab | Histórico limpo com feature branches |
 HTML/CSS/JS | Entender o que o browser envia |

---

### Fase 2 — JS/TS + Node/Nest

 O quê | Marco |
|---|---|
 TypeScript: types, interfaces, generics, modules | Ler e escrever TS sem medo |
 Node.js: event loop, streams, `fs`, HTTP server nativo | Criar um servidor HTTP sem framework |
 NestJS: modules, controllers, services, DI, guards, interceptors | API REST com auth JWT + validação |

**Projeto de saída**: API de tarefas (CRUD + auth + rate limiting) com Postgres.

---

### Fase 3 — Bases de Dados

| S O quê | Marco |
|---|---|
 SQL puro: JOIN, GROUP BY, índices, normalização | Escrever queries complexas a olho |
 PostgreSQL: transações, ACID, constraints, migrations | Migrations versionadas num projeto real |
 MongoDB: document model, aggregation, quando usar / quando **não** usar | Escolher o DB certo para um caso concreto |

**Dica**: sobe tudo com `docker compose` — já praticas Docker sem fase separada.

---

### Fase 4 — Docker + CI/CD

 O quê | Marco |
|---|---|
 Docker: Dockerfile multi-stage, volumes, redes, compose | Subir app + Postgres + Redis com 1 comando |
 CI/CD: GitHub Actions — build → test → deploy | Pipeline que publica imagem a cada push |

**Projeto de saída**: A API da Fase 2 com pipeline que faz deploy automático num VPS.

---

### Fase 5 — PHP 

 O quê | Marco |
|---|---|
 PHP 8.x: OOP, PSR-4, Composer, namespaces | Estrutura de projeto limpa |
 Um framework (Laravel ou Symfony — o que o mercado local usar) | CRUD API com Eloquent/Doctrine |

**Porquê aqui e não antes**: já tens o mental model de DI, modules, e API design do Nest. PHP vai ser **muito** mais rápido.

---

### Fase 6 — Java + Spring Boot

 O quê | Marco |
|---|---|
 Java: OOP, collections, generics, exceptions, JVM | Escrever Java sem pensar em JS |
 Spring Boot: DI, JPA/Hibernate, Spring Security, REST | API enterprise com auth + pagination |
 Testes: JUnit, Mockito, integration tests | Coverage > 80% num projeto |

**Projeto de saída**: Sistema de gestão (ex: stocks, faturação) com Spring Boot + Postgres + Docker.

---

### Fase 7 — Nuvem + Observabilidade

 O quê | Marco |
|---|---|
 Nuvem (AWS ou o que o mercado local usar): EC2/ECS, RDS, S3, IAM | Provisionar com Terraform ou Ansible |
 Observabilidade: logs estruturados, Prometheus/Grafana, health checks | Dashboard em produção |

---

### Fase 8 — Aprofundar

| Tópico | Quando |
|---|---|
| Redis / caching | Assim que tiveres uma API com queries repetidas |
| Message queues (RabbitMQ ou Kafka) | Quando precisares de processamento assíncrono |
| Microservices vs. monolito | Depois de teres 2+ projetos em produção |
| System design | Quando começares a fazer entrevistas |
| Segurança (OWASP, CORS, rate limiting, headers) | Transversal — começa já na Fase 2 |

---

## Timeline visual

```
      |───|───|───|───|───|───|───|───|───|───|
      [ Linux + SSH + Git + JS ]
              [ TS + Nest + SQL + Postgres ]
                          [ Docker + CI/CD ]
                                [ PHP ]
                                    [ Java + Spring ]
                                              [ Cloud + Obs ]
```
