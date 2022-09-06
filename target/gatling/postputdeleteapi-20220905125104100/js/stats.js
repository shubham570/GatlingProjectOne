var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "416",
        "ok": "-",
        "ko": "416"
    },
    "maxResponseTime": {
        "total": "597",
        "ok": "-",
        "ko": "597"
    },
    "meanResponseTime": {
        "total": "492",
        "ok": "-",
        "ko": "492"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "-",
        "ko": "79"
    },
    "percentiles1": {
        "total": "435",
        "ok": "-",
        "ko": "435"
    },
    "percentiles2": {
        "total": "580",
        "ok": "-",
        "ko": "580"
    },
    "percentiles3": {
        "total": "594",
        "ok": "-",
        "ko": "594"
    },
    "percentiles4": {
        "total": "596",
        "ok": "-",
        "ko": "596"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
},
contents: {
"req_create-new-user-40c69": {
        type: "REQUEST",
        name: "create new user",
path: "create new user",
pathFormatted: "req_create-new-user-40c69",
stats: {
    "name": "create new user",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "416",
        "ok": "-",
        "ko": "416"
    },
    "maxResponseTime": {
        "total": "597",
        "ok": "-",
        "ko": "597"
    },
    "meanResponseTime": {
        "total": "492",
        "ok": "-",
        "ko": "492"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "-",
        "ko": "79"
    },
    "percentiles1": {
        "total": "435",
        "ok": "-",
        "ko": "435"
    },
    "percentiles2": {
        "total": "580",
        "ok": "-",
        "ko": "580"
    },
    "percentiles3": {
        "total": "594",
        "ok": "-",
        "ko": "594"
    },
    "percentiles4": {
        "total": "596",
        "ok": "-",
        "ko": "596"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
