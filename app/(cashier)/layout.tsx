import Navbar from "@/src/components/navbar/Navbar";

export default function CashierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-muted text-foreground p-2 gap-2">
      <Navbar />
      <div className="flex-1">
        <main>
            {children}
        </main>


      </div>
    </div>
  );
}
