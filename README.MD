# Git Cheatsheet 

1. Empiezo a trabajar: `git checkout develop` 

2. Creo la rama donde voy a trabajar `git checkout -b rama a trabajar` 

3. Desarrollo mi código 

3.1. Termino una tarea: `git add .` 

3.2. Hago commit de mi tarea: `git commit -m "<mensaje>"` 

3.3. Sigo con el resto de tareas 

4. Al haber terminado todas mis tareas me preparo para el Pull Request: `git pull origin develop` 

5. Si hay conflictos los resuelvo y hago `git add .` + `git commit -m "<mensaje>"` 

6. Subo mi rama al remote `git push -u origin nombre de la rama en la que estoy trabajando` 

7. Voy a github y abro el Pull Request 

8. Corrijo los cambios indicados y hago `git add .` + `git commit -m "<mensaje>"` + `git push` 

 