# Smart Home Platform API

REST API для системы умного дома с поддержкой управления устройствами, автоматизацией и телеметрией.

## Быстрый старт

### Установка зависимостей

```bash
go mod tidy
```

### Запуск приложения

```bash
go run main.go
```

Приложение будет доступно по адресу: http://localhost:8080

## Документация API

После запуска приложения документация будет доступна по следующим адресам:

### Главная страница документации

- **URL**: http://localhost:8080/
- **Описание**: Обзор всех доступных типов документации

### REST API (OpenAPI/Swagger)

- **Swagger UI**: http://localhost:8080/static/swagger.html
- **OpenAPI спецификация**: http://localhost:8080/api-docs/openapi.yaml

### События (AsyncAPI)

- **AsyncAPI**: http://localhost:8080/static/asyncapi.html
- **AsyncAPI спецификация**: http://localhost:8080/api-docs/asyncapi.yaml

### Служебные эндпоинты

- **Проверка доступности**: http://localhost:8080/health

## Структура проекта

```
apps/smart_home/
├── api-docs/           # API спецификации
│   ├── openapi.yaml    # OpenAPI 3.1 спецификация
│   └── asyncapi.yaml   # AsyncAPI 3.0 спецификация
├── static/             # Статические файлы документации
│   ├── index.html      # Главная страница
│   ├── swagger.html    # Swagger UI
│   └── asyncapi.html   # AsyncAPI Studio
├── handlers/           # HTTP обработчики
├── services/           # Бизнес-логика
├── models/             # Модели данных
├── db/                 # Работа с базой данных
└── main.go            # Точка входа
```

## Переменные окружения

| Переменная            | Описание                       | По умолчанию                                            |
| --------------------- | ------------------------------ | ------------------------------------------------------- |
| `PORT`                | Порт для HTTP сервера          | `:8080`                                                 |
| `DATABASE_URL`        | URL подключения к PostgreSQL   | `postgres://postgres:postgres@localhost:5432/smarthome` |
| `TEMPERATURE_API_URL` | URL API температурного сервиса | `http://temperature-api:8081`                           |
