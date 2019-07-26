# NODE-js

#INSTALAÇÃO
- Instale o node.js através do link https://nodejs.org/en/download/
- Via linha de comando execute o comando ($ yarn install) ou o ($ npm install) o pacote de sua preferência

#CONFIGURAÇÕES
- No arquivo src/controller/recipesController.js encontra-se as rotas das api's'Rest.
- No arquivo src/database/index.js é onde estão as configurações para a conexão com o banco de dados.
- No arquivo src/model/Recipes.js está a estrutura do recipes onde este é usado como modelo para a criação da tabela no banco de dados e para as consultas api's.


#Para compilar projeto
- $ node src/index.js

#OBS
- Para conexão com o banco de dados foi usado o pacote Mongoose.
- Para requisições do tipo HttpsClient foi usado o pacote cors.
- Como router padrão foi usado "/api"



