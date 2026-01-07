import { supabase } from "@/lib/supabase";

export default async function HomePage() {
   const { data } = await supabase.auth.getSession();
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 text-white">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Hello, I am working</h1>
        <p className="text-gray-400">TaskNest is ready.</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </main>
  );
}
