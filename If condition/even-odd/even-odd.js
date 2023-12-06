function doSomething() {
    const oroltElement = document.getElementById("orolt"); // Element-ee buhleer n avah
    const oroltText = oroltElement.value; // Element-eesee utgaa avah
    const oroltNumber = Number(oroltText); // Utgaa too ruu horvuuleh
    let result = "";


    const remainder = oroltNumber % 2;
    if (remainder == 0) {
    result = "even";
    } else {
    result = "odd";
    }
    document.getElementById("garalt").innerText = result;
}
        




