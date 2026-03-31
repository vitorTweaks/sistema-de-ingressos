# Sistema de Compra de Ingressos

Este projeto é um sistema simples de compra de ingressos feito com **HTML** e **JavaScript**.

O usuário pode selecionar o tipo de ingresso, informar a quantidade desejada e realizar a compra. O sistema verifica a disponibilidade e atualiza a quantidade restante de ingressos na tela.

## Funcionalidades

- Seleção do tipo de ingresso:
  - Pista
  - Superior
  - Inferior
- Inserção da quantidade desejada
- Validação da quantidade informada
- Verificação de disponibilidade
- Atualização automática do estoque após a compra
- Exibição de mensagens de sucesso ou erro

## Tecnologias utilizadas

- HTML
- JavaScript
- DOM

## Como funciona

A função principal do projeto é `comprar()`.

Ela faz o seguinte:

1. Captura a quantidade digitada pelo usuário
2. Captura o tipo de ingresso selecionado
3. Valida se a quantidade é válida
4. Verifica quantos ingressos ainda estão disponíveis
5. Compara a quantidade desejada com a quantidade disponível
6. Se houver disponibilidade, desconta do estoque
7. Atualiza os valores na tela
8. Exibe uma mensagem confirmando a compra

## Estrutura esperada no HTML

O JavaScript espera encontrar os seguintes elementos no HTML:

- Um campo com `id="qtd"` para a quantidade
- Um seletor com `id="tipo-ingresso"` para o tipo de ingresso
- Um elemento com `id="qtd-pista"` para mostrar a quantidade disponível da pista
- Um elemento com `id="qtd-superior"` para mostrar a quantidade disponível do setor superior
- Um elemento com `id="qtd-inferior"` para mostrar a quantidade disponível do setor inferior

## Objetivo do projeto

Este projeto foi desenvolvido para praticar:

- Manipulação do DOM
- Condicionais
- Funções em JavaScript
- Validação de dados
- Atualização dinâmica de elementos HTML

## Observação

Este projeto pode ser melhorado futuramente com:

- Interface mais moderna
- Mensagens visuais na página em vez de `alert()`
- Bloqueio de compra quando os ingressos acabarem
- Histórico de compras
- Melhor tratamento de erros

## Autor

Front-End desenvolvido no curso Alura

Projeto desenvolvido por **Vitor Hugo**.
