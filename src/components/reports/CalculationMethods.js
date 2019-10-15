import { userInfo } from "os"

export default {
    // calcualtion for total calories for a female
    getCaloriesF (){
        if(user.gender === "female"){
        return (662-user.age)}
    },
    // calculation for total calories for a male
    getCaloriesM (){
        return
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