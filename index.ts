import express from 'express';
import http from 'http';
import { mainRouter } from './src/routers/main';

// @ts-ignore
BigInt.prototype.toJSON = function() {       
  return this.toString()
};


const app = express();
const server = http.createServer(app);
const HOST = '192.168.1.175';
const PORT = 8070;

app.set('trust proxy', true)
// app.use(async(req,res,next) => {
//   try {
//     if(req.method == 'OPTIONS') return res.status(200).send('GET, POST, DELETE, OPTIONS')
//     next()
//   } catch(e) {
//     next(e)
//   }
// })
app.use(async(req,res,next) => {
  try {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, Keep-Alive, Accept-Encoding');
    res.header('Access-Control-Max-Age', '1728000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');

    if(req.method == 'OPTIONS') return res.status(200).send('GET, POST, DELETE, OPTIONS');
      next();
  } catch(e) {
      next(e);
  }
});
app.use('/api/main', mainRouter)

const start = async() => {
  try {
    server.listen(PORT, HOST, () => {
      console.log('API server running on host:', HOST, 'port:', PORT)
    })
  } catch(e:any) {
    //ts-ignore
    console.log('Server Error:', e.message)
    process.exit(1)
  }
}

start()