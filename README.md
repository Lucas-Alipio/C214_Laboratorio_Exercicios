<h1> C214_Laboratorio_Exercicios </h1>
<p>Exercicios propostos no laboratório da disciplina de C214 (Engenharia de Software)</p>
<h2>Exercicio-Aula-03 -> Gerencia de dependencias</h2>
<h2>Exercicio-Aula-06 -> Extra (Backend)</h2>
<h3>Intruções:</h3>
<p>1. Baixar e Instalar node.js</p>
<p>--> para verificar instalação, digite no terminal "node -v" e "npm -v"</p>
<p>2. Baixar e instalar Visual Studio Code, de preferencia</p>
<p>3. Baixar e Instalar Postman</p>
<p>4. git clone https://github.com/Lucas-Alipio/C214_Laboratorio_Exercicios.git</p>
<p>5. Abrir com VsCode</p>
<p>6. Inicie um novo terminal, e caso não esteja na pasta Exercicio-Aula-06, digite no terminal do VsCode: "cd Exercicio-Aula-06"</p>
<p>7. Ainda no terminal digite: "npm install", para instalar as dependencias, e por fim, digite "npm start"</p>
<h4>Agora no Postman</h4>
<p>1. Crie uma nova requisição HTTP</p>
<p>2. Faça chamadas de sua escolha:</p>
<p>--> post: "http://localhost:5000/users/create"</p>
<p>--> get: "http://localhost:5000/users/list"</p>
<p>--> put: "http://localhost:5000/users/update"</p>
<p>--> delete: "http://localhost:5000/users/delete"</p>
<p>3. Para funcionar as chamadas, há a necessidade de digitar as informações em formato JSON, para isso vá em "Body" - "Raw", então em type escolha "JSON"</p>
<p>--> post : { "nome": "xxxx", "forca": 000, "poder":"aaaa", "origem":"ssss"}</p>
<p>--> get : não precisar passar informações</p>
<p>--> put : { "nome": "xxxx", "forca": 000, "poder":"aaaa", "origem":"ssss"}</p>
<p>--> post : { "nome": "xxxx"} ---> deleta por nome, já que o mesmo é unico</p>

<h2>Exercicio-Aula-07 -> Testes Unitários (JEST)</h2>
<h4>Exercicio junto com a pasta da Aula-06... pequenas alterações no fluxo do código / adicionando testes</h4>
<p>Para rodar os testes: </p>
<p>1. git clone https://github.com/Lucas-Alipio/C214_Laboratorio_Exercicios.git</p>
<p>2. Abrir com VsCode</p>
<p>3. Inicie um novo terminal e vá para o diretório da pasta "./Exercicio-Aula-06>"</p>
<p>4. Ainda no terminal digite: "npm install", para instalar as dependencias, e por fim, digite "npm test"</p>

<h2>Exercicio-Aula-08e09 -> Testes Mock e Exercícios (JEST)</h2>
<h4>Exercicio dentre da pasta Exercicio-Aula-08e09</h4>
<p>Para rodar os testes: </p>
<p>1. git clone https://github.com/Lucas-Alipio/C214_Laboratorio_Exercicios.git</p>
<p>2. Abrir com VsCode</p>
<p>3. Inicie um novo terminal e vá para o diretório da pasta "./Exercicio-Aula-08e09>"</p>
<p>4. Ainda no terminal digite: "npm install", para instalar as dependencias, e por fim, digite "npm test"</p>
