import Navbar from "@/src/components//navbar/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-muted text-foreground">
      <Navbar />
      <div className="flex-1">
        <main>
            {children}
        </main>


      </div>
    </div>
  );
}
