export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-sidebar text-foreground">
        <main className="p-4">
          {children}
        </main>
    </div>
  );
}
