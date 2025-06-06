exports.dailyRentalFilter = function(pipeline, filters) {
    if (filters.minDailyRental || filters.maxDailyRental) {
        const dailyRentalFilter = {};
        if (filters.minDailyRental) {
            dailyRentalFilter.$gte = filters.minDailyRental;
        }
        if (filters.maxDailyRental) {
            dailyRentalFilter.$lte = filters.maxDailyRental;
        }
        pipeline.push({
            $match: {
                dailyRental: dailyRentalFilter
            }
        });
    }

    return pipeline;
}


exports.hourlyRentalFilter = function(pipeline, filters) {
    if(filters.minHourlyRental || filters.maxHourlyRental) {
        const hourlyRentalFilter = {};
        if (filters.minHourlyRental) {
            hourlyRentalFilter.$gte = filters.minHourlyRental;
        }
        if (filters.maxHourlyRental) {
            hourlyRentalFilter.$lte = filters.maxHourlyRental;
        }
        pipeline.push({
            $match: {
                hourlyRental: hourlyRentalFilter
            }
        });
    }

    return pipeline;
}

exports.equipmentTypeFilter = function(pipeline, filters) {
    if (filters.equipmentType) {
        pipeline.push({
            $match: {
                equipmentType: { $regex: filters.equipmentType, $options: 'i' }
            }
        });
    }

    return pipeline;
};


exports.addressFilter = function(pipeline, filters) {
    if (filters.address) {
        console.log(filters.address);
        const { city, state, country } = filters.address;
        console.log(city, state, country);
        const addressFilter = {};
        if (city) {
            addressFilter['equipmentLocationData.city'] = city;
        }
        if (state) {
            addressFilter['equipmentLocationData.state'] = state;
        }
        if (country) {
            addressFilter['equipmentLocationData.country'] = country;
        }
        if (Object.keys(addressFilter).length > 0) {
            pipeline.push({ $match: addressFilter });
        }
    }

    return pipeline;
}