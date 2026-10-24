# Roadmap - Backend

| Fase | Foco | Marco de saída |
|---|---|---|
| **1. Linux essencial** | Navegação, permissões, usuários/grupos, processos e serviços, manipulação de texto (`grep`, `sed`, `awk`), editor terminal | Diagnosticar um serviço que não responde sem GUI |
| **2. SSH e rede básica** | Autenticação por chave, `scp`/`rsync`, port forwarding, TCP/IP, DNS, portas, `ss`, `dig` | Fazer deploy manual de um app num VPS via SSH |
| **3. Docker** | Imagem vs. container, Dockerfile (multi-stage), volumes, redes, `docker compose` | Subir app + banco com um único `docker compose up` |
| **4. CI/CD** | GitHub Actions (ou GitLab CI), pipeline de build → teste → deploy | Pipeline que builda a imagem e publica num registry a cada push |
| **5. Nuvem + IaC (básico)** | Uma nuvem a fundo, Terraform ou Ansible para provisionar | Provisionar um servidor e deployar o app com um comando |
| **6. Observabilidade** | Logs estruturados, métricas (Prometheus/Grafana), health checks | Dashboard com status da aplicação em produção |
