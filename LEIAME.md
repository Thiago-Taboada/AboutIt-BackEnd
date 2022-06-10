API
    ALUNO
    ATIVIDADES

Tarefas:
    0. Requisitos
        0.1 Node
        0.2 Mysql
        0.3 Mysql Workbench
        0.4 Postman ou Insomnia - UI-REST
    1. Configurar o projeto
        1.1 npm int
        1.2 npm install
    2. Criar as rotas - express
        GET, GET:id, POST, DELETE, PUT
    3. Persistência - banco
        SEQUELIZE - MYSQL
    4. Relacionamentos
        Aluno x Atividade
    5. Extras:
        Instalar dotenv
        Migrar aplicação postgreSQL

    6. Deploy Heroku - cloud / free
        Configuração de Banco
            DATABASE_URL .env
                DATABASE_URL=postgres://postgres:postgres@localhost:5432/alunos
                DATABASE_URL=mysql://root:mysql@localhost:3306/alunos

        Já realizado
            Instalação heroku-cli
            Criar conta na plataforma do heroku

        No nosso terminal
            heroku login

            heroku git:remote -a backend-api-ifal
            git push heroku master

        heroku config:set PGSSLMODE=no-verify --app api-backend-ifal


    pgadmin config--
        DATABASE_URL=postgres://postgres:postgres@localhost:5432/aboutit
        ^^
        DATABASE_URL=postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName
                                

    



