import { Router } from "express";
import db from "../db/mySql";
import { v4 as uuid } from "uuid";

const router = Router();

router.post("/registro", async (req, res) => {
  try {
    const { nome, endereco, telefone, email } = req.body;

    await db.execute(
      "INSERT INTO clientes (id, nome, endereco, telefone, email) VALUES (?, ?, ?, ?, ?)",
      [uuid(), nome.value, endereco.value, telefone.value, email.value]
    );

    res.json({ message: "Success", code: 200 });
  } catch (error) {
    console.log(error);
  }
});

export default router;
