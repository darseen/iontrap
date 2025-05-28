"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { loginSchema } from "@/lib/zod/login";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  try {
    const supabase = await createClient();

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const result = loginSchema.safeParse(data);
    if (!result.success) {
      redirect("/login");
    }

    const { error } = await supabase.auth.signInWithPassword(result.data);
    if (error) {
      return redirect("/login");
    }
    revalidatePath("/", "layout");
    return redirect("/");
  } catch (error) {
    console.log("login error", error);
    redirect("/login");
  }
}
