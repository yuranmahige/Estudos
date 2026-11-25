# Códigos de Erros

A redundância pode ser implementada por meio de vários métodos de codificação.
Podemos dividir os codigos de erros em duas categorias: **códigos de blocos** e **códigos convolucionais**. 

> O livro foca apenas nos códigos de bloco, pois os códigos convolucionais são mais complexos.

## Aritmética Modular
### Módulo Aritmético 2

. Nessa aritmética, o módulo N é igual a 2. Podemos usar apenas 0 e 1.

O resultado de uma operacao XOR:
- é **0** se ambos os **bits forem iguais**;
- o resultado é **1** se os dois **bits forem diferentes**.

**Exemplo**:
```
-----------------------------------------------------------------------
 Soma:  0 + 0 = 0  |     0 + 1 = 1 |    1 + 0 = 1 |     1 + 1 = 0 
-----------------------------------------------------------------------
 Subtração:  0 – 0 = 0 |    0 – 1 = 1  |    1 – 0 = 1 |     1 – 1 = 0  
-----------------------------------------------------------------------
```

```
1 0 1 1 0
1 1 1 0 0     Resultado da operacao XOR
---------
0 1 0 1 0
```

