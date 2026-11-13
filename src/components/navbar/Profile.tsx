"use client";

import { Avatar, AvatarFallback } from "@/src/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";

export default function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer">
        <Avatar className="size-9 border border-border/80 transition-transform active:scale-95">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs tracking-wider">
            CS
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" side="bottom" sideOffset={8} className="w-56 p-1.5">
        {/* Bagian Atas: Data Login */}
        <div className="flex items-center gap-2.5 px-2 py-2">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
            <User className="size-4 text-muted-foreground" />
          </div>
          <div className="flex flex-col space-y-0.5 overflow-hidden">
            <p className="text-sm font-semibold truncate leading-none text-foreground">
              Cashier Staff
            </p>
            <p className="text-xs text-muted-foreground truncate leading-none">
              cashier@pos.local
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Bagian Bawah: Tombol Logout */}
        <DropdownMenuItem className="text-destructive hover:bg-destructive/10 hover:text-destructive focus:bg-destructive/10 focus:text-destructive">
          <LogOut className="size-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
