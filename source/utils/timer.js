export function convertMinutes(minutes) {
  // Calculate the number of days
  const days = Math.floor(minutes / 1440);

  // Calculate the number of hours
  const hours = Math.floor((minutes % 1440) / 60);

  // Calculate the number of minutes
  const remainingMinutes = minutes % 60;

  return `${days} ngày, ${hours} giờ, ${remainingMinutes} phút`;
}
