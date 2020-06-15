import { Request, Response } from "express";
import createUser from "./services/CreaterUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "p.perdona@gmail.com",
    password: "123456",
    techs: ["Node.js", "React.js", "React Native", { title: "Javascript", experience: 100 }],
  });

  return response.json({ message: "Hello World" });
}
