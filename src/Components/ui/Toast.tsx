import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, AlertTriangle, X } from "lucide-react";

// Define allowed toast types
type ToastType = "success" | "error" | "warning";

// Define props for Toast component
interface ToastProps {
  message: string;
  type?: ToastType;
  onClose: () => void;
}

const icons = {
  success: <CheckCircle className="text-green-500 w-5 h-5" />,
  error: <XCircle className="text-red-500 w-5 h-5" />,
  warning: <AlertTriangle className="text-yellow-500 w-5 h-5" />,
};

const Toast: React.FC<ToastProps> = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
        className={`flex items-center gap-3 p-3 rounded-lg shadow-md text-white w-80 fixed bottom-5 right-5 ${
          type === "success" ? "bg-green-600" :
          type === "error" ? "bg-red-600" :
          "bg-yellow-600"
        }`}
      >
        {icons[type]}
        <span className="flex-1">{message}</span>
        <button onClick={onClose} className="text-white hover:opacity-75">
          <X className="w-5 h-5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
