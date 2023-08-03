// program that can calculate the mean mode and median...
// doing calculations by getter and setter not by static method
class Statatics{
    constructor([...skill]){
     [...this.skills] = skill
    }

    // getter 
    get count(){
        const size = this.skills.length 
        return size
    }
    get sum(){
        let total = 0
        for(let i = 0; i < this.skills.length; i++){
            total = total + this.skills[i]
            
        }
        return total;
    }
    get min(){
        let min = this.skills[0];
        for(let i = 0; i < this.skills.length; i++){
            if(min > this.skills[i]){
                min = this.skills[i]
            }
        }
        return min
    }
    get max(){
        let max = this.skills[0];
        for(let i = 0; i < this.skills.length; i++){
            if(max < this.skills[i]){
                max = this.skills[i]
            }
        }
        return max
    }
}

const array = new Statatics( [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
console.log(array);

console.log(array.count);
console.log("The sum is: " + array.sum)
console.log("min is: " + array.min)
console.log("max is: " + array.max)