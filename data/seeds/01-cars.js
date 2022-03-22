const cars = [
    {
        vin: '1HD1FAL11NY500561',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '5XYKT3A69DG353356',
        make: 'toyota',
        model: 'corolla',
        mileage: 2000,
        title: 'salvage',
    },
    {
        vin: '1FTEX14H0RKA51281',
        make: 'ford',
        model: 'focus',
        mileage: 1000,
       
    }
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
