import cors from '@koa/cors';
import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

interface TemperatureResponse {
  location: string;
  temperature: number;
  unit: string;
  timestamp: string;
}

function generateRandomTemperature(): number {
  return Math.round((Math.random() * 60 - 20) * 10) / 10;
}

router.get('/temperature', async (ctx) => {
  const location = ctx.query.location as string;
  
  if (!location) {
    ctx.status = 400;
    ctx.body = {
      error: 'Location parameter is required',
      message: 'Please provide location query parameter: /temperature?location=<location_name>'
    };
    return;
  }

  const temperature = generateRandomTemperature();
  const response: TemperatureResponse = {
    location,
    temperature,
    unit: 'celsius',
    timestamp: new Date().toISOString()
  };

  ctx.body = response;
});

router.get('/health', async (ctx) => {
  ctx.body = {
    status: 'ok',
    service: 'temperature-api',
    timestamp: new Date().toISOString()
  };
});

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Temperature API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Temperature endpoint: http://localhost:${PORT}/temperature?location=<location>`);
});