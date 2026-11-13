import CartSidebar from "@/src/components/cart/CartSidebar";
import Navbar from "@/src/components/navbar/Navbar";

export default function CashierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-sidebar text-foreground p-2 sm:p-3 gap-2 sm:gap-3">
      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row gap-2 sm:gap-3 min-h-0">
        <main className="flex-1 min-w-0 rounded-xl bg-popover p-3 sm:p-4 shadow-xs">
          {children}
        </main>
        <CartSidebar />
      </div>
    </div>
  );
}
