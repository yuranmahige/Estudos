# Mesclando mudancas em um mesmo arquivo

### Merge com : `git merge branch -m "mensagem"`

## Erro
```bash
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
automatic merge failed;fix conflicts and then commit the result.
```

## Causa global

Este erro, ocorre quando estamos trabalhando no mesmo arquivo, mas em branchs 
diferentes, em especial quando na mesma area, ha conteudos diferentes.

**Exemplo**
branch Principal > Alguem add uma seccao logo apos o main
branch secundaria > outro dev add um footer logo apos o main.

A branch secundaria ao tentar fazer merge com a principal, vai dar erro de conflito.
o git nao vai consiguir fazer merge automaticamente.

## Solucao

Para resolver este erro, devemos comparar o ficheiro em causa, o proprio git ajuda-nos, 
add marcadores no conteudo, para veremos as diferencas.

Entre os textos <<<<<<< HEAD e ======= estão as alterações que fize-
mos na branch principal, que é a branch atual, para qual o HEAD está apon-
tando.

Já entre ======= e >>>>>>> secundaria, estão as alterações que fizemos
na branch secundaria.

apos editar-mos, e aplicarmos as mudancas, devemos verificar

`git status`, teremos

```bash
On branch master
Your branch is ahead of ’origin/master’ by 5 commits.
(use "git push" to publish your local commits)
All conflicts fixed but you are still merging.
(use "git commit" to conclude merge)
Changes to be committed:
modified:
index.html
```

depois so comitar : `git commit -am "mensagem"`

### Merge com : `git rebase branch`

## Erro

```bash
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Failed to merge in the changes.
Patch failed at 0004 mensagem do merge
The copy of the patch that failed is found in:

When you have resolved this problem, run "git rebase
--continue".
If you prefer to skip this patch, run "git rebase --skip"
instead.
To check out the original branch and stop rebasing, run
"git rebase --abort"
```

## Solucao

Repara que na saida vem : `When you have resolved this problem, run "git rebase --continue`.
Diferente com merge que vinha : `(use "git commit" to conclude merge) Changes to be committed:`

O git ja nos ajuda em como continuar apos resolver o erro.

Apos aplicar as mudancas no arquivo, devemos usar o comando: `git rebase --continue`.
E problema resolvido.

## Importante

E importante, antes e depois de corrigir executar o comando: `git status`, para a verificacao.

---

# Ferramenta para resolver conflitos

Por vezes o conflito, pode nao estar em apenas em um arquivo, pode estar em varios,
para esses casos podemos usar a ferramenta recomendada no livor **`mergetool`**.
que vai abrir uma interfase grafica para mehor visualicao.

`git mergetool`, vai mostrar:

```bash
This message is displayed because ’merge.tool’ is not
configured.
See ’git mergetool --tool-help’ or ’git help config’ for more
details. ’git mergetool’ will now attempt to use one of the
following tools: meld opendiff kdiff3 tkdiff xxdiff
tortoisemerge gvimdiff diffuse diffmerge ecmerge p4merge araxis
bc3 codecompare emerge vimdiff
Merging:
index.html
Normal merge conflict for ’index.html’:
{local}: modified file
{remote}: modified file
Hit return to start merge resolution tool (meld):
```

Depois so clicar **`ENTER`**, e vai abrir.

Bem como podemos usar o **Visual studio code**.