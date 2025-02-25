"use server";

import { z } from "zod";
import postgres from "postgres";

const FormSchema = z.object({
  id: z.string(),
  cusomerId: z.string(),
  amount: z.coerce.number(), //文字列として渡されても、数字に変化+バリデーションされる
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CteateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];
}
