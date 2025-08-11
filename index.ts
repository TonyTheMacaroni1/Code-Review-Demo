import express, { Request, Response } from 'express';
import { UserService } from './src/libs'

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Get user
app.get('/user/:id', (req: Request, res: Response) => {
    const id = req.params.id

  const user = UserService.getUser(id);

  res.send({ user });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});