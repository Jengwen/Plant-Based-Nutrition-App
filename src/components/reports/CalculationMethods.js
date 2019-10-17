export default {
  // calcualtion for total calories
  getCalories(gender, age, weight, height, activityf, activitym) {
    // if gender is female use the following calculation for calories
    if (gender === "female") {
      return (
        662 -
        9.53 * age +
        (weight / 2.2) * 15.91 * (height / 39.4) +
        539.6 * activityf
      );
    }
    // if gender is male use the following calculation for calories
    else if (gender === "male") {
      return (
        354 -
        6.91 * age +
        (weight / 2.2) * 9.36 * (height / 39.4) +
        726 * activitym
      );
    }
  },
  // calculation for # of grams of protein
  getProtein(calories) {
    return (calories * 0.25) / 4;
  },
  // calculation for # of grams of fat
  getFat(calories) {
    return (calories * 0.3) / 9;
  },
  // calculation for # of grams of carbohydrates
  getCarbs(calories) {
    return (calories * 0.45) / 4;
  },
  getCalcium(gender, age) {
    if (gender === "female" && age > 50) {
      return 1200;
    } else {
      return 1000;
    }
  },
  getIron(gender, age) {
    if (gender === "female" && age > 50) {
      return 8;
    } else if (gender === "female" && age < 50) {
      return 18;
    } else if (gender === "male") {
      return 8;
    }
  },
  getNiacin(gender) {
    if (gender === "female") {
      return 14;
    } else {
      return 16;
    }
  },
  getVitaminC(gender) {
    if (gender === "female") {
      return 75;
    } else {
      return 90;
    }
  },
  getB6(gender, age) {
    if (gender === "female" && age > 51) {
      return 1.5;
    } else if (gender === "male" && age > 51) {
      return 1.7;
    } else {
      return 1.3;
    }
  },
  getFiber(gender, age) {
    if (gender === "female" && age <= 30) {
      return 28;
    } else if (gender === "female" && age > 30 && age <= 50) {
      return 25;
    } else if (gender === "female" && age > 50) {
      return 22.4;
    } else if (gender === "male" && age <= 30) {
      return 33.6;
    } else if (gender === "male" && age > 50) {
      return 28;
    } else if (gender === "male" && age > 30 && age <= 50) {
      return 30.8;
    }
  }
};
