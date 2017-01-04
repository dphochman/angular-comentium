'use strict';

/* Services */
var services = angular.module("commentiumServices", ['ngResource']);

services.service("commentiumTags", function () {

    /**
     * @param {Array} data, containing property "tags" {Array}
     * @return {Array} accum, [tag: {name: String, freq: Number, map: [Number]}]
     */
    function loadTagsFromData(data) {
      return (
          data.reduce(function(accum, item, index) {
            var tags = item.tags;
            if (angular.isArray(tags)) {
                tags.forEach(function(tag) {
                    if (accum[tag] === undefined) {
                        accum[tag] = {name: tag, freq: 0, map: [index]};
                    }
                    accum[tag].freq += 1;
                });
            }
            return accum;
          }, {})
        );
    }

    /**
     * Assign tags to relative sizes for a tag cloud.
     * @param {Object} tags
     * @param {Number} (optional) tierCount, 1-4, number of tiers to distribute tags
     * @return {Object} tags, decorated with properties "tile", "tier", and "classes"
     */
    function rankTags(tags, tierCount) {
        var results = {},
            keys = Object.keys(tags),
            values = keys.map(function(tag) {return (tags[tag].freq);}), // [4,4,1,2,1,1]
            gtotal = values.reduce(function(prev, val) {return (prev + val);}, 0), // 13
            // sorted = values.slice().sort(), // [1,1,1,2,4,4]
            counts = values.reduce(function(prev, val) {prev[val] = (prev[val] || 0) + 1; return prev;}, {}), // {4:2, 1:3, 2:1}
            unique = Object.keys(counts).sort(function(a,b){return (a-b);}), // [1, 2, 4]
            weights = unique.reduce(function(prev, val) {prev[val] = val * counts[val]; return prev;}, {}), // {1:3, 2:2, 4:8}
            accums = unique.reduce(function(prev, val, i) {prev[val] = weights[val] + (i < 1 ? 0 : prev[unique[i-1]]); return prev;}, {}), // {1:3, 2:5, 4:13}
            PERCENTILES = [ [0], [0, 50], [0, 20, 50], [0, 20, 40, 60], [0, 15, 30, 45, 60] ],
            percentiles = [],
            tiers = [];

        tierCount = (typeof tierCount === 'number' && tierCount >= 1 && tierCount < PERCENTILES.length) ? Math.floor(tierCount) : PERCENTILES.length-1;
        percentiles = PERCENTILES[tierCount];

        // Rank each tag by frequency, so that more frequent tags are ranked higher.
        // The number of tiers is limited by tierCount or the number of available distribution sets.
        // Assign each frequency value to the relative break-level for its accumulated weight.
        tiers = unique.reduce(function(prev, val, i) {
            var accum = accums[val],
                percent = 100 * accum / gtotal + 0.5,
                tier = percentiles.reduce(function(prev, percentile, i) {return (percent > percentile ? i : prev);}, 0);
            prev[val] = tier;
            return prev;
        }, {});

        // Assign each tag to a relative tier, percentile, and descriptive class names.
        results = keys.sort().reduce(function(prev, key) {
            var tag = tags[key];
            tag.tier = tiers[tag.freq]; 
            tag.tile = percentiles[tag.tier];
            tag.classes = [
                'name-'+tag.name,
                'freq-'+tag.freq,
                'tier-'+tag.tier,
                'tile-'+tag.tile
            ].join(' ');
            prev[key] = tag;
            return prev;
        }, {});

        return results;
    }

    // Public
    this.load = loadTagsFromData;

    this.rank = rankTags;

});
