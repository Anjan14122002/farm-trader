exports.sortService = function(pipeline, sortBy, sortOrder) {
    let sortStage = {};
    if (sortBy) {
        sortStage[sortBy] = sortOrder === 'desc' ? -1 : 1;
        pipeline.push({ $sort: sortStage });
    }

    return pipeline;
}