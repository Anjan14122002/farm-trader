const { dailyRentalFilter, hourlyRentalFilter, equipmentTypeFilter, addressFilter } = require('../services/filterServices.js');
const { populateAndUnwindEquipmentLocation } = require('../services/equipmentAddressPopulateService');
const { searchService } = require('../services/searchService.js');
const { sortService } = require('../services/sortService.js');
const Equipment = require('../models/equipmentModel.js');

exports.searchEquipment = async function(query) {
    const { searchTerm, filters, sortBy, sortOrder, pageNumber, pageSize } = query;
    // console.log(query);
    // Calculate skip count based on pagination
    const skipCount = (pageNumber - 1) * pageSize;

    // Initial aggregation pipeline
    let pipeline = [];

    // Stage 1: Apply searchTerm filter
    searchService(pipeline, searchTerm);

    // Stage 2: Filter stages
    pipeline = dailyRentalFilter(pipeline, filters);
    pipeline = hourlyRentalFilter(pipeline, filters);
    pipeline = equipmentTypeFilter(pipeline, filters);
    if(filters.address)
        pipeline = populateAndUnwindEquipmentLocation(pipeline);
    // console.log(pipeline);
    pipeline = addressFilter(pipeline, filters);

    // Stage 3: Sort stage
    pipeline = sortService(pipeline, sortBy, sortOrder);

    // Stage 4: Pagination
    pipeline.push({ $skip: skipCount }); // Skip documents
    pipeline.push({ $limit: pageSize }); // Limit documents per page

    // Execute aggregation pipeline
    try {
        const result = await Equipment.aggregate(pipeline);
        // console.log(result);
        return result;
    } catch (error) {
        console.error('Error searching equipment:', error);
        throw error;
    }
}
