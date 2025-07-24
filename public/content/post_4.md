# TypeScript com Vue: Ganho Real ou Complicação Desnecessária?

Combinar **Vue** com **TypeScript** virou tendência, mas nem sempre é vantagem. A promessa é mais segurança e produtividade. A realidade depende de quanto você entende TypeScript — e da estrutura do seu projeto Vue.

## O que você ganha?

- **Tipagem estática**: pega erro antes de rodar.
- **Autocompletar real**: o editor entende seus dados, props e eventos.
- **Refatoração segura**: renomear variável ou método sem quebrar tudo.
- **Integração com IDE**: o VSCode vira quase um copiloto.

Se você está num projeto médio ou grande, com equipe, TypeScript **vale cada linha**. Em projetos pequenos ou mal escritos, é só barulho.

## O que você perde?

- **Simplicidade**. Vue puro é limpo. TypeScript obriga você a escrever mais.
- **Curva de aprendizado**. Não saber TypeScript direito vai te afundar.
- **Problemas com composição**. Em `setup()`, tipar `props`, `emits`, `refs` e `reactive` pode virar um inferno sem prática.

## API Options vs. Composition API

- **Options API com TS** é limitada e chata de tipar. Dá pra usar, mas é gambiarra com decorators ou `defineComponent`.
- **Composition API** foi feita pensando em TypeScript. Muito mais fluida, com inferência decente e controle total.

Se vai usar TypeScript, use com Composition API. Ponto.

## Ferramentas que ajudam

- **Volar** (não Vetur): extensão do VSCode que entende TypeScript de verdade no Vue 3.
- **Vue TSC**: checa tipos no seu projeto sem buildar. Rápido e confiável.
- **`defineProps` e `defineEmits`** com JSDoc ou generics: fazem a ponte entre a simplicidade do Vue e a rigidez do TypeScript.

## Conclusão

TypeScript com Vue **vale a pena**, mas só se você souber o que está fazendo. Se está entrando no mundo Vue agora, aprenda primeiro o básico com JavaScript. Meter TypeScript sem entender Vue direito só vai gerar dor de cabeça.

**Não é questão de moda. É questão de contexto.**
