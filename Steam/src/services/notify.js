import { toast } from "react-toastify";

const notify = {
  error: message => toast.error(message),
  info: message => toast.info(message),
  success: message => toast.success(message),
  warning: message => toast.warning(message)
};

export default notify;
