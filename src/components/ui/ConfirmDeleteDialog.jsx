import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";

export default function ConfirmDeleteDialog({
  open,
  onOpenChange,
  onConfirm,
  title = "Remove item?",
  description = "Are you sure you want to delete this item?",
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="rounded-2xl sm:px-12 sm:py-8">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center justify-center text-2xl gap-2">
            <Trash2 size={22} className="text-red-500" />
            {title}
          </AlertDialogTitle>

          <AlertDialogDescription className="text-base text-center  text-muted-foreground">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className=" gap-2">
          <AlertDialogCancel className="rounded-lg cursor-pointer">
            إلغاء
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={onConfirm}
            className="rounded-lg bg-red-500 hover:bg-red-600 text-white"
          >
            حذف
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
