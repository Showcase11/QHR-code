export const formatTime = (timer) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

export const getFullDate = (data) => {
  const date = new Date(data);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
export const getExactTime = (data) => {
  const today = new Date(data);

  return formatTime(
    today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()
  );
};
