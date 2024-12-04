function isAnagram(str1, str2){
    arrStr1 = str1
                    .toLowerCase()
                    .replace(/\s/g, "")
                    .split('')
                    .sort()
    arrStr2 = str2.trim()
                    .toLowerCase()
                    .replace(/\s/g, "")
                    .split('')
                    .sort()
    
                    
    if (arrStr1.length === arrStr2.length){
        const isInside = arrStr1.every((letter, index) =>
            letter === arrStr2[index]
        )
        return isInside
    }else {
        return false
    }



}

console.log(isAnagram("School master","The classroom" )) //true
console.log(isAnagram("The Morse Code","Here come dots" )) //true
console.log(isAnagram("Not","Anagram" ))// false