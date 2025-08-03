# Warmhouse

# Инициализация

## Установка/запуск приложения smart_home

```
cd ./apps
./init.sh

curl http://localhost:8080/health
```

## Установка/запуск mkdocs

```
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
mkdocs serve
curl http://localhost:8000
```

# Задание 1. Анализ и планирование

[Документация](http://127.0.0.1:8000/architecture/task1/)

# Задание 2. Проектирование микросервисной архитектуры

[Документация](http://127.0.0.1:8000/architecture/task2/)

# Задание 3. Разработка ER-диаграммы

[Документация](http://127.0.0.1:8000/architecture/task3/)

# Задание 4. Создание и документирование API

[Документация](http://127.0.0.1:8000/architecture/task4/)

# Задание 5. Создание Dockerfile

См. файл ./apps/temperature-api/Dockerfile
