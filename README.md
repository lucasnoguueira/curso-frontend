# curso-frontend
#### EBAC

# GIT
## Conceitos de versionamento 
   - Histórico
   - Controle de versão
   - Quem alterou
   - O quê alterou
   - Quando alterrou
   - Todos os arquivos
   - Evolução contínua

Arquivo A | Versão 1 | Versão 2
Arquivo B | Versão 1 | Versão 2

 ## Instalação do Git
https://git-scm.com/

## Criar conta no GitHub

## Clonar Projeto
git clone https://github.com/lucasnoguueira/curso-frontend.git

## Commits
Informação de alteração
- após testado todo seu código
- git add*
- git commit -m 'mensagem'
- git push (enviar alterações para o repositório GitHub)
- git pull (puxar/trazer alterações do GitHub para sua máquina)

## Gitflow
Fluxo de Git


### Branchs 
São ramificações - versões paralelas

- main/master (vai para produção, quando o projeto é publicado)
- dev (branch onde desenvolvemos e testamos o código até estar 100% antes de mandar para a branch master)
- DOD - Definition of Done: critérios de aceite
- versionamento 1.0.0

git checkout -b dev (cria uma branch)
git checkout master (muda de branch)

### Merge 
Mescla de branchs 
você pode precisar resolver conflitos manualmente

git merge main (vai mergear o código na branch que estamos trabalhando)

### Pull request
Mescla de branchs no repositório
Permite code review 
O repositório resolve os conflitos automaticamente

### Configura o GitFlow
git flow init 
git flow feature start {nome-da-feature}