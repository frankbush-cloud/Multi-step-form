//sections
//global variable
const PersonalInfoSection = document.getElementById("step1");
const PlanSection = document.getElementById("step2-monthly-plan");
const addSection = document.getElementById("step3");
const finishingUpSectionMon = document.getElementById("step4-monthly");
const finishingUpSectionYear = document.getElementById("step-4-yearly");
const toStep2 = document.getElementById("go-to-plan");
const toStepOne = document.getElementById("go-to-step1");
const toStep3 = document.getElementById("go-to-step3");
const backToStep2 = document.getElementById("go-to-step2");
const toStep4 = document.getElementById("go-to-step4");
const backStep3 = document.getElementById("back-to-step3");
const confirmInfo = document.getElementById("confirm-plan");
const thankYou = document.querySelector(".thank-you")
const step1Btn = document.getElementById("step1-btn");
const step2Btn = document.getElementById("step2-btn");
const step3Btn = document.getElementById("step3-btn");
const step4Btn = document.getElementById("step4-btn");
const monthPlan = document.getElementById("month-plan");
const yearPlan = document.getElementById("year-plan");
const arcadePrice = document.getElementById("arcade-price");
const advancedPrice = document.getElementById("advanced-price");
const proPrice = document.getElementById("pro-price");
const planButton = document.getElementById("btn-plan");
const freeMonths = document.querySelectorAll("#free-month");
const arcadeDiv = document.getElementById("arcade-div")
const advancedDiv = document.getElementById("advanced-div");
const proDiv = document.getElementById("pro-div");
const chosenPlanText = document.querySelector(".chosen-plan-text");
const chosenPlanPrice = document.querySelector(".chosen-plan-price");
const addOnline = document.getElementById("add-online");
const addStorage = document.getElementById("add-storage");
const addCustom = document.getElementById("add-custom")
// const addCustom = docment.getElementById("add-custom");
const addPickedText1 = document.getElementById("add-picked-text1");
const addPickedText2 = document.getElementById("add-picked-text2");
const addPickedPrice1 = document.getElementById("add-picked-price1")
const addPickedPrice2= document.getElementById("add-picked-price2");
const addPickedText3 = document.getElementById("add-picked-text3");
const addPickedPrice3 = document.getElementById("add-picked-price3");
const change = document.getElementById("change");
const nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var numberError = document.getElementById("number-error");



change.addEventListener("click", changeplan)
toStep2.addEventListener("click", gotostep2)
toStepOne.addEventListener("click", gobacktostepone)
toStep3.addEventListener("click", gotostep3)
backToStep2.addEventListener("click", gobacktostep2)
toStep4.addEventListener("click", gotostep4)
backStep3.addEventListener("click", gobacktostep3)
confirmInfo.addEventListener("click", completedForm)
step1Btn.addEventListener("click", toStep1Section)
step2Btn.addEventListener("click", toStep2Section)
step3Btn.addEventListener("click", toStep3Section)
step4Btn.addEventListener("click", toStep4Section)
monthPlan.addEventListener("click", tomonthplan);
yearPlan.addEventListener("click", toyearplan);
arcadeDiv.addEventListener("click", toarcadeplan);
advancedDiv.addEventListener("click", toadvancePlan);
proDiv.addEventListener("click", toproplan);
addOnline.addEventListener("click", toonlineadd);
addStorage.addEventListener("click", tostorageadd);
addCustom.addEventListener("click", tocustomadd);

// addCustom.addEventListener("click", tocustomadd);
//function to go to step2
function gotostep2(){
    PlanSection.classList.remove("hide")
    PersonalInfoSection.classList.add("hide")
    step2Btn.style.backGround = "red";
    finishingUpSectionMon.classList.add("hide")
    changeBtn2();
    fillAllInputs()

}
//change plan and add
function changeplan(){
    gotostep2() 
    var planCostText = document.getElementById("total-plan-price");
    addPickedPrice1.innerText = "$00.00";
    addPickedPrice2.innerText = "$00.00";
    addPickedPrice3.innerText = "$00.00";
    planCostText.innerText = "$00.00";
    chosenPlanPrice.innerText = "$00.00"
}

//function to go back to step1
function gobacktostepone(){
    PlanSection.classList.add("hide")
    PersonalInfoSection.classList.remove("hide")
    changeBtn1()
    
}

//function to step3
function gotostep3(){
    PlanSection.classList.add("hide")//removes plan
    addSection.classList.remove("hide")//adds addsection
    changeBtn3();
}

//function back to step2
function gobacktostep2(){
    PlanSection.classList.remove("hide")
    addSection.classList.add("hide")
    changeBtn2();
}

//function to step4
function gotostep4(){
    addSection.classList.add("hide")
    finishingUpSectionMon.classList.remove("hide")
    changeBtn4()
}

//function back to step3
function gobacktostep3(){
    addSection.classList.remove("hide")
    finishingUpSectionMon.classList.add("hide")
    changeBtn3()
}

