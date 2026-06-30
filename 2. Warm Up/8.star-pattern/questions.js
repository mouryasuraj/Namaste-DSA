/*
1.  * * * *
    * * * *
    * * * *
    * * * *
 */
// const n = 4
// for(let i=0; i<n; i++){
//     let line = ""
//     for(let j=0; j<n; j++){
//         line = line + (j===n ? "*" : "* ")
//     }
//     // console.log(line);
// }

/*
2.  * 
    * * 
    * * * 
    * * * *
 */
// let n = 10;

// for(let i=1; i<=n; i++){
//     let row = ""
//     for(let j=0; j<i; j++){
//         row = row + "* "
//     }
//     console.log(row);
// }


/*
3.  1 
    1 2 
    1 2 3
    1 2 3 4
    1 2 3 4 5
 */
// let n = 5;

// for(let i=1; i<=n; i++){
//     let row = ""
//     for(let j=0; j<i; j++){
//         row = row + `${j+1} `
//     }
//     console.log(row);
// }

/*
4.  1 
    2 2 
    3 3 3
    4 4 4 4
    5 5 5 5 5
 */
// let n = 5;

// for(let i=1; i<=n; i++){
//     let row = ""
//     for(let j=0; j<i; j++){
//         row = row + `${i} `
//     }
//     console.log(row);
// }


/*
5.  1 2 3 4 5 6 7 8 9 10 
    1 2 3 4 5 6 7 8 9 
    1 2 3 4 5 6 7 8
    1 2 3 4 5 6 7
    1 2 3 4 5 6
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
 */
// let n = 10;

// for(let i=0; i<n; i++){
//     let row = ""
//     for(let j=0; j<n-i; j++){
//         row = row + `${j+1} `
//     }
//     console.log(row);
// }


/*
6.  * * * * * 
    * * * * 
    * * *
    * *
    *
 */
// let n = 5;

// for(let i=0; i<n; i++){
//     let row = ""
//     for(let j=0; j<n-i; j++){
//         row = row + `* `
//     }
//     console.log(row);
// }


/*
7.  1 2 3 4 5 6 7 8 9 10 
    1 2 3 4 5 6 7 8 9 
    1 2 3 4 5 6 7 8
    1 2 3 4 5 6 7
    1 2 3 4 5 6
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
 */
// let n = 10;

// for(let i=0; i<n; i++){
//     let row = ""
//     for(let j=0; j<n-(i+1); j++){
//         row = row + `${j+1} `
//     }
//     console.log(row);
// }


/*
8.            * 
            * * 
          * * *
        * * * *
      * * * * *
    * * * * * *
 */
// let n = 6;

// for(let i=0; i<n; i++){
//     let row = ""

//     // To print spaces
//     const spaceLength = n-(i+1)
//     for(let j=0; j<spaceLength; j++){
//         row = row + "  ";
//     }

//     // To print stars
//     const starLength = i+1;
//     for(let k=0; k<starLength; k++){
//         row = row + "* "
//     }

//     // To print row
//     console.log(row)
// }


/*
9.  1 
    1 0 
    1 0 1
    1 0 1 0
    1 0 1 0 1
 */
// let n = 5;

// for(let i=0; i<n; i++){
//     let row = ""

//     for(let j=0; j<(i+1); j++){
//         row = row + `${(j+1)%2} `;
//     }
//     console.log(row)
// }

// another approach

// for(let i=0; i<n; i++){
//     let row = ""
//     let toggle = 1;
//     for(let j=0; j<(i+1); j++){
//         row = row + `${toggle} `;
//         if(toggle===1){
//             toggle = 0
//         }else{
//             toggle = 1
//         }
//     }
//     console.log(row)
// }


/*
10. 1 
    0 1 
    0 1 0
    1 0 1 0
    1 0 1 0 1
 */
let n = 5;
let toggle = 1;
for(let i=0; i<n; i++){
    let row = ""
    for(let j=0; j<(i+1); j++){
        row = row + `${toggle} `;
        if(toggle===1){
            toggle = 0
        }else{
            toggle = 1
        }
    }
    console.log(row)
}



