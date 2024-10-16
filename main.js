let basicsalary;
let bouns;
let totalsalary;

basicsalary =25000;

// total salary

if(basicsalary ==13000){
    bouns = 2000;
    totalsalary = basicsalary + bouns;
}

else if(basicsalary ==18000){
    bouns = 3000;
    totalsalary = basicsalary + bouns;
}

else if(basicsalary ==25000){
    bouns = 5000;
    totalsalary = basicsalary + bouns;
}

else if(basicsalary ==30000){
    bouns = 6000;
    totalsalary = basicsalary + bouns;
}

else if(basicsalary ==40000){
    bouns = 7000;
    totalsalary = basicsalary + bouns;
}

else if(basicsalary ==50000){
    bouns = 8000;
    totalsalary = basicsalary + bouns;
}

if(basicsalary == 60000){
    bouns = 10000;
    totalsalary = basicsalary + bouns;
}


// picnice fee

if(totalsalary >60000){
    console.log("total salary is: " +totalsalary+ " and the fee is: 15000" );
}

else if(totalsalary >50000){
    console.log("total salary is: " +totalsalary+ " and the fee is: 1200" );
}

else if(totalsalary >40000){
    console.log("total salary is: " +totalsalary+ " and the fee is: 1000" );
}

else if(totalsalary >30000){
    console.log("total salary is: " +totalsalary+ " and the fee is: 800" );
}

else if(totalsalary >25000){
    console.log("total salary is: " +totalsalary+ " and the fee is: 700" );
}

else if(totalsalary >20000){
    console.log("total salary is: " +totalsalary+ " and the fee is: 600" );
}

else if(totalsalary >15000){
    console.log("total salary is: " +totalsalary+ " and the fee is: 500" );
}

else if(totalsalary <=15000){
    console.log("total salary is: " +totalsalary+ " and the fee is: 100");
}