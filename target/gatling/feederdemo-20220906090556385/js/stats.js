var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "967",
        "ok": "967",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "642",
        "ok": "642",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "319",
        "ok": "319",
        "ko": "-"
    },
    "percentiles1": {
        "total": "638",
        "ok": "638",
        "ko": "-"
    },
    "percentiles2": {
        "total": "959",
        "ok": "959",
        "ko": "-"
    },
    "percentiles3": {
        "total": "966",
        "ok": "966",
        "ko": "-"
    },
    "percentiles4": {
        "total": "967",
        "ok": "967",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 50
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
},
contents: {
"req_goto----page--f299a": {
        type: "REQUEST",
        name: "Goto /#{page}",
path: "Goto /#{page}",
pathFormatted: "req_goto----page--f299a",
stats: {
    "name": "Goto /#{page}",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "953",
        "ok": "953",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "967",
        "ok": "967",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "960",
        "ok": "960",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "percentiles1": {
        "total": "961",
        "ok": "961",
        "ko": "-"
    },
    "percentiles2": {
        "total": "964",
        "ok": "964",
        "ko": "-"
    },
    "percentiles3": {
        "total": "966",
        "ok": "966",
        "ko": "-"
    },
    "percentiles4": {
        "total": "967",
        "ok": "967",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 100
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_goto----page--r-48685": {
        type: "REQUEST",
        name: "Goto /#{page} Redirect 1",
path: "Goto /#{page} Redirect 1",
pathFormatted: "req_goto----page--r-48685",
stats: {
    "name": "Goto /#{page} Redirect 1",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "percentiles2": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "percentiles3": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "percentiles4": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
