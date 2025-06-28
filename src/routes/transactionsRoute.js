import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getSummaryByUserID,
  getTransactionByUserId,
} from "../controllers/transactionController.js";

const router = express.Router();

router.get("/:userId", getTransactionByUserId);

router.post("/", createTransaction);

router.delete("/:id", deleteTransaction);

router.get("/summary/:userId", getSummaryByUserID);

export default router;