//function to the complete form
function completedForm(){
    finishingUpSectionMon.classList.add("hide")
    thankYou.classList.remove("hide");
    removeBtnColor()
    var nameInput = document.getElementById("name");

    var thanksText = document.getElementById("thanks-text");
    var nameText = nameInput.value;
    var bigNameText = nameText.charAt(0).toUpperCase().concat(nameText.substring(1));

    thanksText.textContent = `Thanks ${bigNameText}`

}
//function to step1
function toStep1Section(){
    PersonalInfoSection.classList.remove("hide")
    PlanSection.classList.add("hide") 
    addSection.classList.add("hide")
    finishingUpSectionMon.classList.add("hide")
    thankYou.classList.add("hide");
    changeBtn1();
}
//function to step2
function toStep2Section(){
    PersonalInfoSection.classList.add("hide")
    PlanSection.classList.remove("hide") 
    addSection.classList.add("hide")
    finishingUpSectionMon.classList.add("hide")
    thankYou.classList.add("hide");
    changeBtn2()
}
//function to step3
function toStep3Section(){
    PersonalInfoSection.classList.add("hide")
    PlanSection.classList.add("hide") 
    addSection.classList.remove("hide")
    finishingUpSectionMon.classList.add("hide")
    thankYou.classList.add("hide");
    changeBtn3()
}
//function to step4
function toStep4Section(){
    PersonalInfoSection.classList.add("hide")
    PlanSection.classList.add("hide") 
    addSection.classList.add("hide")
    finishingUpSectionMon.classList.remove("hide")
    thankYou.classList.add("hide");
    changeBtn4()
}

//to prevent going to the next step without filling the previous step
function fillAllInputs(){
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email")
    var numberInput = document.getElementById("phone-number");

    if(nameInput.value === ""){
        nameError.innerHTML = 'Must include Name'
       
    }else{
        nameError.innerHTML = "" 
    }
    
    if(!emailInput.value){
        emailError.innerHTML = "Must include Email"
        
    }else{
        emailError.innerHTML = ""
    }

    if(!numberInput.value){
        numberError.innerHTML = "Must include Phone Number";
    
        
    }else{
        numberError.innerHTML = "";
    }

    if(!nameInput.value || !emailInput.value || !numberInput.value){
       alert("Please fill the inputs")
       return
    }else{
        gotostep2()
    }

}
//change btn1-color
function changeBtn1(){
    step1Btn.style.cssText = "background-color: var(--Light-blue); border: none; color: black"
    step2Btn.style.cssText = "background-color: none; border-color: white; color: white"
    step4Btn.style.cssText = "background-color: none; border-color: white; color: white";
    step3Btn.style.cssText = "background-color: none; border-color: white; color: white";
}
//change btn2-color
function changeBtn2(){
    step3Btn.style.cssText = "background-color: none; border-color: white; color: white";
    step4Btn.style.cssText = "background-color: none; border-color: white; color: white";
    step2Btn.style.cssText = "background-color: var(--Light-blue); border: none; color: black"
    step1Btn.style.cssText = "background-color: none; border-color: white; color: white"

}

//change btn3-color
function changeBtn3(){
    step4Btn.style.cssText = "background-color: none; border-color: white; color: white"
    step2Btn.style.cssText = "background-color: none; border-color: white; color: white"
    step1Btn.style.cssText = "background-color: none; border-color: white; color: white"
    step3Btn.style.cssText = "background-color: var(--Light-blue); border: none; color: black"
}

// change btn-4-color
function changeBtn4(){
    step4Btn.style.cssText = "background-color: var(--Light-blue); border: none; color: black"
    step2Btn.style.cssText = "background-color: none; border-color: white; color: white"
    step1Btn.style.cssText = "background-color: none; border-color: white; color: white"
    step3Btn.style.cssText = "background-color: none; border-color: white; color: white"
}
//remove the btns bgcolor
function removeBtnColor(){
    step4Btn.style.cssText = "background-color: none; border-color: white; color: white" 
    step2Btn.style.cssText = "background-color: none; border-color: white; color: white"
    step1Btn.style.cssText = "background-color: none; border-color: white; color: white"
    step3Btn.style.cssText = "background-color: none; border-color: white; color: white" 
}

//month plan
function tomonthplan(){
    arcadePrice.innerText = "$9/month"
    advancedPrice.innerText= "$12/month"
    proPrice.innerText = "$15/month"
    planButton.style.cssText = "justify-content: flex-start;"
    var monthsArr = [...freeMonths];//local variable
    monthsArr.forEach(month =>{
        month.style.display = "block";
    })
   var onlineAddPrice = document.getElementById("online-add-price")
   var storageAddPrice = document.getElementById("storage-add-price");
   var customAddPrice = document.getElementById("custom-add-price");

   onlineAddPrice.innerText  = "+$1/month";
   storageAddPrice.innerText = "+$2/month";
   customAddPrice.innerText  = "+$3/month";

   totalplancost();
}
//year plan
function toyearplan(){
    arcadePrice.innerText = "$90/year"
    advancedPrice.innerText= "$120/year"
    proPrice.innerText = "$150/year"
    planButton.style.cssText = "justify-content: flex-end;"
    var monthsArr = [...freeMonths];
    monthsArr.forEach(month =>{
        month.style.display = "none";
    })
    var onlineAddPrice = document.getElementById("online-add-price")
   var storageAddPrice = document.getElementById("storage-add-price");
   var customAddPrice = document.getElementById("custom-add-price");

   onlineAddPrice.innerText = "+$10/year";
   storageAddPrice.innerText = "+$20/year";
   customAddPrice.innerText  = "+$30/year";

   totalplancost();

}
//arcade plan

