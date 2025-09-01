# Do Caos à Clareza: Reduzindo Dependências em Rails

Após 21 anos de Ruby on Rails, hoje temos um ecossistema muito rico com milhares de soluções empacotadas em gems. Com essas milhares de opções disponíveis, às vezes somos tentados a adicionar gems para resolver tudo, o que vejo como um erro que cometemos.

Por que sair instalando centenas de gems no seu projeto, sem realmente precisar, se torna uma das piores coisas? Cada gem adicionada cria dependência, um potencial de vulnerabilidade com o tempo, além de deixar a sua aplicação lenta e de difícil manutenção a longo prazo.

O que quero explorar aqui é a filosofia do "menos é mais". Como assim? Instalar gems que são verdadeiramente essenciais, aquelas que pagam o "aluguel" por estarem no seu Gemfile.

## Como Posso Fazer Isso?

Pode estar se perguntando. Faça algumas perguntas, como:

- **Realmente preciso disso?** O Rails já não resolve esse problema?
- **Esta gem está ativa?** Qual foi a última atualização dessa gem? Está recebendo alguma atualização?
- **Dá para resolver esse problema com código simples?** O que é uma classe com 30 linhas? Às vezes é melhor 30 linhas do que uma gem desconhecida e sem testes.
- **O benefício supera o custo?** Complexidade, dependência e manutenção.

São algumas perguntas que se deve levar em conta antes de sair fazendo `bundle add hello_world`.

As gems a seguir são gems que já usei por bastante tempo e, no meu ponto de vista, estão consolidadas. Porém, não é uma verdade absoluta, pois podemos ter opções de gems e nada impede de usar uma outra opção desta lista.

## 1. RuboCop

```ruby
# Gemfile
gem 'rubocop', require: false
gem 'rubocop-rails', require: false
gem 'rubocop-rspec', require: false
```

O **RuboCop** é considerado um **pilar de padronização de código Ruby**, pois garante que o código siga um mesmo padrão entre diversos desenvolvedores, criando uma base de código consistente e legível.

Verifica se o código possui más práticas, inconsistências e violações do estilo. É altamente configurável via arquivo `.rubocop.yml`.

**Impacto na equipe:** elimina discussões sobre estilo de código, fazendo com que code review foque em lógica e bom código, e não na formatação de código. Além de facilitar para novos desenvolvedores que entrem no time.

Configuração básica do `.rubocop.yml`:

```yaml
inherit_from: .rubocop_todo.yml

AllCops:
  TargetRubyVersion: 3.1
  NewCops: enable

Style/Documentation:
  Enabled: false

Metrics/LineLength:
  Max: 120
```

## 2. RSpec

**RSpec** é o framework de **testes para Ruby** mais popular no mundo Rails. Uma ótima sintaxe e possui recursos poderosos para testar classes e métodos. Esta gem possui outras gems que ajudam a complementá-la:

- **FactoryBot**
- **Faker**
- **SimpleCov**

Cada gem destas possui um papel importante que complementa o RSpec. Vou fazer um breve resumo de cada uma.

### 2.1. FactoryBot

A gem FactoryBot é usada para criar dados de teste de forma consistente e flexível. Podemos definir uma factory, por exemplo, para o modelo User.

*Observação: já estou usando a próxima gem, a Faker.*

```ruby
# spec/factories/users.rb
FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    phone { Faker::PhoneNumber.phone_number }
    address { Faker::Address.full_address }
    
    trait :admin do
      role { 'admin' }
    end
    
    trait :with_posts do
      after(:create) do |user|
        create_list(:post, 3, user: user)
      end
    end
  end
end

# Uso nos testes:
let(:user) { create(:user) }
let(:admin) { create(:user, :admin) }
let(:user_with_posts) { create(:user, :with_posts) }
```

O **FactoryBot** serve para **simplificar e padronizar a criação de dados de teste**. Ganho de flexibilidade, legibilidade e consistência nos testes.

