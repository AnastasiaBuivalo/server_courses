//import { CONFIG } from './config';

import { PrismaClient } from '@prisma/client'

// Подключение к БД
export const prisma = new PrismaClient();