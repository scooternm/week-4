function getDays(when){
    const now = new Date();
    const diff = when.getTime() - now.getTime()
    const msPerDay = 1000 * 60 * 60 * 24;
    const days = diff/msPerDay;
    const rounded = Math.ceil(days);

    // let text = "";
    // if(rounded === 1){
    //     text = "day";

    // }else{
    //     text = "days"
    // }

    //Ternary (3way)
    let text = rounded === 1 ? "day" : "days";
    return rounded + text;
}

document.addEventListener("DOMContentLoaded", () => {
    
    document.body.style = "color:red; background-color: yellow";

    submitDate.addEventListener("click", () => {
        const when = new Date(travelDate.value);
        daysMessage.innerText = getDays(when);
    });

});