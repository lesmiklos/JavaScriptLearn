console.log('Speed Limit');
checkSpeed(75);

function checkSpeed(speed){
    const speedLimit=70;
    const kmPerPoint=5;

    if (speed < speedLimit + kmPerPoint)
    console.log( 'Congratulations for driving safely');

    else  {
        const points=Math.floor((speed-speedLimit)/kmPerPoint);
        if (points < 12)
                       
        console.log('You have this # of points ', points);

        else 
        console.log('Licence Suspended!'); 

    }
       
}