import { ChangeEvent, useEffect, useRef } from "react";

export default function useDragFile(
    handleChangeFile: (e: DataTransfer | ChangeEvent<HTMLInputElement>) => void,
) {
    const dropZone = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function dragEnter(e: DragEvent) {
            e.stopPropagation();
            e.preventDefault();
        }

        function dragOver(e: DragEvent) {
            e.stopPropagation();
            e.preventDefault();
        }

        function drop(e: DragEvent) {
            e.stopPropagation();
            e.preventDefault();

            const dt = e.dataTransfer;

            dt && handleChangeFile(dt);
        }

        if (dropZone.current) {
            dropZone.current.addEventListener("dragenter", dragEnter, false);
            dropZone.current.addEventListener("dragover", dragOver, false);
            dropZone.current.addEventListener("drop", drop, false);
        }

        return () => {
            if (dropZone.current) {
                dropZone.current.removeEventListener("dragenter", dragEnter);
                dropZone.current.removeEventListener("dragover", dragOver);
                dropZone.current.removeEventListener("drop", drop);
            }
        };
    }, []);

    return dropZone;
}
