export const getFormatDate = (date: Date | null): string => {
  if (!date) return "";
  const mes = date.getMonth() + 1;
  const dia = date.getDate();
  const anio = date.getFullYear();
  return `${anio}-${mes.toString().padStart(2, "0")}-${dia
    .toString()
    .padStart(2, "0")}`;
};

export const getParseStringDate = (dateString: string) => {
  const parts = dateString.split("-");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]) - 1; // Restamos 1 ya que los meses en JavaScript comienzan desde 0
  const day = parseInt(parts[2]);
  return new Date(year, month, day);
};

export const getTimeAgo = (dateString: string): string => {
  const date: Date = new Date(dateString);
  const currentDate: Date = new Date();
  const timeDiff: number = currentDate.getTime() - date.getTime();

  // Calculate values in milliseconds
  const seconds: number = Math.floor(timeDiff / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);
  const months: number = Math.floor(days / 30);
  const years: number = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
};
