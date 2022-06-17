// Program Kuy

let x = 10
let z = 4
let string = "Kuy!"
let str = ''
for (let i=1 ; i <= x; i++)
{
    if(i%z ==0)
    {
        str = str + 'Kuy! '
    }
    else{
        str = str + i + ' '
    }
}
console.log(str)

// program Maze
let input0 = 'LLLURRD'
let input = input0.toLowerCase()
let n = input.length
let char = ''
let hor = 0
let ver = 0
for (let i= 0; i<=n-1; i ++){
    if(input[i]=='u'){
        ver = ver + 1
    }
    else if(input[i]=='d'){
        ver = ver - 1
    }

    else if(input[i]=="l"){
        hor = hor -1
    }
    else if(input[i]=='r'){
        hor = hor +1
    }
}
console.log(ver , '',hor)

// program asc or desc
let np = 5
let p = ''
let sort = 'Asc'
if (sort == 'Desc'){
    for (let i = n; i>=1; i--){
        p = p+i
    }
    console.log(p)
}
else if(sort == 'Asc'){
    for(let i = 1; i<= n; i++){
        p = p + i
    }
    console.log(p)
}