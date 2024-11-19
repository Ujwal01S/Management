

// This function is to check how shadcn dialog event works with external useState that we create



import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function DialogStateMangement() {
  const [dialogState, setDialogState] = useState(false);
  return (
    <Dialog open = {dialogState} onOpenChange={setDialogState}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-between">Are you absolutely sure?
          <div className="w-9 h-9 border-2 rounded-full flex items-center justify-center
          bg-slate-400" onClick={() => setDialogState(false)}>X</div>
          </DialogTitle>
          
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
