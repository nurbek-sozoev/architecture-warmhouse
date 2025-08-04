# Temperature API

Симулятор удаленного датчика температуры на Koa.js

## Установка

```bash
pnpm install
```

## Запуск

```bash
pnpm dev
```

## API Endpoints

### GET /temperature?location=<location>

Возвращает случайную температуру для указанной локации.

**Параметры:**

- `location` (обязательный) - название локации

**Пример запроса:**

```
GET /temperature?location=kitchen
```

**Пример ответа:**

```json
{
  "status": "active",
  "description": "Temperature sensor data",
  "location": "kitchen",
  "temperature": 23.5,
  "unit": "celsius",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### GET /health

Проверка состояния сервиса.

**Пример ответа:**

```json
{
  "status": "ok",
  "service": "temperature-api",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```
