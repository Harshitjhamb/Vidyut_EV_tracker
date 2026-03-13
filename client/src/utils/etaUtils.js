export const calculateETA = (distance, speed) => {

  if (!distance) return "";

  if (speed <= 0) return "Vehicle is not moving";

  const etaSeconds = distance / speed;

  const mins = Math.floor(etaSeconds / 60);
  const secs = Math.floor(etaSeconds % 60);

  return `${mins} min ${secs} sec`;
};