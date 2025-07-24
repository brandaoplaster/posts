# Extensões Essenciais para Elixir no VSCode

Desenvolver em Elixir no VSCode pode ser uma experiência frustrante — **se você não usar as extensões certas**. A base do suporte vem da comunidade, e sem configuração, o editor é praticamente cego à linguagem.

## ElixirLS – O Mínimo Necessário

A extensão **ElixirLS (Elixir Language Server)** é obrigatória. Ela entrega recursos básicos que qualquer linguagem moderna exige: **autocompletar**, **formatação**, **navegação entre módulos**, **debugger** e **diagnóstico de erros em tempo real**.

Mas atenção: é comum travar ou demorar pra indexar projetos grandes. Atualizações nem sempre são frequentes, e versões do Elixir mal suportadas causam conflitos. Ainda assim, sem ela, você está no escuro.

## Credo – Código Ruim Exposto

**Credo** faz análise estática. Ele aponta más práticas, código duplicado, complexidade alta e outras porcarias que você deveria evitar. A extensão serve como um wrapper para o `mix credo` e mostra os avisos direto no editor. Não resolve tudo, mas expõe muita sujeira que você ignora.

## EEx e HEEx – Templates com Sintaxe Suportável

Quem usa Phoenix lida com `.eex` e `.heex`. O **EEx Language Support** apenas colore sintaxe — nada inteligente, mas melhor que nada. Já o **HEEx Formatter** ajuda a manter os templates LiveView organizados. Nenhuma das duas é perfeita, mas quebram o galho.

## Conclusão

O VSCode pode ser uma boa IDE pra Elixir, **mas depende totalmente dessas extensões**. ElixirLS é obrigatório. Credo te obriga a programar melhor. EEx/HEEx cobrem o básico dos templates. É o mínimo pra não escrever Elixir no escuro.

Não espere luxo — espere o necessário.
