# Temperature API

Симулятор удаленного датчика температуры на Koa.js с TypeScript.

## Установка

```bash
pnpm install
```

## Запуск

### Разработка (с hot reload)

```bash
pnpm dev
```

### Продакшн

```bash
pnpm build
pnpm start
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

## Особенности

- Генерирует случайную температуру от -20°C до +40°C
- Поддержка CORS
- TypeScript с строгой типизацией
- Валидация обязательного параметра location
