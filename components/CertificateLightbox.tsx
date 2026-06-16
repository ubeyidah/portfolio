import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface CertificateLightboxProps {
  open: boolean;
  onClose: () => void;
}

export default function CertificateLightbox({
  open,
  onClose,
}: CertificateLightboxProps) {
  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton
        className="max-w-[95vw] rounded-2xl border-0 bg-transparent p-0 shadow-none ring-0"
      >
        <DialogTitle className="sr-only">
          THRIVE 2018 Hackathon Certificate
        </DialogTitle>
        <DialogDescription className="sr-only">
          1st place certificate for the THRIVE 2018 Hackathon
        </DialogDescription>
        <Image
          src="/certificate/certificate.png"
          alt="THRIVE 2018 Hackathon Certificate"
          width={1200}
          height={848}
          className="h-auto max-h-[95vh] w-auto max-w-full rounded-lg shadow-2xl"
          priority
        />
      </DialogContent>
    </Dialog>
  );
}
