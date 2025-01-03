"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  gender: z.enum(["male", "female"]),
  dob: z.string(),
  email: z.string().email(),
  mobile: z.string().regex(/^\d{10}$/),
  address: z.string().min(5),
});

export async function submitRegistration(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  // Here you would typically save the data to a database
  // For this example, we'll just simulate a successful submission
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

  return { success: true };
}
