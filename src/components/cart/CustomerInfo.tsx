"use client";

import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

function CustomerInfo() {
  return (
    <div className="flex flex-col gap-2.5">
      <h3 className="text-[13px] font-semibold text-foreground">
        Customer Information
      </h3>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-0.5 rounded-xl bg-muted/70 px-3 py-1.5 transition-shadow focus-within:ring-2 focus-within:ring-ring/40">
          <Label
            htmlFor="customer-name"
            className="text-[11px] leading-tight font-normal text-muted-foreground"
          >
            Customer Name
          </Label>
          <Input
            id="customer-name"
            type="text"
            placeholder="Enter customer name"
            className="h-5.5 border-0 bg-transparent p-0 text-[13px] font-medium text-foreground shadow-none focus-visible:ring-0 md:text-[13px]"
          />
        </div>

        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          <div className="flex min-w-0 flex-col gap-0.5 rounded-xl bg-muted/70 px-3 py-1.5">
            <span className="text-[11px] leading-tight text-muted-foreground">
              Order Type
            </span>
            <Select defaultValue="Dine in">
              <SelectTrigger
                size="sm"
                className="w-full min-w-0 truncate border-0 bg-transparent p-0 text-[13px] font-medium text-foreground shadow-none focus-visible:ring-0 data-[size=sm]:h-5.5"
              >
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                <SelectItem value="Dine in">Dine in</SelectItem>
                <SelectItem value="Take away">Take away</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex min-w-0 flex-col gap-0.5 rounded-xl bg-muted/70 px-3 py-1.5">
            <span className="text-[11px] leading-tight text-muted-foreground">
              Select Table
            </span>
            <Select defaultValue="Table 06">
              <SelectTrigger
                size="sm"
                className="w-full min-w-0 truncate border-0 bg-transparent p-0 text-[13px] font-medium text-foreground shadow-none focus-visible:ring-0 data-[size=sm]:h-5.5"
              >
                <SelectValue placeholder="Select table" />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                <SelectItem value="Table 01">Table 01</SelectItem>
                <SelectItem value="Table 02">Table 02</SelectItem>
                <SelectItem value="Table 03">Table 03</SelectItem>
                <SelectItem value="Table 04">Table 04</SelectItem>
                <SelectItem value="Table 05">Table 05</SelectItem>
                <SelectItem value="Table 06">Table 06</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
