//import { railTables } from './../tables';
import { prismaQueries } from './../queries';
import express, { Router } from 'express';
import { prisma } from '../db';

export const mainRouter = Router();

mainRouter.use(
  '',
  express.json({ limit: '5kb'})
);

mainRouter.use(express.urlencoded({extended:false}))
// const defaultApi = () =>


mainRouter.get(
  '/tables/:table',
  async (req: any, res: any, next: any) => {
    
    //@ts-ignore
    const data = await prisma[req.params.table].findMany();
    try {
      res.status(200).json({
        data
      })
    } catch(e) {
      res.status(500).json({ 
        message: 'Server Error',
      })
    }
  }
);


mainRouter.get(
  '/queries/:query',
  async (req: any, res: any, next: any) => {
    console.log(req.query);
    //@ts-ignore
    const data = await prismaQueries[req.params.query](req.query);

    try {
      res.status(200).json({
        data
      })
    } catch(e) {
      console.log('Server error', e);
      res.status(500).json({ 
        message: 'Server Error',
      })
    }
  }
)

mainRouter.post(
  '/queries/:query',
  async (req: any, res: any, next: any) => {
    console.log(req.body);
    //@ts-ignore
    const status = await prismaQueries[req.params.query](req.body);

    try {
      res.status(200).json({
        status
      })
    } catch(e) {
      console.log('Server error', e);
      res.status(500).json({ 
        message: 'Server Error',
      })
    }
  }
)
