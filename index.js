// Code your solution in this file!

function distanceFromHqInBlocks(location){
    let distance = location - 42;
    return (distance<0)?-distance:distance;
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(start,destination){
    let distance = destination-start;
    distance = (distance<0)?-distance:distance;
    return distance * 264;
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);
    if(distance<=400) return 0;
    if(distance<=2000) return (distance-400)*0.02;
    if(distance<=2500) return 25;
    return 'cannot travel that far';
}