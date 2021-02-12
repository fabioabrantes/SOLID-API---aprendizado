// Single responsibility principle
## cada classe/arquivo deve ter uma única responsabilidade. 
## cada arquivo responsável por uma úncia tarefa dentro da aplicação.

// Open closed principle
## muito difícil de prever em uma API
## uma classe deve ser aberta para extensões mas fechada para modificações.
## ou seja quando for extender uma classe, vamos reaproveitar todo o funcionamento que possui sem modificá-la ou sobrescrever o seu funcionamento da classe pai

// Liskov substitution principle
## substituir implementações que uma classe depende. Ex: um controller que faz upload de arquivos. tem vários drivers (disco, cdn, amazons3,...). substituir eles por um objeto que se trocar o tipo de driver vai funcionar sem problema.

// Interface segregation principle
## não muito necessário no desenvolvimento da API, pois quase não tem interface muito complexas
## não criar interface muito robustas com várias propriedades. e sim divide essas interfaces menores

// Dependency inversion principle
## muito utilizado nas API.
## as classes das nossas aplicações (controllers) não devem depender de implementações. devem depender de interfaces. Ex: a classe de upload de imagens não deve saber onde a imagem deve ser armazenada. Ela deve ser responsável apnesas do fluxo de upload de imagens. o driver é passada como dependências mas não sabe o destino final onde a imagemvai ser armazenada

// praticando
# 1 yarn init -y
# 2 yarn add express e yarn add @types/express -D
# 3 yarn add typescript ts-node-dev -D 
# 4 yarn tsc --init (gera o tsconfig.json)
# 5 mudou o tsconfig.json (target: es2017, strict:false,allowJs:true,include:["src/**/*.ts]
# 6 criou a pasta src para fazer o projeto e os arquivos (app.ts,server.ts e routes.ts)
# 7 criou os scripts no package.json ("start": "tsnd --transpile-only --respawn --ignore-watch node_modules src/server.ts")
# 8 criamos as pastas no modelo MVC (entities,repositories, useCases)
## entities contém as classes models
## repositories vai conter as classes reponsáveis para fazer a comunicação entre as funcionalidades da aplicação com o banco de dados
## useCases são as ações que determinado tipo usuário pode executar na aplicação. seria cda caso de uso do diagrama uml
# 9 yarn add uuidv4 (bilbioteca para gerar id universal)
# 10 padrão package by feature. Padrão em que a gente estrutura as pastas da app por feature (por funcionalidade)
# 11 yarn add nodemailer e yarn add @types/nodemailer -D (lib para enviar email)
// uso do mailtrap para testes de envio de email 
# [https://mailtrap.io/](https://mailtrap.io/)