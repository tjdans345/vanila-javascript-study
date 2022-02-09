let age = 12;
let busFare = 0;

if (age <= 7) {
  busFare = 0;
} else if (age >= 8 && age <= 13) {
  busFare = 450;
} else if (age >= 14 && age <= 19) {
  busFare = 720;
} else if (age >= 20 && age < 70) {
  busFare = 1200;
} else if (age >= 70) {
  busFare = 0;
}
