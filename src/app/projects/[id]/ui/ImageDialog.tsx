import Image, { StaticImageData } from "next/image";
import React from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function ImageDialog({
  onClose,
  imageData,
}: {
  onClose: () => void;
  imageData?: StaticImageData;
}) {
  return (
    <Dialog onOpenChange={onClose} open={Boolean(imageData)}>
      <DialogContent
        showCloseButton={false}
        className="p-0 border-none shadow-none w-fit sm:max-w-fit h-fit bg-white"
      >
        {imageData && (
          <div className="w-[90vw] h-fit relative rounded-xl overflow-hidden aspect-video">
            <Image
              src={imageData.src}
              alt="project screenshot"
              className="object-contain"
              fill
              priority
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
