Aqui está o roadmap completo, unificado e com prazos realistas:

---

## Roadmap Backend — Completo

### Fase 1 — Fundamentos (4–6 semanas)

| Semana | O quê | Marco |
|---|---|---|
| 1–2 | Linux: terminal, permissões, processos, `grep`/`sed`/`awk` | Diagnosticar um serviço sem GUI |
| 2–3 | SSH: chaves, `scp`, port forwarding, rede básica (TCP/IP, DNS, portas) | Deploy manual num VPS |
| 3–4 | Git: branches, rebase, GitHub/GitLab | Histórico limpo com feature branches |
| 4–6 | HTML/CSS/JS (continua o curso do Guanabara em paralelo) | Entender o que o browser envia |

---

### Fase 2 — JS/TS + Node/Nest (6–8 semanas)

| Semana | O quê | Marco |
|---|---|---|
| 6–8 | TypeScript: types, interfaces, generics, modules | Ler e escrever TS sem medo |
| 8–10 | Node.js: event loop, streams, `fs`, HTTP server nativo | Criar um servidor HTTP sem framework |
| 10–14 | NestJS: modules, controllers, services, DI, guards, interceptors | API REST com auth JWT + validação |

**Projeto de saída**: API de tarefas (CRUD + auth + rate limiting) com Postgres.

---

### Fase 3 — Bases de Dados (4–5 semanas, em paralelo com Fase 2)

| Semana | O quê | Marco |
|---|---|---|
| 10–12 | SQL puro: JOIN, GROUP BY, índices, normalização | Escrever queries complexas a olho |
| 12–14 | PostgreSQL: transações, ACID, constraints, migrations | Migrations versionadas num projeto real |
| 14–15 | MongoDB: document model, aggregation, quando usar / quando **não** usar | Escolher o DB certo para um caso concreto |

**Dica**: sobe tudo com `docker compose` — já praticas Docker sem fase separada.

---

### Fase 4 — Docker + CI/CD (4 semanas)

| Semana | O quê | Marco |
|---|---|---|
| 15–17 | Docker: Dockerfile multi-stage, volumes, redes, compose | Subir app + Postgres + Redis com 1 comando |
| 17–19 | CI/CD: GitHub Actions — build → test → deploy | Pipeline que publica imagem a cada push |

**Projeto de saída**: A API da Fase 2 com pipeline que faz deploy automático num VPS.

---

### Fase 5 — PHP (4–5 semanas)

| Semana | O quê | Marco |
|---|---|---|
| 19–22 | PHP 8.x: OOP, PSR-4, Composer, namespaces | Estrutura de projeto limpa |
| 22–24 | Um framework (Laravel ou Symfony — o que o mercado local usar) | CRUD API com Eloquent/Doctrine |

**Porquê aqui e não antes**: já tens o mental model de DI, modules, e API design do Nest. PHP vai ser **muito** mais rápido.

---

### Fase 6 — Java + Spring Boot (8–10 semanas)

| Semana | O quê | Marco |
|---|---|---|
| 24–28 | Java: OOP, collections, generics, exceptions, JVM | Escrever Java sem pensar em JS |
| 28–32 | Spring Boot: DI, JPA/Hibernate, Spring Security, REST | API enterprise com auth + pagination |
| 32–34 | Testes: JUnit, Mockito, integration tests | Coverage > 80% num projeto |

**Projeto de saída**: Sistema de gestão (ex: stocks, faturação) com Spring Boot + Postgres + Docker.

---

### Fase 7 — Nuvem + Observabilidade (3–4 semanas)

| Semana | O quê | Marco |
|---|---|---|
| 34–36 | Nuvem (AWS ou o que o mercado local usar): EC2/ECS, RDS, S3, IAM | Provisionar com Terraform ou Ansible |
| 36–38 | Observabilidade: logs estruturados, Prometheus/Grafana, health checks | Dashboard em produção |

---

### Fase 8 — Aprofundar (contínuo)

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
Sem:  1   4   8   12  16  20  24  28  32  36  40
      |───|───|───|───|───|───|───|───|───|───|
      [ Linux + SSH + Git + JS ]
              [ TS + Nest + SQL + Postgres ]
                          [ Docker + CI/CD ]
                                [ PHP ]
                                    [ Java + Spring ]
                                              [ Cloud + Obs ]
```

**~9 meses** para estar funcional e empregável. Se for a tempo inteiro, compressas para **6 meses**.

---

## Regras de ouro

1. **Máximo 2 coisas em paralelo** (ex: JS/TS + SQL)
2. **Projeto > tutorial** — a partir da Fase 2, cada fase termina com algo deployado
3. **Postgres é o default** — Mongo só com caso concreto
4. **Docker desde a Fase 2** — não esperes pela Fase 4 para usar
5. **Não saltes para Java sem PHP** — o mercado local paga por PHP, e a transição PHP→Java é mais suave que JS→Java

Queres que detalhe alguma fase com recursos específicos (cursos, vídeos, projetos)?


