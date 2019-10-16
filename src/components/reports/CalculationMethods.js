export default {
    // calcualtion for total calories
    getCalories (gender, age, weight,height, activityf, activitym){
        // if gender is female use the following calculation for calories
        if(gender === "female"){
        return 662-(9.53*age) +(weight *15.91*height)+(539.6*activityf)}
        // if gender is male use the following calculation for calories
           if(gender === "male"){
            return 354-(6.91*age) +(weight *9.36*height)+(726*activitym)}
           },
    // calculation for # of grams of protein
    getProtein (calories){
        return (calories*.25)/4
    },
    // calculation for # of grams of fat
    getFat (calories){
return (calories*.30)/9
    },
    // calculation for # of grams of carbohydrates
    getCarbs (calories){
return (calories*.45)/4
    }
}