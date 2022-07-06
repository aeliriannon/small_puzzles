const cubeEdgeLength = 5;

function getVolumeAndAreaCub(length) {
    let volume = 0,
        area = 0;
    if(typeof(length) !== 'number' || !Number.isInteger(length) || length <=0) {
        return 'При вычислении произошла ошибка';        
    }
    volume = length**3;
    area = 6*(length**2);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    
}

console.log(getVolumeAndAreaCub(cubeEdgeLength));

