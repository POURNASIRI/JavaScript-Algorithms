function analayzeCareMileage(cars){
    const totalMileage = cars.reduce((sum,car)=>sum = sum + car.mileage, 0)
    const averageMileage = totalMileage / cars.length

    const highestMileage = cars.reduce((highest,car)=> car.mileage > highest ? car.mileage : highest)

    const lowestMileage = cars.reduce((lowest,car)=> car.mileage > lowest ? car.mileage : lowest)


    return {
        totalMileage,
        averageMileage,
        highestMileage,
        lowestMileage,
    }
}

module.exports = analayzeCareMileage