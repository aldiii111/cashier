"use client";

import { Loader2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";

interface ProcessButtonProps {
  onProcess?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  total?: number;
}

function ProcessButton({
  onProcess,
  isLoading = false,
  disabled = false,
  total,
}: ProcessButtonProps) {
  return (
    <Button
      type="button"
      size="lg"
      className="w-full font-semibold shadow-xs"
      onClick={onProcess}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <span className="flex w-full justify-center items-center">
          <span>Process Order</span>
          {typeof total === "number" && (
            <span className="font-bold">${total.toFixed(2)}</span>
          )}
        </span>
      )}
    </Button>
  );
}

export default ProcessButton;
