# Gerenciador de Notas - Backend

[Tecnologias](#tecnologias) | [Funcionalidades](#funcionalidades) | [Descrição](#descrição) | [Instalação](#instalação) | [Avisos](#avisos) | [Imagens](#imagens) | [Suporte](#suporte) | [TODO](#todo) | [Lista de bugs](#lista-de-bugs) | [Bugs Resolvidos](#bugs-resolvidos)

## Tecnologias

<ul>
  <li>Node</li>
  <li>Nest.js</li>
  <li>MongoDB</li>
</ul>

[Ir para o topo](#gerenciador-de-notas---backend)

## Funcionalidades

<ul>
  <li>Cadastro de notas</li>
  <li>Visualização de notas criadas</li>
  <li>Logger de status de requisições</li>
  <li>Validador para criação de notas</li>
</ul>

[Ir para o topo](#gerenciador-de-notas---backend)

## Descrição

Backend do projeto Gerenciador de Notas. Descrição mais detalhada no repositório principal: [Gerenciador de Notas](https://github.com/rushxpush/gerenciador-notas)

[Ir para o topo](#gerenciador-de-notas---backend)

## Instalação

1. Faça um clone do repositório central:

```bash
git clone git@github.com:rushxpush/gerenciador-notas.git
```

2. Entre na pasta do repositório central
```bash
cd gerenciador-notas
```

3. Clone o repositório do frontend
```bash
git clone git@github.com:rushxpush/gerenciador-notas-frontend.git
```

4. Clone o repositório do backend
```bash
git clone git@github.com:rushxpush/gerenciador-notas-backend.git
```

4. Monte a imagem e rode:
```bash
docker compose up --build
```

5. Acesse a página em [localhost:8085](http://localhost:8085)

6. Acesse o backend em [localhost:3010](http://localhost:3010)

7. Para rodar os testes unitários (ainda não implementei o CI/CD para rodar eles automaticamente):
```bash
# Caso não esteja na pasta gerenciador-notas, entre nela

# testes backend
docker compose run --rm backend npm test

# tests frontend (infelizmente não tive tempo de fazer uma solução mais elegante)
# Uma nova imagem do node vai ser baixada e vai rodar os testes e depois será deletada. Demora um pouco para rodar
# Caso trave o comando, abra uma nova aba no seu terminal. Não sei ainda o porque esse comando trava caso execute na mesma aba que executei o build e run do app

## linux
docker run --rm -v $(pwd)/gerenciador-notas-frontend:/app -w /app node:18-alpine sh -c "npm install && npm test"

## windows (powershell)
docker run --rm -v ${PWD}\gerenciador-notas-frontend:/app -w /app node:18-alpine sh -c "npm install && npm test"
```

[Ir para o topo](#gerenciador-de-notas---backend)

## Avisos

Futuros avisos

[Ir para o topo](#gerenciador-de-notas---backend)

## Imagens

![Alt text](Screenshot_1.png)

![Alt text](Screenshot_2.png)

## Suporte

Qualquer dúvida mande um email para [rafagarciadev@gmail.com](mailto:rafagarciadev@gmail.com)

[Ir para o topo](#gerenciador-de-notas---backend)

## Todo

- &check; POST /notes
- &check; GET /notes
- &check; Testes unitários NotesController create
- &check; Testes unitários NotesController findAll 
- &check; Testes unitários NotesService create 
- &check; Testes unitários NotesService findAll 
- &check; Validation Pipes

Qualquer dúvida mande um email para [rafagarciadev@gmail.com](mailto:rafagarciadev@gmail.com)

[Ir para o topo](#gerenciador-de-notas---backend)

## Lista de bugs

[Ir para o topo](#gerenciador-de-notas---backend)

## Bugs Resolvidos

[Ir para o topo](#gerenciador-de-notas---backend)