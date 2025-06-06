exports.populateAndUnwindEquipmentLocation = function(pipeline) {
    pipeline.push({
        $lookup: {
            from: 'addresses', // Assuming 'addresses' is the collection name
            localField: 'equipmentLocation',
            foreignField: '_id',
            as: 'equipmentLocationData'
        }
    });

    // Unwind the populated array
    pipeline.push({ $unwind: '$equipmentLocationData' });
    return pipeline;
}