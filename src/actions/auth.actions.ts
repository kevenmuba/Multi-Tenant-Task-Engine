"use server";

import { supabase } from "@/lib/supabase";

export async function signUpWithOrg(
  email: string,
  password: string,
  orgName: string
) {
  // 1️⃣ Create user
  const { data: authData, error: authError } =
    await supabase.auth.signUp({
      email,
      password,
    });

  if (authError) {
    throw new Error(authError.message);
  }

  const userId = authData.user?.id;
  if (!userId) {
    throw new Error("User creation failed");
  }

  // 2️⃣ Create organization
  const { data: orgData, error: orgError } = await supabase
    .from("organizations")
    .insert({
      name: orgName,
    })
    .select()
    .single();

  if (orgError) {
    throw new Error(orgError.message);
  }

  // 3️⃣ Add user as OWNER
  const { error: memberError } = await supabase
    .from("organization_members")
    .insert({
      org_id: orgData.id,
      user_id: userId,
      role: "OWNER",
    });

  if (memberError) {
    throw new Error(memberError.message);
  }

  return { success: true };
}
