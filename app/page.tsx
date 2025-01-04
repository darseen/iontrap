import Card from "@/components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-40 p-4">
      <section className="grid grid-cols-1 gap-20 md:grid-cols-3">
        {Array.from({ length: 100 }).map((_, i) => (
          <Card key={i} />
        ))}
      </section>
    </main>
  );
}
