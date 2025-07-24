# Ambiente de Desenvolvimento para Elixir: O Essencial, Sem Firula

Elixir é uma linguagem poderosa, mas seu ambiente de desenvolvimento ainda deixa a desejar em comparação com stacks mais populares. Aqui, o que realmente importa para trabalhar de forma produtiva, sem ilusão.

## Editor: VSCode (por falta de opção)

O **VSCode**, com as extensões certas (veja artigo anterior), é o mais usado. Não porque é o melhor, mas porque o suporte a Elixir em outras IDEs é quase inexistente ou morto. Alternativas como **IntelliJ** com plugin Elixir são lentas e mal mantidas. **Neovim** funciona bem para quem quer performance e controle, mas exige mais configuração.

## Ferramentas que você vai usar o tempo todo

- `iex` — O REPL de Elixir. Útil, mas limitado fora de testes rápidos.
- `mix` — Gerenciador de tarefas. Você vai usar pra tudo: criar projeto, rodar testes, compilar, instalar deps. Se não aprendeu a usar `mix`, não está programando em Elixir.
- `ex_unit` — Framework de testes nativo. Simples e direto. Funciona bem, sem depender de terceiros.

## Debug? Quase inexistente

O suporte a debug é fraco. **ElixirLS** oferece uma experiência decente, mas instável. A maioria dos devs resolve na raça: `IO.inspect/1`, testes bem escritos e leitura de stack trace.

## Formatação e análise de código

- `mix format` — Formata o código. Ponto. Sem muita personalização.
- `Credo` — Faz análise estática. Aponta más práticas, mas depende da sua equipe levar isso a sério.

## Documentação

Elixir tem **boa documentação oficial**. Hexdocs cobre praticamente tudo. Se está perdido, o problema é não ter lido.

## Banco de Dados e Phoenix

Se você usa Phoenix (e provavelmente usa), prepare-se para lidar com **Ecto** (ORM funcional) e **PostgreSQL**. Ferramentas gráficas como **pgAdmin** ou **TablePlus** ajudam, mas não são parte da stack oficial.

## Considerações finais

Ambiente de Elixir é simples, funcional, mas cru. Quem vem de JavaScript, Java ou Python vai sentir falta de recursos. Mas essa simplicidade força você a entender o que está fazendo.

**Você não depende de mágicas do editor — depende de entender seu código.** E isso, pra quem quer escrever software sério, é vantagem.
