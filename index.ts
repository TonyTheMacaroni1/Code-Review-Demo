import express, { Request, Response } from 'express';
import { UserService } from './src/libs'

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Get user
app.get('/user/:id', async (req: Request, res: Response) => {
    const id = req.params.id

  const user = await UserService.getUser(id);

  res.send({ user });
});

// Get user first and last name
app.get('/user/:id/firstLast', async (req: Request, res: Response) => {
    const id = req.params.id

  const u = UserService.getUserFirstAndLastName(id);

  res.send({ u });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});