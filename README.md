# Adicionar Usuário
Este projeto é uma aplicação web simples que permite adicionar usuários a um banco de dados e listar os usuários adicionados. A aplicação utiliza Node.js, Express, Prisma, e MySQL para gerenciamento do banco de dados. O frontend é construído com HTML, CSS e JavaScript.

# Funcionalidades
-Adicionar um usuário com nome e email
-Listar os usuários adicionados

# Requisitos
Node.js
NPM
MySQL

# Instalação
1 - Clone o repositório:
Copiar código: git clone https://github.com/seuusuario/adicionar-usuario.git
cd adicionar-usuario

2 - Instale as dependências:
npm install

3- Configure o banco de dados MySQL e crie um arquivo .env no diretório raiz com o seguinte conteúdo:
DATABASE_URL="mysql://usuario:senha@localhost:3306/seubanco"

4 - Inicialize o Prisma:
npx prisma migrate dev --name init

5 - Inicie o servidor:
npm start

Abra seu navegador e acesse http://localhost:3000.

# Estrutura do Projeto
index.js: Arquivo principal da aplicação onde o servidor Express é configurado
.
prisma/schema.prisma: Arquivo de definição do modelo de dados Prisma.

public/: Contém os arquivos estáticos (HTML, CSS, JavaScript).

index.html: Página inicial da aplicação.

styles.css: Estilos da página.

script.js: Lógica do frontend para adicionar e listar usuários.

# Rotas
GET /: Serve o arquivo index.html.

GET /users: Retorna a lista de usuários do banco de dados.

POST /users: Adiciona um novo usuário ao banco de dados.

# Dependências
@prisma/client: Cliente Prisma para interação com o banco de dados

express: Framework web para Node.js.

mysql2: Driver MySQL para Node.js.

prisma: Ferramenta de ORM para Node.js.
