exports.searchService = function(pipeline, searchTerm) {
    if (searchTerm) {
        pipeline.push({
            $match: {
                $or: [
                    { title: { $regex: searchTerm, $options: 'i' } },
                    { description: { $regex: searchTerm, $options: 'i' } },
                    { manufacturer: { $regex: searchTerm, $options: 'i' } },
                    { equipmentType: { $regex: searchTerm, $options: 'i' } } // Include searching in equipmentType
                ]
            }
        });
    }
}