### 2.2. Faker

Esta gem é muito útil para gerar dados falsos e aleatórios, tanto para testes como para seeds em ambiente de QA. Funciona muito bem em conjunto com **FactoryBot**. Cria dados faker para ambiente de QA e testes, evitando o uso de dados reais e sensíveis nesses ambientes, não dando brechas de segurança.

### 2.3. SimpleCov

SimpleCov é uma gem útil para analisar a cobertura dos testes da sua aplicação Ruby on Rails. Mostra partes do código que possuem cobertura ou que faltam testes. O que ajuda a criar testes mais completos e aumenta a confiabilidade e facilita a manutenção de código.

Todas as vezes que o RSpec for rodado, o SimpleCov gera relatório mostrando quais partes do código foram cobertas.

Uma configuração básica do SimpleCov:

```ruby
require 'simplecov'
SimpleCov.start 'rails' do
  add_filter '/spec/'
  add_filter '/config/'
  add_filter '/vendor/'
  
  minimum_coverage 90
  refuse_coverage_drop
end
```

## 3. Bullet

Usada no ambiente de desenvolvimento, ajuda a identificar **problemas de performance relacionados a consultas de banco de dados**.

Detecta consultas desnecessárias com N+1 queries ou associações carregadas mas não usadas. Ajuda o desenvolvedor a identificar esses problemas no ambiente de desenvolvimento, impedindo assim que chegue ao ambiente de produção.

## 4. Brakeman

Essa gem acho interessante, pois é um analisador de segurança estático que analisa aplicações em busca de vulnerabilidades, como:

- **SQL Injection**: permite que usuários maliciosos alterem consultas ao banco de dados.
- **Cross-Site Scripting (XSS)**: executa scripts maliciosos no navegador de outros usuários.
- **Command Injection**: possibilita executar comandos no servidor via entrada do usuário.
- **Unsafe redirects**: redirecionamentos sem validação que podem levar a sites maliciosos.
- **Insecure Session Handling**: sessões e cookies mal protegidos que podem ser roubados ou manipulados.

Quando estamos escrevendo código, muitas vezes não damos a devida importância para a segurança, então vejo essa gem como uma boa ferramenta para auxílio.

## 5. Pry

Ferramenta de depuração interativa para Ruby que substitui o console padrão. Permite pausar a execução do código em qualquer ponto usando `binding.pry`, ganhando o poder de inspecionar variáveis, executar código em tempo real e navegar pelo stack trace.

## Opções Bônus

Vou citar algumas opções bônus que são interessantes:

Dentro do contexto de depuração, existem duas gems: **Better Errors & Binding of Caller**. Substituem a página de erro default do Rails por uma **interface interativa e detalhada**, permitindo visualizar a stack trace, inspecionar variáveis e explorar os contextos de chamadas anteriores diretamente no navegador. Ferramenta bem útil para ajudar na depuração, tornando o processo mais rápido. Mas essas duas gems deixo apenas como um bônus.

Para processamento assíncrono de tarefas em background, o **Sidekiq** é uma ótima escolha. Permite que você execute tarefas demoradas, como envio de emails, processamento de arquivos ou requisições externas, **fora do fluxo principal da aplicação**, sendo altamente eficiente e escalável.

Para todos os projetos que necessitam de autenticação, nem precisamos pensar muito: **Devise** é a melhor escolha, já fornece uma solução completa.

## Conclusão

O Rails já resolve muita coisa, então antes de adicionar qualquer gem, pergunte-se: o Rails já não resolve esse problema? Na maioria das vezes, a resposta é sim.

Não se trata de reinventar a roda, mas de avaliar se a adição de uma gem é realmente justificável. Um Gemfile enxuto deixa a aplicação mais rápida, com menos dependências, atualizações mais fáceis e menos riscos de problemas de segurança.

Comece pelo simples, mantenha o simples sempre que possível e adicione novas gems apenas quando a necessidade for real e recorrente.