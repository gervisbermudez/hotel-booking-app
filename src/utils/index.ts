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
