function doSomething() {
    const orolt1Element = document.getElementById("orolt1"); // Element-ee buhleer n avah
    const orolt2Element = document.getElementById("orolt2");
    const orolt3Element = document.getElementById("orolt3");
    const orolt1Text = orolt1Element.value; // Element-eesee utgaa avah
    const orolt2Text = orolt2Element.value;
    const orolt3Text = orolt3Element.value; 
    const orolt1Number = Number(orolt1Text); // Utgaa too ruu horvuuleh
    const orolt2Number = Number(orolt2Text);
    const orolt3Number = Number(orolt3Text); 

    const x = orolt1Number;
    const y = orolt2Number;
    const z = orolt3Number;
    let biggest=x;

    if(x>y && x>z){
        biggest=x;
    }
    else if (y>x && y>z){
        biggest=y;
    }
    else {
        biggest=z;
    }
    
    document.getElementById("garalt").innerText = biggest;
    
}
        