function toarcadeplan(){
    if(arcadePrice.innerHTML === "$9/month"){
    chosenPlanText.innerText = "Arcade(monthly)";
    chosenPlanPrice.innerText = arcadePrice.innerText
   } else if(arcadePrice.innerHTML === "$90/year"){
        chosenPlanText.innerText = "Arcade(Yearly)";
        chosenPlanPrice.innerText = arcadePrice.innerText
    }
    totalplancost();
}

function toadvancePlan(){
    if(advancedPrice.innerHTML === "$12/month"){
        chosenPlanText.innerText = "Advanced(monthly)";
        chosenPlanPrice.innerText = advancedPrice.innerText
       } else if(advancedPrice.innerHTML === "$120/year"){
            chosenPlanText.innerText = "Advanced(yearly)";
            chosenPlanPrice.innerText = advancedPrice.innerText
        }
        totalplancost();
}


function toproplan(){
    if(proPrice.innerHTML === "$15/month"){
        chosenPlanText.innerText = "pro(monthly)";
        chosenPlanPrice.innerText = proPrice.innerText
       } else if(proPrice.innerHTML === "$150/year"){
            chosenPlanText.innerText = "Pro(yearly)";
            chosenPlanPrice.innerText = proPrice.innerText
        }

        totalplancost()

}


if(arcadePrice.innerText === "$90/month"){
    planButton.style.cssText = "justify-content: flex-end;"
}else if(arcadePrice.innerText = "$9/month"){
    planButton.style.cssText = "justify-content: flex-start;"
}


// to online-add
 function toonlineadd(){
    addPickedText1.innerText = "Online Service";
    // addPickedText2.innerText = "Larger Storage";
    var onlineAddPrice = document.getElementById("online-add-price")
    //var storageAddPrice = document.getElementById("storage-add-price");
    var grossOnlinePrice =  onlineAddPrice.innerText;
    // var grossStoragePrice = storageAddPrice.innerText;
    addPickedPrice1.innerHTML = grossOnlinePrice
    // addPickedPrice2.innerHTML = grossStoragePrice
    
    totalplancost()
 }


 // to storage-add
function tostorageadd(){
    // var onlineAddPrice = document.getElementById("online-add-price");
    var storageAddPrice = document.getElementById("storage-add-price");
    // var grossOnlinePrice =  onlineAddPrice.innerText;
    var grossStoragePrice = storageAddPrice.innerText;
    // addPickedPrice1.innerHTML = grossOnlinePrice
    addPickedPrice2.innerHTML = grossStoragePrice
    addPickedText2.innerHTML = "Larger Storage"
    totalplancost()
}

// to custom-add
function tocustomadd(){
    var customAddPrice = document.getElementById("custom-add-price")
    var grossCustomPrice = customAddPrice.innerText
    addPickedPrice3.innerHTML = grossCustomPrice;
    addPickedText3.innerHTML = "Customizable Profile"
    totalplancost()
}
function totalplancost(){
    // var onlineAddPrice = document.getElementById("online-add-price");
    // var storageAddPrice = document.getElementById("storage-add-price");
    // var customAddPrice = document.getElementById("custom-add-price")

    var grossCustomPrice = addPickedPrice3.innerText
    var grossOnlinePrice =  addPickedPrice1.innerText;
    var grossStoragePrice = addPickedPrice2.innerText;

    var grossPrice1 = chosenPlanPrice.innerHTML;
    var grossPrice2 = grossOnlinePrice
    var grossPrice3 = grossStoragePrice
    var grossPrice4 = grossCustomPrice
    const netPrice1 = grossPrice1.replace(/\D/g, "");
    const netPrice2 = grossPrice2.replace(/\D/g, "");
    const netPrice3 = grossPrice3.replace(/\D/g, "");
    const netPrice4 = grossPrice4.replace(/\D/g, "");

    var totalCost = netPrice1*1 + netPrice2*1 + netPrice3*1 + netPrice4*1;
    

    if(grossPrice1 === "$9/Month" || grossPrice1 === "$12/Month" || grossPrice1 === "$15/Month"){
        var netPlanCost = `+${totalCost}/month`;
        var netPlanCostText = "Total(per Month)";
    }else if (grossPrice1 === "$90/Year" || grossPrice1 === "$120/Year" || grossPrice1 === "$150/Year"){
        var netPlanCost = `+${totalCost}/year`;
        var netPlanCostText = "Total(per Year)";
    }
    var totalPlanText = document.getElementById("total-plan-text")
    var planCostText = document.getElementById("total-plan-price");
    planCostText.innerHTML = netPlanCost;
    totalPlanText.innerHTML = netPlanCostText;
    // return planCostText;
    // return totalPlanText;
}

console.log(nameInput.placeholder)
