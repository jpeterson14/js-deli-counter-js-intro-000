var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine){
  var theLine = "The line is currently:";
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  for(var i = 0; i < katzDeliLine.length; i++){
    theLine += ` ${i+1}. ${katzDeliLine[i]}${i === katzDeliLine.length - 1 ? '' : ','}`;
  }
  return theLine;
}