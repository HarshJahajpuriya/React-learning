class Bulb 
{
constructor(w) 
{
this.wattage = w;
}
getWattage() 
{
return this.wattage;
}
}

module.exports = function() {
var b = new Bulb(60);
return b;
}