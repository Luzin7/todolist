# Todolist

## Descrição
O ToDoList App é uma aplicação web simples para gerenciar uma lista de tarefas. O objetivo é permitir que os usuários adicionem, atualizem e removam tarefas de forma fácil e intuitiva.

## Funcionalidades
- Adicionar uma nova tarefa com título.
- Editar o status de uma tarefa existente.
- Remover uma tarefa da lista.

## Tecnologias Utilizadas
- Frontend: React.js
- Backend: Node.js, Express.js
- Banco de Dados: MySQL (simulado com Docker)


## Instalação
1. Clone o repositório:

```bash
git clone https://github.com/Luzin7/todolist.git
```

2. Navegue até os diretórios do projeto
```bash
cd backend
```
```bash
cd frontend
```

- dentro da pasta backend:
```bash
npm install
```
```bash
docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=MYSQL_PASSWORD

# lembre-se de alterar `MYSQL_PASSWORD´ pela sua senha desejada.
```
```bash
npm run dev || npm start

OU

yarn dev || yarn start
```

- dentro da pasta frontend:
```bash
npm install

OU

yarn
```
```bash
npm run dev

OU

yarn dev
```

Nessa ordem você terá iniciado o backend e em seguida o frontend.

## Bibliotecas Utilizadas

- React Icons: Biblioteca de ícones para React.js.
- Sass: Pré-processador CSS para estilização.