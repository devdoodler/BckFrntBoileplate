<h1 align="center">Boilerplate<br>for Symfony and React</h1>

<p align="center">This is boilerplate for application where backend is made in Symfony and frontend in ReactJS</p>

## About

`Symfony` in version 7.2  
`PHP` in version 8.3  
`MySql` in version 8  
`ReactJs` in version 19


## Possible problems

### Stuck when running docker-compose

When you are running docker with `docker-compose up --build` its stuck on:

```
Attaching to mysql_db, react_frontend, symfony_backend
```

check if have already runned db on port :3306:

```
sudo lsof -i :3306
```

if there is then stop mysql:

```
sudo service mysql stop
```

or change the port mapping in `docker-compose.yml` (e.g., map 3306 to 3307 on the host).

## Bash

`docker exec -it symfony_backend bash`
