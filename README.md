# Фронт часть для тестового проекта.

Ссылка GitHub на проект spring boot: https://github.com/malive1/testProject.git
В проекте реализованы рест сервис обработки пользовательской информации.

# ReadMy

Проект представляет собой React JS приложение. Фронт часть для взаимодействия с рест сервисом,
реализованным на Spring Boot.

* http://localhost:порт/usersall - главная страница проекта.
* http://localhost:порт/get-info/_getInfo - отображает список с информацией по обработке добавляемых данных
* http://localhost:порт/add-employee/_add - добавление пользовательской информации
* http://localhost:порт/view-employee/{id записи} - информация о пользователе

# Запуск приложения

Перед запуском приложения. Необходимо развернуть бэкэнд часть тестового проекта - Spring boot приложение, с рест сервисом.

Нужно изменить параметры в адрессах для взаимодействия с рест сервисом.
Файл: UserService.js
<br></br>
const USER_API_BASE_URL = "http://localhost:порт/test/service/getInfoUsersAll";
<br></br>
const USER_API_GETUSER_URL ="http://localhost:порт/test/service/getInfoUser/";
<br></br>
const USER_API_ADDUSER_URL ="http://localhost:порт/test/service/addUser";
<br></br>
const USER_API_GETINFO_URL = "http://localhost:порт/test/service/getInfo";
<br></br>

Значение порта можно получить из файла: application.properties Spring boot проекта.

server.port=порт

# preview
<br>* Стартовая страница</br>
![alt text](startForm.png "Стартовая страница")​
<br>* Список событий по запросам</br>
![alt text](ListEvent.png "Список событий по запросам")​
<br>* Добавление пользователя</br>
![alt text](AddUser.png "Добавление пользователя")​