import { userInfo } from "os"

export default {
    getCaloriesM (){
        if(user.female === false){
        return (662-user.age)}
    },
    getCaloriesF (){
        return
    },
    getProtein (calories){
        return (calories*.25)/4
    },
    getFat (calories){
return (calories*.30)/9
    },
    getCarbs (calories){
return (calories*.45)/4
    }
}