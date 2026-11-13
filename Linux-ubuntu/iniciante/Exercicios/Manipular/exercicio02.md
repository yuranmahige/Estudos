# Exercícios e Desafios — Linux (Iniciante)

`Ctrl+Alt+F3` -> Modo texto\
`Ctrl+Alt+F2` -> Voltar para GUI (Interfase grafica)

**Cenário:** Você é o administrador de um servidor Linux. Complete as tarefas abaixo no terminal.

---

### Nível 1 — Aquecimento

1. Agende um desligamento para daqui a **15 minutos** com a mensagem *"Backup em andamento, não desliguem!"*.
2. Imediatamente depois, **cancele** o agendamento.
3. Confirme que foi cancelado (tente agendar de novo — se não der erro, está cancelado).

### Nível 2 — Intermediário

4. Agende um **reboot** para as **23:30** de hoje.
5. Cancele o reboot.
6. Use a opção `-k` para **simular** um desligamento (só avisa, não desliga). Veja a mensagem que aparece.

### Nível 3 — Bônus (pense um pouco)

7. Você agendou um desligamento para daqui a 5 minutos. Agora quer **adiar** para daqui a 30 minutos. Quais dois comandos você usa?
8. Pesquise no `man shutdown` (digite `man shutdown`) e descubra: qual opção impede que o sistema desligue mesmo se alguém digitar a senha de root? *(Dica: procure por `--no-wall` ou `--no-reboot`... ou talvez seja outra coisa!)*

---


**Dica:** Se errar, use `sudo shutdown -c` para limpar tudo e recomeçar sem medo.