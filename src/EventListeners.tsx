import { useEffect } from "react";

function EventListeners() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 123 || 
          (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(String.fromCharCode(e.keyCode))) || 
          (e.ctrlKey && e.keyCode === "U".charCodeAt(0))) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}

export default EventListeners; 